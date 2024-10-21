
            const express = require('express');
            const mongoose = require('mongoose');
            const bodyParser = require('body-parser');
            const jwt = require('jsonwebtoken');
            const bcrypt = require('bcryptjs');
            const app = express();

            mongoose.connect('mongodb://localhost/netflix', { useNewUrlParser: true, useUnifiedTopology: true });

            app.set('view engine', 'ejs');
            app.use(express.static('public'));
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json());

            // User model
            const User = mongoose.model('User', new mongoose.Schema({
                email: String,
                password: String
            }));

            // Register route
            app.post('/register', async (req, res) => {
                const { email, password } = req.body;
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = new User({ email, password: hashedPassword });
                await user.save();
                res.redirect('/login');
            });

            // Login route
            app.post('/login', async (req, res) => {
                const { email, password } = req.body;
                const user = await User.findOne({ email });
                if (!user || !(await bcrypt.compare(password, user.password))) {
                    return res.redirect('/login');
                }
                const token = jwt.sign({ userId: user._id }, 'secret');
                res.cookie('token', token, { httpOnly: true });
                res.redirect('/');
            });

            // Middleware for auth
            function auth(req, res, next) {
                const token = req.cookies.token;
                if (!token) {
                    return res.redirect('/login');
                }
                try {
                    const payload = jwt.verify(token, 'secret');
                    req.user = payload;
                    next();
                } catch {
                    res.redirect('/login');
                }
            }

            // Routes
            app.get('/', (req, res) => {
                res.render('index', { user: req.user });
            });

            app.get('/login', (req, res) => {
                res.render('login');
            });

            app.get('/register', (req, res) => {
                res.render('register');
            });

            app.listen(3000, () => console.log('Server running on port 3000'));
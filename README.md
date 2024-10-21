
# Netflix Clone 🎬

This is a **Netflix Clone** web application, built using Node.js, Express, MongoDB, EJS (Embedded JavaScript), and Swiper.js for the carousel. It mimics the core layout and functionality of the popular Netflix platform, including user registration, login, authentication, and a movie carousel.

## Features 🚀

- **User Authentication**: Register, log in, and manage sessions with JSON Web Tokens (JWT).
- **Carousel Slider**: A responsive movie carousel built using Swiper.js, with navigation buttons and pagination.
- **Responsive Design**: The UI adapts to different screen sizes for optimal viewing on mobile, tablet, and desktop devices.
- **Custom CSS Styling**: Styled to resemble Netflix, using TailwindCSS for layout and Swiper.js for the carousel.
- **Reusable Components**: Using EJS templating for reusable components like headers and footers.

## Technologies Used 🛠️

- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/) + Mongoose for database
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs) for password hashing
  - [jsonwebtoken (JWT)](https://www.npmjs.com/package/jsonwebtoken) for authentication

- **Frontend**:
  - [EJS (Embedded JavaScript)](https://ejs.co/) for templating
  - [Swiper.js](https://swiperjs.com/) for carousel functionality
  - [TailwindCSS](https://tailwindcss.com/) for styling

## Getting Started 🏁

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community) or use **MongoDB Atlas** for a cloud-hosted solution.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root of your project and add the following variables:

   ```bash
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/netflix-clone
   JWT_SECRET=your_secret_key_here
   ```

4. **Run MongoDB**:

   Start your MongoDB server locally (or use MongoDB Atlas):

   ```bash
   mongod
   ```

5. **Run the server**:

   Start the Node.js server with the following command:

   ```bash
   npm start
   ```

6. **Visit the app**:

   Open your browser and go to `http://localhost:3000`.

## Project Structure 📂

```
📦 netflix-clone
├── 📂 node_modules
├── 📂 public
│   ├── 📂 css
│   ├── 📂 js
│   └── 📂 images
├── 📂 views
│   ├── 📂 partials
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── login.ejs
│   └── register.ejs
├── .env
├── package.json
├── server.js
└── README.md
```

- **`public/`**: Contains the static assets like CSS, JavaScript, and images.
- **`views/`**: Contains the EJS templates for rendering the pages.
- **`server.js`**: The main server file for setting up routes and configuring the app.
- **`.env`**: File for storing environment variables (e.g., MongoDB URI, JWT secret).

## Usage 💻

- **User Registration**: Create an account by navigating to `/register`.
- **User Login**: Log in with your credentials at `/login`.
- **Movie Carousel**: A responsive movie carousel on the homepage.

## Dependencies 📦

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **ejs**: Embedded JavaScript templating.
- **mongoose**: MongoDB object modeling for Node.js.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: JWT-based authentication.
- **swiper**: A modern mobile touch slider.

## Contributing 🤝

Feel free to submit issues and pull requests. Contributions, improvements, and bug fixes are welcome!

Happy coding! 🎉

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signInModal = document.getElementById('signInModal');

    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }

    if (event.target == signInModal) {
        signInModal.style.display = 'none';
    }
}

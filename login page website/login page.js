document.addEventListener('DOMContentLoaded', function() {
    
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');

    var signupLink = document.getElementById('signup-link');
    var loginLink = document.getElementById('login-link');

    function showLoginForm() {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        document.getElementById('form-title').innerText = 'LOGIN';
        return false;
    }

    function showSignupForm() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        document.getElementById('form-title').innerText = 'SIGN UP'; 
        return false; 
    }

    signupLink.addEventListener('click', showSignupForm);
    loginLink.addEventListener('click', showLoginForm);
});
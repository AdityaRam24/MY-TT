document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin') {
            // Successful login, redirect or perform desired action
            alert('Login successful!');
        } else {
            // Display error message
            document.getElementById('error-message').innerText = 'Invalid username or password';
        }
    });
});

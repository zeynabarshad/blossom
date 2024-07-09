document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulate form submission and display alerts
        if (username && email && password) {
            alert('Signup successful!\nUsername: ' + username + '\nEmail: ' + email + '\nPassword: ' + password);
        } else {
            alert('Please fill in all fields.');
        }
    });
});

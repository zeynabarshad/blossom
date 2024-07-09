document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulate form submission and display alerts
        if (email && password) {
            alert('Data submitted successfully!\nEmail: ' + email + '\nPassword: ' + password);
        } else {
            alert('Please fill in all fields.');
        }
    });
});

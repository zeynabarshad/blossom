// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM fully loaded and parsed');
    
    const popup = document.getElementById('popup');
    const subscribeForm = document.getElementById('subscribeForm');
    const noButton = document.getElementById('noButton');

    // Check if the user has already interacted with the popup
    const isSubscribed = localStorage.getItem('isSubscribed');
    console.log('isSubscribed:', isSubscribed);

    // Show the popup only if the user hasn't subscribed or declined
    if (!isSubscribed) {
        popup.style.display = 'flex';
    }

    // Handle form submission
    subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const email = document.getElementById('email').value;

        // Simulate form submission and display alert
        if (email) {
            alert('Thank you for subscribing with ' + email + '!');
        }

        // Set localStorage flag and hide the popup
        localStorage.setItem('isSubscribed', 'true');
     

        // Optionally redirect to homepage
        window.location.href = 'index.html'; // Redirect to homepage
        popup.style.display = 'none';
    });

    // Handle "No Thanks" button click
    noButton.addEventListener('click', function() {
        // Set localStorage flag and hide the popup
        localStorage.setItem('isSubscribed', 'true');
      

        // Optionally redirect to homepage
        window.location.href = 'index.html'; 
        popup.style.display = 'none';// Redirect to homepage
    });
});

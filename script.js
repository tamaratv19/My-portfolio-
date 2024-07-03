document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch the form data
    let formData = new FormData(this);

    // Example: Log the form data to the console
    console.log('Form data:', formData);
});

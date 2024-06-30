// JavaScript for handling form submission and other interactions

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Example: You can log the data or send it to a backend server using fetch API
    console.log(formData);

    // Reset the form after submission
    document.getElementById('contact-form').reset();
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', handleSubmit);


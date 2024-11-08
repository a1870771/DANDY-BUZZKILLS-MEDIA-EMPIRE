// Get references to HTML elements
const messageForm = document.getElementById('messageForm');
const messagesContainer = document.getElementById('messagesContainer');

// Event listener for form submission
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form inputs
    const title = document.getElementById('title').value.trim();
    const messageContent = document.getElementById('messageContent').value.trim();

    // Create a new message element and display it
    if (title && messageContent) {
        displayMessage(title, messageContent);

        // Clear form inputs
        document.getElementById('title').value = '';
        document.getElementById('messageContent').value = '';
    }
});

function displayMessage(title, content) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    const messageHeader = document.createElement('h3');
    messageHeader.textContent = `${title}`;

    const messageContent = document.createElement('p');
    messageContent.textContent = content;

    messageDiv.appendChild(messageHeader);
    messageDiv.appendChild(messageContent);

    // Insert the new message at the top of messagesContainer
    messagesContainer.insertBefore(messageDiv, messagesContainer.firstChild);
}
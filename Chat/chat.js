// Chatbot logic
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Function to handle sending messages
function sendMessage() {
    let inputField = document.getElementById('chat-input');
    let message = inputField.value.trim();
    
    if (message !== '') {
        addMessageToChatLog(message, 'user-message', 'user');
        generateBotResponse(message);
        inputField.value = ''; // Clear input field
    }
}

// Function to display a message in the chat log
function addMessageToChatLog(message, className, avatarType) {
    let chatLog = document.getElementById('chat-log');
    
    // Create message container
    let messageContainer = document.createElement('div');
    messageContainer.className = className === 'user-message' ? 'chat-message-container user-message-container' : 'chat-message-container bot-message-container';
    
    // Create avatar element
    let avatar = document.createElement('img');
    avatar.src = avatarType === 'user' ? '../shared css/photos/user.png' : '../shared css/photos/Me3.jpg';
    avatar.className = 'avatar ' + (avatarType === 'user' ? 'user-avatar' : 'bot-avatar');
    
    // Create message element
    let messageElement = document.createElement('p');
    messageElement.className = className;

    // Use innerHTML for bot messages, textContent for user messages
    if (className === 'bot-message') {
        messageElement.innerHTML = message; // Allows clickable links in bot messages
    } else {
        messageElement.textContent = message; // Keeps user messages as plain text
    }
    
    // Append avatar and message to container
    messageContainer.appendChild(avatar);
    messageContainer.appendChild(messageElement);
    
    // Add to chat log
    chatLog.appendChild(messageContainer);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll
}

// Function to generate bot response and optionally add clickable options
function generateBotResponse(userMessage) {
    let botResponse = '';

    // Example responses
    if (userMessage.toLowerCase().includes('hello')) {
        botResponse = 'Hi! How can I assist you today?';
        addMessageToChatLog(botResponse, 'bot-message', 'bot');
        displayOptions(['Portfolio', 'Contact', 'Projects']);

    }else if (userMessage.toLowerCase().includes('hi')) {
        botResponse = 'Hi! How can I assist you today?';
        addMessageToChatLog(botResponse, 'bot-message', 'bot');
        displayOptions(['Portfolio', 'Contact', 'Projects']);

    } else if (userMessage.toLowerCase().includes('projects')) {
        botResponse = 'Check out my projects in the "Projects" section! by <a href="../Projects/project.html" target="_blank">Clicking here</a>.';
        addMessageToChatLog(botResponse, 'bot-message', 'bot');
        displayOptions(['Portfolio', 'Contact']);

    } else if (userMessage.toLowerCase().includes('contact')) {
        botResponse = 'You can find my contact details by <a href="../Contact/contact.html" target="_blank">Clicking here</a>.';
        addMessageToChatLog(botResponse, 'bot-message', 'bot');
        displayOptions(['Portfolio', 'Projects']);

    }else if (userMessage.toLowerCase().includes('portfolio')) {
        botResponse = 'You can dive through my portfolio by <a href="../Home/index.html" target="_blank">Clicking here</a>.';
        addMessageToChatLog(botResponse, 'bot-message', 'bot');
        displayOptions(['Contact', 'Projects']);

    }else if (userMessage.toLowerCase().includes('thank you')) {
        botResponse = "It's a pleasure to assist you.";
        addMessageToChatLog(botResponse, 'bot-message', 'bot');

    }else if (userMessage.toLowerCase().includes('thanks')) {
        botResponse = "It's a pleasure to assist you.";
        addMessageToChatLog(botResponse, 'bot-message', 'bot');

    } else {
        botResponse = 'Sorry, I didn’t understand that. Can you rephrase?';
        addMessageToChatLog(botResponse, 'bot-message', 'bot');
    }
}

// Function to display options
function displayOptions(options) {
    let chatLog = document.getElementById('chat-log');
    
    // Create options container
    let optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    
    // Create buttons for each option
    options.forEach(option => {
        let optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.className = 'option-button';
        optionButton.addEventListener('click', function () {
            addMessageToChatLog(option, 'user-message', 'user');
            generateBotResponse(option);
            optionsContainer.remove(); // Remove options after user selects one
        });
        optionsContainer.appendChild(optionButton);
    });

    // Append options container to chat log
    chatLog.appendChild(optionsContainer);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll
}

// Add event listeners for sending messages via the button and Enter key
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

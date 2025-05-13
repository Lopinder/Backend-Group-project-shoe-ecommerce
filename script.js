document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Function to add a message to the chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        const messageText = document.createElement('p');
        messageText.textContent = message;
        
        messageContent.appendChild(messageText);
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to handle user input
    function handleUserInput() {
        const message = userInput.value.trim();
        if (message) {
            // Add user message to chat
            addMessage(message, true);
            
            // Clear input field
            userInput.value = '';
            
            // Simulate bot response (replace this with actual API call)
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse);
            }, 1000);
        }
    }

    // Function to generate bot response (replace with actual API integration)
    function getBotResponse(userMessage) {
        const responses = [
            "I understand you're asking about: " + userMessage,
            "That's an interesting question!",
            "I'm here to help you with that.",
            "Let me think about that...",
            "I'm still learning, but I'll do my best to help!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // Focus input field on load
    userInput.focus();
}); 
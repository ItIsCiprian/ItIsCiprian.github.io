document.addEventListener('DOMContentLoaded', function() {
    // Chat functionality
    var chatInput = document.getElementById('chat-input');
    var chatMessages = document.querySelector('.chat-messages');
    var sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function() {
        var msgContent = chatInput.value;
        if (msgContent) {
            var newMsg = document.createElement('div');
            newMsg.textContent = msgContent;
            newMsg.classList.add('chat-message');
            chatMessages.appendChild(newMsg);
            chatInput.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    var modal = document.getElementById('aboutModal');
    var aboutLink = document.getElementById('aboutLink');
    var closeBtn = document.getElementsByClassName('close')[0];

    if (aboutLink && modal && closeBtn) {
        aboutLink.onclick = function(event) {
            event.preventDefault();
            modal.style.display = 'block';
        }

        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
    }

    // Conversations functionality
    var conversationsLink = document.getElementById('conversationsLink');
    var conversationsSection = document.getElementById('conversationsSection');
    var postMessageForm = document.getElementById('postMessageForm');
    var sendMessageBtn = document.getElementById('sendMessageBtn');
    var conversationsList = document.getElementById('conversationsList');
    var messageInput = document.getElementById('messageInput');

    if (conversationsLink && conversationsSection && postMessageForm && sendMessageBtn && conversationsList && messageInput) {
        conversationsLink.onclick = function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            conversationsSection.style.display = 'block';
            postMessageForm.style.display = 'block';
        }

        sendMessageBtn.onclick = function() {
            var message = messageInput.value.trim();
            if (message) {
                var newMessage = document.createElement('div');
                newMessage.textContent = message;
                conversationsList.appendChild(newMessage);
                messageInput.value = '';
            }
        }
    }

    // Retrieve and display saved blog content
    const savedBlog = localStorage.getItem('savedBlog');
    const blogContainer = document.getElementById('blogContainer');

    if (savedBlog && blogContainer) {
        blogContainer.innerHTML = savedBlog;
    } else if (blogContainer) {
        blogContainer.innerHTML = '<p>No blog post found. Start writing one!</p>';
    }
});

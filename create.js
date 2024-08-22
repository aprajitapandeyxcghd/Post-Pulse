// Initialize CKEditor
CKEDITOR.replace('editor');

// Function to save content locally
function saveContentLocally() {
    var editorData = CKEDITOR.instances.editor.getData();

    // Save the blog content to local storage
    localStorage.setItem('savedBlogTitle', document.getElementById('title').value);
    localStorage.setItem('savedBlogContent', editorData);

    alert("Your blog post has been saved locally!");
}

// Function to handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    // Retrieve the blog title and content from the form fields
    const title = document.getElementById('title').value;
    const content = CKEDITOR.instances.editor.getData(); // Get content from CKEditor
    
    // Replace with the actual user ID if you're using authentication
    const userId = 'user-id';  
    
    // Display a saving message to the user
    document.getElementById('feedback').innerText = 'Saving...';

    // Save the blog content to local storage
    saveContentLocally(); // Save locally

    // Make a POST request to the backend API to save the blog
    fetch('/api/save-blog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content, userId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Show a success message if the blog was saved successfully
            document.getElementById('feedback').innerText = 'Saved!';
        } else {
            // Show an error message if the blog failed to save
            document.getElementById('feedback').innerText = 'Failed to save. Please try again.';
        }
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch request
        console.error('Error:', error);
        document.getElementById('feedback').innerText = 'An error occurred. Please try again.';
    });
}

// Add event listener for the form submission
document.getElementById('blogForm').addEventListener('submit', handleFormSubmit);

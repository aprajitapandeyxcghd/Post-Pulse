document.addEventListener('DOMContentLoaded', function() {
    // Function to add a blog post to the Library section
    function addToLibrary(title, content) {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        
        blogPost.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        
        document.getElementById('blogList').appendChild(blogPost);
    }

    // Fetch all saved blogs from the backend API when the page loads
    fetch('/api/get-blogs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(blogs => {
        blogs.forEach(blog => {
            // Add each saved blog from the backend to the Library section
            addToLibrary(blog.title, blog.content);
        });
    })
    .catch(error => {
        console.error('Error fetching blogs:', error);
    });

    // Retrieve and display the locally saved blog if it exists
    const savedTitle = localStorage.getItem('savedBlogTitle');
    const savedContent = localStorage.getItem('savedBlogContent');
    
    if (savedTitle && savedContent) {
        addToLibrary(savedTitle, savedContent);
    }
});

const express = require('express');
const router = express.Router();

// Mock database for blogs
const blogs = [
    // Example blogs
    { userId: 1, title: 'Sample Blog 1', content: 'This is the first sample blog content.' },
    { userId: 2, title: 'Sample Blog 2', content: 'This is the second sample blog content.' }
];

// API to get all blogs for a specific user
router.get('/api/get-blogs', (req, res) => {
    const userId = req.user.id; // Assuming user ID is available in req.user
    const userBlogs = blogs.filter(blog => blog.userId === userId);
    res.json(userBlogs);
});

module.exports = router;

const express = require('express');
const app = express();
const libraryRoutes = require('./routes/libraryRoutes'); // Adjust path as needed

// Use the routes
app.use('/', libraryRoutes);

// Other necessary middleware and routes...

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const express = require('express');       // Import Express library
const app = express();                    // Create an Express app
const PORT = process.env.PORT || 3000;    // Choose port from env or default to 3000

// Define a route: visit http://localhost:3000/ to see this response
app.get('/', (req, res) => {
  res.send('Hello from your CI/CD pipeline!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

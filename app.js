// app.js - Simple Express.js Application
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello DevOps! CI/CD Pipeline Working!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Kirupa', role: 'DevOps Engineer' },
    { id: 2, name: 'Admin', role: 'System Administrator' }
  ]);
});

// Start server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
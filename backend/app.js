const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // MongoDB connection file
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const insertSampleData = require('./insertSampleData');
const insertSampleAdmin = require('./insertAdmin');

dotenv.config(); // Load environment variables



// Initialize Express
const app = express();

// Connect to MongoDB
connectDB(); // Connection logic handled in 'config/db.js'

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON payloads

// Routes
app.use('/api/students', studentRoutes); // Student-related routes
app.use('/api/admin', adminRoutes); // Admin-related routes

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    insertSampleData;
    insertSampleAdmin;
});

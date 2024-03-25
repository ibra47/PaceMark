require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/books'); // Ensure this path matches where your book routes are defined

const app = express();
const PORT = process.env.PORT || 5001; // Use the PORT from .env or default to 5001

app.use(cors()); // Use CORS to allow cross-origin requests
app.use(express.json()); // Enables your server to parse JSON

// Mount your book routes as middleware
app.use('/api/books', bookRoutes); // Use your book routes for any requests to /api/books

app.get('/', (req, res) => {
    res.send('Hello, PaceMark Backend!');
});

// MongoDB connection setup using provided details
const dbUsername = 'ibraducreps'; // Your MongoDB Atlas username
const dbPassword = 'VCnOFKs5XydyKQq'; // Your MongoDB Atlas password
const clusterUrl = 'cluster0.x4lp2lh.mongodb.net'; // Your cluster URL from MongoDB Atlas
const dbName = 'PaceMark'; // Your database name

const connectionString = `mongodb+srv://${dbUsername}:${dbPassword}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(connectionString)
    .then(() => {
        console.log('Connected to MongoDB');
        // Only start listening to requests after a successful database connection
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => console.error('Database connection failed', error.message));

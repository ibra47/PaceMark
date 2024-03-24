const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books');
const app = express();

app.use(express.json()); // for parsing application/json
app.use('/api/books', bookRoutes); // Mount the book routes

// Replace 'yourDatabaseURL' with your actual MongoDB connection string
mongoose.connect('yourDatabaseURL', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
    .catch((error) => console.error(error.message));


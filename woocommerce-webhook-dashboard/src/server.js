const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const webhookRoutes = require('./routes/webhook');
const dashboardRoutes = require('./routes/dashboard');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/webhook', webhookRoutes);
app.use('/dashboard', dashboardRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
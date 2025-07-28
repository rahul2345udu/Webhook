const express = require('express');
const bodyParser = require('body-parser');
const { handleWebhook } = require('./webhook');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    handleWebhook(req, res);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const crypto = require('crypto');
const config = require('./config');

const handleWebhook = (req, res) => {
    const signature = req.headers['x-wc-webhook-signature'];
    const body = JSON.stringify(req.body);
    const expectedSignature = crypto.createHmac('sha256', config.WC_SECRET_KEY).update(body).digest('hex');

    if (signature !== expectedSignature) {
        return res.status(403).send('Forbidden: Invalid signature');
    }

    const event = req.body;

    // Process the event based on its type
    switch (event.event) {
        case 'order.created':
            // Handle order created event
            break;
        case 'order.updated':
            // Handle order updated event
            break;
        // Add more cases as needed for different events
        default:
            console.log(`Unhandled event type: ${event.event}`);
    }

    res.status(200).send('Webhook received');
};

module.exports = handleWebhook;
const express = require('express');
const router = express.Router();
const WebhookController = require('../controllers/webhookController');

const webhookController = new WebhookController();

router.post('/new-order', webhookController.handleNewOrder.bind(webhookController));

module.exports = router;
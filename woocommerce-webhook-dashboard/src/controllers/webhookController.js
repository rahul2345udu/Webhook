class WebhookController {
    async handleNewOrder(req, res) {
        try {
            const orderData = req.body;

            // Validate the incoming data
            if (!orderData || !orderData.id) {
                return res.status(400).send('Invalid order data');
            }

            // Here you would typically save the order data to the database
            // For example, using a Mongoose model:
            const Order = require('../models/order');
            const newOrder = new Order(orderData);
            await newOrder.save();

            // Respond to WooCommerce that the webhook was received successfully
            res.status(200).send('Order received');
        } catch (error) {
            console.error('Error handling new order:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = WebhookController;
const express = require('express');
const Order = require('../models/order');

const setDashboardRoutes = (app) => {
    app.get('/dashboard', async (req, res) => {
        try {
            const orders = await Order.find({});
            res.render('dashboard', { orders });
        } catch (error) {
            console.error('Error fetching orders:', error);
            res.status(500).send('Internal Server Error');
        }
    });
};

module.exports = setDashboardRoutes;
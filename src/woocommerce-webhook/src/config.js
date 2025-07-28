const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    WOOCOMMERCE_SECRET_KEY: process.env.WOOCOMMERCE_SECRET_KEY || 'cs_170c78f31e0cfa40d649e58c9dec0d244fbc12a1',
    // Add other configuration settings as needed
};
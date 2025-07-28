# WooCommerce Webhook Dashboard

This project is a real-time dashboard that receives and displays new order data from WooCommerce via webhooks. It is built using Node.js, Express, and MongoDB.

## Features

- Real-time order updates from WooCommerce
- User-friendly dashboard to view all orders
- Easy setup and configuration

## Project Structure

```
woocommerce-webhook-dashboard
├── src
│   ├── server.js               # Entry point of the application
│   ├── controllers
│   │   └── webhookController.js # Handles incoming webhook requests
│   ├── models
│   │   └── order.js            # Mongoose model for order data
│   ├── routes
│   │   ├── webhook.js          # Sets up webhook routes
│   │   └── dashboard.js        # Sets up dashboard routes
│   └── views
│       └── dashboard.ejs       # Template for the dashboard view
├── package.json                 # NPM configuration file
├── .env                         # Environment variables
└── README.md                    # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/woocommerce-webhook-dashboard.git
   ```

2. Navigate to the project directory:
   ```
   cd woocommerce-webhook-dashboard
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your database connection string and WooCommerce API credentials.

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Set up the WooCommerce webhook to point to your server's webhook route (e.g., `http://yourdomain.com/webhook`).

3. Access the dashboard at `http://yourdomain.com/dashboard` to view incoming orders.

## Contributing

Feel free to submit issues or pull requests to improve the project. 

## License

This project is licensed under the MIT License.
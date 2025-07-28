# WooCommerce Webhook Project

This project is designed to handle webhook events from WooCommerce. It sets up a server that listens for incoming webhook requests and processes them accordingly.

## Project Structure

```
woocommerce-webhook
├── src
│   ├── index.js        # Entry point of the application
│   ├── webhook.js      # Logic for processing webhook events
│   └── config.js       # Configuration settings and environment variables
├── package.json        # npm configuration file
├── .env                # Environment variables
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd woocommerce-webhook
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   WOOCOMMERCE_SECRET_KEY=cs_170c78f31e0cfa40d649e58c9dec0d244fbc12a1
   ```

4. **Start the server:**
   ```
   npm start
   ```

## Usage

Once the server is running, it will listen for incoming webhook requests from WooCommerce. Ensure that you have configured the webhook URL in your WooCommerce settings to point to your server.

## Webhook Functionality

The application verifies the signature of incoming webhook requests using the secret key defined in the `.env` file. If the signature is valid, the webhook event is processed according to the logic defined in `src/webhook.js`.

## License

This project is licensed under the MIT License.
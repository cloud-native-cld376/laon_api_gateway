const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Configuration for service endpoints
const LOAN_SERVICE = process.env.LOAN_SERVICE;
const ADMIN_SERVICE = process.env.ADMIN_SERVICE;
const PAYMENT_SERVICE = process.env.PAYMENT_SERVICE;

// Route to different services
app.use('/loan', proxy(LOAN_SERVICE));
app.use('/admin', proxy(ADMIN_SERVICE));
app.use('/payment', proxy(PAYMENT_SERVICE));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
    console.log(`LOAN_SERVICE: ${LOAN_SERVICE}`);
    console.log(`ADMIN_SERVICE: ${ADMIN_SERVICE}`);
    console.log(`PAYMENT_SERVICE: ${PAYMENT_SERVICE}`);
}); 
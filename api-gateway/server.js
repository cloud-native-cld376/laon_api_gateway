const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

// Configuration for service endpoints
const LOAN_SERVICE = process.env.LOAN_SERVICE || 'http://34.201.33.221:3002';
const ADMIN_SERVICE = process.env.ADMIN_SERVICE || 'http://23.20.134.178:3003';
const PAYMENT_SERVICE = process.env.PAYMENT_SERVICE || 'http://34.201.33.221:3005';

// Route to different services
app.use('/loan', proxy(LOAN_SERVICE));
app.use('/admin', proxy(ADMIN_SERVICE));
app.use('/payment', proxy(PAYMENT_SERVICE));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
}); 
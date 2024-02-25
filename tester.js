import http from 'http';

// data to be sent in request body
const data = JSON.stringify({
    userEmail: 'userEmail@example.com',
    purchaseDetails: 'Product: Example Product, Price: $10'
});
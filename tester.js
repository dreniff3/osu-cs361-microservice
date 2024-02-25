import http from 'http';

// data to be sent in request body
const data = JSON.stringify({
    userEmail: 'userEmail@example.com',
    purchaseDetails: 'Product: Example Product, Price: $10'
});

// options for HTTP request, per http documentation
const options = {
    hostname: 'localhost',
    port: 3000, // if the microservice is running on port 3000 locally
    path: '/api/sendEmail',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
    },
};

// create new request
const req = http.request(options, (res) => {
    let resBody = '';

    // concatenate data as it is received
    res.on('data', (chunk) => {
        resBody += chunk;
    });

    // log response when request is completed
    res.on('end', () => {
        console.log('Response from microservice: ', resBody);
    });
});
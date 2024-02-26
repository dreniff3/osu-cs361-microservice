# Email Notification Microservice

### How to make requests to microservice

Communication between your program and the microservice is achieved via HTTP requests and responses. Your program should send a POST request to the Email Notification Microservice.

Refer to the [`tester.js`](https://github.com/dreniff3/osu-cs361-microservice/blob/main/tester.js "Test File") file for an example of how that can be done.

In `tester.js`, Node.js's built-in `http` module is used to accomplish this. Below is a high-level description of how `tester.js` communicates with the Email Notification Microservice:

**1. Prepare request data:** a JSON string containing the user's email address (`userEmail`) and purchase details (`purchaseDetails`) is constructed. This data represents the information that will be sent to the Email Notification Service.

**2. Set up request options:** options are defined for the HTTP request, including the hostname (`localhost`), port (`3000`), path (`/api/sendEmail`), request method (`POST`), and headers specifying the content type (`application/json`) and content length (`data.length`).

**3. Create HTTP request:** using the `http.request()` method, a new HTTP request object (`req`) is created, which encapsulates the details of the request (`options`) to be sent to the Email Notification Microservice.

**4. Handle response:** event handlers to handle the response from the Email Notification Microservice are defined: when data is received (`res.on('data')`), it is concatenated to a `resBody` variable; when the response is complete (`res.on('end')`), the `resBody` is logged to the console.

**5. Handle errors:** an event handler to handle errors that occur during the request is defined (`req.on('error')`): if an error occurs, it is logged to the console.

**6. Send request:** finally, the request data is written to the request body using `req.write(data)` and then the request is ended with `req.end()`.

### How the microservice responds to requests

The Email Notification Microservice listens for incoming POST requests on the `/api/sendEmail` endpoint, and responds to them with either a success message or an error message.

### UML Sequence Diagram

![UML diagram](microserviceUMLdiagram.png)

#### Note to developers:

The Email Notification Microservice will not work with Gmail unless you **enable 2-Step Verification** and **generate an Application password**:

1. Go to the [Google Account](https://myaccount.google.com/) you will use as the sender address for the microservice.
2. Select **Security**.
3. Under "Signing in to Google", select **2-Step Verification** and enable 2-Step Verification.
4. At the bottom of the page, select **App passwords**.
5. Enter a name for your app.
6. Click **Create**.
7. The app password is the 16-character code that generates on your device. <--- This is what will replace `'example_password'` in `emailService.js`.
8. Select **Done**.

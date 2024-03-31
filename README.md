# AWS Email Sender 📧

AWS Email Sender is a serverless solution for sending emails using AWS Simple Email Service (SES) from a Lambda function. It's designed to handle contact form submissions, extracting user data and forwarding it via email. This solution is perfect for serverless websites or applications requiring a straightforward way to handle email notifications.

## Prerequisites ✅

- AWS Account
- Verified email address in Amazon SES
- Node.js and npm/yarn installed (for local setup)

## Setup 🛠

### Step 1: Verify Email Address

Ensure you have a verified email address in Amazon SES. This email will be used as the sender and recipient for the contact form submissions. To verify an email address:
1. Navigate to the SES console.
2. In the **Identity Management** section, choose **Email Addresses**.
3. Click **Verify a New Email Address** and follow the prompts.

### Step 2: Deploy Lambda Function

1. Clone this repository to your local machine.
2. Install dependencies with `npm install` or `yarn`.
3. Zip the contents of the repository, including `node_modules`.
4. Create a new Lambda function in the AWS Console and upload the zip file.
5. Set the Lambda function's execution role to have `AmazonSESFullAccess` permissions.
6. Configure a trigger for the Lambda function (e.g., API Gateway).

### Step 3: API Gateway (Optional)

For applications requiring an HTTP endpoint:
1. Create a new API in AWS API Gateway.
2. Create a new resource and method (POST) linked to your Lambda function.
3. Deploy the API and note the endpoint URL.

## Usage 🚀

To send an email, make a `POST` request to your Lambda function (or API Gateway endpoint) with the following JSON body:

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "company": "Example Inc.",
  "email": "jane.doe@example.com",
  "message": "This is a test message."
}
```

The Lambda function will parse the input and send an email using Amazon SES.

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. 
Any contributions you make are greatly appreciated.

1. Fork the project.
2. Create your feature branch (git checkout -b feature/AmazingFeature).
3. Commit your changes (git commit -m 'Add some AmazingFeature').
4. Push to the branch (git push origin feature/AmazingFeature).
5. Open a pull request.

## License 📄

Distributed under the MIT License. See LICENSE for more information.

## Contact 📬

Twitter - [@olwiba](https://twitter.com/Olwiba)

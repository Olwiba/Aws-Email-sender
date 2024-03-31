import AWS from 'aws-sdk';
const SES = new AWS.SES({ region: 'ap-southeast-2' }); // Sydney

exports.handler = async (event) => {
    const { firstName, lastName, company, email, message } = JSON.parse(event.body);

    const emailBody = `Name: ${firstName} ${lastName}\nCompany: ${company}\nEmail: ${email}\nMessage: ${message}`;
    
    const params = {
        Destination: {
            ToAddresses: ['my-email@company.com'], // Your verified email address
        },
        Message: {
            Body: {
                Text: { Data: emailBody },
            },
            Subject: { Data: 'New Contact Form Submission' },
        },
        Source: 'my-email@company.com', // MUST be a verified sender in Amazon SES
    };

    try {
        const sendPromise = await SES.sendEmail(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully', messageId: sendPromise.MessageId }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
};

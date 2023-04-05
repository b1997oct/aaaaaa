const nodemailer = require('nodemailer');

exports.sendMail = async (req, res, next) => {

    try {

        recipientList = ["b1997oct@gmail.com"]

        let transporter = new nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'raindevelopers.web@gmail.com',
                pass: 'ljzgaxpcerausmdn'
            }
        });

        let mailOptions = {
            from: 'raindevelopers.web@gmail.com',
            to: new Array(...recipientList),
            subject: 'Example HTML email'+ "hello agin",
            html: `
            <html>
            <head>
                <style>
                    /* CSS styles for email body */
                    h1 {
                        color: #333;
                        font-size: 28px;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 16px;
                        line-height: 1.5;
                        margin-bottom: 20px;
                    }
                    button {
                        background-color: #007bff;
                        border: none;
                        color: #fff;
                        padding: 10px 20px;
                        font-size: 16px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    .otp-code {
                        background-color: #f5f5f5;
                        border: 1px solid #ddd;
                        padding: 10px 20px;
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        border-radius: 5px;
                        margin-bottom: 20px;
                    }
                    .instructions {
                        color: #666;
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                </style>
            </head>
            <body>
                <h1>OTP Verification Email</h1>
                <p>Hello,</p>
                <p>Your one-time password (OTP) is:</p>
                <div class="otp-code">123456</div>
                <p class="instructions">Please enter this OTP in the appropriate field on the verification page to complete the process.</p>
                <button>Verify Now</button>
                <p>Thank you for using our service!</p>
            </body>
        </html>
    `
        };



        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                next()
            } else {
                console.log('Email sent: ' + info.response);
                next()
            }
        });


    }

    catch (error) {
        console.log(error)
    }

} 
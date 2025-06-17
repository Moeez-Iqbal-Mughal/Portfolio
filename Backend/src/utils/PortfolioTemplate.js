const PortfolioTemplate = ({ name, email, subject, message }) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Portfolio Contact</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #333333;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
        }
        .header {
          text-align: center;
          padding: 30px 0;
          background-color: #1e293b;
          color: #ffffff;
          border-radius: 8px 8px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }
        .header p {
          margin: 10px 0 0;
          font-size: 16px;
          opacity: 0.8;
        }
        .content {
          padding: 30px;
          background-color: #ffffff;
          border-left: 1px solid #eeeeee;
          border-right: 1px solid #eeeeee;
        }
        .message-box {
          background-color: #f5f7fa;
          padding: 20px;
          border-radius: 6px;
          margin-top: 20px;
          border-left: 4px solid #ea580c;
        }
        .field {
          margin-bottom: 15px;
        }
        .field-label {
          font-weight: 600;
          color: #64748b;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .field-value {
          font-size: 16px;
          color: #1e293b;
        }
        .footer {
          text-align: center;
          padding: 20px;
          background-color: #f1f5f9;
          color: #64748b;
          font-size: 14px;
          border-radius: 0 0 8px 8px;
          border-top: 3px solid #ea580c;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #ea580c;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Message</h1>
          <p>Someone has reached out from your portfolio</p>
        </div>
        <div class="content">
          <p>Hello,</p>
          <p>You've received a new message from your portfolio contact form.</p>
          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${name}</div>
          </div>
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">${email}</div>
          </div>
          <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">${subject}</div>
          </div>
          <div class="message-box">
            <div class="field-label">Message</div>
            <div class="field-value">${message}</div>
          </div>
          <a href="mailto:${email}" class="button">Reply to ${name}</a>
        </div>
        <div class="footer">
          <p>&copy; 2023 Your Portfolio. All rights reserved.</p>
          <p>This is an automated message from your portfolio contact form.</p>
        </div>
      </div>
    </body>
    </html>
    `;
  };
  
  export default PortfolioTemplate;
  
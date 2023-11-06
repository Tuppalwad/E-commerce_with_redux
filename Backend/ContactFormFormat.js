function ContactFormFormat(formData) {
    const fname = formData.fname;
    const email = formData.email;
    const message = formData.message;
    const lname = formData.lname;
    const htmlTemplate = `
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body>
        <h1>This is contact form info</h1>
        <table>
          <tr>
            <td><strong>Name:</strong></td>
            <td>${fname}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>${email}</td>
          </tr>
          <tr>
            <td><strong>Subject:</strong></td>
            <td>${lname}</td>
          </tr>
          <tr>
            <td><strong>Message:</strong></td>
            <td>${message}</td>
          </tr>
        </table>
      </body>
    </html>
  `;

    return htmlTemplate;
}

module.exports = ContactFormFormat;
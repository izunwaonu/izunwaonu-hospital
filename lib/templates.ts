export function sendAdminNotificationEmail(clientData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  packageDetails: {
    name: string;
    description: string;
  };
}) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Client Inquiry - Izunwaonu</title>
          <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e40af; color: white; padding: 20px; }
              .content { padding: 20px; background-color: #F3F4F6; }
              .client-details, .package-details { background-color: #E0E7FF; border: 1px solid #1e40af; border-radius: 5px; padding: 15px; margin-top: 20px; }
              .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #666; }
          </style>
      </head>
      <body>
          <div class="header">
              <h2>New Client Inquiry</h2>
          </div>
          <div class="content">
              <p>A new client has submitted an inquiry through the contact form. Here are the details:</p>
              
              <div class="client-details">
                  <h2>Client Information</h2>
                  <p><strong>Name:</strong> ${clientData.name}</p>
                  <p><strong>Email:</strong> ${clientData.email}</p>
                  <p><strong>Phone:</strong> ${clientData.phone}</p>
                  <p><strong>Message:</strong> ${clientData.message}</p>
              </div>
              
              <div class="package-details">
                  <h2>Selected Package</h2>
                  <p><strong>Package Name:</strong> ${
                    clientData.packageDetails.name
                  }</p>
                  <p><strong>Service Description:</strong> ${
                    clientData.packageDetails.description
                  } Development</p>
                 
                  
              </div>
              
              <p>Please follow up with this client as soon as possible.</p>
          </div>
          <div class="footer">
              <p>© ${new Date().getFullYear()} Izunwaonu. All rights reserved.</p>
          </div>
      </body>
      </html>
    `;
}

export function sendClientConfirmationEmail(
  name: string,
  packageDetails: {
    name: string;
    description: string;
  }
) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Inquiry - Izunwaonu</title>
          <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e40af; color: white; padding: 20px; }
              .header-content { display: flex; align-items: center; }
              .developer-image { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-right: 20px; }
              .developer-info { text-align: left; }
              .developer-info h2 { margin: 0; font-size: 1.2em; }
              .developer-info p { margin: 5px 0; font-size: 0.9em; }
              .content { padding: 20px; background-color: #F3F4F6; }
              .package-details { background-color: #E0E7FF; border: 1px solid #1e40af; border-radius: 5px; padding: 15px; margin-top: 20px; }
              .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #666; }
          </style>
      </head>
      <body>
          <div class="header">
              <div class="header-content">
                  <img src="https://portfolio.izunwaonu.com.ng/static/media/izunwaonu.40cc8db6dcd9602c4374.jpg" alt="Enerwat Logo" class="developer-image">
                  <div class="developer-info">
                      <h2>Izunwaonu Limited</h2>
                      <p>We Specialize in Irrigation, Water Pumps, Solar Equipment, Borehole Drilling & general Water Treatment Solutions</p>
                  </div>
              </div>
          </div>
          <div class="content">
              <p>Hello ${name},</p>
              <p>Thank you for your inquiry about our ${
                packageDetails.name
              } services. We have received your message and will be in touch shortly.</p>
              
              <div class="package-details">
                  <h2>Your Selected Package: ${packageDetails.name}</h2>
                  <p><strong>Service Description:</strong> ${
                    packageDetails.description
                  } </p>
                
              </div>
              
              <p>One of our team members will contact you soon to discuss your project in more detail and answer any questions you may have.</p>
              <p>We look forward to working with you!</p>
          </div>
          <div class="footer">
              <p>© ${new Date().getFullYear()} Izunwaonu. All rights reserved.</p>
              <p>Questions? Contact us at info@izunwaonu.com.ng</p>
              <p>
                  <a href="#" style="color: #1e40af;">Unsubscribe</a> | 
                  <a href="#" style="color: #1e40af;">Privacy Policy</a>
              </p>
          </div>
      </body>
      </html>
    `;
}

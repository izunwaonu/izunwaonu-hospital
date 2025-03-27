// utils/emailTemplates.ts

import { AppointmentFormData } from "@/components/frontend/AppointmentForm";

export function sendAdminEmail(formData: AppointmentFormData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Appointment Booking - Kasese Hospital</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #059669; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { padding: 20px; background-color: #f0fdf4; border: 1px solid #dcfce7; }
            .appointment-details { background-color: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #666; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>New Appointment Request</h1>
        </div>
        <div class="content">
            <h2>Patient Details:</h2>
            <div class="appointment-details">
            <p><strong>Reference ID:</strong> ${formData.referenceId}</p>
           
                <p><strong>Patient Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Service Requested:</strong> ${formData.service}</p>
                <p><strong>Appointment Date:</strong> ${new Date(
                  formData.appointmentDate
                ).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</p>
                <p><strong>Preferred Time:</strong> ${
                  formData.preferredTime
                }</p>
                ${
                  formData.additionalInfo
                    ? `<p><strong>Additional Information:</strong> ${formData.additionalInfo}</p>`
                    : ""
                }
            </div>
            <p><em>Please review and confirm this appointment through the hospital management system.</em></p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} Kasese Hospital. All rights reserved.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </body>
    </html>
  `;
}

export function sendPatientEmail(formData: AppointmentFormData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Appointment Confirmation - Kasese Hospital</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #059669; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { padding: 20px; background-color: #f0fdf4; border: 1px solid #dcfce7; }
            .appointment-card { background-color: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #059669; }
            .important-note { background-color: #fef9c3; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .cta-button { display: inline-block; padding: 12px 24px; background-color: #059669; color: white; text-decoration: none; border-radius: 25px; margin: 10px 0; }
            .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #666; }
            .contact-info { background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Appointment Confirmation</h1>
        </div>
        <div class="content">
            <p>Dear ${formData.name},</p>
            <p>Thank you for choosing Kasese Hospital for your healthcare needs. We have received your appointment request and are pleased to confirm the following details:</p>
            
            <div class="appointment-card">
                <h3>Your Appointment Details:</h3>
                 <p><strong>Reference ID:</strong> ${formData.referenceId}</p>
                <p><strong>Service:</strong> ${formData.service}</p>
                <p><strong>Date:</strong> ${new Date(
                  formData.appointmentDate
                ).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</p>
                <p><strong>Time:</strong> ${formData.preferredTime}</p>
            </div>

            <div class="important-note">
                <h4>Important Information:</h4>
                <ul>
                 <li>Please save your reference ID: ${formData.referenceId}</li>
            <li>Quote this reference ID in all communications</li>
                    <li>Please arrive 15 minutes before your appointment time</li>
                    <li>Bring any relevant medical records or test results</li>
                    <li>Don't forget to bring a valid ID and your insurance card (if applicable)</li>
                </ul>
            </div>

            <p style="text-align: center;">
                <a href="tel:+256XXXXXXXX" class="cta-button">Call Us</a>
            </p>

            <div class="contact-info">
                <h4>Need to Reschedule?</h4>
                <p>If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance:</p>
                <p>📞 Phone: +256 XXX XXX XXX</p>
                <p>✉️ Email: appointments@kasesehospital.com</p>
            </div>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} Kasese Hospital. All rights reserved.</p>
            <p>123 Hospital Road, Kasese, Uganda</p>
            <p>www.kasesehospital.com</p>
        </div>
    </body>
    </html>
  `;
}

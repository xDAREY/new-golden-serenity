import * as admin from "firebase-admin";
import {Resend} from "resend";
import {onDocumentCreated} from "firebase-functions/v2/firestore";

admin.initializeApp();

// Get Resend API key securely from Firebase environment config
const resend = new Resend(process.env.RESEND_API_KEY || "");

// Replace with your admin email
const ADMIN_EMAIL = "goldenserenityjob@gmail.com";

/**
 * Sends an alert email when a form is submitted
 * @param {string} subject - Subject line for the email
 * @param {string} body - HTML body content of the email
 */
async function sendAlertEmail(subject: string, body: string) {
  try {
    await resend.emails.send({
      from: "no-reply@goldenserenityhomecare.org", // must be verified in Resend
      to: ADMIN_EMAIL,
      subject,
      html: `<div style="font-family:sans-serif;">
               <h2>${subject}</h2>
               <p>${body}</p>
             </div>`,
    });
    console.log("Email alert sent.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}


/**
 * Trigger when a new employment form is submitted
 */
export const alertOnEmploymentForm = onDocumentCreated(
  "employmentForms/{docId}",
  async (event) => {
    const data = event.data?.data() as {
      name?: string;
      email?: string;
      phone?: string;
    };
    const subject = "New Employment Form Submission";
    const body = `
      A new employment form has been submitted.<br>
      Name: ${data?.name || "N/A"}<br>
      Email: ${data?.email || "N/A"}<br>
      Phone: ${data?.phone || "N/A"}
    `;
    await sendAlertEmail(subject, body);
  }
);

/**
 * Trigger when a new contact form is submitted
 */
export const alertOnContactForm = onDocumentCreated(
  "contactForms/{docId}",
  async (event) => {
    const data = event.data?.data() as {
      name?: string;
      email?: string;
      message?: string;
    };
    const subject = "New Contact Form Submission";
    const body = `
      A new contact form has been submitted.<br>
      Name: ${data?.name || "N/A"}<br>
      Email: ${data?.email || "N/A"}<br>
      Message: ${data?.message || "N/A"}
    `;
    await sendAlertEmail(subject, body);
  }
);

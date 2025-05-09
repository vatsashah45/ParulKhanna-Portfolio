import { Html } from "@react-email/html";
export default function ContactFormEmail({ senderEmail, message }: { senderEmail: string; message: string }) {
  return (
    <Html lang="en">
      <h2>New inquiry from {senderEmail}</h2>
      <p>{message}</p>
    </Html>
  );
}

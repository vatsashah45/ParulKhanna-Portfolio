import { Html } from "@react-email/html";
import { Button } from "@react-email/components";

export default function ContactFormEmail({
  senderEmail,
  message,
}: {
  senderEmail: string;
  message: string;
}) {
  return (
    <Html>
      <h2>New portfolio inquiry</h2>
      <p><strong>From:</strong> {senderEmail}</p>
      <p>{message}</p>
      <Button href={`mailto:${senderEmail}`}>Reply</Button>
    </Html>
  );
}

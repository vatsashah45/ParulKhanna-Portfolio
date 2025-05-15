import { Resend } from "resend";

export const resend =
  process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "DUMMY"
    ? new Resend(process.env.RESEND_API_KEY)
    : ({
        emails: {
          send: async () => {
            console.log("[mock‑resend] Email send simulated.");
            return { id: "mock_email_id" };
          },
        },
      } as unknown as Resend);

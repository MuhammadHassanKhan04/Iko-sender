import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  smtpEmail: string;
  appPassword: string;
  smtpHost: string;
  smtpPort: number;
  useSSL: boolean;
  senderName: string;
  senderEmail: string;
  recipients: string[];
  subject: string;
  body: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      smtpEmail,
      appPassword,
      smtpHost,
      smtpPort,
      useSSL,
      senderName,
      senderEmail,
      recipients,
      subject,
      body
    }: EmailRequest = await req.json();

    console.log(`Starting to send emails to ${recipients.length} recipients via ${smtpHost}:${smtpPort}`);

    const client = new SMTPClient({
      connection: {
        hostname: smtpHost || "smtp.gmail.com",
        port: smtpPort || 465,
        tls: useSSL !== undefined ? useSSL : true,
        auth: {
          username: smtpEmail,
          password: appPassword,
        },
      },
    });

    const results = [];

    for (const recipient of recipients) {
      try {
        await client.send({
          from: `${senderName} <${senderEmail}>`,
          to: recipient,
          subject: subject,
          html: body,
        });

        console.log(`Successfully sent email to ${recipient}`);
        results.push({ email: recipient, status: "success", message: "Sent successfully" });
      } catch (error: any) {
        console.error(`Failed to send email to ${recipient}:`, error);
        results.push({
          email: recipient,
          status: "error",
          message: error?.message || "Failed to send"
        });
      }
    }

    await client.close();

    return new Response(JSON.stringify({ results }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-bulk-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

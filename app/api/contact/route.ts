import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Chýbajú povinné polia." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "BeesVitae Web <noreply@beesvitae.sk>",
      to: "kralik@krealik.sk",
      replyTo: email,
      subject: `Nová správa od ${name} — beesvitae.sk`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d031b; border-bottom: 2px solid #00d8c9; padding-bottom: 8px;">
            Nová správa z beesvitae.sk
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
            <tr>
              <td style="padding: 8px 0; color: #5e646e; width: 80px;">Meno:</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #5e646e;">E-mail:</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #00d8c9;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="background: #f5f5f5; border-left: 3px solid #00d8c9; padding: 16px; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #5e646e; font-size: 12px; margin-top: 24px;">
            Na túto správu môžeš odpovedať priamo — reply-to je nastavený na ${email}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Nepodarilo sa odoslať správu. Skúste to znovu." },
      { status: 500 }
    );
  }
}

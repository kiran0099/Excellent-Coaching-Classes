import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, studentClass, message } = await req.json();

    // Basic validation
    if (!name || !phone || !studentClass) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const waPhone = process.env.WHATSAPP_PHONE;
    const apiKey = process.env.CALLMEBOT_API_KEY;

    if (!waPhone || !apiKey) {
      console.error("WhatsApp env vars not set");
      // Still return success to the user — don't break form UX
      return NextResponse.json({ success: true });
    }

    const classLabel = studentClass === "9" ? "Class 9th" : "Class 10th";
    const text = [
      "📚 *New Callback Request - Excellance Classes*",
      "",
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      `🎓 Class: ${classLabel}`,
      message ? `💬 Message: ${message}` : null,
      "",
      `⏰ Received at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(waPhone)}&text=${encodeURIComponent(text)}&apikey=${apiKey}`;

    const waRes = await fetch(url);

    if (!waRes.ok) {
      console.error("CallMeBot error:", waRes.status, await waRes.text());
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Callback API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

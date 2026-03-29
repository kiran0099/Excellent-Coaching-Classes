import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, studentClass, message } = await req.json();

    if (!name || !phone || !studentClass) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const classLabels: Record<string, string> = {
      "nursery": "Nursery",
      "lkg": "LKG",
      "ukg": "UKG",
      "1": "Class 1st",
      "2": "Class 2nd",
      "3": "Class 3rd",
      "4": "Class 4th",
      "5": "Class 5th",
      "6": "Class 6th",
      "7": "Class 7th",
      "8": "Class 8th",
      "9": "Class 9th",
      "10": "Class 10th",
      "11": "Class 11th (Commerce)",
      "12": "Class 12th (Commerce)",
    };
    const classLabel = classLabels[studentClass] ?? studentClass;

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // ── 1. Google Sheets via Apps Script ─────────────────────────────────────
    const sheetsUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;
    if (sheetsUrl) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, studentClass: classLabel, message: message || "", timestamp }),
        });
      } catch (err) {
        console.error("Google Sheets error:", err);
      }
    }

    // ── 2. WhatsApp via CallMeBot ─────────────────────────────────────────────
    const waPhone = process.env.WHATSAPP_PHONE;
    const apiKey = process.env.CALLMEBOT_API_KEY;

    if (waPhone && apiKey) {
      const text = [
        "📚 *New Callback Request - Excellent Classes*",
        "",
        `👤 Name: ${name}`,
        `📞 Phone: ${phone}`,
        `🎓 Class: ${classLabel}`,
        message ? `💬 Message: ${message}` : null,
        "",
        `⏰ Received at: ${timestamp}`,
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(waPhone)}&text=${encodeURIComponent(text)}&apikey=${apiKey}`;
      const waRes = await fetch(url);
      if (!waRes.ok) {
        console.error("CallMeBot error:", waRes.status, await waRes.text());
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Callback API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

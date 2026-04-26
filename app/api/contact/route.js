import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_TO_EMAIL || "Hacienda.office2019@gmail.com";

// naive in-memory rate limit (works best on single instance; still helps)
const RATE = {
  windowMs: 60_000, // 1 min
  max: 5, // 5 requests / min per IP
};
const hits = new Map(); // ip -> { count, resetAt }

function getClientIp(req) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return "unknown";
}

function rateLimit(ip) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + RATE.windowMs });
    return { ok: true };
  }
  if (entry.count >= RATE.max)
    return { ok: false, retryAfterMs: entry.resetAt - now };
  entry.count += 1;
  return { ok: true };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(str, maxLen) {
  const s = String(str);
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

export async function POST(req) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { ok: false, error: "Server nije podešen za slanje poruka." },
        { status: 500 }
      );
    }

    const ip = getClientIp(req);
    const rl = rateLimit(ip);
    if (!rl.ok) {
      return Response.json(
        { ok: false, error: "Previše pokušaja. Pokušajte ponovo kasnije." },
        {
          status: 429,
          headers: { "retry-after": String(Math.ceil(rl.retryAfterMs / 1000)) },
        }
      );
    }

    const body = await req.json().catch(() => null);

    // ✅ Honeypot: bots often fill it; humans won't
    const website = (body?.website ?? "").toString().trim();
    if (website) {
      // Pretend success (avoid giving signal to bots), but do not send email
      return Response.json({ ok: true });
    }

    const name = clamp((body?.name ?? "").trim(), 100);
    const email = clamp((body?.email ?? "").trim(), 254);
    const message = clamp((body?.message ?? "").trim(), 4000);

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Sva polja su obavezna." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { ok: false, error: "Email adresa nije ispravna." },
        { status: 400 }
      );
    }

    const subject = `Kontakt forma: ${name}`;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

    await resend.emails.send({
      from: "Hacienda Website <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject,
      html: `
        <h2>Nova poruka sa sajta</h2>
        <p><strong>Ime i prezime:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Poruka:</strong><br/>${safeMessage}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { ok: false, error: "Greška pri slanju poruke." },
      { status: 500 }
    );
  }
}

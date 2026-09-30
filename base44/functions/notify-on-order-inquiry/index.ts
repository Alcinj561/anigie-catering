import { createClientFromRequest } from "npm:@base44/sdk";

const recipient = "valsainta26@gmail.com";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const inquiry = await req.json();

    if (inquiry.company) return Response.json({ success: true });

    const startedAt = new Date(inquiry.form_started_at).getTime();
    if (!Number.isFinite(startedAt) || Date.now() - startedAt < 2000 || Date.now() - startedAt > 86_400_000) {
      return Response.json({ error: "Unable to verify this request." }, { status: 400 });
    }

    const name = String(inquiry.customer_name ?? "").trim();
    const email = String(inquiry.email ?? "").trim();
    const phone = String(inquiry.phone ?? "").trim();
    const eventDate = String(inquiry.event_date ?? "");
    const guests = Number(inquiry.guest_count);
    const eventType = String(inquiry.event_type ?? "").trim();
    const foodRequest = String(inquiry.food_request ?? "").trim();
    const minimumDate = new Date();
    minimumDate.setHours(0, 0, 0, 0);
    minimumDate.setDate(minimumDate.getDate() + 14);

    if (
      name.length < 2 || name.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      phone.length < 7 || phone.length > 40 ||
      !/^\d{4}-\d{2}-\d{2}$/.test(eventDate) ||
      new Date(`${eventDate}T00:00:00`).getTime() < minimumDate.getTime() ||
      !Number.isInteger(guests) || guests < 1 || guests > 1000 ||
      foodRequest.length < 10 || foodRequest.length > 3000
    ) {
      return Response.json({ error: "Please check your request details and try again." }, { status: 400 });
    }

    const savedInquiry = await base44.asServiceRole.entities.OrderInquiry.create({
      customer_name: name,
      email,
      phone,
      event_date: eventDate,
      guest_count: guests,
      event_type: eventType,
      food_request: foodRequest,
      status: "new",
    });

    const rows = [
      ["Name", savedInquiry.customer_name],
      ["Email", savedInquiry.email],
      ["Phone", savedInquiry.phone],
      ["Event date", savedInquiry.event_date],
      ["Guests", savedInquiry.guest_count],
      ["Event type", savedInquiry.event_type || "Not specified"],
      ["Food request", savedInquiry.food_request],
    ];

    const body = `
      <h1>New ANGIE catering inquiry</h1>
      <p>A customer submitted an order request from the website.</p>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><th align="left" style="padding:6px 12px 6px 0">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
    `;

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: recipient,
      subject: `New catering inquiry: ${savedInquiry.customer_name} for ${savedInquiry.event_date}`,
      body,
      from_name: "ANGIE Kitchen & Catering",
    });

    return Response.json({ success: true, inquiryId: savedInquiry.id });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to send notification." },
      { status: 500 },
    );
  }
});

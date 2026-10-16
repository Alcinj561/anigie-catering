"use client";

import { FormEvent, useState } from "react";
import { base44 } from "@/lib/base44";

const fieldClass =
  "mt-2 w-full rounded-xl border border-cocoa/25 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-charcoal/45 focus:border-tomato focus:ring-4 focus:ring-tomato/15";

export function OrderInquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [startedAt] = useState(() => new Date().toISOString());

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) return;

    setStatus("sending");
    setMessage("");

    try {
      const result = await base44.functions.invoke("notify-on-order-inquiry", {
        customer_name: String(data.get("customer_name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        phone: String(data.get("phone") ?? "").trim(),
        event_date: String(data.get("event_date") ?? ""),
        guest_count: Number(data.get("guest_count")),
        event_type: String(data.get("event_type") ?? "").trim(),
        food_request: String(data.get("food_request") ?? "").trim(),
        company: String(data.get("company") ?? ""),
        form_started_at: startedAt,
      });
      if (!result?.data?.success) throw new Error("Order request was rejected.");
      form.reset();
      setStatus("success");
      setMessage("Thank you. Your request was sent. ANGIE will follow up soon.");
    } catch {
      setStatus("error");
      setMessage("Your request could not be sent. Please call or text 561.305.3809 instead.");
    }
  }

  return (
    <form onSubmit={submit} className="rounded-3xl bg-cream p-6 text-charcoal shadow-2xl shadow-black/25 sm:p-8">
      <h3 className="font-display text-2xl font-bold">Request catering</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/70">Tell us the basics and we will follow up. Please send requests at least 2 weeks before your event.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Your name<input className={fieldClass} name="customer_name" required minLength={2} autoComplete="name" /></label>
        <label className="text-sm font-semibold">Phone number<input className={fieldClass} name="phone" required minLength={7} autoComplete="tel" inputMode="tel" /></label>
        <label className="text-sm font-semibold sm:col-span-2">Email address<input className={fieldClass} name="email" required type="email" autoComplete="email" /></label>
        <label className="text-sm font-semibold">Event date<input className={fieldClass} name="event_date" required type="date" /></label>
        <label className="text-sm font-semibold">Guest count<input className={fieldClass} name="guest_count" required type="number" min="1" max="1000" inputMode="numeric" /></label>
        <label className="text-sm font-semibold sm:col-span-2">Type of event<input className={fieldClass} name="event_type" placeholder="Birthday, family gathering, office lunch..." /></label>
        <label className="text-sm font-semibold sm:col-span-2">What would you like to eat?<textarea className={`${fieldClass} min-h-28 resize-y`} name="food_request" required minLength={10} maxLength={3000} placeholder="Tell us about the food, preferences, and anything else we should know." /></label>
      </div>

      <label className="sr-only" aria-hidden="true">Company<input name="company" tabIndex={-1} autoComplete="off" /></label>

      <button disabled={status === "sending"} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-tomato px-6 py-3.5 font-semibold text-white transition hover:bg-[#ad361b] disabled:cursor-wait disabled:opacity-70">
        {status === "sending" ? "Sending request..." : "Send catering request"}
      </button>
      {message && <p className={`mt-4 text-sm font-medium ${status === "error" ? "text-[#a42f1b]" : "text-[#216e39]"}`} role="status">{message}</p>}
    </form>
  );
}

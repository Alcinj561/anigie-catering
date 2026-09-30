import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { Logo, LogoMark } from "@/components/Logo";
import { OrderInquiryForm } from "@/components/OrderInquiryForm";
import {
  BriefcaseIcon,
  CalendarIcon,
  CandleIcon,
  HomeIcon,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  PotIcon,
  SparkleIcon,
  UsersIcon,
} from "@/components/Icons";
import { aboutImage, business, galleryImages, heroImage } from "@/content/site";

const services = [
  {
    title: "Private dinners",
    body: "A home-cooked meal for one, two, or a small table, cooked to order and ready when you are.",
    Icon: CandleIcon,
  },
  {
    title: "Events",
    body: "Birthdays, showers, graduations, and milestones. Food planned around the occasion and your guest list.",
    Icon: SparkleIcon,
  },
  {
    title: "Family gatherings",
    body: "Holidays, reunions, and Sunday get-togethers with generous, family-style food everyone can share.",
    Icon: HomeIcon,
  },
  {
    title: "Corporate catering",
    body: "Team lunches, meetings, and office celebrations. Tell me the headcount and timing and I will plan the food.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Large parties",
    body: "Big crowds are welcome. Cooking for hundreds of guests, planned ahead so there is plenty for everyone.",
    Icon: UsersIcon,
  },
];

const scale = [
  { count: "1", label: "Just you" },
  { count: "10", label: "A dinner table" },
  { count: "100", label: "A celebration" },
  { count: "1,000", label: "A full crowd" },
];

const steps = [
  {
    title: "Call or text",
    body: "Reach out at least 2 weeks before your date. Share how many people you are feeding and what kind of food you have in mind.",
  },
  {
    title: "Plan it together",
    body: "We talk through dishes, portions, and any preferences so the food fits your gathering.",
  },
  {
    title: "Cooked to order",
    body: "Your food is prepared for your order, not pulled from a standard menu.",
  },
];

function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.24em] ${
        tone === "light" ? "text-tomato-bright" : "text-tomato"
      }`}
    >
      {children}
    </p>
  );
}

function LeadTimeNotice({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 rounded-2xl px-4 py-2 text-sm font-semibold min-[360px]:rounded-full ${
        tone === "light"
          ? "border border-tomato-bright/40 bg-tomato/15 text-cream"
          : "border border-tomato/30 bg-tomato/10 text-charcoal"
      }`}
    >
      <CalendarIcon className={`h-4 w-4 shrink-0 ${tone === "light" ? "text-tomato-bright" : "text-tomato"}`} />
      {business.leadTime}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cream focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-cocoa/25 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[1.05fr_1fr] md:gap-12 md:pb-24 md:pt-16">
            <div>
              <Eyebrow>Made-to-order cooking &amp; catering</Eyebrow>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
                You can call me for all the cooking you{" "}
                <span className="text-cocoa-light italic">need &amp; want.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
                From 1 person to 1000 people, feel free to text or call. Tell me about your
                gathering and I will cook the food to match it.
              </p>
              <div className="mt-6">
                <LeadTimeNotice />
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-tomato px-7 py-4 text-base font-semibold text-white shadow-xl shadow-tomato/25 transition hover:bg-[#ad361b]"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call or Text to Order
                </a>
                <a
                  href={business.smsHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/25 px-7 py-4 text-base font-semibold text-cream transition hover:border-cream/60 hover:bg-white/5"
                >
                  <MessageIcon className="h-5 w-5" />
                  Text {business.phoneDisplay}
                </a>
              </div>
              <p className="mt-6 text-sm text-cream/65">
                Prefer email?{" "}
                <a href={business.emailHref} className="font-medium text-cream underline decoration-cocoa-light/60 underline-offset-4 hover:decoration-cream">
                  {business.email}
                </a>
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/60">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-charcoal/95 px-4 py-3 shadow-xl sm:-left-6">
                <LogoMark className="h-9 w-9" />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-cream">1 to 1,000 guests</p>
                  <p className="text-xs text-cream/70">Call or text to plan yours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" aria-labelledby="services-title" className="bg-cream text-charcoal">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="max-w-2xl">
              <Eyebrow tone="dark">Catering services</Eyebrow>
              <h2 id="services-title" className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Cooking for every kind of table
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/75">
                Whether it is dinner for two or a party for hundreds, every order is planned
                with you and cooked for your occasion.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, body, Icon }) => (
                <li
                  key={title}
                  className="group rounded-3xl border border-cocoa/15 bg-white/70 p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cocoa text-cream">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-charcoal/75">{body}</p>
                </li>
              ))}
              <li className="flex flex-col justify-between rounded-3xl bg-charcoal p-7 text-cream">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-tomato text-white">
                    <PotIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">Something else in mind?</h3>
                  <p className="mt-2 leading-relaxed text-cream/75">
                    If you need cooking, ask. Every order is made to fit.
                  </p>
                </div>
                <a
                  href={business.phoneHref}
                  className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-tomato-bright underline-offset-4 hover:underline"
                >
                  Call {business.phoneDisplay}
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* 1 to 1000 */}
        <section aria-labelledby="scale-title" className="relative overflow-hidden bg-cocoa-deep">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,#f7f0e6_1px,transparent_0)] [background-size:22px_22px]"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
            <div className="grid items-end gap-10 md:grid-cols-2">
              <div>
                <Eyebrow>No party too small or too big</Eyebrow>
                <h2 id="scale-title" className="mt-4 font-display text-5xl font-bold leading-none text-cream sm:text-7xl">
                  From 1 to <span className="text-tomato-bright">1,000</span> guests
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-cream/80">
                {business.offer} Cooking for yourself, your family, your office, or a
                full event crowd starts the same way: one call or text, at least 2 weeks ahead.
              </p>
            </div>

            <ol className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
              {scale.map((item) => (
                <li key={item.count} className="bg-cocoa-deep p-6 sm:p-8">
                  <p className="font-display text-4xl font-bold text-cream sm:text-5xl">{item.count}</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-cocoa-light">
                    {item.label}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section aria-labelledby="gallery-title" className="bg-charcoal">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <Eyebrow>From the kitchen</Eyebrow>
                <h2 id="gallery-title" className="mt-4 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl">
                  Food made for sharing
                </h2>
              </div>
              <p className="max-w-sm text-cream/70">
                A look at the kind of plates, platters, and trays that come out of the kitchen.
              </p>
            </div>

            <ul
              className={`mt-12 grid gap-4 sm:grid-cols-2 ${
                galleryImages.length % 3 === 0 ? "lg:grid-cols-3" : ""
              }`}
            >
              {galleryImages.map((image) => (
                <li key={image.src + image.caption}>
                  <figure className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-charcoal-soft">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes={
                        galleryImages.length % 3 === 0
                          ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          : "(min-width: 640px) 50vw, 100vw"
                      }
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-4 pt-12 text-sm font-semibold text-cream">
                      {image.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="bg-cream-deep text-charcoal">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
            <div className="relative order-2 md:order-1">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-cocoa/30">
                <Image
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  width={aboutImage.width}
                  height={aboutImage.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Eyebrow tone="dark">About ANGIE</Eyebrow>
              <h2 id="about-title" className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Cooked to order, never one-size-fits-all
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-charcoal/80">
                ANGIE Kitchen &amp; Catering is built around one simple idea: you tell me what
                you need, and I cook it. No fixed packages. Every order starts with a
                conversation about your guests, your occasion, and the food you want on the table.
              </p>
              <ol className="mt-8 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cocoa font-display text-lg font-bold text-cream">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 leading-relaxed text-charcoal/75">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-ink">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-tomato/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
              <div>
                <Eyebrow>Contact</Eyebrow>
                <h2 id="contact-title" className="mt-4 font-display text-4xl font-bold leading-tight text-cream sm:text-5xl">
                  For all your catering, please call me.
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/75">
                  Call or text with your date, guest count, and what you would like to eat.
                  Email works too.
                </p>
                <div className="mt-6">
                  <LeadTimeNotice />
                </div>
              </div>

              <div className="grid gap-6">
              <ul className="grid gap-4">
                <li>
                  <a
                    href={business.phoneHref}
                    className="group flex items-center gap-5 rounded-3xl bg-tomato p-6 text-white shadow-xl shadow-tomato/20 transition hover:bg-[#ad361b]"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                      <PhoneIcon className="h-7 w-7" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-white/85">Call</span>
                      <span className="block font-display text-2xl font-bold sm:text-3xl">{business.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={business.smsHref}
                    className="flex items-center gap-5 rounded-3xl border border-white/12 bg-charcoal-soft p-6 text-cream transition hover:border-white/30"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cocoa">
                      <MessageIcon className="h-7 w-7" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-cream/70">Text</span>
                      <span className="block font-display text-2xl font-bold sm:text-3xl">{business.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={business.emailHref}
                    className="flex items-center gap-5 rounded-3xl border border-white/12 bg-charcoal-soft p-6 text-cream transition hover:border-white/30"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cocoa">
                      <MailIcon className="h-7 w-7" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-cream/70">Email</span>
                      <span className="block break-all text-lg font-semibold sm:text-xl">{business.email}</span>
                    </span>
                  </a>
                </li>
              </ul>
              <OrderInquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-cream/65">Made-to-order catering for 1 to 1,000 guests. Orders 2 weeks in advance.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream/80">
              <li><a href="#home" className="hover:text-cream">Home</a></li>
              <li><a href="#services" className="hover:text-cream">Services</a></li>
              <li><a href="#about" className="hover:text-cream">About</a></li>
              <li><a href="#contact" className="hover:text-cream">Contact</a></li>
            </ul>
          </nav>
          <div className="flex flex-col gap-1 text-sm">
            <a href={business.phoneHref} className="font-semibold text-cream hover:text-tomato-bright">
              {business.phoneDisplay}
            </a>
            <a href={business.emailHref} className="text-cream/80 hover:text-cream">
              {business.email}
            </a>
          </div>
        </div>
        <div className="border-t border-white/5">
          <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-cream/60 sm:px-6">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SUPPORT_EMAIL } from "../_components/site";

export const metadata: Metadata = {
  title: "Support · ScaleCue",
  description: "Get help with ScaleCue. Contact us and a real person will get back to you.",
};

const faqs = [
  {
    q: "How do I delete my account?",
    a: "Open Settings in the app and tap Delete account. This permanently removes your account and all of your data, and it cannot be undone.",
  },
  {
    q: "How do reminders work?",
    a: "ScaleCue keeps reminders gentle and on your device only. You get a nudge around the time you usually weigh in, a friendly heads-up if you have been away for a while, and the occasional note when your trend shifts. It never nags, and a few weigh-ins a week is all it needs. Turn reminders off anytime in the app's Settings, or in your iPhone Settings.",
  },
  {
    q: "How is my data handled?",
    a: "Your data is yours. We never sell it and never use it for ads. See the Privacy Policy for the full details.",
  },
];

export default function SupportPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-24 pt-20 sm:pt-24">
      <Eyebrow>Support</Eyebrow>
      <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink">We are here to help.</h1>
      <p className="mt-5 text-lg leading-relaxed text-body">
        Questions, feedback, or trouble with ScaleCue? Reach out and a real person will get
        back to you.
      </p>

      {/* Contact card */}
      <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Email us</p>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="mt-3 inline-block text-lg font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
        >
          {SUPPORT_EMAIL}
        </a>
        <p className="mt-3 text-sm leading-relaxed text-subtle">
          We read every message and typically reply within a couple of days.
        </p>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Common questions
        </h2>
        <div className="mt-4 divide-y divide-line rounded-2xl border border-line bg-surface">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-6">
              <h3 className="text-base font-semibold text-ink">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">
                {faq.q === "How is my data handled?" ? (
                  <>
                    Your data is yours. We never sell it and never use it for ads. See the{" "}
                    <Link
                      href="/privacy"
                      className="text-body underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for the full details.
                  </>
                ) : (
                  faq.a
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

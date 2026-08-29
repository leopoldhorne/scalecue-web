import type { Metadata } from "next";
import { Eyebrow, SUPPORT_EMAIL } from "../_components/site";

export const metadata: Metadata = {
  title: "Privacy Policy · WeightSense",
  description: "How WeightSense collects, uses, stores, and protects your data.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-subtle">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 pb-24 pt-20 sm:pt-24">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Last updated: August 29, 2026</p>

      <p className="mt-8 text-[15px] leading-relaxed text-body">
        WeightSense (&ldquo;we,&rdquo; &ldquo;us&rdquo;) makes a weight-tracking app that helps you
        understand your weight trend instead of stressing over daily swings. This policy explains
        what we collect, why, and the control you have over it. We keep it short because we keep
        our data practices simple.
      </p>

      <Section title="Information we collect">
        <p>We only collect what the app needs to work for you:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-body">Account information:</span> your email address, and your
            name if you provide it. When you sign in with Apple or Google, we receive a basic
            identifier and email from that provider to create your account.
          </li>
          <li>
            <span className="text-body">Profile details:</span> information you provide during setup,
            such as birthday, height, starting weight, and goal weight, used to personalize your
            trend and progress.
          </li>
          <li>
            <span className="text-body">Your weigh-ins:</span> the weights you log, along with their
            date and time, and any optional notes or context tags you add.
          </li>
        </ul>
        <p>
          We do not collect your location, contacts, photos, or advertising identifiers, and we do
          not use third-party advertising or analytics trackers.
        </p>
      </Section>

      <Section title="How we use your information">
        <p>
          We use your information solely to provide the app: to save your weigh-ins, calculate your
          trend and progress, sync your data across sign-ins, and send you an optional daily
          reminder if you allow notifications. We do not use your data to build advertising
          profiles.
        </p>
      </Section>

      <Section title="How your data is stored">
        <p>
          Your account and weigh-in data are stored on our behalf by Supabase, a cloud database
          provider, on servers located in the United States. Your weigh-ins are also stored locally
          on your device so the app works offline. We take reasonable measures to protect your
          information, though no method of storage or transmission is ever completely secure.
        </p>
      </Section>

      <Section title="Sharing">
        <p>
          We do not sell your personal information, and we do not share it for advertising. We share
          data only with the service providers that make the app function (such as our cloud
          database host and the sign-in provider you choose), and only as needed to operate the
          service, or if required by law.
        </p>
      </Section>

      <Section title="Your rights and choices">
        <p>
          You can view and edit your profile and weigh-ins at any time in the app. You can delete
          your account directly from the app&rsquo;s Settings, under Delete account. Deleting your
          account permanently removes your account and associated data from our systems and cannot
          be undone. You can turn the daily reminder off anytime in the app&rsquo;s Settings, or in
          your device&rsquo;s notification settings.
        </p>
      </Section>

      <Section title="Children">
        <p>
          WeightSense is not directed to children under 13, and we do not knowingly collect
          information from them. If you believe a child has provided us information, contact us and
          we will delete it.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          We may update this policy from time to time. When we do, we will revise the date at the
          top of this page.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about your privacy? Email us at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-body underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </article>
  );
}

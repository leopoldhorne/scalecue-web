import { Eyebrow } from "./_components/site";

const features = [
  {
    title: "Weigh in seconds",
    body: "Log today's weight in a couple of taps. Add context like sleep, sodium, travel, or workouts when it matters.",
  },
  {
    title: "See the real trend",
    body: "Your trend weight and recent pace cut through the daily noise, so you can tell real change from a bad night's sleep.",
  },
  {
    title: "Understand your patterns",
    body: "Over time, WeightSense surfaces what tends to move your scale, without guilt trips or fragile promises.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-28">
        <div className="max-w-2xl">
          <Eyebrow>Sustainable weight loss</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            The scale is noisy. The trend is the truth.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-body">
            WeightSense looks past the daily jumps from water, sodium, sleep, and stress, and
            shows you the real direction you are heading. So one rough morning never derails you.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Made for iPhone
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="text-base font-semibold text-ink">{feature.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing band */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-line bg-surface px-8 py-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            The WeightSense promise
          </p>
          <p className="mx-auto mt-4 max-w-xl text-balance text-2xl font-semibold leading-snug text-ink">
            Track the number. Understand the trend.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-subtle">
            No overclaiming, no shame, no pretending a single weigh-in means everything. Just an
            honest read on where you are actually heading.
          </p>
        </div>
      </section>
    </>
  );
}

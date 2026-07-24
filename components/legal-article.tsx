import type { LegalDoc } from "@/lib/legal";

export function LegalArticle({ doc }: { doc: LegalDoc }) {
  return (
    <main className="max-w-[720px] mx-auto px-6 md:px-12 py-24">
      <p className="text-xs uppercase tracking-[0.16em] text-muted mb-4">
        Binder · Legal
      </p>
      <h1 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.035em] mb-2">
        {doc.title}
      </h1>
      <p className="text-sm text-muted mb-10">Last updated {doc.updated}</p>
      <p className="text-lg leading-relaxed mb-10">{doc.intro}</p>
      <div className="flex flex-col gap-8">
        {doc.sections.map((s, i) => (
          <section key={i}>
            {s.heading ? (
              <h2 className="text-lg font-bold tracking-[-0.01em] mb-2">
                {s.heading}
              </h2>
            ) : null}
            <p className="leading-relaxed text-muted">{s.text}</p>
          </section>
        ))}
      </div>
      <p className="text-sm text-muted mt-14 pt-8 border-t border-black/10">
        Questions? Email{" "}
        <a
          href="mailto:contact@nearmint.tech"
          className="underline underline-offset-4"
        >
          contact@nearmint.tech
        </a>
        .
      </p>
    </main>
  );
}

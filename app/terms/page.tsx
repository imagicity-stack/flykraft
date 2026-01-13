import Link from "next/link";

export default function TermsPage() {
  return (
    <main>
      <section className="policy-hero">
        <div className="container">
          <p className="section-subtitle">Policy</p>
          <h1 className="section-title">Terms &amp; Conditions</h1>
          <p>
            These terms govern the use of the flykraft.in website and the services
            provided by FLYKRAFT SYNERGIES PRIVATE LIMITED.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container policy-grid">
          <article className="policy-card reveal" data-reveal>
            <h3>Acceptance of Terms</h3>
            <p>
              By accessing this site, you agree to comply with these terms and all
              applicable laws. If you disagree with any part, please discontinue
              use of the website.
            </p>
          </article>
          <article className="policy-card reveal" data-reveal>
            <h3>Use of Content</h3>
            <p>
              All content is intended for informational purposes. Reproduction,
              distribution, or modification requires prior written consent from
              FLYKRAFT SYNERGIES PRIVATE LIMITED.
            </p>
          </article>
          <article className="policy-card reveal" data-reveal>
            <h3>Professional Engagement</h3>
            <p>
              Commercial engagements are subject to signed agreements that define
              scope, confidentiality, and deliverables. Contact us for bespoke
              terms.
            </p>
          </article>
          <article className="policy-card reveal" data-reveal>
            <h3>Updates</h3>
            <p>
              We may update these terms periodically. Continued use of the site
              implies acceptance of the revised terms.
            </p>
          </article>
        </div>
        <div className="container" style={{ marginTop: "30px" }}>
          <Link className="button secondary" href="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

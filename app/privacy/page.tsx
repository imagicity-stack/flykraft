import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main>
      <section className="policy-hero">
        <div className="container">
          <p className="section-subtitle">Policy</p>
          <h1 className="section-title">Privacy Policy</h1>
          <p>
            This policy outlines how FLYKRAFT SYNERGIES PRIVATE LIMITED handles
            information collected through flykraft.in.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container policy-grid">
          <article className="policy-card reveal" data-reveal>
            <h3>Information We Collect</h3>
            <p>
              We collect contact details submitted through inquiry forms and any
              communications you voluntarily provide. We do not sell personal
              data.
            </p>
          </article>
          <article className="policy-card reveal" data-reveal>
            <h3>How We Use Information</h3>
            <p>
              Information is used to respond to queries, share updates, and
              improve our services. Data is stored securely and retained only as
              needed for operational purposes.
            </p>
          </article>
          <article className="policy-card reveal" data-reveal>
            <h3>Security</h3>
            <p>
              We implement reasonable safeguards to protect information against
              unauthorized access, alteration, or disclosure.
            </p>
          </article>
          <article className="policy-card reveal" data-reveal>
            <h3>Your Choices</h3>
            <p>
              You may request updates, corrections, or deletion of your
              information by contacting hello@flykraft.in.
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

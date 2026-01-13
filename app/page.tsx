import Link from "next/link";

const projectItems = [
  {
    title: "Industrial Growth Platforms",
    description:
      "Strategic manufacturing alliances, ESG-forward supply chains, and smart factory integration.",
  },
  {
    title: "Education Futures",
    description:
      "Blended learning ecosystems, upskilling labs, and mentorship-driven academic innovation.",
  },
  {
    title: "Media Distribution",
    description:
      "Multi-channel distribution hubs for regional storytelling, OTT syndication, and IP licensing.",
  },
  {
    title: "Social Impact Ventures",
    description:
      "Community-first programs that bridge opportunity gaps with measurable outcomes.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            FLYKRAFT <span>SYNERGIES</span>
          </div>
          <nav className="nav-links">
            <a href="#about">About Us</a>
            <a href="#projects">Our Projects</a>
            <a href="#directors">Directors</a>
            <a href="#contact">Contact</a>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
          <a className="cta-chip" href="#contact">
            Let&apos;s Collaborate
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="section-subtitle">Conglomerate of Visionaries</p>
            <h1 data-reveal className="reveal">
              Building future-ready ventures across industry, education, and media
              distribution.
            </h1>
            <p data-reveal className="reveal">
              FLYKRAFT SYNERGIES PRIVATE LIMITED unites expert leaders, agile
              capital, and purposeful creativity to accelerate sustainable growth.
              We connect opportunity-rich sectors and scale ideas that uplift
              communities nationwide.
            </p>
            <div className="hero-actions reveal" data-reveal>
              <a className="button primary" href="#projects">
                Explore Projects
              </a>
              <a className="button secondary" href="#contact">
                Schedule a Call
              </a>
            </div>
            <div className="stats">
              <div className="stat-card reveal" data-reveal>
                <h3>30+ Years</h3>
                <p>Leadership legacy in multi-sector operations.</p>
              </div>
              <div className="stat-card reveal" data-reveal>
                <h3>12 Active Verticals</h3>
                <p>From education networks to industrial production lines.</p>
              </div>
              <div className="stat-card reveal" data-reveal>
                <h3>Pan-India</h3>
                <p>Presence with strategic partners across key metros.</p>
              </div>
            </div>
          </div>
          <div className="hero-media floaty reveal" data-reveal>
            <div className="hero-card">
              <h4>Easy Solutions For</h4>
              <h2>High-impact partnerships &amp; synergy-driven growth.</h2>
              <button type="button">Request a Brief</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-subtitle">About Us</p>
              <h2 className="section-title">A platform for sector convergence</h2>
            </div>
            <a className="button secondary" href="#contact">
              Contact Us
            </a>
          </div>

          <div className="about-grid">
            <div className="about-image reveal" data-reveal>
              <span>Placeholder Image</span>
            </div>
            <div className="reveal" data-reveal>
              <p>
                FLYKRAFT SYNERGIES PRIVATE LIMITED is a conglomerate that designs,
                invests in, and scales ventures across manufacturing, education,
                media distribution, and emerging industries. Our model blends
                hands-on execution with strategic capital, ensuring every project
                is crafted for longevity and measurable impact.
              </p>
              <p>
                Anchored by the vision of our directors, we deliver integrated
                services that unify creative storytelling, industrial innovation,
                and educational empowerment. This convergence empowers partners
                to move faster, smarter, and with greater resonance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-subtitle">Our Projects</p>
              <h2 className="section-title">
                Sector-driven initiatives with measurable outcomes
              </h2>
            </div>
          </div>
          <div className="project-grid">
            {projectItems.map((item) => (
              <article
                className="project-card reveal"
                key={item.title}
                data-reveal
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="directors">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-subtitle">Directors</p>
              <h2 className="section-title">Leadership with intent</h2>
            </div>
          </div>
          <div className="director-grid">
            <article className="director-card reveal" data-reveal>
              <div className="director-photo">Image</div>
              <div>
                <h3>Dewesh Karan</h3>
                <p>
                  Dewesh brings multi-sector operational strategy and scale-up
                  expertise, shaping the conglomerate&apos;s partnerships in industry
                  and infrastructure with a data-first approach.
                </p>
              </div>
            </article>
            <article className="director-card reveal" data-reveal>
              <div className="director-photo">Image</div>
              <div>
                <h3>Vandana Prasad</h3>
                <p>
                  Vandana leads brand storytelling, educational initiatives, and
                  media distribution, ensuring every venture aligns with
                  community-centric growth and purposeful communication.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="highlights">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-subtitle">Why Choose Us</p>
              <h2 className="section-title">
                The synergy engine powering resilient ecosystems
              </h2>
            </div>
          </div>
          <div className="feature-grid">
            {[
              {
                title: "Integrated Expertise",
                items: [
                  "Industrial partnerships",
                  "Education innovation",
                  "Media distribution",
                  "Strategic capital",
                ],
              },
              {
                title: "Impact Acceleration",
                items: [
                  "Rapid go-to-market",
                  "Measured social ROI",
                  "Operational excellence",
                  "Future-ready talent",
                ],
              },
              {
                title: "Trust & Governance",
                items: [
                  "Transparent reporting",
                  "Ethical alignment",
                  "Compliance readiness",
                  "Long-term alliances",
                ],
              },
              {
                title: "Creative Intelligence",
                items: [
                  "Brand storytelling",
                  "Digital transformation",
                  "Cultural insights",
                  "Community engagement",
                ],
              },
            ].map((feature) => (
              <div
                className="feature-card reveal"
                key={feature.title}
                data-reveal
              >
                <h4>{feature.title}</h4>
                <ul>
                  {feature.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="contact-card reveal" data-reveal>
            <div>
              <p className="section-subtitle">Contact</p>
              <h2 className="section-title">Let&apos;s create the next synergy</h2>
              <p>
                Connect with our leadership team to discuss partnerships,
                investments, or collaborative ventures. Visit us online at
                <strong> flykraft.in</strong>.
              </p>
            </div>
            <div className="contact-grid">
              <div>
                <h4>Registered Business</h4>
                <p>FLYKRAFT SYNERGIES PRIVATE LIMITED</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>hello@flykraft.in</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 800 123 8899</p>
              </div>
              <div>
                <h4>Address</h4>
                <p>Sector-driven hubs across India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} FLYKRAFT SYNERGIES PRIVATE LIMITED —
            Building trust at the intersection of industry, education, and media.
          </p>
          <p>
            <Link href="/terms">Terms &amp; Conditions</Link> ·{" "}
            <Link href="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}

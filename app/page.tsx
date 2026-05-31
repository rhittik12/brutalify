export default function Home() {
  return (
    <main className="page">
      <div className="blue-shape" />

      <div className="left-triangle" />

      <div className="grid-bg" />

      <div className="pink-star" />

      {/* HEADER */}
      <header className="header">
        <div>
          <h1 className="logo">
            BRUTAL<span>.</span>STYLE
          </h1>

          <div className="tag">
            MAKE THE INTERNET UGLY AGAIN.
          </div>
        </div>

        <div className="header-buttons">
          <button className="sign-btn">
            SIGN IN ↪
          </button>

          <button className="start-btn">
            GET STARTED →
          </button>
        </div>
      </header>

      {/* SMILEY */}
      <div className="smiley" aria-hidden="true">🙂</div>

      {/* SPEECH */}
      <div className="speech">
        <p>
          NO DESIGN
          <br />
          RULES.
          <br />
          JUST <span>RAW.</span>
        </p>
      </div>

      {/* HERO */}
      <section className="hero">
        <h1>
          TURN ANY
          <br />
          WEBSITE INTO
          <br />
          <span>BRUTAL</span> ART.
        </h1>

        <p className="description">
          We’ll strip the polish, remove the fluff,
          <br />
          and rebuild any website in{" "}
          <mark>brutal raw design.</mark>
        </p>

        {/* INPUT */}
        <div className="input-row">
          <div className="input-box">
            <div className="input-icon" aria-hidden="true">🌐</div>

            <input
              type="text"
              placeholder="Paste any URL (e.g. https://stripe.com)"
            />

            <button type="button" className="copy-icon" aria-label="Copy URL">
              <span aria-hidden="true">⧉</span>
            </button>
          </div>

          <button className="brutal-btn">
            BRUTALIZE IT →
          </button>
        </div>

        <div className="free-text">
          ↘ It’s <span>free.</span> No sign up.
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="examples">
        <div className="example-label">
          DESIGN EXAMPLES ↗
        </div>

        <div className="cards">
          {/* CARD */}
          <div className="card purple">
            <div className="card-content">
              <h3>Stripe ✔</h3>

              <p>Clean • Modern • Fintech</p>

              <button>View Example →</button>
            </div>

            <div className="preview stripe-preview">
              stripe
            </div>
          </div>

          {/* CARD */}
          <div className="card peach">
            <div className="card-content">
              <h3>Netflix N</h3>

              <p>Streaming • Bold • Dark</p>

              <button>View Example →</button>
            </div>

            <div className="preview netflix-preview">
              NETFLIX
            </div>
          </div>

          {/* CARD */}
          <div className="card green">
            <div className="card-content">
              <h3>Notion ▣</h3>

              <p>Productivity • Clean • Minimal</p>

              <button>View Example →</button>
            </div>

            <div className="preview notion-preview">
              Write, plan,
              <br />
              organize.
            </div>
          </div>
        </div>

        <button className="nav-btn nav-left">
          ‹
        </button>

        <button className="nav-btn nav-right">
          ›
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div aria-hidden="true">⚡ 100% FREE</div>

        <div aria-hidden="true">🛡 NO SIGN UP</div>

        <div aria-hidden="true">🙂 NO LIMITS</div>

        <div aria-hidden="true">✳ JUST BRUTAL</div>

        <div className="footer-right">
          Made for designers,
          <br />
          by a designer. ↗
        </div>
      </footer>
    </main>
  );
}
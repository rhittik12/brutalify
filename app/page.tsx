"use client";

import "./globals.css";

export default function Home() {
  return (
    <div style={{ background: "var(--white)", minHeight: "100vh" }}>
      <div className="app-frame">

        {/* ============ NAVBAR ============ */}
        <nav className="navbar">
          <div className="logo">
            BRUTAL<span className="dot-orange">.</span>STYLE
          </div>

          <div className="nav-search">
            <div className="nav-search-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <input type="text" placeholder="Paste any URL to brutalize..." />
            <button className="nav-search-btn">→</button>
          </div>

          <div className="nav-actions">
            <a href="#" className="btn-sign-in">SIGN IN ↗</a>
            <a href="#" className="btn-get-started">GET STARTED →</a>
          </div>
        </nav>

        {/* ============ HERO ============ */}
        <section className="hero">

          {/* ── Left text content ── */}
          <div className="hero-left">
            <div className="hero-pill">• NO DESIGN RULES • JUST RAW</div>

            <h1 className="hero-title">
              TURN ANY<br />
              WEBPAGE INTO<br />
              <span className="brutal-word">BRUTAL</span>
              <span className="art-word">ART.</span>
            </h1>

            <p className="hero-subtitle">
              We&apos;ll strip the polish, remove the fluff,<br />
              and rebuild any webpage in{" "}
              <span className="hl">brutal raw design.</span>
            </p>

            <div className="url-row">
              <div className="url-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <input
                className="url-input"
                type="text"
                placeholder="Paste any URL (e.g. https://stripe."
              />
              <button className="btn-brutalize">BRUTALIZE IT →</button>
            </div>

            <div className="free-note">→ It&apos;s free. No sign up.</div>
          </div>

          {/* ── Decorations — all absolutely positioned inside .hero ── */}

          {/* Dot grid */}
          <div className="deco-dots">
            {Array.from({ length: 20 }).map((_, i) => <span key={i} />)}
          </div>

          {/* Speech bubble */}
          <div className="deco-speech">
            NO DESIGN<br />RULES.<br />JUST RAW.
          </div>

          {/* Pink browser window mockup */}
          <div className="deco-browser">
            <div className="browser-titlebar">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <div className="browser-dot" />
            </div>
            <div className="browser-body">
              <div className="browser-search-bar">
                <span style={{ color: "#bbb", fontSize: "0.8rem" }}>|</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Smiley — overlapping top-right of browser */}
          <div className="deco-smiley">😊</div>

          {/* Halftone pink dots */}
          <div className="deco-halftone" />

          {/* Password / asterisk dialog */}
          <div className="deco-password">
            <div className="pw-titlebar">
              <div className="pw-dots">
                <div className="pw-dot" />
                <div className="pw-dot" />
                <div className="pw-dot" />
              </div>
              <div className="pw-actions">— = ✕</div>
            </div>
            <div className="pw-dots-row">
              <span>✱</span>
              <span>✱</span>
              <span>✱</span>
            </div>
          </div>

          {/* Triangle with corner handles */}
          <div className="deco-triangle">
            <svg width="110" height="90" viewBox="0 0 110 90">
              <polygon
                points="8,82 102,82 102,8"
                fill="none"
                stroke="#0a0a0a"
                strokeWidth="2.5"
              />
              {/* corner handle squares */}
              <rect x="2"   y="76" width="9" height="9" fill="white" stroke="#0a0a0a" strokeWidth="2"/>
              <rect x="96"  y="76" width="9" height="9" fill="white" stroke="#0a0a0a" strokeWidth="2"/>
              <rect x="96"  y="2"  width="9" height="9" fill="white" stroke="#0a0a0a" strokeWidth="2"/>
              {/* small pink triangle arrow inside */}
              <polygon points="55,76 70,76 62,62" fill="#ff2d8a"/>
            </svg>
          </div>

        </section>

        {/* ============ DESIGN EXAMPLES ============ */}
        <section className="examples-section">
          <div className="examples-header">
            <div className="examples-label">
              DESIGN EXAMPLES
              <div className="arrow-sq">↗</div>
            </div>
          </div>

          <div className="cards-row">

            {/* STRIPE */}
            

            {/* NETFLIX */}
            

            {/* NOTION */}
            

          </div>
        </section>

        {/* ============ BOTTOM BAR ============ */}
        <footer className="bottom-bar">
          <div className="bar-items">
            <div className="bar-item">
              <div className="bar-icon-wrap bi-yellow">⚡</div>
              100% FREE
            </div>
            <div className="bar-item">
              <div className="bar-icon-wrap bi-blue" style={{ fontSize: "1.1rem" }}>●</div>
              NO SIGN UP
            </div>
            <div className="bar-item">
              <div className="bar-icon-wrap bi-teal">⊞</div>
              NO LIMITS
            </div>
            <div className="bar-item">
              <div className="bar-icon-wrap bi-pink">✦</div>
              JUST BRUTAL
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

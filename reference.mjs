import { useState, useEffect, useRef } from "react";

/* ═══ BRAND COLORS ═══ */
const GOLD = "#C9AC2A";
const GOLD_L = "#D4BA3E";
const GOLD_D = "#B59A1E";
const BLK = "#111111";
const BLK2 = "#1A1A1A";
const BLK3 = "#222222";
const SLATE = "#2C2C2C";
const GRY = "#888888";
const GRY_L = "#AAAAAA";
const W = "#FFFFFF";
const OFF = "#F8F7F4";
const WARM = "#FAFAF6";

/* ═══ FONTS ═══ */
const HD = "'Oswald',sans-serif";
const BD = "'DM Sans',sans-serif";

export default function PantherMoving() {
  const [pg, setPg] = useState("home");
  const [mob, setMob] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const go = (p) => () => {
    setPg(p);
    setMob(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div
      style={{
        fontFamily: BD,
        color: BLK,
        background: W,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        .pn{position:fixed;top:0;left:0;right:0;z-index:1000;padding:14px 32px;display:flex;justify-content:space-between;align-items:center;transition:all 0.3s}
        .pn.sc{background:rgba(17,17,17,0.97);backdrop-filter:blur(10px);box-shadow:0 2px 20px rgba(0,0,0,0.3)}
        .pn:not(.sc){background:linear-gradient(180deg,rgba(0,0,0,0.6),transparent)}
        .pn-links{display:flex;gap:28px;align-items:center;list-style:none}
        .pn-links a{color:${W};font-family:${HD};font-size:13px;font-weight:500;cursor:pointer;letter-spacing:1.5px;text-transform:uppercase;transition:color 0.2s}
        .pn-links a:hover,.pn-links a.on{color:${GOLD}}
        .btn-g{padding:14px 32px;background:${GOLD};color:${BLK};font-family:${HD};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;border:none;border-radius:4px;cursor:pointer;transition:all 0.2s}
        .btn-g:hover{background:${GOLD_L};transform:translateY(-1px);box-shadow:0 4px 16px rgba(201,172,42,0.3)}
        .btn-b{padding:14px 32px;background:${BLK};color:${W};font-family:${HD};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;border:none;border-radius:4px;cursor:pointer;transition:all 0.2s}
        .btn-b:hover{background:${BLK2};transform:translateY(-1px)}
        .btn-o{padding:14px 32px;background:transparent;color:${W};font-family:${HD};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;border:2px solid rgba(255,255,255,0.3);border-radius:4px;cursor:pointer;transition:all 0.2s}
        .btn-o:hover{border-color:${W};background:rgba(255,255,255,0.05)}
        .mb{display:none;background:none;border:none;color:${W};font-size:24px;cursor:pointer}
        .mm{display:none}
        .sec-hd{font-family:${HD};font-size:clamp(28px,4vw,42px);font-weight:700;letter-spacing:-0.5px;text-transform:uppercase;line-height:1.1}
        .sec-lb{font-family:${HD};font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${GOLD};margin-bottom:10px}
        .rg2{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .rg3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        @media(max-width:768px){
          .pn-links{display:none}.mb{display:block}
          .mm{display:flex;flex-direction:column;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(17,17,17,0.98);z-index:999;padding:80px 32px;gap:12px;transform:translateX(100%);transition:transform 0.3s}
          .mm.op{transform:translateX(0)}
          .mm a{color:${W};font-family:${HD};font-size:18px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;padding:12px 0;border-bottom:1px solid ${SLATE}}
          .rg2,.rg3{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* NAV */}
      <nav className={`pn ${scrolled ? "sc" : ""}`}>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
          onClick={go("home")}
        >
          <img
            src="/mnt/user-data/uploads/panther-moving-logo-1.svg"
            alt="Panther Moving"
            style={{ height: 40 }}
          />
        </div>
        <ul className="pn-links">
          {[
            ["home", "Home"],
            ["services", "Services"],
            ["faq", "FAQ"],
            ["contact", "Contact"],
          ].map(([p, l]) => (
            <li key={p}>
              <a onClick={go(p)} className={pg === p ? "on" : ""}>
                {l}
              </a>
            </li>
          ))}
          <li>
            <button className="btn-g" onClick={go("contact")}>
              Free Quote
            </button>
          </li>
        </ul>
        <button className="mb" onClick={() => setMob(!mob)}>
          {mob ? "✕" : "☰"}
        </button>
      </nav>
      <div className={`mm ${mob ? "op" : ""}`}>
        {[
          ["home", "Home"],
          ["services", "Services"],
          ["faq", "FAQ"],
          ["contact", "Contact"],
        ].map(([p, l]) => (
          <a key={p} onClick={go(p)}>
            {l}
          </a>
        ))}
        <a onClick={go("contact")} style={{ color: GOLD, marginTop: 8 }}>
          Get Free Quote →
        </a>
      </div>

      {pg === "home" && <Home go={go} />}
      {pg === "services" && <Services go={go} />}
      {pg === "faq" && <FAQ go={go} />}
      {pg === "contact" && <Contact go={go} />}

      {/* FOOTER */}
      <footer style={{ background: BLK, padding: "56px 24px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            className="rg3"
            style={{ marginBottom: 36, alignItems: "start" }}
          >
            <div>
              <img
                src="/mnt/user-data/uploads/panther-moving-logo-1.svg"
                alt="Panther Moving"
                style={{ height: 36, marginBottom: 14 }}
              />
              <p style={{ fontSize: 13, color: GRY, lineHeight: 1.7 }}>
                Tampa's trusted local movers. Fast, affordable, professional —
                every time.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontFamily: HD,
                  fontSize: 11,
                  letterSpacing: 3,
                  color: GOLD,
                  marginBottom: 10,
                }}
              >
                NAVIGATION
              </div>
              {[
                ["home", "Home"],
                ["services", "Services"],
                ["faq", "FAQ"],
                ["contact", "Contact"],
              ].map(([p, l]) => (
                <div
                  key={p}
                  onClick={go(p)}
                  style={{
                    fontSize: 13,
                    color: GRY,
                    cursor: "pointer",
                    marginBottom: 6,
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontFamily: HD,
                  fontSize: 11,
                  letterSpacing: 3,
                  color: GOLD,
                  marginBottom: 10,
                }}
              >
                CONTACT
              </div>
              <a
                href="tel:8135087860"
                style={{
                  fontSize: 14,
                  color: W,
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                (813) 508-7860
              </a>
              <a
                href="mailto:scottr@panthermoving.com"
                style={{
                  fontSize: 13,
                  color: GRY,
                  textDecoration: "none",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                scottr@panthermoving.com
              </a>
              <div style={{ fontSize: 13, color: GRY }}>
                2107 W Platt St, Tampa, FL
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: `1px solid ${SLATE}`,
              paddingTop: 16,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 11, color: GRY }}>
              © 2025 Panther Moving. All rights reserved.
            </span>
            <a
              href="https://www.instagram.com/panthermoving"
              target="_blank"
              rel="noopener"
              style={{ fontSize: 11, color: GRY, textDecoration: "none" }}
            >
              @panthermoving
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══ SVG ICONS ═══ */
const I = {
  truck: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path
        d="M4 12h26v20H4z"
        stroke={c}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M30 22h8l6 8v6h-14V22z"
        stroke={c}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="34" r="3" stroke={c} strokeWidth="2.5" />
      <circle cx="38" cy="34" r="3" stroke={c} strokeWidth="2.5" />
    </svg>
  ),
  box: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path
        d="M6 16l18-10 18 10v20l-18 10-18-10V16z"
        stroke={c}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M6 16l18 10 18-10M24 26v20"
        stroke={c}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 4L8 12v12c0 10 7 18 16 22 9-4 16-12 16-22V12L24 4z"
        stroke={c}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 24l4 4 8-8"
        stroke={c}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  clock: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke={c} strokeWidth="2.5" />
      <path
        d="M24 12v12l8 6"
        stroke={c}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  home: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path
        d="M6 24L24 6l18 18"
        stroke={c}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22v18h10V30h8v10h10V22"
        stroke={c}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  building: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <rect
        x="8"
        y="6"
        width="20"
        height="36"
        rx="2"
        stroke={c}
        strokeWidth="2.5"
      />
      <rect
        x="28"
        y="18"
        width="14"
        height="24"
        rx="2"
        stroke={c}
        strokeWidth="2.5"
      />
      <path
        d="M14 14h4M14 20h4M14 26h4M14 32h4M33 26h4M33 32h4"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  sofa: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path
        d="M8 20v-6a4 4 0 014-4h24a4 4 0 014 4v6"
        stroke={c}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M4 20a4 4 0 014 4v4h32v-4a4 4 0 018 0v8H4v-8a4 4 0 010-4z"
        stroke={c}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 36v4M38 36v4"
        stroke={c}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  hand: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path
        d="M14 28V8a3 3 0 016 0v14M20 22V6a3 3 0 016 0v16M26 22V8a3 3 0 016 0v14M32 22v-8a3 3 0 016 0v14c0 10-6 18-16 18S12 38 12 32v-6a3 3 0 016 0v2"
        stroke={c}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  apt: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <rect
        x="12"
        y="4"
        width="24"
        height="38"
        rx="2"
        stroke={c}
        strokeWidth="2.5"
      />
      <path
        d="M18 12h4M26 12h4M18 20h4M26 20h4M18 28h4M26 28h4"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M20 42v-6h8v6" stroke={c} strokeWidth="2.5" />
    </svg>
  ),
  quote: (c = GOLD) => (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path
        d="M8 8h32v24H22l-8 8v-8H8V8z"
        stroke={c}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 18h16M16 24h10"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  star: (c = GOLD) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={c}>
      <path d="M12 2l2.9 6.3L22 9.2l-5 4.8L18.2 22 12 18.3 5.8 22 7 14l-5-4.8 7.1-.9z" />
    </svg>
  ),
  check: (c = GOLD) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12l5 5L19 7"
        stroke={c}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrow: (c = GOLD) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke={c}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  phone: (c = W) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 11.91a16 16 0 006 6l2.27-2.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/* ═══ HOME ═══ */
function Home({ go }) {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          background: BLK,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Diagonal accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "55%",
            height: "100%",
            background: `linear-gradient(160deg,${GOLD}08,${GOLD}03)`,
            clipPath: "polygon(30% 0,100% 0,100% 100%,0% 100%)",
          }}
        />
        {/* Gold stripe */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: GOLD,
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "140px 32px 100px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <div>
            <div className="sec-lb">Tampa's Trusted Moving Company</div>
            <h1
              className="sec-hd"
              style={{
                fontSize: "clamp(40px,6vw,64px)",
                color: W,
                marginBottom: 18,
              }}
            >
              Stress-Free Moves.
              <br />
              <span style={{ color: GOLD }}>Guaranteed.</span>
            </h1>
            <p
              style={{
                fontSize: 17,
                color: GRY_L,
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: 28,
                maxWidth: 460,
              }}
            >
              From apartments to full homes, Panther Moving makes your Tampa
              move fast, easy, and affordable — with a local team you can count
              on.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: 32,
              }}
            >
              <button className="btn-g" onClick={go("contact")}>
                Get Your Free Quote
              </button>
              <a href="tel:8135087860" style={{ textDecoration: "none" }}>
                <button
                  className="btn-o"
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  {I.phone()} (813) 508-7860
                </button>
              </a>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {["Licensed & Insured", "Local Tampa Team", "No Hidden Fees"].map(
                (t, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 6, alignItems: "center" }}
                  >
                    {I.check()}
                    <span
                      style={{ fontSize: 13, color: GRY_L, fontWeight: 400 }}
                    >
                      {t}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/mnt/user-data/uploads/panther-moving-logo-2.svg"
              alt="Panther Moving"
              style={{ width: "80%", maxWidth: 360 }}
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: GOLD, padding: "16px 24px" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            { n: "5-Star Rated", v: "Google Reviews" },
            { n: "500+", v: "Moves Completed" },
            { n: "Same-Day", v: "Quotes Available" },
            { n: "100%", v: "Satisfaction Guarantee" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: HD,
                  fontSize: 18,
                  fontWeight: 700,
                  color: BLK,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: BLK,
                  opacity: 0.7,
                  fontWeight: 500,
                }}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PANTHER */}
      <section
        style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="sec-lb">Why Panther Moving</div>
          <h2 className="sec-hd">
            Moving Done <span style={{ color: GOLD }}>Right</span>
          </h2>
        </div>
        <div className="rg3">
          {[
            {
              icon: I.shield(),
              t: "Licensed & Insured",
              d: "Your belongings are fully protected. We carry comprehensive insurance so you can relax knowing everything is covered.",
            },
            {
              icon: I.clock(),
              t: "On Time, Every Time",
              d: "We show up when we say we will. No waiting around, no delays. Your time matters and we respect it.",
            },
            {
              icon: I.hand(),
              t: "Careful With Your Stuff",
              d: "We treat your belongings like they're our own. Professional packing, padding, and handling from start to finish.",
            },
          ].map((f, i) => (
            <div
              key={i}
              style={{
                padding: "32px 24px",
                borderRadius: 8,
                border: `1px solid #eee`,
                background: W,
                transition: "all 0.3s",
              }}
            >
              <div style={{ marginBottom: 14 }}>{f.icon}</div>
              <h3
                style={{
                  fontFamily: HD,
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}
              >
                {f.t}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: GRY,
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {f.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: OFF, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="sec-lb">Our Services</div>
            <h2 className="sec-hd">
              What We <span style={{ color: GOLD }}>Move</span>
            </h2>
          </div>
          <div className="rg3">
            {[
              {
                icon: I.home(),
                t: "Residential Moves",
                d: "Houses, condos, townhomes — any size. We handle packing, loading, transport, and setup.",
              },
              {
                icon: I.apt(),
                t: "Apartment Moves",
                d: "Narrow hallways, stairs, elevators — no problem. We handle apartment moves quickly and with care.",
              },
              {
                icon: I.building(),
                t: "Commercial Moves",
                d: "Minimize downtime with efficient office and retail relocation services.",
              },
              {
                icon: I.box(),
                t: "Packing & Unpacking",
                d: "We carefully pack your items and unpack them at your new destination.",
              },
              {
                icon: I.truck(),
                t: "Loading & Unloading",
                d: "Already have a truck? We'll do all the heavy lifting for you.",
              },
              {
                icon: I.sofa(),
                t: "Furniture Assembly",
                d: "We disassemble, move, and reassemble your furniture with the right tools.",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 22px",
                  borderRadius: 8,
                  background: W,
                  border: `1px solid #eee`,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onClick={go("services")}
              >
                <div style={{ marginBottom: 12 }}>{s.icon}</div>
                <h3
                  style={{
                    fontFamily: HD,
                    fontSize: 16,
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    marginBottom: 6,
                    textTransform: "uppercase",
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: GRY,
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {s.d}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <button className="btn-b" onClick={go("services")}>
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="sec-lb">How It Works</div>
          <h2 className="sec-hd">
            Three Simple <span style={{ color: GOLD }}>Steps</span>
          </h2>
        </div>
        <div className="rg3">
          {[
            {
              n: "01",
              t: "Get a Free Quote",
              d: "Fill out our quick form or give us a call. No hidden fees, no surprises — just an honest estimate.",
              icon: I.quote(),
            },
            {
              n: "02",
              t: "We Handle the Heavy Lifting",
              d: "Our crew shows up on time, carefully packs, loads, and transports everything with care.",
              icon: I.truck(),
            },
            {
              n: "03",
              t: "You Settle In",
              d: "We unload, assemble furniture if needed, and make sure you're happy before we leave.",
              icon: I.home(),
            },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "32px 20px" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 4,
                  background: BLK,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <span
                  style={{
                    fontFamily: HD,
                    fontSize: 22,
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  {s.n}
                </span>
              </div>
              <div
                style={{
                  marginBottom: 12,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: HD,
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}
              >
                {s.t}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: GRY,
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{ background: BLK, padding: "72px 24px", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: GOLD,
          }}
        />
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div
              style={{
                fontFamily: HD,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 3,
                color: GOLD,
                marginBottom: 10,
              }}
            >
              TESTIMONIALS
            </div>
            <h2 className="sec-hd" style={{ color: W }}>
              Tampa Trusts <span style={{ color: GOLD }}>Panther</span>
            </h2>
          </div>
          <div className="rg3">
            {[
              {
                n: "Marcus T.",
                q: "Showed up on time, moved everything without a scratch, and were done in half the time I expected. Best movers in Tampa.",
                s: 5,
              },
              {
                n: "Jennifer R.",
                q: "I was dreading my apartment move but these guys made it so easy. Careful with all my stuff and super friendly. Highly recommend.",
                s: 5,
              },
              {
                n: "David K.",
                q: "Used Panther for our office relocation. Professional, efficient, and affordable. Will definitely use again for our next move.",
                s: 5,
              },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  padding: "24px",
                  borderRadius: 8,
                  background: BLK2,
                  border: `1px solid ${SLATE}`,
                }}
              >
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {Array(r.s)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j}>{I.star()}</span>
                    ))}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: GRY_L,
                    lineHeight: 1.75,
                    fontWeight: 300,
                    fontStyle: "italic",
                    marginBottom: 14,
                  }}
                >
                  "{r.q}"
                </p>
                <div
                  style={{
                    fontFamily: HD,
                    fontSize: 13,
                    color: W,
                    letterSpacing: 1,
                  }}
                >
                  — {r.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section
        style={{
          padding: "64px 24px",
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div className="sec-lb">Service Area</div>
        <h2 className="sec-hd" style={{ marginBottom: 16 }}>
          Serving All of <span style={{ color: GOLD }}>Tampa Bay</span>
        </h2>
        <p
          style={{
            fontSize: 15,
            color: GRY,
            lineHeight: 1.8,
            fontWeight: 300,
            marginBottom: 20,
          }}
        >
          We're based in Tampa and proudly serve the entire Tampa Bay area.
        </p>
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            "Tampa",
            "St. Petersburg",
            "Clearwater",
            "Brandon",
            "Riverview",
            "Wesley Chapel",
            "Plant City",
            "Lakeland",
          ].map((c, i) => (
            <span
              key={i}
              style={{
                padding: "8px 18px",
                borderRadius: 4,
                background: OFF,
                border: "1px solid #eee",
                fontSize: 13,
                fontWeight: 500,
                color: BLK,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: `linear-gradient(135deg,${BLK},${BLK2})`,
          padding: "72px 24px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: GOLD,
          }}
        />
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 className="sec-hd" style={{ color: W, marginBottom: 14 }}>
            Ready to <span style={{ color: GOLD }}>Move?</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: GRY_L,
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: 28,
            }}
          >
            Get a free, no-obligation quote in minutes. We'll take care of the
            rest.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-g" onClick={go("contact")}>
              Get Your Free Quote
            </button>
            <a href="tel:8135087860" style={{ textDecoration: "none" }}>
              <button className="btn-o">(813) 508-7860</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══ SERVICES ═══ */
function Services({ go }) {
  const svcs = [
    {
      icon: I.home(GOLD),
      t: "Local Residential Moves",
      d: "Whether you're moving from a studio apartment or a 5-bedroom home, we handle everything. Our crew carefully packs, loads, transports, and unloads your belongings — with padding and protection for every item. We know Tampa's neighborhoods inside and out, so we plan the fastest routes and avoid the headaches.",
    },
    {
      icon: I.apt(GOLD),
      t: "Apartment Moves",
      d: "Narrow hallways, tight elevators, multiple flights of stairs — we've seen it all. Our apartment move specialists come prepared with the right equipment and techniques to get your stuff out safely and efficiently, no matter the layout.",
    },
    {
      icon: I.building(GOLD),
      t: "Commercial & Office Moves",
      d: "Moving your business means minimizing downtime. We work around your schedule — evenings, weekends, whenever works best — to get your office relocated with minimal disruption. Cubicles, conference tables, IT equipment, filing cabinets — we handle it all.",
    },
    {
      icon: I.box(GOLD),
      t: "Packing & Unpacking",
      d: "Don't want to deal with packing? We've got you. Our team uses professional packing materials and techniques to ensure everything from your fine china to your flat screen arrives safely. We'll unpack at your new place too — just tell us where you want things.",
    },
    {
      icon: I.truck(GOLD),
      t: "Loading & Unloading",
      d: "Already rented a truck? No problem. Hire our crew just for the muscle. We'll load everything properly, secure it for transport, and unload at your destination. Heavy furniture, awkward items, fragile boxes — we handle it all.",
    },
    {
      icon: I.sofa(GOLD),
      t: "Furniture Assembly & Disassembly",
      d: "Big furniture doesn't fit through doorways? We disassemble it, move it safely, and put it all back together at your new place. Bed frames, desks, shelving units, dining tables — we come with the tools and know-how.",
    },
  ];
  return (
    <>
      <section
        style={{
          padding: "140px 24px 60px",
          background: BLK,
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: GOLD,
          }}
        />
        <div className="sec-lb">What We Do</div>
        <h1 className="sec-hd" style={{ color: W }}>
          Our <span style={{ color: GOLD }}>Services</span>
        </h1>
        <p
          style={{ fontSize: 15, color: GRY_L, fontWeight: 300, marginTop: 10 }}
        >
          Professional, affordable moving services across Tampa Bay
        </p>
      </section>
      <section
        style={{ padding: "60px 24px", maxWidth: 900, margin: "0 auto" }}
      >
        {svcs.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 24,
              padding: "32px 0",
              borderBottom: i < svcs.length - 1 ? `1px solid #eee` : "none",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 60,
                height: 60,
                borderRadius: 8,
                background: OFF,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {s.icon}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: HD,
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}
              >
                {s.t}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: GRY,
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {s.d}
              </p>
            </div>
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button className="btn-g" onClick={go("contact")}>
            Get a Free Quote
          </button>
        </div>
      </section>
    </>
  );
}

/* ═══ FAQ ═══ */
function FAQ({ go }) {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: "What areas do you serve?",
      a: "We're based in Tampa and proudly serve the entire Tampa Bay area, including St. Pete, Clearwater, Brandon, Riverview, Wesley Chapel, Plant City, Lakeland, and beyond.",
    },
    {
      q: "How do I get a quote for my move?",
      a: "Simply fill out our online form or give us a call at (813) 508-7860. We'll provide a fast, free estimate based on your moving details. No obligations, no pressure.",
    },
    {
      q: "Do you offer packing and unpacking services?",
      a: "Yes! We offer full and partial packing services. You can choose to pack everything yourself or let us take care of it all for you. We use professional-grade materials to keep everything safe.",
    },
    {
      q: "Can you move large or specialty items like pianos or safes?",
      a: "Absolutely. Just let us know in advance so we can bring the right equipment and team to handle it safely. We have experience with pianos, gun safes, pool tables, and other heavy items.",
    },
    {
      q: "How far in advance should I book my move?",
      a: "We recommend booking at least 1-2 weeks in advance to secure your preferred date, especially during weekends or peak seasons. But we'll always do our best to work with your schedule, even on short notice.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes, Panther Moving is fully licensed and insured. Your belongings are protected throughout the entire moving process.",
    },
    {
      q: "Do you charge extra for stairs or long carries?",
      a: "We provide transparent pricing upfront. If your move involves stairs, long hallways, or other factors, we'll include that in your quote so there are no surprises on moving day.",
    },
    {
      q: "What forms of payment do you accept?",
      a: "We accept cash, credit cards, debit cards, and Zelle. Payment is due upon completion of your move.",
    },
  ];
  return (
    <>
      <section
        style={{
          padding: "140px 24px 60px",
          background: BLK,
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: GOLD,
          }}
        />
        <div className="sec-lb">Got Questions?</div>
        <h1 className="sec-hd" style={{ color: W }}>
          Frequently <span style={{ color: GOLD }}>Asked</span>
        </h1>
      </section>
      <section
        style={{ padding: "48px 24px 80px", maxWidth: 700, margin: "0 auto" }}
      >
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: "1px solid #eee" }}>
            <div
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                padding: "20px 0",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: HD,
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: 0.3,
                }}
              >
                {f.q}
              </span>
              <span
                style={{
                  fontFamily: HD,
                  fontSize: 20,
                  color: GOLD,
                  flexShrink: 0,
                  marginLeft: 12,
                  transition: "transform 0.2s",
                  transform: open === i ? "rotate(45deg)" : "none",
                }}
              >
                +
              </span>
            </div>
            {open === i && (
              <div
                style={{
                  padding: "0 0 20px",
                  fontSize: 14,
                  color: GRY,
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {f.a}
              </div>
            )}
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ fontSize: 15, color: GRY, marginBottom: 16 }}>
            Still have questions? We're happy to help.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-g" onClick={go("contact")}>
              Contact Us
            </button>
            <a href="tel:8135087860" style={{ textDecoration: "none" }}>
              <button className="btn-b">(813) 508-7860</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══ CONTACT ═══ */
function Contact({ go }) {
  return (
    <>
      <section
        style={{
          padding: "140px 24px 60px",
          background: BLK,
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: GOLD,
          }}
        />
        <div className="sec-lb">Let's Get Started</div>
        <h1 className="sec-hd" style={{ color: W }}>
          Request a <span style={{ color: GOLD }}>Free Quote</span>
        </h1>
        <p
          style={{ fontSize: 15, color: GRY_L, fontWeight: 300, marginTop: 10 }}
        >
          Fill out the form and we'll get back to you fast — usually within the
          hour
        </p>
      </section>
      <section
        style={{ padding: "48px 24px 80px", maxWidth: 1000, margin: "0 auto" }}
      >
        <div className="rg2" style={{ gap: 40, alignItems: "start" }}>
          <div>
            <div
              style={{
                padding: "32px 28px",
                borderRadius: 8,
                background: OFF,
                border: "1px solid #eee",
                marginBottom: 20,
              }}
            >
              <h3
                style={{
                  fontFamily: HD,
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: 1,
                  marginBottom: 16,
                  textTransform: "uppercase",
                }}
              >
                Get In Touch
              </h3>
              {[
                {
                  label: "Phone",
                  value: "(813) 508-7860",
                  href: "tel:8135087860",
                  icon: I.phone(GOLD),
                },
                {
                  label: "Email",
                  value: "scottr@panthermoving.com",
                  href: "mailto:scottr@panthermoving.com",
                },
                { label: "Address", value: "2107 W Platt St, Tampa, FL" },
                {
                  label: "Instagram",
                  value: "@panthermoving",
                  href: "https://www.instagram.com/panthermoving",
                },
              ].map((c, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div
                    style={{
                      fontFamily: HD,
                      fontSize: 11,
                      letterSpacing: 2,
                      color: GOLD,
                      marginBottom: 2,
                    }}
                  >
                    {c.label.toUpperCase()}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener"
                      style={{
                        fontSize: 15,
                        color: BLK,
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 15, color: BLK, fontWeight: 400 }}>
                      {c.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div
              style={{ padding: "24px 28px", borderRadius: 8, background: BLK }}
            >
              <img
                src="/mnt/user-data/uploads/panther-moving-logo-3.svg"
                alt="Panther Moving"
                style={{
                  width: "70%",
                  maxWidth: 200,
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                padding: "32px 28px",
                borderRadius: 8,
                border: "1px solid #eee",
              }}
            >
              <h3
                style={{
                  fontFamily: HD,
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: 1,
                  marginBottom: 20,
                  textTransform: "uppercase",
                }}
              >
                Request a Quote
              </h3>
              {[
                { label: "Full Name", type: "text", ph: "Your name" },
                { label: "Phone Number", type: "tel", ph: "(555) 555-5555" },
                { label: "Move Date", type: "date" },
                {
                  label: "Number of Rooms",
                  type: "select",
                  opts: [
                    "Studio",
                    "1 Bedroom",
                    "2 Bedrooms",
                    "3 Bedrooms",
                    "4 Bedrooms",
                    "5+ Bedrooms",
                    "Commercial / Office",
                  ],
                },
                { label: "City", type: "text", ph: "Tampa" },
                {
                  label: "Pickup Location (optional)",
                  type: "text",
                  ph: "Address or area",
                },
                {
                  label: "Delivery Location (optional)",
                  type: "text",
                  ph: "Address or area",
                },
              ].map((f, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      fontFamily: HD,
                      fontSize: 11,
                      letterSpacing: 2,
                      color: GRY,
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {f.label.toUpperCase()}
                  </label>
                  {f.type === "select" ? (
                    <select
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        border: "1px solid #ddd",
                        borderRadius: 4,
                        fontSize: 14,
                        fontFamily: BD,
                        background: W,
                      }}
                    >
                      <option value="">Select...</option>
                      {f.opts.map((o, oi) => (
                        <option key={oi} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={f.type}
                      placeholder={f.ph || ""}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        border: "1px solid #ddd",
                        borderRadius: 4,
                        fontSize: 14,
                        fontFamily: BD,
                      }}
                    />
                  )}
                </div>
              ))}
              <button
                className="btn-g"
                style={{ width: "100%", marginTop: 8, padding: "16px" }}
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

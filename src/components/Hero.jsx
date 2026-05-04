import profileImg from '../assets/profile.jpg';

const stats = [
  { num: <>3<sup>+</sup></>, label: 'Critical Stages Covered', pad: false },
  { num: '2', label: 'Active Ventures', pad: true },
  { num: <>100<sup>%</sup></>, label: 'Execution-Focused', pad: true },
  { num: <span>0→<span style={{ fontSize: 24 }}>∞</span></span>, label: 'Idea to Real Traction', pad: true },
];

export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction">
      <div className="wrap">
        <div className="hero-meta" style={{ animation: 'up 0.5s ease 0.1s both' }}>
          {['Startup Consultant', 'Growth Operator', 'Ecosystem Builder', 'Kerala, India'].map((t) => (
            <div className="hero-meta-cell" key={t}>{t}</div>
          ))}
        </div>

        <div className="hero-layout">
          <div className="hero-body">
            <p className="hero-kicker">Est. Early-Stage Startup Partner</p>
            <h1>
              Idea<br />to <span className="accent">Traction.</span>
            </h1>
            <p className="hero-sub">
              I help early-stage startups go from idea to traction. I work with founders
              to <strong>build, launch, and scale</strong> through strategy, execution,
              and ecosystem-driven growth. Currently building ventures across technology,
              innovation, and startup ecosystems.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn-main">Book a Call →</a>
              <a href="#process" className="btn-line">See the process</a>
            </div>
          </div>

          <div className="hero-portrait">
            <img src={profileImg} alt="Abel Sebastian" />
          </div>
        </div>

        <div className="hero-stats">
          {stats.map(({ num, label, pad }, i) => (
            <div className="hero-stat" key={i} style={pad ? { paddingLeft: 32 } : {}}>
              <div className="hero-stat-num">{num}</div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

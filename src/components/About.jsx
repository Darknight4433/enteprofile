import profileImg from '../assets/profile.jpg';

const traits = [
  {
    marker: 'Builder',
    text: 'I turn ideas into MVPs, campaigns, and execution-ready ventures.',
    delay: 'd1',
  },
  {
    marker: 'Growth Op',
    text: 'I focus on traction, partnerships, and scalable growth systems.',
    delay: 'd2',
  },
  {
    marker: 'Ecosystem',
    text: 'I leverage campus networks, student innovators, and early adopters to create real distribution channels.',
    delay: 'd3',
  },
  {
    marker: 'Strategist',
    text: 'I design campaigns, positioning, and storytelling — because growth is not just execution, it\'s also perception.',
    delay: 'd4',
  },
];

const intersection = [
  { label: 'Business Strategy', sub: 'defining direction' },
  { label: 'Technology Understanding', sub: 'building realistic products' },
  { label: 'Ecosystem Access', sub: 'reaching real users' },
];

export default function About() {
  return (
    <section id="about" aria-label="About Abel Sebastian">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">05 —</span>
          <h2>About me.</h2>
        </div>

        <div className="about-layout">
          <div className="about-left reveal">
            <img src={profileImg} alt="Abel Sebastian" className="about-image reveal d1" />
            
            <blockquote className="manifesto">
              "Most startups don't fail because of bad ideas — they fail because of lack
              of execution, slow decision-making, and no access to real users. That's
              where I focus."
            </blockquote>

            <p className="about-body">
              I'm Abel Sebastian, a startup-focused operator building and scaling ventures
              while helping early-stage founders turn ideas into real-world traction.
            </p>
            <p className="about-body">
              I started by deeply engaging in student innovation ecosystems, startup
              communities, and growth roles. Over time this evolved into working with
              startup teams, understanding real execution challenges, and building my own
              ventures.
            </p>

            <div className="intersection-list">
              <p className="venture-detail-label" style={{ marginBottom: 12 }}>I operate at the intersection of</p>
              {intersection.map(({ label, sub }) => (
                <div className="intersection-item" key={label}>
                  <span className="intersection-label">{label}</span>
                  <span className="intersection-sub">→ {sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            {traits.map(({ marker, text, delay }) => (
              <div className={`proof-item reveal ${delay}`} key={marker}>
                <span className="proof-marker">{marker}</span>
                <div className="proof-text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

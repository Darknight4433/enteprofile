const ventures = [
  {
    index: 'Venture I / Technology',
    name: 'Scify Technologies',
    role: 'Co-Founder & Chief Business Officer',
    desc: 'A multi-domain R&D company focused on building scalable technology products and innovation ecosystems.',
    what: [
      'Develops IoT and SaaS-based solutions',
      'Builds systems combining hardware + software + cloud',
      'Creates platforms enabling student and developer innovation',
    ],
    myRole: [
      'Leading business strategy and partnerships',
      'Driving go-to-market and growth',
      'Aligning product vision with real-world needs',
    ],
    tags: ['IoT Ecosystems', 'SaaS Platforms', 'Automation', 'Developer Tools'],
  },
  {
    index: 'Venture II / Growth',
    name: 'CreateCrew',
    role: 'Founder',
    desc: 'A startup growth and execution partner helping early-stage startups achieve real traction.',
    what: [
      'Designs go-to-market strategies',
      'Builds sales and outreach systems',
      'Executes hackathons and innovation programs',
      'Enables campus-driven growth',
    ],
    myRole: [
      'Turning strategy into execution',
      'Connecting startups with real users',
      'Building traction through community ecosystems',
    ],
    tags: ['GTM Strategy', 'Hackathons', 'Campus Growth', 'Traction Systems'],
  },
];

export default function Ventures() {
  return (
    <section id="ventures" aria-label="Ventures">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">03 —</span>
          <h2>Currently building.</h2>
        </div>

        <div className="ventures-grid reveal">
          {ventures.map(({ index, name, role, desc, what, myRole, tags }) => (
            <div className="venture" key={name}>
              <div className="venture-index">{index}</div>
              <div className="venture-name">{name}</div>
              <div className="venture-role">{role}</div>
              <p className="venture-desc">{desc}</p>

              <div className="venture-detail">
                <p className="venture-detail-label">What {name.split(' ')[0]} does</p>
                <ul className="venture-list">
                  {what.map((w) => <li key={w}>{w}</li>)}
                </ul>
              </div>

              <div className="venture-detail">
                <p className="venture-detail-label">My role</p>
                <ul className="venture-list">
                  {myRole.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>

              <div className="venture-tags">
                {tags.map((t) => <span className="vtag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

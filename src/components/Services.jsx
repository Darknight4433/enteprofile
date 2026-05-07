const services = [
  {
    num: '01',
    title: <>Startup<br />Consulting</>,
    desc: 'Helping founders bring clarity and structure.',
    points: ['Idea validation', 'Business model design', 'GTM planning', 'Execution roadmap'],
    delay: 'd1',
  },
  {
    num: '02',
    title: <>Growth Strategy<br />& Execution</>,
    desc: 'Helping startups gain traction.',
    points: ['Growth planning', 'Partnerships', 'Community-led acquisition', 'Execution support'],
    delay: 'd2',
  },
  {
    num: '03',
    title: <>Hackathons &<br />Innovation Programs</>,
    desc: 'Helping startups and organizations engage ecosystems.',
    points: ['Hackathon design & execution', 'Sponsorship sourcing', 'Campus engagement', 'Brand positioning'],
    delay: 'd3',
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">04 —</span>
          <h2>What I offer.</h2>
        </div>

        <div className="services-list">
          {services.map(({ num, title, desc, points, delay }) => (
            <div className={`service-row reveal ${delay}`} key={num}>
              <div className="service-row-num">{num}</div>
              <div className="service-row-title">{title}</div>
              <div className="service-row-desc">
                <p>{desc}</p>
                <ul className="service-points">
                  {points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

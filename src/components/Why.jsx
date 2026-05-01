const edges = [
  { marker: 'Speed', text: 'Execution speed over planning paralysis.', sub: 'Strategy + tech understanding + ecosystem access — all in one place.', delay: 'd1' },
  { marker: 'Access', text: 'Campus networks, student innovators, early adopters.', sub: 'Real distribution channels most consultants don\'t have.', delay: 'd2' },
  { marker: 'Depth', text: 'I understand both product and business.', sub: 'Strategies are realistic, executable, and grounded in what it takes to ship.', delay: 'd3' },
  { marker: 'Hands-on', text: 'I work with you through the hard parts.', sub: 'Ideation, pivots, first-user moments — not just a doc and goodbye.', delay: 'd4' },
];

const idealClients = [
  'Early-stage founders (idea → MVP → traction)',
  'Startup teams stuck in growth',
  'Builders who want execution, not just advice',
];

export default function Why() {
  return (
    <section id="why" aria-label="Why work with Abel Sebastian">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">07 —</span>
          <h2>Why work with me.</h2>
        </div>

        <div className="why-layout">
          <div className="reveal">
            <blockquote className="manifesto">
              "Most early-stage startups overthink, delay execution, and struggle to get
              traction. I help you move faster, validate quickly, and build real traction."
            </blockquote>

            <div style={{ marginTop: 40 }}>
              <p className="venture-detail-label" style={{ marginBottom: 16 }}>Ideal clients</p>
              {idealClients.map((c) => (
                <div className="ideal-item" key={c}>
                  <span className="stage-items" style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '6px 0', fontSize: 13, color: 'var(--ink)' }}>
                    <span style={{ color: 'var(--rule)', flexShrink: 0 }}>—</span>{c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="proof-list">
            {edges.map(({ marker, text, sub, delay }) => (
              <div className={`proof-item reveal ${delay}`} key={marker}>
                <span className="proof-marker">{marker}</span>
                <div className="proof-text">
                  {text}
                  <small>{sub}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

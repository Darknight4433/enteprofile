import { useState } from 'react';

const signals = [
  {
    id: 'idea',
    label: 'Idea',
    marker: 'SD-01',
    headline: 'The idea has promise, but the market proof is still thin.',
    readout: 'Founder energy is high. Customer clarity needs pressure-testing before the team spends weeks building the wrong first version.',
    moves: ['Interview 12 target users', 'Map pain to willingness-to-pay', 'Define the smallest believable MVP'],
    output: 'Validation memo + first execution roadmap',
    metric: '7 days',
  },
  {
    id: 'build',
    label: 'Build',
    marker: 'SD-02',
    headline: 'The product can ship faster if the scope is forced into a sharper lane.',
    readout: 'There is enough direction to build, but the MVP needs discipline: fewer features, clearer user promise, tighter launch path.',
    moves: ['Prioritize the core workflow', 'Set a launchable feature boundary', 'Create a user feedback loop'],
    output: 'MVP sprint plan + launch checklist',
    metric: '21 days',
  },
  {
    id: 'traction',
    label: 'Traction',
    marker: 'SD-03',
    headline: 'The next constraint is distribution, not another product discussion.',
    readout: 'The offer needs repeated exposure to real users through partnerships, community channels, and founder-led outreach.',
    moves: ['Choose 2 acquisition channels', 'Build a partner/outreach list', 'Run weekly traction experiments'],
    output: 'GTM system + traction dashboard',
    metric: '30 days',
  },
];

export default function SignalDesk() {
  const [activeId, setActiveId] = useState('idea');
  const active = signals.find((signal) => signal.id === activeId) ?? signals[0];

  return (
    <section id="signal-desk" aria-label="Startup Signal Desk">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">02 —</span>
          <h2>Startup signal desk.</h2>
        </div>
        <p className="sec-intro reveal">
          A quick operating lens for founders: choose where you are, see the real
          constraint, then move with a focused next sprint.
        </p>

        <div className="signal-shell reveal">
          <div className="signal-tabs" role="tablist" aria-label="Startup stage">
            {signals.map(({ id, label, marker }) => (
              <button
                className={`signal-tab ${activeId === id ? 'is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeId === id}
                aria-controls="signal-panel"
                id={`signal-tab-${id}`}
                key={id}
                onClick={() => setActiveId(id)}
              >
                <span>{marker}</span>
                {label}
              </button>
            ))}
          </div>

          <div
            className="signal-panel"
            id="signal-panel"
            role="tabpanel"
            aria-labelledby={`signal-tab-${active.id}`}
          >
            <div className="signal-readout">
              <p className="signal-marker">{active.marker} / Founder Readout</p>
              <h3>{active.headline}</h3>
              <p>{active.readout}</p>
            </div>

            <div className="signal-meter" aria-label={`${active.metric} sprint window`}>
              <span className="signal-meter-num">{active.metric}</span>
              <span className="signal-meter-label">Focused sprint window</span>
            </div>

            <div className="signal-ledger">
              <div>
                <p className="venture-detail-label">Priority moves</p>
                <ol className="signal-list">
                  {active.moves.map((move) => <li key={move}>{move}</li>)}
                </ol>
              </div>
              <div>
                <p className="venture-detail-label">Working output</p>
                <p className="signal-output">{active.output}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

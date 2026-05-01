const stages = [
  {
    label: 'Idea', phase: 'Phase 01',
    focus: 'Clarity & Validation',
    actions: ['Validate startup ideas', 'Define business models', 'Identify real opportunities'],
  },
  {
    label: 'Build', phase: 'Phase 02',
    focus: 'Product & Market Fit',
    actions: ['Plan MVP execution', 'Align product with market needs', 'Structure go-to-market strategy'],
  },
  {
    label: 'Traction', phase: 'Phase 03',
    focus: 'Growth & Users',
    actions: ['Drive early user acquisition', 'Build partnerships', 'Execute growth strategies'],
  },
];

export default function Process() {
  return (
    <section id="process" aria-label="What I do">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">01 —</span>
          <h2>What I do.</h2>
        </div>
        <p className="sec-intro reveal">
          I help early-stage founders move from uncertainty to execution and traction —
          across 3 critical stages.
        </p>

        <table className="stages-table reveal">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Focus</th>
              <th>What we do</th>
            </tr>
          </thead>
          <tbody>
            {stages.map(({ label, phase, focus, actions }) => (
              <tr key={label}>
                <td>
                  <span className="stage-label">{label}</span>
                  <span className="stage-phase">{phase}</span>
                </td>
                <td>
                  <ul className="stage-items">
                    <li>{focus}</li>
                  </ul>
                </td>
                <td>
                  <ul className="stage-items">
                    {actions.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

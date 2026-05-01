export default function CTA() {
  return (
    <section id="cta" aria-label="Book a call">
      <div className="wrap">
        <div className="cta-inner reveal">
          <div className="cta-rule" />
          <h2>Let's build something <em>real.</em></h2>
          <p>
            If you're building something and need clarity and traction — one conversation
            is all it takes. Clear direction, honest feedback, and an actionable strategy
            to move from where you are to where you need to be.
          </p>
          <div className="cta-pills">
            {['Clear Direction', 'Honest Feedback', 'Actionable Strategy'].map((p) => (
              <span className="cta-pill" key={p}>{p}</span>
            ))}
          </div>
          <a
            href="mailto:hello@abelsebastian.com"
            className="btn-main"
            style={{ fontSize: 13, padding: '14px 36px' }}
          >
            Book a Free Call →
          </a>
        </div>
      </div>
    </section>
  );
}

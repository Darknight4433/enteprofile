import { GitHubCalendar } from 'react-github-calendar';

const roles = [
  {
    title: 'Co-Founder & Chief Business Officer',
    org: 'Scify Technologies Pvt Ltd',
    type: 'Venture',
    desc: 'Leading strategy, partnerships, and product direction.',
  },
  {
    title: 'Founder',
    org: 'CreateCrew',
    type: 'Venture',
    desc: 'Driving startup growth, execution, and hackathons.',
  },
  {
    title: 'Academic Intern',
    org: 'Kerala Startup Mission',
    type: 'Internship',
    desc: 'Worked on communication and community outreach.',
  },
  {
    title: 'Business Development Intern',
    org: 'MakeMyPass',
    type: 'Internship',
    desc: 'Worked on growth and partnerships.',
  },
  {
    title: 'Web Intern',
    org: 'IEEE IA/IE/PELS Kerala Section',
    type: 'Internship',
    desc: 'Worked on WordPress and PHP.',
  },
];

const ecosystem = [
  { role: 'Vice Secretary', org: 'IEEE SB UKFCET' },
  { role: 'Creative & Operations Lead', org: 'IEDC UKFCET' },
  { role: 'IEDC NEST', org: 'IEDC Kerala' },
];

// Match the site's paper/ink palette
const calendarTheme = {
  light: ['#e8e2d6', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
};

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">06 —</span>
          <h2>Experience & ecosystem.</h2>
        </div>

        <div className="exp-layout">
          <div className="exp-roles reveal">
            {roles.map(({ title, org, type, desc }) => (
              <div className="exp-row" key={`${title}-${org}`}>
                <div className="exp-type">{type}</div>
                <div className="exp-content">
                  <div className="exp-title">{title}</div>
                  <div className="exp-org">{org}</div>
                  <div className="exp-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="exp-sidebar">
            <div className="exp-ecosystem reveal">
              <p className="venture-detail-label" style={{ marginBottom: 16 }}>Ecosystem Leadership</p>
              {ecosystem.map(({ role, org }) => (
                <div className="eco-item" key={`${role}-${org}`}>
                  <div className="eco-role">{role}</div>
                  <div className="eco-org">{org}</div>
                </div>
              ))}
            </div>

            <div className="exp-github reveal">
              <p className="venture-detail-label" style={{ marginBottom: 12 }}>Projects & GitHub</p>
              <p className="exp-github-desc">
                Web apps (React + TypeScript), MVP prototypes, and automation tools.
                I understand both product and business — so strategies are realistic
                and executable.
              </p>
              <a
                href="https://github.com/abelsebastian"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line"
                style={{ marginTop: 16, display: 'inline-block' }}
              >
                View work on GitHub →
              </a>
            </div>
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="contrib-block reveal">
          <p className="venture-detail-label" style={{ marginBottom: 20 }}>GitHub contributions</p>
          <div className="contrib-calendar">
            <GitHubCalendar
              username="abelsebastian"
              theme={calendarTheme}
              colorScheme="light"
              fontSize={11}
              blockSize={13}
              blockMargin={4}
              hideColorLegend={false}
              hideMonthLabels={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

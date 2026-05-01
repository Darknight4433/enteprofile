export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo" aria-label="Abel Sebastian">
        <div className="nav-logo-mark">AS</div>
        Abel Sebastian
      </a>
      <ul className="nav-links">
        <li><a href="#process">What I Do</a></li>
        <li><a href="#signal-desk">Signal Desk</a></li>
        <li><a href="#ventures">Ventures</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
      </ul>
      <a href="#cta" className="nav-cta">Book a Call →</a>
    </nav>
  );
}

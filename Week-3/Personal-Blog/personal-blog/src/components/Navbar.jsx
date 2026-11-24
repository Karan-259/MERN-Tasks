function Navbar() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="The Sunday Edit home">
        <span className="wordmark-icon" aria-hidden="true">✳</span>
        the sunday edit<span className="wordmark-period">.</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#journal">The journal</a>
        <a href="#about">About</a>
      </nav>
      <a className="header-link" href="#journal">
        Find a little inspiration <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navbar

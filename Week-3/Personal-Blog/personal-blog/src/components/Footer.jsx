function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="footer-main">
        <div>
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-icon" aria-hidden="true">✳</span>
            the sunday edit<span className="wordmark-period">.</span>
          </a>
          <p>A little space for the things worth noticing.</p>
        </div>
        <div className="footer-note">
          <span>MADE SLOWLY, WITH LOVE</span>
          <span>© 2025 THE SUNDAY EDIT</span>
        </div>
        <a className="back-to-top" href="#home">Back to the top ↑</a>
      </div>
      <div className="footer-bottom">
        <span>Take what you need, leave a little wonder.</span>
        <span>THANKS FOR BEING HERE <span aria-hidden="true">♡</span></span>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <h1>Shaan Londhe</h1>
          <h2>Product Manager & Musician</h2>
          <p>Bridging technology and creativity to build innovative products</p>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a product manager with a unique blend of technical expertise and artistic creativity.
                My background in tabla and music technology has taught me the importance of rhythm,
                timing, and harmony - principles I apply to product development and team collaboration.
              </p>
              <p>
                As a tabla player, I understand that every beat matters, just as every user interaction
                counts in product design. This attention to detail, combined with my passion for
                technology, allows me to create products that resonate with users on both functional
                and emotional levels.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="experience">
          <h2>Work Experience</h2>
          <div className="experience-grid">
            {/* We'll add your work experiences here */}
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {/* We'll add your projects here */}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Get in Touch</h2>
          <div className="contact-links">
            <a href="mailto:your.email@example.com">Email</a>
            <a href="https://linkedin.com/in/your-profile">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Shaan Londhe. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App 
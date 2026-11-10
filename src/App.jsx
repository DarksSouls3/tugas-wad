
import './App.css'

function App() {
  return (
    <main className="container">

      <nav className="navbar">
        <h2 className="logo">PANJI.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="subtitle">WELCOME TO MY WEBSITE</p>

        <h1>
          Hello, I'm <span>Panji.</span>
        </h1>

        <p className="description">
          Musician, Creative Thinker, and Developer.
          Currently learning React and Tailwind CSS.
        </p>

        <button className="hero-button">
          Explore My Work
        </button>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I love music, technology, and creating things.
        </p>
      </section>

      <footer>
        <p>© 2026 Panji. Built with React.</p>
      </footer>

    </main>
  )
}

export default App

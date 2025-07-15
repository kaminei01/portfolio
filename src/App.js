import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <header style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Kamineni Sravani</h1>
        <p>Web Developer | Passionate Coder</p>
        <div style={{ margin: '1rem' }}>
          <a href="https://github.com/kaminei01" target="_blank" rel="noreferrer">GitHub</a> |{' '}
          <a href="https://linkedin.com/in/kamineni-sravani-0a32b126a" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <button onClick={() => setDark(!dark)}>
          Toggle {dark ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <main style={{ padding: '1rem 2rem' }}>
        <section>
          <h2>About Me</h2>
          <p>I’m a B.Tech graduate with a CGPA of <strong>8.3</strong>. I enjoy building web applications that solve real-world problems.</p>
          <p><strong>Programming Languages:</strong> C, Python, Java</p>
          <p><strong>Web Development Stack:</strong> HTML, CSS, JavaScript, TypeScript, React</p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Projects</h2>
          <h3>Tackling Fake News</h3>
          <p>A fake news detection system using machine learning and real-time web verification.</p>
          <a href="https://github.com/kaminei01" target="_blank" rel="noreferrer">
            <button>View on GitHub</button>
          </a>
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '4rem', padding: '1rem', fontSize: '0.9rem' }}>
        Let's build something great together!
      </footer>
    </div>
  );
}

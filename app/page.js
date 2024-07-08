import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-4 text-center">
        <p>© {new Date().getFullYear()} Gunawan Wibisono. All rights reserved.</p>
      </footer>
    </div>
  )
}
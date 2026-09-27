import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
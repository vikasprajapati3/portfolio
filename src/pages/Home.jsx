import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'

const HOME_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vikas Prajapati',
    jobTitle: 'MERN Stack Developer',
    url: 'https://portfolio-vikasprajapati.vercel.app',
    sameAs: [
        'https://github.com/vikasprajapati3',
        'https://www.linkedin.com/in/vikas-prajapati-0a1032330',
    ],
    knowsAbout: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
}

export default function Home() {
    return (
        <>
            <Helmet>
                <link rel="canonical" href="https://portfolio-vikasprajapati.vercel.app/" />
                <script type="application/ld+json">{JSON.stringify(HOME_JSON_LD)}</script>
            </Helmet>

            <Hero />
            <About />
            <Projects />
            <TechStack />
            <Contact />
        </>
    )
}
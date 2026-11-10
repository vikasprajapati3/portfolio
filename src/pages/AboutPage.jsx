import { Link } from 'react-router-dom'
import SEO from '../components/Seo'

export default function AboutPage() {
    return (
        <>
            <SEO
                title="About"
                description="About Vikas Prajapati — a MERN-stack developer focused on building clean, responsive, and user-friendly web applications with React, Node.js, Express, and MongoDB."
                path="/about"
                jsonLd={{
                    '@context': 'https://schema.org',
                    '@type': 'Person',
                    name: 'Vikas Prajapati',
                    jobTitle: 'MERN Stack Developer',
                    url: 'https://portfolio-vikasprajapati.vercel.app/about',
                    sameAs: [
                        'https://github.com/vikasprajapati3',
                        'https://www.linkedin.com/in/vikas-prajapati-0a1032330',
                    ],
                    knowsAbout: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
                }}
            />

            <section className="pt-40 md:pt-48 pb-32">
                <div className="max-w-container mx-auto px-6">

                    <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-tight mb-8">
                        About Vikas Prajapati
                    </h1>

                    <div className="space-y-6 text-lg md:text-xl text-ink/85 leading-relaxed max-w-[750px]">
                        <p>
                            I'm <span className="text-ink">Vikas Prajapati</span>, a
                            MERN-stack developer focused on building clean, responsive, and
                            user-friendly web applications.
                        </p>

                        <p>
                            I enjoy learning, experimenting, and turning ideas into practical
                            digital experiences. Every project is an opportunity to refine my
                            craft — from the structure of the code to the feel of the interface.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] pt-6">
                            What I Build With
                        </h2>
                        <p>
                            My core stack is <span className="text-ink">MongoDB</span>,
                            <span className="text-ink"> Express</span>,
                            <span className="text-ink"> React</span>, and
                            <span className="text-ink"> Node.js</span> — the MERN stack — paired
                            with <span className="text-ink">Tailwind CSS</span> for clean,
                            consistent design. I'm also comfortable with Git, GitHub, VS Code,
                            and Figma, and I'm always exploring TypeScript, Next.js, and UI/UX
                            principles.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] pt-6">
                            What I'm Working On
                        </h2>
                        <p>
                            Currently improving my skills in modern frameworks and full-stack
                            development to build <span className="text-ink">impactful web experiences</span>.
                            I'm focused on mastering the full development lifecycle — from
                            understanding the problem to shipping polished, production-ready
                            applications.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] pt-6">
                            Beyond Code
                        </h2>
                        <p>
                            I'm curious about the intersection of design and engineering — how
                            good decisions in one area make the other better. I read, build,
                            and iterate constantly. If you want to see what I've been working on,
                            my GitHub is the best place to look.
                        </p>

                        <div className="pt-8 flex flex-wrap gap-4">
                            <Link to="/#projects"
                                className="inline-flex items-center gap-2 px-5 py-3 border border-line rounded hover:border-ink transition">
                                View my projects →
                            </Link>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 border border-line rounded hover:border-ink transition">
                                Download resume ↗
                            </a>
                            <Link to="/contact"
                                className="inline-flex items-center gap-2 px-5 py-3 border border-line rounded hover:border-ink transition">
                                Get in touch →
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

import { Link } from 'react-router-dom'
import SEO from '../components/Seo'

export default function AboutPage() {
    const description =
        'Vikas Prajapati is a MERN Stack Developer specializing in React.js, JavaScript, Node.js, Express.js, and MongoDB. Learn about his skills, projects, and approach to building modern web applications.'

    return (
        <>
            <SEO
                title="About Vikas Prajapati | MERN Stack Developer"
                description={description}
                path="/about"
                jsonLd={{
                    '@context': 'https://schema.org',
                    '@type': 'Person',
                    name: 'Vikas Prajapati',
                    jobTitle: 'MERN Stack Developer',
                    description,
                    url: 'https://portfolio-vikasprajapati.vercel.app/',
                    sameAs: [
                        'https://github.com/vikasprajapati3',
                        'https://www.linkedin.com/in/vikasprajapati3',
                    ],
                    knowsAbout: [
                        'MERN Stack Development',
                        'React.js',
                        'JavaScript',
                        'Node.js',
                        'Express.js',
                        'MongoDB',
                        'Tailwind CSS',
                        'REST APIs',
                        'Responsive Web Design',
                        'Full-Stack Web Development',
                        'Git',
                        'GitHub',
                        'TypeScript',
                        'Next.js',
                    ],
                }}
            />

            <main>
                <section className="pt-40 md:pt-48 pb-32">
                    <div className="max-w-container mx-auto px-6">

                        <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-tight mb-8">
                            About Vikas Prajapati
                        </h1>

                        <div className="space-y-6 text-lg md:text-xl text-ink/85 leading-relaxed max-w-[750px]">

                            <p>
                                I'm <span className="text-ink">Vikas Prajapati</span>,
                                a MERN Stack Developer passionate about building
                                modern, responsive, and user-friendly web applications.
                                I work with <span className="text-ink">React.js,
                                    JavaScript, Node.js, Express.js, and MongoDB</span> to
                                turn ideas into practical digital experiences.
                            </p>

                            <p>
                                I enjoy working across the full-stack development
                                process, from creating intuitive user interfaces
                                to developing backend functionality and connecting
                                applications with databases. My focus is on writing
                                clean code, building maintainable applications, and
                                creating experiences that are both functional and
                                easy to use.
                            </p>

                            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] pt-6">
                                MERN Stack Development & Technical Skills
                            </h2>

                            <p>
                                My primary technology stack is
                                <span className="text-ink"> MongoDB, Express.js,
                                    React.js, and Node.js</span>. I use React to build
                                interactive user interfaces, Node.js and Express.js
                                for backend development, and MongoDB for managing
                                application data.
                            </p>

                            <p>
                                I also work with
                                <span className="text-ink"> Tailwind CSS</span>
                                to create responsive layouts and consistent
                                interfaces. My development toolkit includes Git,
                                GitHub, VS Code, and Figma. I'm also exploring
                                TypeScript and Next.js to expand my knowledge
                                of modern web development.
                            </p>

                            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] pt-6">
                                My Approach to Building Web Applications
                            </h2>

                            <p>
                                I believe good web development is about more than
                                making an application work. It also involves
                                thoughtful design, maintainable code, performance,
                                accessibility, and a smooth user experience.
                            </p>

                            <p>
                                I enjoy solving development challenges, improving
                                existing implementations, and finding better ways
                                to structure applications. Whether working on
                                frontend interfaces or backend functionality,
                                I aim to build solutions that are reliable,
                                responsive, and practical.
                            </p>

                            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] pt-6">
                                What I'm Learning and Building
                            </h2>

                            <p>
                                Currently, I'm improving my skills in modern web development
                                while expanding my knowledge of Python, relational databases,
                                and SQL. I enjoy exploring different ways to work with data,
                                understand database relationships, and build efficient
                                backend systems.
                            </p>

                            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] pt-6">
                                Beyond Development
                            </h2>

                            <p>
                                Outside of writing code, I'm interested in the
                                intersection of design and engineering. I enjoy
                                understanding how thoughtful design decisions
                                and good technical implementation come together
                                to create better digital products.
                            </p>

                            <p>
                                I'm always open to learning, collaborating,
                                and exploring opportunities to contribute
                                to meaningful web development projects.
                            </p>

                            <div className="pt-8 flex flex-wrap gap-4">
                                <Link
                                    to="/#projects"
                                    className="inline-flex items-center gap-2 px-5 py-3 border border-line rounded hover:border-ink transition"
                                >
                                    View my projects →
                                </Link>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 border border-line rounded hover:border-ink transition"
                                >
                                    Download resume ↗
                                </a>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-3 border border-line rounded hover:border-ink transition"
                                >
                                    Get in touch →
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

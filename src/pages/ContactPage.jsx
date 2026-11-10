import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import SEO from '../components/Seo'

export default function ContactPage() {
    return (
        <>
            <SEO
                title="Contact"
                description="Get in touch with Vikas Prajapati — MERN-stack developer. Contact via form, email, LinkedIn, or GitHub for projects and opportunities."
                path="/contact"
                jsonLd={{
                    '@context': 'https://schema.org',
                    '@type': 'ContactPage',
                    name: 'Contact Vikas Prajapati',
                    url: 'https://portfolio-vikasprajapati.vercel.app/contact',
                    mainEntity: {
                        '@type': 'Person',
                        name: 'Vikas Prajapati',
                        email: 'vikasrjc7@gmail.com',
                        sameAs: [
                            'https://github.com/vikasprajapati3',
                            'https://www.linkedin.com/in/vikasprajapati3',
                        ],
                    },
                }}
            />

            <section className="pt-40 md:pt-48 pb-16">
                <div className="max-w-container mx-auto px-6">

                    <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-tight mb-6">
                        Contact Vikas Prajapati
                    </h1>

                    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-[750px] mb-4">
                        Have a project in mind, a question, or just want to say hello?
                        Fill out the form below or reach me directly through email or LinkedIn.
                        I usually respond within 24–48 hours.
                    </p>

                    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-[750px] mb-12">
                        For project inquiries, please include a brief description of what
                        you're building and your timeline. For other messages, just say hi — I
                        read every one.
                    </p>

                    <div className="border-t border-line pt-8">
                        <Contact embedded />
                    </div>

                    <div className="mt-16 pt-8 border-t border-line">
                        <Link to="/about" className="text-muted underline underline-offset-4 hover:text-ink transition">
                            ← Learn more about me
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}
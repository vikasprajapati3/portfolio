import { useEffect, useRef } from 'react'

export default function About() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) }
        }, { threshold: 0.1 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <section id="about" ref={ref} className="reveal pb-32">
            <div className="max-w-container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10">

                    <div className="text-sm md:text-base uppercase tracking-wider text-muted">About</div>

                    <div className="space-y-6 text-lg md:text-xl text-ink/85 leading-relaxed">
                        <p>
                            I'm <span className="text-ink">Vikas Prajapati</span> — an aspiring
                            full-stack developer focused on building clean, responsive, and
                            user-friendly web applications.
                        </p>

                        <p>
                            I enjoy learning, experimenting, and turning ideas into practical
                            digital experiences.
                        </p>

                        <p>
                            Currently improving my skills in modern frameworks and full-stack
                            development to build <span className="text-ink">impactful web experiences</span>.
                        </p>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-ink
                                   border-b border-ink pb-1
                                   hover:opacity-60 transition-opacity"
                        >
                            View my resume
                            <span>↗</span>
                        </a>
                    </div>


                </div>
            </div>
        </section>
    )
}
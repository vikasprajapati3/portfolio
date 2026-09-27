import { useEffect, useRef } from 'react'

const PROJECTS = [
    {
        date: '2026',
        title: 'DishPix',
        description: 'A social food-logging app to track, rate, and review your meals while exploring what others eat. Best in mobile view.',
        tech: 'React · Node.js · Express · MongoDB',
        link: 'https://github.com/vikasprajapati3/DishPix',
        preview: 'dishpix',
    },
    {
        date: '2026',
        title: 'Weather App',
        description: 'A responsive weather app built with React and Vite, integrating a live weather API to display real-time conditions.',
        tech: 'React · Vite · Weather API',
        link: 'https://github.com/vikasprajapati3/weather-app',
        preview: 'dashboard',
    },
    {
        date: '2026',
        title: 'ColorzPro',
        description: 'A simple and responsive color palette generator built with Tailwind CSS and JavaScript.',
        tech: 'HTML · Tailwind CSS · JavaScript',
        link: 'https://github.com/vikasprajapati3/ColorzPro',
        preview: 'portfolio',
    },
    {
        date: '2026',
        title: 'My Field Project',
        description: 'RJ college website integrated with a chatbot for interactive campus assistance.',
        tech: 'JavaScript · Chatbot Integration',
        link: 'https://github.com/vikasprajapati3/My-Field-Project',
        preview: 'dishpix',
    },
]

const PREVIEW_BG = {
    dishpix: 'bg-gradient-to-br from-[#dedede] to-white',
    dashboard: 'bg-gradient-to-br from-[#f2f2f2] to-white',
    portfolio: 'bg-gradient-to-br from-[#e9e9e9] to-white',
}

export default function Projects() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) }
        }, { threshold: 0.05 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <section id="projects" ref={ref} className="reveal pb-32">
            <div className="max-w-container mx-auto px-6">

                <div className="flex items-center justify-between border-b-[3px] border-line pb-2 mb-8">
                    <h2 className="text-3xl md:text-4xl font-light tracking-[-0.04em]">Projects</h2>
                    <span className="text-3xl md:text-4xl font-light">→</span>
                </div>

                <div className="flex flex-col gap-16 md:gap-[72px]">
                    {PROJECTS.map(p => (
                        <article key={p.title}
                            className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14 items-center
                                md:hover:translate-x-1 transition-transform">
                            <div>
                                <span className="block text-muted text-base font-medium mb-3">{p.date}</span>
                                <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] mb-4">{p.title}</h3>
                                <p className="text-lg md:text-xl text-ink/90 leading-relaxed mb-4 max-w-md">{p.description}</p>
                                <p className="text-muted text-base">{p.tech}</p>
                                <a href={p.link} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 mt-4 text-muted hover:text-ink hover:gap-3 transition-all">
                                    View on GitHub ↗
                                </a>
                            </div>

                            <div className={`relative w-full aspect-[1.45/1] rounded-xl overflow-hidden
                               md:hover:scale-[1.02] transition-transform ${PREVIEW_BG[p.preview]}`}>
                                <div className="mock-window">
                                    <div className="mock-top">
                                        <span className="mock-dot" /><span className="mock-dot" /><span className="mock-dot" />
                                    </div>
                                    <div className="mock-content">
                                        {p.preview === 'dashboard' ? (
                                            <>
                                                <div className="mock-line medium" />
                                                <div className="mock-line small" />
                                                <div className="mock-boxes"><div className="mock-box" /><div className="mock-box" /><div className="mock-box" /></div>
                                                <div className="mt-5"><div className="mock-line large" /><div className="mock-line medium" /></div>
                                            </>
                                        ) : p.preview === 'portfolio' ? (
                                            <>
                                                <div className="mock-line small" />
                                                <div className="mock-line large" />
                                                <div className="mock-block" />
                                                <div className="mt-5"><div className="mock-line medium" /><div className="mock-line small" /></div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="mock-line small" />
                                                <div className="mock-line large" />
                                                <div className="mock-line medium" />
                                                <div className="mock-boxes"><div className="mock-box" /><div className="mock-box" /><div className="mock-box" /></div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}
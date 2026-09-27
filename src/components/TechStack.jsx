import { useEffect, useRef } from 'react'

const STACK = [
    {
        category: 'Frontend',
        items: ['React', 'Tailwind CSS', 'HTML5', 'CSS3',]
    },
    {
        category: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Python', 'MySQL']
    },
    {
        category: 'Languages',
        items: ['JavaScript', 'Python', 'PHP', 'C', 'C++', 'PL/SQL']
    },
    {
        category: 'Tools',
        items: ['Git', 'GitHub', 'Vercel', 'Render', 'Canva']
    },

    {
        category: 'Familiar With',
        items: ['Angular', 'TypeScript']
    },
    {
        category: 'Exploring',
        items: ['Next.js']
    },
]


export default function TechStack() {
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
        <section id="tech" ref={ref} className="reveal pb-32">
            <div className="max-w-container mx-auto px-6">

                <div className="flex items-center justify-between border-b-[3px] border-line pb-2 mb-8">
                    <h2 className="text-3xl md:text-4xl font-light tracking-[-0.04em]">Tech Stack</h2>
                    <span className="text-3xl md:text-4xl font-light">→</span>
                </div>

                <div className="border-t border-line">
                    {STACK.map(row => (
                        <div key={row.category}
                            className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-6 border-b border-line
                            md:hover:pl-2.5 transition-all">
                            <div className="text-muted uppercase tracking-wider mb-3 md:mb-0 text-sm md:text-base">
                                {row.category}
                            </div>
                            <div className="flex flex-wrap gap-x-8 gap-y-1">
                                {row.items.map(item => (
                                    <span key={item} className="text-lg md:text-xl hover:text-muted transition">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
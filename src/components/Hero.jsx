export default function Hero() {
    return (
        <section id="top" className="pt-40 md:pt-48 pb-32">
            <div className="max-w-container mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-[0.98] tracking-[-0.05em]">
                    <span className="block">Building with code.</span>
                    <span className="block font-light text-ink/90">Driven by curiosity</span>
                </h1>

                <p className="mt-6 text-lg md:text-2xl text-muted leading-relaxed max-w-[850px]">
                    I'm a full-stack developer focused on building production-ready web
                    applications with clean interfaces, thoughtful interactions and a
                    constant interest in learning. Want to know even more{' '}
                    <a href="#about" className="text-ink underline underline-offset-4">about me?</a>
                </p>
            </div>
        </section>
    )
}

const LINKS = [
    { href: 'mailto:your-email@example.com', label: '✉', aria: 'Email', external: false },
    { href: 'https://github.com/vikasprajapati3', label: 'GH', aria: 'GitHub', external: true },
    { href: 'https://www.linkedin.com/in/vikas-prajapati-0a1032330', label: 'in', aria: 'LinkedIn', external: true },
    { href: '/resume.pdf', label: '↗', aria: 'Resume', external: true },
]

export default function Footer() {
    return (
        <footer className="pb-10">
            <div className="max-w-container mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                <div className="text-muted text-base md:text-lg">
                    © {new Date().getFullYear()} Vikas Prajapati
                </div>

                <div className="flex items-center gap-4">
                    {LINKS.map(l => (
                        <a key={l.aria} href={l.href} aria-label={l.aria}
                            target={l.external ? '_blank' : undefined}
                            rel={l.external ? 'noopener noreferrer' : undefined}
                            className="w-10 h-10 grid place-items-center text-muted border border-transparent
                          hover:text-ink hover:border-line hover:-translate-y-0.5 rounded transition-all">
                            {l.label}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    )
}
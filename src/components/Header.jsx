import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)


    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur transition-colors`}
        >
            <div className="max-w-container mx-auto px-6 h-20 md:h-20 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#top"
                    className="text-2xl md:text-[27px] tracking-[-0.035em] hover:opacity-65 transition"
                >
                    Vikas Prajapati
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6">

                    <a
                        href="#projects"
                        className="text-lg md:text-xl text-ink relative
                        after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px
                        after:bg-ink after:scale-x-0 after:origin-right
                        after:transition-transform hover:after:scale-x-100
                        hover:after:origin-left"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="text-lg md:text-xl text-ink relative
                        after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px
                        after:bg-ink after:scale-x-0 after:origin-right
                        after:transition-transform hover:after:scale-x-100
                        hover:after:origin-left"
                    >
                        Contact
                    </a>



                </nav>

            </div>
        </header>
    )
}

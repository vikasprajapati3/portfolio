import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

const LINKS = [
    {
        href: 'mailto:vikasrjc7@gmail.com',
        icon: faEnvelope,
        aria: 'Email',
        external: false,
    },
    {
        href: 'https://github.com/vikasprajapati3',
        icon: faGithub,
        aria: 'GitHub',
        external: true,
    },
    {
        href: 'https://www.linkedin.com/in/vikas-prajapati-0a1032330',
        icon: faLinkedin,
        aria: 'LinkedIn',
        external: true,
    },
    {
        href: '/resume.pdf',
        icon: faArrowUpRightFromSquare,
        aria: 'Resume',
        external: true,
    },
];

export default function Footer() {
    return (
        <footer className="pb-10">
            <div className="max-w-container mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                <div className="text-muted text-base md:text-lg">
                    © {new Date().getFullYear()} Vikas Prajapati
                </div>

                <div className="flex items-center gap-4">
                    {LINKS.map((l) => (
                        <a
                            key={l.aria}
                            href={l.href}
                            aria-label={l.aria}
                            target={l.external ? '_blank' : undefined}
                            rel={l.external ? 'noopener noreferrer' : undefined}
                            className="w-10 h-10 grid place-items-center text-muted border border-transparent hover:text-ink hover:border-line hover:-translate-y-0.5 rounded transition-all"
                        >
                            <FontAwesomeIcon
                                icon={l.icon}
                                className="text-lg"
                            />
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}

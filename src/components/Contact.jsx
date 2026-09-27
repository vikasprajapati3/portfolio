import { useEffect, useRef, useState } from 'react'

const FORMSPREE_ID = 'mgavppgo'
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`

export default function Contact() {
    const ref = useRef(null)
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    useEffect(() => {
        const el = ref.current
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) }
        }, { threshold: 0.1 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

    const valid =
        form.name.trim() &&
        /\S+@\S+\.\S+/.test(form.email) &&
        form.message.trim().length >= 10

    const submit = async (e) => {
        e.preventDefault()
        if (!valid || status === 'sending') return

        setStatus('sending')

        try {
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(form),
            })

            if (res.ok) {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000)
            }
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    const inputCls =
        'w-full bg-transparent border-b border-line py-3 text-ink placeholder-muted text-base focus:outline-none focus:border-ink transition'

    return (
        <section id="contact" ref={ref} className="reveal pb-32">
            <div className="max-w-container mx-auto px-6">
                <div className="border-t-[3px] border-line pt-8">

                    <h2 className="text-3xl md:text-4xl font-light tracking-[-0.04em] mb-6">Contact</h2>

                    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-[850px] mb-10">
                        Have an idea, project or opportunity? I'd love to hear from you.
                        Or reach me directly at{' '}
                        <a href="mailto:vikasrjc7@gmail.com" className="text-ink underline underline-offset-4">
                            vikasrjc7@gmail.com
                        </a>.
                    </p>

                    <form onSubmit={submit} className="max-w-[600px] space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-muted text-sm uppercase tracking-wider mb-2">Name</label>
                                <input type="text" name="name" value={form.name} onChange={update('name')}
                                    placeholder="Your name" className={inputCls} required />
                            </div>
                            <div>
                                <label className="block text-muted text-sm uppercase tracking-wider mb-2">Email</label>
                                <input type="email" name="email" value={form.email} onChange={update('email')}
                                    placeholder="you@example.com" className={inputCls} required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-muted text-sm uppercase tracking-wider mb-2">Message</label>
                            <textarea name="message" rows="4" value={form.message} onChange={update('message')}
                                placeholder="Tell me about your project..." className={inputCls + ' resize-none'} required />
                        </div>

                        <div className="flex items-center gap-4 flex-wrap">
                            <button type="submit" disabled={!valid || status === 'sending'}
                                className="inline-flex items-center gap-2 px-6 py-3 border border-line rounded
                                 hover:border-ink hover:gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                                {status === 'sending' ? 'Sending...' : 'Send message'} →
                            </button>

                            {status === 'success' && (
                                <span className="text-green-500 text-base">✓ Message sent — I'll get back to you soon</span>
                            )}
                            {status === 'error' && (
                                <span className="text-red-500 text-base">✗ Something went wrong. Try again or email me directly.</span>
                            )}
                        </div>
                    </form>

                    <div className="mt-14 pt-8 border-t border-line">
                        <p className="text-muted text-base">
                            Or find me on{' '}
                            <a href="https://www.linkedin.com/in/vikas-prajapati-0a1032330"
                                target="_blank" rel="noopener noreferrer"
                                className="text-ink underline underline-offset-4">LinkedIn</a>{' '}and{' '}
                            <a href="https://github.com/vikasprajapati3"
                                target="_blank" rel="noopener noreferrer"
                                className="text-ink underline underline-offset-4">GitHub</a>.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
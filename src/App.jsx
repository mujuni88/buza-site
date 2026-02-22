import { useState, useEffect, Fragment } from 'react'

const links = [
  { label: 'GitHub', href: 'https://github.com/mujuni88' },
  { label: 'Slides', href: 'https://slides.com/joebuza' },
  { label: 'X', href: 'https://twitter.com/cantfindaname88' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/joebuza/' },
  { label: 'Email', href: 'mailto:joebm08+psite@gmail.com' },
]

function useTypingEffect(text, speed = 110) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      setDisplayed(text)
      setDone(true)
      return
    }

    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return { displayed, done }
}

export default function App() {
  const { displayed, done } = useTypingEffect('Joe Buza')

  return (
    <main className="relative flex min-h-dvh touch-manipulation items-center justify-center overflow-hidden bg-[#f4efe6] px-6">
      {/* Paper grain texture */}
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative text-center">
        <h1 className="font-display text-[clamp(3.5rem,15vw,12rem)] leading-[0.95] tracking-[-0.03em] text-[#1a1816] text-balance">
          {displayed}
          <span
            className={`inline-block w-[0.04em] ml-[0.02em] align-baseline ${done ? 'animate-blink' : ''}`}
            style={{ height: '0.7em', backgroundColor: '#1a1816' }}
            aria-hidden="true"
          />
          <span
            className={`transition-opacity duration-700 ${done ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: '#b94a2f' }}
          >
            .
          </span>
        </h1>

        {/* Accent rule */}
        <div
          className={`mx-auto mt-6 h-px w-12 bg-[#b94a2f] transition-all duration-700 delay-100 ${done ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          aria-hidden="true"
        />

        <nav
          className={`mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-sans text-[13px] tracking-[0.15em] uppercase transition-all duration-700 delay-200 ${done ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
        >
          {links.map(({ label, href }, i) => (
            <Fragment key={label}>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="social-link relative rounded-sm px-1 py-1 text-[#8c8279] transition-colors duration-300 hover:text-[#1a1816] focus-visible:text-[#1a1816] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b94a2f]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe6]"
              >
                {label}
              </a>
              {i < links.length - 1 && (
                <span
                  className="select-none text-[#d1ccc4]"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </Fragment>
          ))}
        </nav>
      </div>

      {/* Footer with legal links */}
      <footer className="absolute bottom-6 left-0 right-0 text-center font-sans text-[11px] tracking-[0.12em] uppercase text-[#c5bfb6]">
        <a
          href="/privacy/"
          className="transition-colors duration-300 hover:text-[#8c8279]"
        >
          Privacy
        </a>
        <span className="mx-2">·</span>
        <a
          href="/terms/"
          className="transition-colors duration-300 hover:text-[#8c8279]"
        >
          Terms
        </a>
      </footer>
    </main>
  )
}

import { useState, useEffect, useCallback } from 'react'

interface Link {
  label: string
  href: string
}

const links: Link[] = [
  { label: 'GITHUB', href: 'https://github.com/mujuni88' },
  { label: 'SLIDES', href: 'https://slides.com/joebuza' },
  { label: 'X', href: 'https://twitter.com/cantfindaname88' },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/joebuza/' },
  { label: 'EMAIL', href: 'mailto:joebm08+psite@gmail.com' },
]

function useTypingEffect(text: string, speed = 110) {
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

type Theme = 'light' | 'dark'

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)

    // Update theme-color meta tag
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#000000' : '#f0ede8')
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggle }
}

function DotLeader() {
  return (
    <span className="dot-leader" aria-hidden="true">
      {'·'.repeat(40)}
    </span>
  )
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      type="button"
    >
      {theme === 'light' ? (
        // Moon icon
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // Sun icon
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  )
}

function Particles() {
  const shapes = [
    { type: 'sq', x: 12, y: 8, size: 10, dur: 38, delay: 0 },
    { type: 'ln', x: 72, y: 5, w: 40, dur: 44, delay: 3 },
    { type: 'sq', x: 88, y: 55, size: 8, dur: 50, delay: 7 },
    { type: 'ln', x: 25, y: 72, w: 32, dur: 42, delay: 1 },
    { type: 'sq', x: 65, y: 85, size: 14, dur: 36, delay: 5 },
    { type: 'ln', x: 45, y: 15, w: 36, dur: 48, delay: 9 },
    { type: 'sq', x: 92, y: 30, size: 9, dur: 40, delay: 4 },
    { type: 'ln', x: 8, y: 45, w: 28, dur: 46, delay: 6 },
    { type: 'sq', x: 55, y: 92, size: 6, dur: 52, delay: 2 },
    { type: 'ln', x: 78, y: 68, w: 30, dur: 34, delay: 8 },
    { type: 'sq', x: 35, y: 35, size: 11, dur: 43, delay: 10 },
    { type: 'ln', x: 50, y: 50, w: 24, dur: 39, delay: 11 },
  ]

  return (
    <div className="particles" aria-hidden="true">
      {shapes.map((s, i) => (
        <svg
          key={i}
          className="particle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
          width={s.type === 'ln' ? s.w : s.size}
          height={s.type === 'ln' ? 2 : s.size}
        >
          <rect
            width={s.type === 'ln' ? s.w : s.size}
            height={s.type === 'ln' ? 2 : s.size}
            fill="var(--accent)"
          />
        </svg>
      ))}
    </div>
  )
}

function MorphingRule({ visible }: { visible: boolean }) {
  return (
    <svg
      className={`morphing-rule ${visible ? 'morphing-rule--visible' : ''}`}
      viewBox="0 0 400 8"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,4 L400,4"
        stroke="var(--accent)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="butt"
      >
        <animate
          attributeName="d"
          values="
            M0,4 L400,4;
            M0,4 Q50,0 100,4 Q150,8 200,4 Q250,0 300,4 Q350,8 400,4;
            M0,4 L40,1 L80,7 L120,1 L160,7 L200,1 L240,7 L280,1 L320,7 L360,1 L400,4;
            M0,4 Q50,0 100,4 Q150,8 200,4 Q250,0 300,4 Q350,8 400,4;
            M0,4 L400,4"
          dur="12s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export default function App() {
  const { displayed, done } = useTypingEffect('JOE BUZA', 130)
  const { theme, toggle } = useTheme()

  return (
    <main className="brutalist-main">
      {/* Scanline overlay */}
      <div className="scanlines" aria-hidden="true" />

      {/* Floating geometric particles */}
      <Particles />

      <ThemeToggle theme={theme} onToggle={toggle} />

      <div className="brutalist-content">
        {/* Massive name */}
        <h1 className="brutalist-name">
          {displayed}
          <span className="block-cursor" aria-hidden="true">
            {'\u2588'}
          </span>
        </h1>

        {/* Morphing red rule */}
        <MorphingRule visible={done} />

        {/* Code index links */}
        <nav
          className="code-index"
          aria-label="Social links"
        >
          {links.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`code-index__link ${done ? 'code-index__link--visible' : ''}`}
              style={
                done
                  ? ({ '--stagger-delay': `${i * 50}ms` } as React.CSSProperties)
                  : undefined
              }
            >
              <span className="code-index__number">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="code-index__label">{label}</span>
              <DotLeader />
            </a>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <footer className="brutalist-footer">
        <a href="/privacy/" className="brutalist-footer__link">
          Privacy
        </a>
        <span className="brutalist-footer__sep" aria-hidden="true">
          ·
        </span>
        <a href="/terms/" className="brutalist-footer__link">
          Terms
        </a>
      </footer>
    </main>
  )
}

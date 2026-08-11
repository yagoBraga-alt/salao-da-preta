import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#destaques', label: 'Portfólio' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#curso', label: 'Curso' },
  { href: '#localizacao', label: 'Onde estamos' },
]

const waAgendar = 'https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!'

export default function Nav() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)
  const [ativo, setAtivo] = useState('')

  // Fundo sólido só depois de sair do topo, para não cobrir o hero.
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // Marca no menu a seção que está passando pelo topo da tela.
  useEffect(() => {
    const secoes = links
      .map(l => document.querySelector(l.href))
      .filter(Boolean)
    if (!secoes.length) return

    const observer = new IntersectionObserver(
      entradas => {
        entradas.forEach(e => {
          if (e.isIntersecting) setAtivo(`#${e.target.id}`)
        })
      },
      { rootMargin: '-80px 0px -65% 0px' }
    )
    secoes.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!aberto) return
    const aoTeclar = e => { if (e.key === 'Escape') setAberto(false) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', aoTeclar)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [aberto])

  return (
    <header className={rolou ? 'nav nav--solido' : 'nav'}>
      <div className="nav-inner">
        <a href="#topo" className="nav-marca" onClick={() => setAberto(false)}>
          <img src={logo} alt="" />
          <span>Salão da Preta</span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={ativo === l.href ? 'ativo' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={waAgendar}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Agendar
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setAberto(v => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
        >
          {aberto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {aberto && (
        <nav id="menu-mobile" className="nav-mobile" aria-label="Navegação principal">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={ativo === l.href ? 'ativo' : undefined}
              onClick={() => setAberto(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

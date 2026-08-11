import { MapPin, Sparkle, ChevronDown, ChevronRight, CalendarCheck, BadgeCheck } from 'lucide-react'
import logo from '../assets/logo.png'

const destaques = [
  'Cachos',
  'Crespos',
  'Ondulados',
  'Sem alisamentos',
  'Transição capilar',
  'Mechas sem pó descolorante',
]

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div>
        <div className="hero-ring" aria-hidden="true">
          <img src={logo} alt="Salão da Preta Logo" />
        </div>

        <p className="badge">Parnaíba · Piauí · Desde 2015</p>

        <h1>Salão <em>da Preta</em></h1>

        <p className="hero-sub">1° Salão Especializado em Curvaturas de Parnaíba</p>
        <p className="hero-location">
          <MapPin size={13} strokeWidth={2} aria-hidden="true" />
          Parnaíba, Piauí
        </p>

        <div className="hero-chips">
          <a href="#embaixadora" className="hero-parceria">
            <BadgeCheck size={15} strokeWidth={2} aria-hidden="true" />
            Embaixadora oficial <strong>Ápice</strong>
            <ChevronRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </a>

          <a href="#localizacao" className="hero-aviso">
            <CalendarCheck size={13} strokeWidth={2} aria-hidden="true" />
            Atendemos somente com agendamento prévio
            <ChevronRight size={13} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-pills">
          {destaques.map(item => (
            <span className="pill" key={item}>
              <Sparkle size={12} strokeWidth={2} aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>

        <div className="hero-ctas">
          <a href="https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!" target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Agendar horário pelo WhatsApp">Agendar pelo WhatsApp →</a>
          <a href="#servicos" className="btn-outline">Ver serviços</a>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <ChevronDown size={16} strokeWidth={1.5} />
        rolar
      </div>
    </section>
  )
}

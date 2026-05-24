import logo from '../assets/logoPreta.png'

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="hero-ring" aria-hidden="true">
          <img src={logo} alt="Salão da Preta Logo" />
        </div>

        <p className="badge">Parnaíba · Piauí · Desde 2015</p>

        <h1>Salão <em>da Preta</em></h1>

        <p className="hero-sub">1° Salão Especializado em Curvaturas de Parnaíba</p>
        <p className="hero-location">📍 Parnaíba, Piauí</p>

        <div className="hero-pills">
          <span className="pill">✦ Cachos</span>
          <span className="pill">✦ Crespos</span>
          <span className="pill">✦ Ondulados</span>
          <span className="pill">✦ Sem alisamentos</span>
          <span className="pill">✦ Transição capilar</span>
          <span className="pill">✦ Mechas sem pó descolorante</span>
        </div>

        <div className="hero-ctas">
          <a href="https://wa.me/558698352282" target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar horário →</a>
          <a href="#redes" className="btn-outline">Ver redes sociais</a>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 3v10M4 9l4 4 4-4" />
        </svg>
        rolar
      </div>
    </section>
  )
}

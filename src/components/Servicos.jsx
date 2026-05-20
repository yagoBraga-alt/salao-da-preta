import { Scissors, Sparkles, Palette, GraduationCap } from 'lucide-react'

export default function Servicos() {
  return (
    <section className="servicos">
      <div className="servicos-inner fade-up">
        <p className="section-label">O que fazemos</p>
        <h2 className="section-title">Serviços feitos<br />pra <em>realçar o que é seu</em></h2>

        <div className="servicos-grid">
          <a href="https://wa.me/558698352282" target="_blank" rel="noopener noreferrer" className="servico-card">
            <span className="servico-icon">
              <Scissors size={32} strokeWidth={1.5} />
            </span>
            <h3>Corte</h3>
            <p>Corte especializado para realçar o volume e a forma natural dos seus fios</p>
          </a>
          <a href="https://wa.me/558698352282" target="_blank" rel="noopener noreferrer" className="servico-card">
            <span className="servico-icon">
              <Sparkles size={32} strokeWidth={1.5} />
            </span>
            <h3>Tratamento</h3>
            <p>Hidratação profunda, reconstrução e nutrição para cachos saudáveis</p>
          </a>
          <a href="https://wa.me/558698352282" target="_blank" rel="noopener noreferrer" className="servico-card">
            <span className="servico-icon">
              <Palette size={32} strokeWidth={1.5} />
            </span>
            <h3>Coloração</h3>
            <p>Cor com técnicas seguras para cabelos com curvatura, sem danificar</p>
          </a>
          <a href="#curso" className="servico-card">
            <span className="servico-icon">
              <GraduationCap size={32} strokeWidth={1.5} />
            </span>
            <h3>Cursos</h3>
            <p>Aprenda a cuidar ou trabalhar com cabelos crespos e cacheados</p>
          </a>
        </div>
      </div>
    </section>
  )
}

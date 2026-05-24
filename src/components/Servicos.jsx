import { Scissors, Sparkles, Palette, GraduationCap, Wand2 } from 'lucide-react'

export default function Servicos() {
  return (
    <section className="servicos">
      <div className="servicos-inner fade-up">
        <p className="section-label">O que fazemos</p>
        <h2 className="section-title">Serviços pensados<br />para <em>os seus fios</em></h2>

        <div className="servicos-grid">
          <a href="https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Corte!" target="_blank" rel="noopener noreferrer" className="servico-card">
            <span className="servico-icon">
              <Scissors size={32} strokeWidth={1.5} />
            </span>
            <h3>Corte</h3>
            <p>Corte especializado para cabelos com curvatura, criando harmonia capilar e respeitando cada fator de encolhimento</p>
          </a>
          <a href="https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Tratamento!" target="_blank" rel="noopener noreferrer" className="servico-card">
            <span className="servico-icon">
              <Sparkles size={32} strokeWidth={1.5} />
            </span>
            <h3>Tratamento</h3>
            <p>Protocolos especializados para devolver saúde, brilho, definição e beleza ao seu cabelo</p>
          </a>
          <a href="https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Colora%C3%A7%C3%A3o!" target="_blank" rel="noopener noreferrer" className="servico-card">
            <span className="servico-icon">
              <Palette size={32} strokeWidth={1.5} />
            </span>
            <h3>Coloração</h3>
            <p>Cor com técnicas seguras para cabelos com curvatura, sem danificar</p>
          </a>
          <a href="https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Mechas!" target="_blank" rel="noopener noreferrer" className="servico-card">
            <span className="servico-icon">
              <Wand2 size={32} strokeWidth={1.5} />
            </span>
            <h3>Mechas</h3>
            <p>Técnica de mechas, morena iluminada, loiro e coloridos sem usar pó descolorante, preservando a saúde do seu cabelo</p>
          </a>
          <a href="https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20os%20Cursos!" target="_blank" rel="noopener noreferrer" className="servico-card">
            <span className="servico-icon">
              <GraduationCap size={32} strokeWidth={1.5} />
            </span>
            <h3>Cursos</h3>
            <p>Se torne referência em cabelos cacheados, crespos e ondulados e transforme sua carreira. Aprenda a precificar seu trabalho e lucre sem dor de cabeça</p>
          </a>
        </div>
      </div>
    </section>
  )
}

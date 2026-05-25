import { Scissors, Sparkles, Palette, GraduationCap, Wand2 } from 'lucide-react'

const waBase = 'https://wa.me/558698352282?text='

export default function Servicos() {
  return (
    <section className="servicos" id="servicos">
      <div className="servicos-inner fade-up">
        <p className="section-label">O que fazemos</p>
        <h2 className="section-title">Serviços pensados<br />para <em>os seus fios</em></h2>

        <div className="servicos-grid">
          <div className="servico-card">
            <span className="servico-icon"><Scissors size={32} strokeWidth={1.5} /></span>
            <h3>Corte</h3>
            <p>Corte especializado para cabelos com curvatura, criando harmonia capilar e respeitando cada fator de encolhimento</p>
            <a href={`${waBase}Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Corte!`} target="_blank" rel="noopener noreferrer" className="servico-wa" aria-label="Agendar Corte pelo WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Agendar pelo WhatsApp</a>
          </div>

          <div className="servico-card">
            <span className="servico-icon"><Sparkles size={32} strokeWidth={1.5} /></span>
            <h3>Tratamento</h3>
            <p>Protocolos especializados para devolver saúde, brilho, definição e beleza ao seu cabelo</p>
            <a href={`${waBase}Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Tratamento!`} target="_blank" rel="noopener noreferrer" className="servico-wa" aria-label="Agendar Tratamento pelo WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Agendar pelo WhatsApp</a>
          </div>

          <div className="servico-card">
            <span className="servico-icon"><Palette size={32} strokeWidth={1.5} /></span>
            <h3>Coloração</h3>
            <p>Cor com técnicas seguras para cabelos com curvatura, sem danificar</p>
            <a href={`${waBase}Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Colora%C3%A7%C3%A3o!`} target="_blank" rel="noopener noreferrer" className="servico-wa" aria-label="Agendar Coloração pelo WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Agendar pelo WhatsApp</a>
          </div>

          <div className="servico-card">
            <span className="servico-icon"><Wand2 size={32} strokeWidth={1.5} /></span>
            <h3>Mechas</h3>
            <p>Técnica de mechas, morena iluminada, loiro e coloridos sem usar pó descolorante, preservando a saúde do seu cabelo</p>
            <a href={`${waBase}Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Mechas!`} target="_blank" rel="noopener noreferrer" className="servico-wa" aria-label="Agendar Mechas pelo WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>Agendar pelo WhatsApp</a>
          </div>

          <div className="servico-card">
            <span className="servico-icon"><GraduationCap size={32} strokeWidth={1.5} /></span>
            <h3>Cursos</h3>
            <p>Se torne referência em cabelos cacheados, crespos e ondulados e transforme sua carreira. Aprenda a precificar seu trabalho e lucre sem dor de cabeça</p>
            <a href="#curso" className="servico-wa" style={{ color: 'var(--caramel)' }} aria-label="Ver mais sobre os Cursos">Ver mais sobre o curso →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

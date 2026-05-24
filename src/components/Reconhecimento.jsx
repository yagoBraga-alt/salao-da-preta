import fotoPremio from '../assets/fotoPremio.png'

export default function Reconhecimento() {
  return (
    <section className="premio">
      <div className="premio-inner fade-up">
        <div className="premio-img">
          <img src={fotoPremio} alt="Prêmio Vencedora Categoria Beleza" loading="lazy" />
        </div>
        <div className="premio-content">
          <p className="section-label">Reconhecimento</p>
          <h2 className="section-title">Vencedora na Categoria <em>Beleza</em></h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--caramel)', letterSpacing: '0.04em', marginBottom: '1.25rem', marginTop: '-0.25rem' }}>Do edital Entra na Roda (Idealizado pela cantora Iza, Risqué, Preta Hub)</p>
          <p>O cuidado especializado em curvaturas, o respeito a cada tipo de fio e o carinho no atendimento nos renderam reconhecimento como <strong>destaque na categoria Beleza</strong>.</p>
          <p>Esse prêmio é resultado de uma trajetória bem construída tecnicamente e da confiança de cada cliente em nosso trabalho.</p>
        </div>
      </div>
    </section>
  )
}

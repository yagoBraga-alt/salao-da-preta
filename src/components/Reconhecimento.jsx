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
          <p>Nosso compromisso com a excelência, o respeito à identidade e o cuidado especializado em curvaturas nos trouxe o reconhecimento como <strong>destaque na categoria Beleza</strong>.</p>
          <p>Esse prêmio é dedicado a cada cliente que confia em nossas mãos e celebra a própria essência no Salão da Preta!</p>
        </div>
      </div>
    </section>
  )
}

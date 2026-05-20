export default function Sobre() {
  return (
    <section>
      <div className="sobre fade-up">
        <p className="section-label text-center">Quem somos</p>
        <div className="ornament"></div>
        <h2 className="section-title text-center">Raízes, <em>identidade</em><br />e muito amor pelos cachos</h2>
        <p>Somos o primeiro salão especializado em curvaturas de Parnaíba. Aqui, cada cacho, cada ondulado e cada cabelo crespo é tratado com técnica, carinho e respeito pela sua identidade.</p>
        <p>Sem alisamentos. Sem químicas que apagam quem você é. Só tratamento de verdade.</p>

        <div className="sobre-stats">
          <div className="stat">
            <span className="stat-num">+10</span>
            <span className="stat-desc">anos de experiência</span>
          </div>
          <div className="stat">
            <span className="stat-num">19k</span>
            <span className="stat-desc">seguidores</span>
          </div>
          <div className="stat">
            <span className="stat-num">2.5k</span>
            <span className="stat-desc">publicações</span>
          </div>
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-desc">sem alisamentos</span>
          </div>
        </div>
      </div>
    </section>
  )
}

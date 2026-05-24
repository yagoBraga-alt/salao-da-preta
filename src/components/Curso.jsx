export default function Curso() {
  return (
    <section className="curso" id="curso">
      <div className="curso-inner fade-up">
        <p className="section-label">Formação</p>
        <h2 className="section-title">Meu <em>Curso</em><br />Da Preta Raízes</h2>
        <p className="curso-desc">Aprenda com quem faz de verdade. Um curso pensado para quem quer se especializar para atender pessoas com cabelos cacheados, crespos e ondulados, para cuidar do próprio cabelo ou para trabalhar na área expandindo sua carreira profissional.</p>

        <div className="curso-items">
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Técnicas de corte para cabelos com curvatura</span>
          </div>
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Diagnóstico e tipos de curvatura</span>
          </div>
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Introdução a tratamento capilar</span>
          </div>
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Técnicas de finalização e secagem</span>
          </div>
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Atendimento e fidelização de clientes</span>
          </div>
        </div>

        <a href="https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20o%20curso%20Da%20Preta%20Ra%C3%ADzes!" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Quero saber mais sobre o curso →
        </a>
      </div>
    </section>
  )
}

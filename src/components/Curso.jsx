export default function Curso() {
  return (
    <section className="curso" id="curso">
      <div className="curso-inner fade-up">
        <p className="section-label">Formação</p>
        <h2 className="section-title">Meu <em>Curso</em><br />Da Preta Raízes</h2>
        <p className="curso-desc">Aprenda com quem faz de verdade. Um curso pensado para quem quer se especializar no universo dos cabelos cacheados e crespos — seja para cuidar do próprio cabelo ou para trabalhar na área.</p>

        <div className="curso-items">
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Técnicas de corte para cachos e crespos</span>
          </div>
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Diagnóstico e tipos de curvatura</span>
          </div>
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Tratamentos e cronograma capilar</span>
          </div>
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Coloração segura em cabelos curvos</span>
          </div>
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Finalizações e penteados</span>
          </div>
          <div className="curso-item">
            <div className="curso-item-dot"></div>
            <span>Atendimento e fidelização de clientes</span>
          </div>
        </div>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHNWIlM-SacEkffc0pPOS6SGWcepsu7C0VV4ArrUAPHnUERg/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Quero saber mais sobre o curso →
        </a>
      </div>
    </section>
  )
}

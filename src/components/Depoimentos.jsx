export default function Depoimentos() {
  return (
    <section className="depoimentos">
      <div className="depo-inner fade-up">
        <p className="section-label text-center">Clientes</p>
        <div className="ornament"></div>
        <h2 className="section-title text-center">Quem já <em>viveu</em><br />a experiência</h2>

        <div className="depo-grid">
          <div className="depo-card">
            <div className="depo-stars">★★★★★</div>
            <blockquote>"Finalmente encontrei um lugar que entende o meu cabelo. Saí amando ainda mais meus cachos!"</blockquote>
            <p className="depo-author">Cliente do Salão</p>
          </div>
          <div className="depo-card">
            <div className="depo-stars">★★★★★</div>
            <blockquote>"A Preta sabe exatamente o que está fazendo. Meu cabelo nunca esteve tão saudável e definido."</blockquote>
            <p className="depo-author">Cliente do Salão</p>
          </div>
          <div className="depo-card">
            <div className="depo-stars">★★★★★</div>
            <blockquote>"O corte mudou tudo. Ela respeita cada fio, cada volume. Recomendo de olhos fechados!"</blockquote>
            <p className="depo-author">Cliente do Salão</p>
          </div>
        </div>
      </div>
    </section>
  )
}

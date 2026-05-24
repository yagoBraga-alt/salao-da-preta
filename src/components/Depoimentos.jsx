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
            <blockquote>"Atendimento excelente, muito bom. Recepção por whatsapp muito boa. A Jô, uma pessoa super gente boa, conversa, tira qualquer dúvida, e faz o cabelo ficar do jeito que a pessoa quer. Simplesmente o melhor salão de cabelo cacheado de Parnaíba!!!!!"</blockquote>
            <p className="depo-author">João Pedro dos Santos</p>
          </div>
          <div className="depo-card">
            <div className="depo-stars">★★★★★</div>
            <blockquote>"Foi tudo perfeito, acolhedor e muito atencioso. Me tirou muitas dúvidas que eu tinha sobre meu tipo de cabelo e como finalizar ele, redescobri meu cabelinhooo ♡"</blockquote>
            <p className="depo-author">Maria Eduarda</p>
          </div>
          <div className="depo-card">
            <div className="depo-stars">★★★★★</div>
            <blockquote>"Ter passado pelas mãos da Jô foi uma experiência maravilhosa. O cuidado, a atenção e o carinho em cada detalhe fazem toda a diferença. Me senti segura, acolhida e o resultado no meu cabelo ficou simplesmente lindo, todo mundo está elogiando!"</blockquote>
            <p className="depo-author">Ana Raquel</p>
          </div>
        </div>
      </div>
    </section>
  )
}

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
            <blockquote>"Atendimento excelente, muito bom. Recepção por WhatsApp muito boa. A Jô, uma pessoa super gente boa, conversa, tira qualquer dúvida, e faz o cabelo ficar do jeito que a pessoa quer. Simplesmente o melhor salão de cabelo cacheado de Parnaíba!!!!!"</blockquote>
            <p className="depo-author">João Pedro dos Santos</p>
          </div>
          <div className="depo-card">
            <div className="depo-stars">★★★★★</div>
            <blockquote>"Foi tudo perfeito, acolhedor e muito atencioso. Me tirou muitas dúvidas que eu tinha sobre meu tipo de cabelo e como finalizar ele, redescobri meu cabelinhooo ♡"</blockquote>
            <p className="depo-author">Maria Eduarda</p>
          </div>
          <div className="depo-card">
            <div className="depo-stars">★★★★★</div>
            <blockquote>"Minha experiência foi simplesmente incrível, há um ótimo atendimento, são muito simpáticas e entrega o que promete."</blockquote>
            <p className="depo-author">Lays</p>
          </div>
          <div className="depo-card">
            <div className="depo-stars">★★★★★</div>
            <blockquote>"Ter passado pelas mãos da Jô foi uma experiência maravilhosa. O cuidado, a atenção e o carinho em cada detalhe fazem toda a diferença. Me senti segura, acolhida e o resultado no meu cabelo ficou simplesmente lindo!"</blockquote>
            <p className="depo-author">Ana Raquel</p>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '2.5rem' }}>
          <a
            href="https://www.google.com/maps/place/Sal%C3%A3o+da+Preta/@-2.9102598,-41.752554,17z/data=!4m18!1m9!3m8!1s0x7ec25e9ea2e2113:0xcd9f36ddb2d6ab8f!2sSal%C3%A3o+da+Preta!8m2!3d-2.9102598!4d-41.752554!9m1!1b1!16s%2Fg%2F11n0lvx2cx!3m7!1s0x7ec25e9ea2e2113:0xcd9f36ddb2d6ab8f!8m2!3d-2.9102598!4d-41.752554!9m1!1b1!16s%2Fg%2F11n0lvx2cx?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  )
}

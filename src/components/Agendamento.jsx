export default function Agendamento() {
  return (
    <section className="agendar">
      <div className="fade-up">
        <p className="section-label text-center" style={{ color: 'rgba(26,13,5,0.6)' }}>Quer agendar um horário?</p>
        <h2 className="section-title text-center" style={{ color: 'var(--dark)' }}>Agende seu horário<br /><em style={{ color: 'var(--espresso)', fontStyle: 'italic' }}>hoje mesmo</em></h2>
        <p>Seu cacho merece cuidado especializado. Venha pro Salão da Preta.</p>
        <a href="https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!" target="_blank" rel="noopener noreferrer" className="btn-dark">Quero agendar →</a>
      </div>
    </section>
  )
}

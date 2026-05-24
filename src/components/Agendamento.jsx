export default function Agendamento() {
  return (
    <section className="agendar" id="agendamento">
      <div className="fade-up">
        <p className="section-label text-center" style={{ color: 'rgba(26,13,5,0.6)' }}>Pronta para cuidar dos seus cachos?</p>
        <h2 className="section-title text-center" style={{ color: 'var(--dark)' }}>Reserve seu horário com quem<br /><em style={{ color: 'var(--espresso)', fontStyle: 'italic' }}>entende de cachos e crespos</em></h2>
        <p>Atendimento especializado para realçar sua beleza natural com cuidado, técnica e carinho.</p>
        <a href="https://wa.me/558698352282?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20reservar%20meu%20hor%C3%A1rio!" target="_blank" rel="noopener noreferrer" className="btn-dark" aria-label="Reservar horário pelo WhatsApp">Reservar pelo WhatsApp →</a>
      </div>
    </section>
  )
}

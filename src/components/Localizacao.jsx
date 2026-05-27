import { MapPin, Clock, CalendarCheck } from 'lucide-react'

export default function Localizacao() {
  return (
    <section className="localizacao" id="localizacao">
      <div className="localizacao-inner fade-up">

        <div className="localizacao-info">
          <p className="section-label">Endereço &amp; Horários</p>
          <h2 className="section-title">Localização &amp; <em>Horários</em></h2>

          <div className="loc-card">
            <div className="loc-icon-wrap">
              <MapPin size={20} strokeWidth={1.8} />
            </div>
            <div>
              <p className="loc-label">Endereço</p>
              <p className="loc-text">
                Av. São Sebastião, 3080<br />
                Nossa Sra. de Fátima<br />
                Parnaíba – PI, 64202-300
              </p>
              <a
                href="https://maps.google.com/?q=Av.+São+Sebastião,+3080,+Parnaíba,+PI"
                target="_blank"
                rel="noopener noreferrer"
                className="loc-link"
              >
                Ver no Google Maps →
              </a>
            </div>
          </div>

          <div className="loc-card">
            <div className="loc-icon-wrap">
              <Clock size={20} strokeWidth={1.8} />
            </div>
            <div>
              <p className="loc-label">Dias de atendimento</p>
              <p className="loc-text">Terça a Sábado</p>
            </div>
          </div>

          <div className="loc-card">
            <div className="loc-icon-wrap">
              <CalendarCheck size={20} strokeWidth={1.8} />
            </div>
            <div>
              <p className="loc-label">Formato</p>
              <p className="loc-text">Somente por agendamento</p>
            </div>
          </div>

        </div>

        <div className="localizacao-map">
          <iframe
            title="Localização Salão da Preta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.937!2d-41.7768!3d-2.9055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+S%C3%A3o+Sebasti%C3%A3o%2C+3080+-+Nossa+Sra.+de+F%C3%A1tima%2C+Parna%C3%ADba+-+PI%2C+64202-300!5e0!3m2!1spt-BR!2sbr!4v1"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  )
}

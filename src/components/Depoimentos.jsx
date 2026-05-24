import review1 from '../assets/review1.png'
import review2 from '../assets/review2.png'
import review3 from '../assets/review3.png'
import review4 from '../assets/review4.png'

export default function Depoimentos() {
  return (
    <section className="depoimentos">
      <div className="depo-inner fade-up">
        <p className="section-label text-center">Clientes</p>
        <div className="ornament"></div>
        <h2 className="section-title text-center">Quem já <em>viveu</em><br />a experiência</h2>

        <div className="depo-grid">
          <div className="depo-card depo-card--img">
            <img src={review1} alt="Avaliação de João Pedro dos Santos" loading="lazy" />
          </div>
          <div className="depo-card depo-card--img" style={{ alignItems: 'flex-start' }}>
            <img src={review2} alt="Avaliação de Maria Eduarda" loading="lazy" style={{ marginTop: '-32px' }} />
          </div>
          <div className="depo-card depo-card--img">
            <img src={review3} alt="Avaliação de Lays" loading="lazy" />
          </div>
          <div className="depo-card depo-card--img">
            <img src={review4} alt="Avaliação de cliente" loading="lazy" />
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

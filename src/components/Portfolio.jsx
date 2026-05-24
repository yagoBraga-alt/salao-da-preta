import FotoCacho from '../assets/FotoCacho.png'
import FotoCrespo from '../assets/FotoCrespo.png'

export default function Portfolio() {
  return (
    <section className="destaques" id="destaques">
      <div className="destaques-inner fade-up">
        <p className="section-label text-center">Portfólio</p>
        <div className="ornament"></div>
        <h2 className="section-title text-center">Penteados que <em>encantam</em><br />e valorizam cada curvatura</h2>

        <div className="destaques-grid">
          {/* Foto destaque 1 */}
          <div className="foto-card">
            <img className="foto-img" 
                 src={FotoCacho} 
                 alt="Penteado com cachos definidos - Salão da Preta"
                 loading="lazy" />
            <div className="foto-legenda">
              <h3>✨ Cachos livres & definição</h3>
              <p>Finalização com fitagem e ativação de cachos, respeitando a textura natural de cada fio.</p>
            </div>
          </div>

          {/* Foto destaque 2 */}
          <div className="foto-card">
            <img className="foto-img" 
                 src={FotoCrespo} 
                 alt="Penteados crespos com volume - Salão da Preta"
                 loading="lazy" />
            <div className="foto-legenda">
              <h3>🌟 Crespo empoderado</h3>
              <p>Modelagem que exibe volume, formato arredondado e movimento único para cabelos crespos.</p>
            </div>
          </div>
        </div>
        <p className="text-center" style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#8a6040' }}>✨ Toque nas imagens e inspire-se. Seu cabelo também merece esse cuidado.</p>
      </div>
    </section>
  )
}

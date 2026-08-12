import Carrossel from './Carrossel'
import { fotosPortfolio } from '../galerias'

export default function Portfolio() {
  return (
    <section className="destaques" id="destaques">
      <div className="destaques-inner fade-up">
        <p className="section-label text-center">Portfólio</p>
        <div className="ornament"></div>
        <h2 className="section-title text-center">Resultados que <em>encantam</em><br />e valorizam cada curvatura</h2>

        <Carrossel fotos={fotosPortfolio} rotulo="Galeria de resultados" />

        <p className="text-center destaques-legenda">Arraste para o lado e veja mais resultados feitos aqui no salão.</p>
      </div>
    </section>
  )
}

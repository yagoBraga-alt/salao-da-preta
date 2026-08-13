import { useEffect, useRef, useState } from 'react'
import { BadgeCheck, Copy, Check } from 'lucide-react'

const CUPOM = 'APSALAODAPRETA'
const APICE_URL = 'https://www.apicecosmeticos.com.br/'

export default function Embaixadora() {
  const [copiado, setCopiado] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  async function copiarCupom() {
    try {
      await navigator.clipboard.writeText(CUPOM)
    } catch {
      const campo = document.createElement('textarea')
      campo.value = CUPOM
      campo.setAttribute('readonly', '')
      campo.style.position = 'fixed'
      campo.style.opacity = '0'
      document.body.appendChild(campo)
      campo.select()
      try {
        document.execCommand('copy')
      } catch {
        document.body.removeChild(campo)
        return
      }
      document.body.removeChild(campo)
    }
    setCopiado(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopiado(false), 2000)
  }

  return (
    <section className="embaixadora" id="embaixadora">
      <div className="embaixadora-inner fade-up">

        <div className="emb-content">
          <p className="section-label">Parceria oficial</p>
          <h2 className="section-title">Jô é <em>Embaixadora Ápice</em></h2>

          <p className="emb-selo">
            <BadgeCheck size={16} strokeWidth={2} />
            Ápice Cosméticos
          </p>

          <p>Para entregar o melhor resultado para cabelos com curvatura, escolhemos sempre produtos veganos, com ativos de qualidade, liberados para todo o público, inclusive crianças. No Salão da Preta utilizamos, recomendamos e revendemos Ápice. E com meu cupom de Embaixadora da marca, você ganha desconto e pode comprar de qualquer lugar.</p>

          <div className="emb-cupom">
            <div>
              <p className="emb-cupom-label">Use o cupom da Jô</p>
              <p className="emb-cupom-code">{CUPOM}</p>
            </div>
            <button type="button" className="emb-copiar" onClick={copiarCupom}>
              {copiado
                ? <><Check size={14} strokeWidth={2.5} /> Copiado!</>
                : <><Copy size={14} strokeWidth={2} /> Copiar</>}
            </button>
          </div>
          <p className="emb-aviso" role="status" aria-live="polite">
            {copiado ? 'Cupom copiado para a área de transferência.' : ''}
          </p>

          <a
            href={APICE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-primary"
          >
            Comprar no site da Ápice →
          </a>
        </div>

      </div>
    </section>
  )
}

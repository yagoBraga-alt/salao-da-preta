import { useCallback, useEffect, useState } from 'react'
import Lightbox from './Lightbox'

const INTERVALO = 2800

export default function Slideshow({ fotos, rotulo = 'Galeria de fotos' }) {
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(false)
  const [aberta, setAberta] = useState(null)

  const parado = pausado || aberta !== null

  useEffect(() => {
    if (parado) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setAtual(i => (i + 1) % fotos.length)
    }, INTERVALO)
    return () => clearInterval(id)
  }, [parado, fotos.length])

  const navegar = useCallback(passo => {
    setAberta(i => (i === null ? null : (i + passo + fotos.length) % fotos.length))
  }, [fotos.length])

  const fechar = useCallback(() => setAberta(null), [])

  return (
    <>
      <div
        className="slideshow"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocusCapture={() => setPausado(true)}
        onBlurCapture={() => setPausado(false)}
      >
        <button
          type="button"
          className="slideshow-palco"
          onClick={() => setAberta(atual)}
          aria-label={`Ampliar foto: ${fotos[atual].alt}`}
        >
          {fotos.map((foto, i) => (
            <img
              key={foto.nome}
              src={foto.src}
              alt={i === atual ? foto.alt : ''}
              width={foto.largura}
              height={foto.altura}
              className={i === atual ? 'ativa' : undefined}
              aria-hidden={i === atual ? undefined : true}
              // a primeira já entra na tela; as outras só quando chegar a vez
              loading={i === 0 ? undefined : 'lazy'}
            />
          ))}
        </button>

        <div className="slideshow-pontos" role="group" aria-label={rotulo}>
          {fotos.map((foto, i) => (
            <button
              key={foto.nome}
              type="button"
              className={i === atual ? 'slideshow-ponto ativo' : 'slideshow-ponto'}
              onClick={() => setAtual(i)}
              aria-label={`Ver foto ${i + 1} de ${fotos.length}`}
              aria-current={i === atual || undefined}
            />
          ))}
        </div>
      </div>

      {aberta !== null && (
        <Lightbox
          fotos={fotos}
          indice={aberta}
          aoFechar={fechar}
          aoNavegar={navegar}
        />
      )}
    </>
  )
}

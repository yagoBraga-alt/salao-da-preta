import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Lightbox from './Lightbox'

const VELOCIDADE = 0.6 // px por quadro, algo em torno de 36px/s

export default function Carrossel({ fotos, rotulo = 'Galeria de fotos' }) {
  // A lista vai duplicada: quando a primeira cópia termina, o trilho volta ao
  // início sem que se perceba, porque o conteúdo dali em diante é igual.
  const trilhoDuplicado = [...fotos, ...fotos]

  const trilho = useRef(null)
  const posicao = useRef(0)
  const [pausado, setPausado] = useState(false)
  const [aberta, setAberta] = useState(null)
  const [remedida, setRemedida] = useState(0)

  const parado = pausado || aberta !== null

  // As fotos mudam de largura junto com a altura (clamp em vw), então a volta
  // do loop precisa ser recalculada quando a janela muda de tamanho.
  useEffect(() => {
    const aoRedimensionar = () => setRemedida(n => n + 1)
    window.addEventListener('resize', aoRedimensionar)
    return () => window.removeEventListener('resize', aoRedimensionar)
  }, [])

  useEffect(() => {
    const el = trilho.current
    if (!el || parado) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Distância exata de um conjunto: do primeiro item até a sua cópia.
    // scrollWidth/2 não serve, porque são 27 vãos entre 28 itens, e não 28.
    // getBoundingClientRect em vez de offsetLeft, que arredonda para inteiro
    // e deixaria o loop desalinhar um pixel por volta.
    const itens = el.children
    const copia = itens[fotos.length]
    const conjunto = copia
      ? copia.getBoundingClientRect().left - itens[0].getBoundingClientRect().left
      : el.scrollWidth / 2
    if (!conjunto) return

    // resincroniza com onde o dedo ou a seta deixaram o trilho
    posicao.current = el.scrollLeft

    let quadro
    const andar = () => {
      posicao.current += VELOCIDADE
      if (posicao.current >= conjunto) posicao.current -= conjunto
      el.scrollLeft = posicao.current
      quadro = requestAnimationFrame(andar)
    }
    quadro = requestAnimationFrame(andar)
    return () => cancelAnimationFrame(quadro)
  }, [parado, remedida, fotos.length])

  const mover = useCallback(direcao => {
    const el = trilho.current
    if (!el) return
    el.scrollBy({ left: direcao * el.clientWidth * 0.8, behavior: 'smooth' })
  }, [])

  const navegar = useCallback(passo => {
    setAberta(i => (i === null ? null : (i + passo + fotos.length) % fotos.length))
  }, [fotos.length])

  const fechar = useCallback(() => setAberta(null), [])

  return (
    <>
      <div
        className="carrossel-wrap"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocusCapture={() => setPausado(true)}
        onBlurCapture={() => setPausado(false)}
        onTouchStart={() => setPausado(true)}
        onTouchEnd={() => setPausado(false)}
        onTouchCancel={() => setPausado(false)}
      >
        <button
          type="button"
          className="carrossel-seta carrossel-seta--esq"
          onClick={() => mover(-1)}
          aria-label="Ver fotos anteriores"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        <div className="carrossel" ref={trilho} role="group" aria-label={rotulo}>
          {trilhoDuplicado.map((foto, i) => {
            const indice = i % fotos.length
            const copia = i >= fotos.length
            return (
              <button
                type="button"
                className="carrossel-item"
                key={`${foto.nome}-${i}`}
                onClick={() => setAberta(indice)}
                aria-label={`Ampliar foto: ${foto.alt}`}
                aria-hidden={copia || undefined}
                tabIndex={copia ? -1 : undefined}
              >
                <img
                  src={foto.src}
                  alt={copia ? '' : foto.alt}
                  width={foto.largura}
                  height={foto.altura}
                  loading="lazy"
                />
              </button>
            )
          })}
        </div>

        <button
          type="button"
          className="carrossel-seta carrossel-seta--dir"
          onClick={() => mover(1)}
          aria-label="Ver próximas fotos"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
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

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const modulos = import.meta.glob('../assets/carrossel/*.webp', {
  eager: true,
  import: 'default',
})

const descricoes = {
  'carrossel-01': 'Corte curto com cachos definidos, vista de perfil',
  'carrossel-02': 'Cabelo longo cacheado loiro, vista de perfil',
  'carrossel-03': 'Corte curto crespo com mechas caramelo',
  'carrossel-04': 'Cabelo longo cacheado escuro, vista de costas',
  'carrossel-05': 'Corte curto cacheado com mechas iluminadas',
  'carrossel-06': 'Cabelo longo ondulado em tom caramelo',
  'carrossel-07': 'Corte curto cacheado escuro, vista de costas',
  'carrossel-08': 'Cabelo longo cacheado com mechas, vista de costas',
  'carrossel-09': 'Corte curto crespo com volume, vista de costas',
  'carrossel-10': 'Cabelo longo ondulado com mechas iluminadas',
  'carrossel-11': 'Cabelo médio cacheado com mechas loiras',
  'carrossel-12': 'Cabelo médio cacheado com mechas caramelo',
  'carrossel-13': 'Cabelo médio cacheado com mechas, vista de costas',
  'carrossel-14': 'Cabelo médio cacheado com mechas loiras',
}

// Todas saem da conversão com 720px de largura. A altura vai declarada no
// <img> para o navegador reservar o espaço antes da imagem baixar, senão o
// item colapsa e o carrossel nasce sem largura nenhuma.
const LARGURA = 720
const alturas = { 'carrossel-05': 960 }

const fotos = Object.keys(modulos)
  .sort()
  .map(caminho => {
    const nome = caminho.split('/').pop().replace('.webp', '')
    return {
      nome,
      src: modulos[caminho],
      alt: descricoes[nome] || 'Resultado de cabelo com curvatura feito no Salão da Preta',
      largura: LARGURA,
      altura: alturas[nome] || 1280,
    }
  })

// A lista vai duplicada: quando a primeira cópia termina, o trilho volta ao
// meio sem que se perceba, porque o conteúdo dali em diante é igual.
const trilhoDuplicado = [...fotos, ...fotos]

const VELOCIDADE = 0.6 // px por quadro, algo em torno de 36px/s

export default function Carrossel() {
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
  }, [parado, remedida])

  const mover = useCallback(direcao => {
    const el = trilho.current
    if (!el) return
    el.scrollBy({ left: direcao * el.clientWidth * 0.8, behavior: 'smooth' })
  }, [])

  const navegar = useCallback(passo => {
    setAberta(i => (i === null ? null : (i + passo + fotos.length) % fotos.length))
  }, [])

  useEffect(() => {
    if (aberta === null) return
    const aoTeclar = e => {
      if (e.key === 'Escape') setAberta(null)
      if (e.key === 'ArrowRight') navegar(1)
      if (e.key === 'ArrowLeft') navegar(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', aoTeclar)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [aberta, navegar])

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

        <div className="carrossel" ref={trilho}>
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
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={() => setAberta(null)}
        >
          <button
            type="button"
            className="lightbox-fechar"
            onClick={() => setAberta(null)}
            aria-label="Fechar"
            autoFocus
          >
            <X size={24} strokeWidth={2} />
          </button>

          <button
            type="button"
            className="lightbox-seta lightbox-seta--esq"
            onClick={e => { e.stopPropagation(); navegar(-1) }}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={26} strokeWidth={2} />
          </button>

          <img
            className="lightbox-foto"
            src={fotos[aberta].src}
            alt={fotos[aberta].alt}
            onClick={e => e.stopPropagation()}
          />

          <button
            type="button"
            className="lightbox-seta lightbox-seta--dir"
            onClick={e => { e.stopPropagation(); navegar(1) }}
            aria-label="Próxima foto"
          >
            <ChevronRight size={26} strokeWidth={2} />
          </button>

          <p className="lightbox-contador">{aberta + 1} de {fotos.length}</p>
        </div>
      )}
    </>
  )
}

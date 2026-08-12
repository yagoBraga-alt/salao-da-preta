import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ fotos, indice, aoFechar, aoNavegar }) {
  useEffect(() => {
    const aoTeclar = e => {
      if (e.key === 'Escape') aoFechar()
      if (e.key === 'ArrowRight') aoNavegar(1)
      if (e.key === 'ArrowLeft') aoNavegar(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', aoTeclar)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [aoFechar, aoNavegar])

  const foto = fotos[indice]

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Foto ampliada"
      onClick={aoFechar}
    >
      <button
        type="button"
        className="lightbox-fechar"
        onClick={aoFechar}
        aria-label="Fechar"
        autoFocus
      >
        <X size={24} strokeWidth={2} />
      </button>

      <button
        type="button"
        className="lightbox-seta lightbox-seta--esq"
        onClick={e => { e.stopPropagation(); aoNavegar(-1) }}
        aria-label="Foto anterior"
      >
        <ChevronLeft size={26} strokeWidth={2} />
      </button>

      <img
        className="lightbox-foto"
        src={foto.src}
        alt={foto.alt}
        onClick={e => e.stopPropagation()}
      />

      <button
        type="button"
        className="lightbox-seta lightbox-seta--dir"
        onClick={e => { e.stopPropagation(); aoNavegar(1) }}
        aria-label="Próxima foto"
      >
        <ChevronRight size={26} strokeWidth={2} />
      </button>

      <p className="lightbox-contador">{indice + 1} de {fotos.length}</p>
    </div>
  )
}

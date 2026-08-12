// Listas de fotos dos carrosséis. O padrão do import.meta.glob precisa ser
// literal, por isso cada galeria tem o seu próprio bloco.

const LARGURA = 720

function montar(modulos, descricoes, alturas = {}) {
  return Object.keys(modulos)
    .sort()
    .map(caminho => {
      const nome = caminho.split('/').pop().replace('.webp', '')
      return {
        nome,
        src: modulos[caminho],
        alt: descricoes[nome] || 'Foto do Salão da Preta',
        largura: LARGURA,
        // A altura vai declarada no <img> para o navegador reservar o espaço
        // antes da imagem baixar, senão o item do carrossel nasce sem largura.
        altura: alturas[nome] || 1280,
      }
    })
}

const modulosPortfolio = import.meta.glob('./assets/carrossel/*.webp', {
  eager: true,
  import: 'default',
})

const descricoesPortfolio = {
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

export const fotosPortfolio = montar(
  modulosPortfolio,
  descricoesPortfolio,
  { 'carrossel-05': 960 }
)

const modulosCurso = import.meta.glob('./assets/curso/*.webp', {
  eager: true,
  import: 'default',
})

const descricoesCurso = {
  'curso-01': 'Jô durante uma aula, anotando junto com uma aluna',
  'curso-02': 'Jô demonstrando técnica de corte em cabeça de treino',
  'curso-03': 'Jô no salão, com os certificados da equipe ao fundo',
  'curso-04': 'Jô mostrando o corte em cabelos com curvatura',
  'curso-05': 'Jô modelando os fios durante a demonstração',
  'curso-06': 'Jô explicando o corte passo a passo',
}

export const fotosCurso = montar(modulosCurso, descricoesCurso)

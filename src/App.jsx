import { useEffect } from 'react'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Reconhecimento from './components/Reconhecimento'
import Servicos from './components/Servicos'
import Curso from './components/Curso'
import Depoimentos from './components/Depoimentos'
import Portfolio from './components/Portfolio'
import Redes from './components/Redes'
import Agendamento from './components/Agendamento'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

export default function App() {
  // Altere para false para ocultar o site e exibir apenas a tela 404
  const showSite = true;

  useEffect(() => {
    if (!showSite) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [showSite]);

  if (!showSite) {
    return <NotFound />;
  }

  return (
    <>
      <Hero />
      
      {/* ─── WAVE DIVIDER ─── */}
      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="60" style={{ display: 'block' }}>
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#FBF6EE" />
        </svg>
      </div>

      <Sobre />
      <Reconhecimento />
      <Servicos />
      <Curso />
      <Depoimentos />
      <Portfolio />
      <Redes />
      <Agendamento />
      <Footer />
    </>
  )
}

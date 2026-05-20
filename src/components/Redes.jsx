export default function Redes() {
  return (
    <section className="redes" id="redes">
      <div className="redes-inner fade-up">
        <p className="section-label text-center">Nos acompanhe</p>
        <div className="ornament"></div>
        <h2 className="section-title text-center">Conecte-se com<br />o <em>Salão da Preta</em></h2>

        <div className="redes-cards">
          {/* Instagram */}
          <a href="https://www.instagram.com/salao_da_preta/" target="_blank" rel="noopener noreferrer" className="rede-card">
            <div className="rede-icon" style={{ background: '#fde8d8' }}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#c45d2e" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.5" stroke="#c45d2e" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1" fill="#c45d2e" />
              </svg>
            </div>
            <h3>@salao_da_preta</h3>
            <p>19k seguidores · Fotos, vídeos e inspirações</p>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@salao_da_preta?_t=zm-8vj6vytm5v0&_r=1" target="_blank" rel="noopener noreferrer" className="rede-card">
            <div className="rede-icon" style={{ background: '#f1f1f1' }}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12a4 4 0 1 0 4 4V4h3.5c.3 1.5 1.5 2.5 3 2.5V9c-1.5 0-2.8-.8-3.5-2v8a7.5 7.5 0 1 1-7.5-7.5v3.5a4 4 0 0 0 .5 7.9z" fill="#111" />
              </svg>
            </div>
            <h3>TikTok</h3>
            <p>Dicas rápidas e transformações incríveis</p>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/558698352282" target="_blank" rel="noopener noreferrer" className="rede-card">
            <div className="rede-icon" style={{ background: '#e4f7e8' }}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#25a244" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>WhatsApp</h3>
            <p>Fale diretamente e agende seu horário</p>
          </a>
        </div>
      </div>
    </section>
  )
}

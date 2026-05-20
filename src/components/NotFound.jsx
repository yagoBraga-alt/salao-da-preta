import { HelpCircle, Home } from 'lucide-react';

export default function NotFound() {
  const handleGoHome = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon-wrapper">
          <HelpCircle size={48} strokeWidth={1.5} />
        </div>
        <h1>404</h1>
        <h2>Página Não Encontrada</h2>
        <p>
          O caminho que você tentou acessar não foi encontrado ou não existe mais. 
          Que tal voltar para o início e agendar um cuidado especial para seus cachos?
        </p>
        <a href="/" onClick={handleGoHome} className="btn-primary not-found-btn">
          <Home size={18} className="btn-icon" />
          Voltar para o Início
        </a>
      </div>
    </div>
  );
}

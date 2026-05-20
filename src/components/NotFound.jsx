export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      color: '#374151',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      margin: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{
          margin: '0 20px 0 0',
          padding: '0 20px 0 0',
          fontSize: '24px',
          fontWeight: 600,
          borderRight: '1px solid #d1d5db'
        }}>404</h1>
        <h2 style={{
          fontSize: '14px',
          fontWeight: 400,
          margin: 0
        }}>Esta página não foi encontrada.</h2>
      </div>
    </div>
  );
}

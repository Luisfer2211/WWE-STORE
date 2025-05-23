import { Navbar } from './components/Navbar';

function App() {
  return (
    <div style={{ 
      background: '#122112', 
      minHeight: '100vh', 
      color: 'white',
      width: '100%',
      margin: 0,
    }}>
      <Navbar />
      
      {/* Contenedor de productos responsive */}
      <div style={{
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        '@media (max-width: 768px)': {
          gridTemplateColumns: '1fr'
        }
      }}>
        {/* Ejemplo de producto */}
        <div style={{ background: '#254625', padding: '15px', borderRadius: '8px' }}>
          <h3>Camiseta de John Cena</h3>
          <p>$24.99</p>
        </div>
        
        {/* Repite más productos aquí */}
      </div>
    </div>
  );
}

export default App;
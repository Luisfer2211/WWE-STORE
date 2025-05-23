export function Navbar() {
  return (
    <header style={{
      background: '#122112',
      padding: '10px 5%',
      borderBottom: '1px solid #254625',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%', // Cambia de 100vw a 100%
      boxSizing: 'border-box' // ¡IMPORTANTE!
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="24" height="24" viewBox="0 0 48 48" fill="white">
          <path d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"/>
        </svg>
        <h2 style={{ color: 'white', margin: 0 }}>WWE Store</h2>
      </div>

      {/* Menú (aparece solo en desktop) */}
      <nav style={{ 
        display: 'flex', 
        gap: '20px',
        '@media (max-width: 768px)': {
          display: 'none'
        }
      }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Hombres</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Mujeres</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Niños</a>
      </nav>

      {/* Botón del carrito + hamburguesa (mobile) */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {/* Icono hamburguesa (solo mobile) */}
        <button style={{ 
          background: 'transparent', 
          border: 'none',
          display: 'none',
          '@media (max-width: 768px)': {
            display: 'block'
          }
        }}>
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>

        {/* Botón carrito */}
        <button style={{
          background: '#254625',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '8px',
          display: 'flex',
          gap: '5px'
        }}>
          <svg width="20" height="20" fill="white" viewBox="0 0 256 256">
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87Z"/>
          </svg>
          <span style={{ '@media (max-width: 768px)': { display: 'none' } }}>
            Carrito
          </span>
        </button>
      </div>
    </header>
  );
}
import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import ProductCard from './components/ProductCard';
import { useDiscountedProducts } from './contexts/DiscountContext';
import CartSidebar from './components/CartSidebar';
import { useCart } from './contexts/useCart';
import { toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import DetalleProducto from './pages/DetalleProducto';
import Cart from './pages/Cart';
import { useFavorites } from './contexts/FavoritesContext'; // 👈 usar el contexto real

function App() {
  const products = useDiscountedProducts();
  const { addToCart, total, cart } = useCart();
  const { isFavorite } = useFavorites(); // 👈 acceder favoritos globales

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem && existingItem.quantity >= 9) {
      toast.error('No puedes agregar más de 9 unidades de este producto.');
      return;
    }

    const newTotal = total + product.price;
    if (newTotal > 999.99) {
      toast.error('ERROR: El total no puede exceder $999.99');
      return;
    }

    const wasAdded = addToCart(product);
    if (wasAdded) {
      toast.success(`${product.name} añadido al carrito`, { theme: 'dark' });
    }
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'favoritos') {
      return products.filter(p => isFavorite(p.id)); // 👈 filtro real de favoritos
    }
    if (!selectedCategory) return products;
    return products.filter(p => p.category.includes(selectedCategory));
  }, [selectedCategory, products, isFavorite]);

  return (
    <div style={{
      background: '#122112',
      minHeight: '100vh',
      color: 'white',
      width: '100%',
      margin: 0,
      padding: 0,
      overflowX: 'hidden'
    }}>
      <Navbar onFilter={setSelectedCategory} selectedCategory={selectedCategory} />
      <CartSidebar />

      <Routes>
        <Route path="/" element={
          <div style={{
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        } />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

// src/contexts/CartContext.jsx
import React, { 
  createContext,
  useState,
  useCallback,
  useMemo
} from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const addToCart = useCallback((product) => {
  let feedback = { added: false, error: '', name: product.name };

  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === product.id);
    const total = prevCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const projectedTotal = total + product.price;

    if (projectedTotal > 999.99) {
      feedback = { added: false, error: 'El total excede $999.99' };
      return prevCart;
    }

    if (existingItem) {
      if (existingItem.quantity >= 9) {
        feedback = { added: false, error: 'Cantidad máxima alcanzada' };
        return prevCart;
      }

      feedback = { added: true, name: product.name };
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      feedback = { added: true, name: product.name };
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });

  return feedback;
}, []);



  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, newQuantity) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, Math.min(newQuantity, 9)) }
          : item
      );

      const newTotal = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      if (newTotal > 999.99) {
        toast.error("ERROR: El total excede $999.99");
        return prevCart; // NO aplicar el cambio
      }

      return updatedCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const total = useMemo(() => {
    const t = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return parseFloat(t.toFixed(2));
  }, [cart]);

  const value = {
    cart,
    total,
    isSidebarOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleSidebar,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

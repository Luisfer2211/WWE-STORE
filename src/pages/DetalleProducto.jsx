import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDiscountedProducts } from '../contexts/DiscountContext'; // 👈 cambio aquí
import { useCart } from '../contexts/useCart';
import { toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';
import './Styles/DetalleProducto.css';
import DiscountPrice from '../components/DiscountPrice';

const DetalleProducto = () => {
  const { id } = useParams();
  const products = useDiscountedProducts(); // 👈 ahora usas los productos con descuento
  const product = products.find(p => p.id === Number(id));
  const { addToCart, total, cart } = useCart();

  const [cantidad, setCantidad] = useState(1);
  const [ratings, setRatings] = useState([...product.ratings]);
  const [userRating, setUserRating] = useState(0);

  const averageRating = (ratings.reduce((acc, r) => acc + r, 0) / ratings.length).toFixed(1);

  const handleCantidad = (tipo) => {
    setCantidad(prev => {
      if (tipo === 'sumar' && prev < 9) return prev + 1;
      if (tipo === 'restar' && prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleAgregar = () => {
    const existingItem = cart.find(item => item.id === product.id);
    const existingQty = existingItem?.quantity || 0;

    if (existingQty + cantidad > 9) {
      toast.error('No puedes agregar más de 9 unidades.');
      return;
    }

    const newTotal = total + product.price * cantidad;
    if (newTotal > 999.99) {
      toast.error('ERROR: El total no puede exceder $999.99');
      return;
    }

    for (let i = 0; i < cantidad; i++) {
      addToCart(product);
    }

    toast.success(`${product.name} añadido al carrito`, { theme: 'dark' });
  };

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="detalle-container">
      <img src={product.image} alt={product.name} className="detalle-imagen" />
      <div className="detalle-info">
        <h2>{product.name}</h2>

        {/* ✅ Usa el componente para mostrar precio con descuento (si lo tiene) */}
        <DiscountPrice 
          price={product.price} 
          discount={product.descuento} 
          originalPrice={product.precioOriginal} 
        />

        <div className="rating-section">
          <p>Promedio: {averageRating} / 5</p>
          <div className="estrellas">
            {[1, 2, 3, 4, 5].map(n => (
              <FaStar
                key={n}
                size={24}
                onClick={() => {
                  setRatings([...ratings, n]);
                  setUserRating(n);
                }}
                color={n <= userRating ? 'gold' : 'gray'}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          {userRating > 0 && <small>Tu calificación fue de {userRating} estrella{userRating > 1 && 's'}</small>}
        </div>

        <div className="contador">
          <button onClick={() => handleCantidad('restar')}>-</button>
          <span>{cantidad}</span>
          <button onClick={() => handleCantidad('sumar')}>+</button>
        </div>

        <button className="agregar-btn" onClick={handleAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetalleProducto;

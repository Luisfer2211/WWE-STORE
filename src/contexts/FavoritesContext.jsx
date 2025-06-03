import { createContext, useContext, useState, useCallback } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = useCallback((product) => {
    setFavorites(prev => {
      const updated = new Set(prev);
      if (updated.has(product.id)) {
        updated.delete(product.id);
      } else {
        updated.add(product.id);
      }
      return updated;
    });
  }, []);

  const isFavorite = useCallback((productId) => {
    return favorites.has(productId);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

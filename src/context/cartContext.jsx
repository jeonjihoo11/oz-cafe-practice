import { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <CounterContext.Provider value={[cart, setCart]}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CounterContext);
}

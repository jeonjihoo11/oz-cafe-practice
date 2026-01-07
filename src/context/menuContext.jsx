import { createContext, useContext, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(data.menu);

  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {children}
    </MenuContext.Provider>
  );
}
export function useMenuContext() {
  return useContext(MenuContext);
}

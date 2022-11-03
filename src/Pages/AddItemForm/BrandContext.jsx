import React, { useState, createContext } from "react";

const BrandContext = createContext();

export function BrandProvider({ children }) {
  const [brands, setBrands] = useState([]);

  return (
    <BrandContext.Provider
      value={{ brands, setBrands }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export default BrandContext;

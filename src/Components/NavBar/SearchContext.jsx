import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchData, setSearchData] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        searchData,
        setSearchData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;

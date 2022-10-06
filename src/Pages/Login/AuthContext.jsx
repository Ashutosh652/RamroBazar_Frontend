import React, { useState, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  return (
    <AuthContext.Provider
      value={{ loggedInUser, setLoggedInUser, accessToken, setAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

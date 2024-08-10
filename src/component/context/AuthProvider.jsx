import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialUser = localStorage.getItem("user");
  const [user, setUser] = useState(
    initialUser ? JSON.parse(initialUser) : undefined
  );

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

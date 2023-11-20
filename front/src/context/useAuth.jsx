import { createContext, useState, useContext, useEffect } from "react";
import users from "../mocks/users.json";
import { useStorage } from "../utils/useStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(null);
  const [ready, setReady] = useState(false);
  const { setItem, removeItem, getItem } = useStorage();
  const logar = (email, password) => {
    const user = users.data.find((value) => {
      return email == value.email && password == value.password;
    });
    if (!user) {
      return false;
    }
    setLoggedUser(user);
    setItem("loggedUser", user);
    return true;
  };

  const deslogar = () => {
    setLoggedUser(null);
    removeItem("loggedUser");
  };

  useEffect(() => {
    const returItem = getItem("loggedUser");
    setLoggedUser(returItem);
    setReady(true);
  }, []);

  return (
    <AuthContext.Provider value={{ loggedUser, logar, deslogar, ready }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

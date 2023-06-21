import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { User, onAuthStateChanged } from "firebase/auth";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({
  currentUser: null as User | null,
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubrscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubrscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

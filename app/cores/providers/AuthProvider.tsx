import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { Context } from 'vm';
import { LoginData } from '../types/types';

//TODO:I am using useState for define the global app state. it should be turn to useReducer

export type AuthContextType<T> = {
  auth?: Partial<T>;
  setAuth?: Dispatch<SetStateAction<Partial<T>>>;
};

export const AuthContext = createContext<AuthContextType<LoginData>>({});

export function AuthProvider({ children }: PropsWithChildren) {
  const [auth, setAuth] = useState<Partial<LoginData>>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

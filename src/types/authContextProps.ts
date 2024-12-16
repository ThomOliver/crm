import { User } from "firebase/auth";

export interface AuthContextProps {
  register: (name: string, email: string, password: string, confirmPassword: string) => Promise<void>;
  isSubmitting: boolean;
  isLoggedIn: boolean;
  user: User | null;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>; 
}
export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (username: string, password: string) => Promise<boolean>;
  username: string | null;
  token: string | null;
}

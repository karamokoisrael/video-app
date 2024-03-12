

export type User = {
  id: number;
  email: string;
  password: string;
  token: string;
  refreshToken: string;
  tokenExpiration: string;
};

export type UserStore = {
  hydrated: boolean;
  user: User;
  setUser: (user: Partial<User>) => void;
  logout: () => void;
};

import { User } from "../user/user.model";


export type PasswordForgottenRequest = {
  email: string;
}

export type LoginRequest = {
  email?: string;
  username?: string;
  password: string;
  phone?: string;
  code?: string;
};

export type RegisterRequestDto = {
  passwordConfirmation: string;
};

export type RegisterRequest = {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  language: string;
  password: string;
  parentReferalToken?: string;
};

export type RegisterResponse = null;

export type LogoutRequest = {
  refreshToken: string;
};

export type LoginResponse = User;

export type OtpRequest = {
  email: string;
  password: string;
};

export type PasswordResetLinkRequest = {
  email: string;
};

export type PasswordResetRequest = {
  user_id: string;
  old_password: string;
  new_password: string;
  otp?: string;
};

export interface Tokens {
  token: string;
  tokenExpiration: Date;
  refreshToken: string;
  refreshTokenExpiration: Date;
}

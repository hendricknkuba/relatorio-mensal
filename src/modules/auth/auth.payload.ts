export interface AuthPayload {
  sub: number;
  email: string;
  name: string;
  role: string;
  isPioneer: boolean;
  iat: number;
  exp: number;
}

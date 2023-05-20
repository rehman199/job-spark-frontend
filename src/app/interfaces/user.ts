export interface IUserToken {
  uid: string;
  client: string;
  access_token: string;
  expiry: number;
  token_type: string;
}

export interface TUser {
  allow_password_change: boolean;
  email: string;
  id: number;
  name: string;
  provider: string;
  uid: string;
}

export interface IUserState {
  user: TUser | null;
  loggedIn: boolean;
  tokens: IUserToken | null;
}

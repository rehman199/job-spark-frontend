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
}

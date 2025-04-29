export type Setter = (value: string) => void;

export interface IPropsLogin {
  setEmail: Setter;
  setPassword: Setter;
  navigate: Setter;
}

export interface IPropsRegister extends IPropsLogin {
  setRepeatPassword: Setter;
  setFirstName: Setter;
  setUserName: Setter;
}

export interface IAuthState {
  user: IPublicUser;
  isLogged: boolean;
}

interface IPublicUser {
  id: number | null;
  firstName: string;
  userName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchlist: IWatchList[];
}

interface IWatchList {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}

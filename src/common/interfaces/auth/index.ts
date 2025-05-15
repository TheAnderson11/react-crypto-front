import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { NavigateFunction } from 'react-router-dom';

export type Setter = (value: string) => void;

export interface IPropsAuth {
  navigate: NavigateFunction;
  register: UseFormRegister<ILoginForm | IRegisterForm>;
  errors: FieldErrors<IRegisterForm>;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm extends ILoginForm {
  firstName: string;
  userName: string;
  repeatPassword: string;
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

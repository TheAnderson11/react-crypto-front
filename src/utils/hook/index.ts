import { useDispatch, useSelector } from 'react-redux';
import { TypedUseSelectorHook } from './../../../node_modules/react-redux/src/types';
import { AppDispatch, RootState } from './../../store/index';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const { isLogged } = useAppSelector(state => state.auth);

  return isLogged;
};

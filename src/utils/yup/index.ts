import * as yup from 'yup';
import { ILoginForm, IRegisterForm } from '../../common/types/auth';

export const loginSchema: yup.ObjectSchema<ILoginForm> = yup.object().shape({
  email: yup.string().email('Невалидный email').required('Email обязателен'),
  password: yup
    .string()
    .min(4, 'Минимум 4 символа')
    .required('Пароль обязателен')
    .matches(
      /^[^A-Z]*[A-Z][a-z]*$/,
      'Пароль должен содержать хотя бы одну заглавную букву и символ',
    ),
});

export const registerSchema: yup.ObjectSchema<IRegisterForm> = yup.object().shape({
  firstName: yup.string().required('firstName обязателен'),
  userName: yup.string().required('userName обязателен'),
  email: yup.string().email('Невалидный email').required('Email обязателен'),
  password: yup
    .string()
    .min(4, 'Минимум 4 символа')
    .required('Пароль обязателен')
    .matches(
      /^[^A-Z]*[A-Z][a-z]*$/,
      'Пароль должен содержать хотя бы одну заглавную букву и символ',
    ),
  repeatPassword: yup
    .string()
    .required('Пароль обязателен')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

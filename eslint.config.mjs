import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // не нужен import React с React 17+
      'react/prop-types': 'off', // отключаем PropTypes, если используем TypeScript
      'prettier/prettier': 'error', // Prettier ошибки = ESLint ошибки
      'react-hooks/rules-of-hooks': 'error', // хуки на месте
      'react-hooks/exhaustive-deps': 'warn', // зависимости хуков
      'import/order': ['warn', { 'newlines-between': 'always' }], // красивые импорты
    },
    settings: {
      react: {
        version: 'detect', // автоматически определяет версию React
      },
    },
  },
];

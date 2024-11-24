import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import tailwindcss from 'eslint-plugin-tailwindcss' // Import Tailwind CSS plugin

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss: tailwindcss, // Add Tailwind CSS plugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'tailwindcss/no-custom-classname': 'off', // Tailwind CSS rule to allow custom class names

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // React rules
      'react/jsx-key': 'warn',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-uses-react': 'off', // For React 17+ JSX runtime
      'react/react-in-jsx-scope': 'off', // For React 17+ JSX runtime
    },
  }
)

import './styles/fonts.css'
import './styles/theme.css'
import '../src/styles/utils.css'
import '../src/styles/grid.css'
import '../src/styles/flex.css'

import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/theme-context.tsx' // Ensure the correct import path

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)

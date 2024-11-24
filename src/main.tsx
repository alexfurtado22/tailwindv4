import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts.css'
import './styles/theme.css'
import '../src/styles/utils.css'
import '../src/styles/grid.css'
import '../src/styles/flex.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

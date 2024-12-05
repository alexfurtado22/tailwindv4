import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark') // Default to dark

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const preferredTheme = savedTheme || 'dark' // Set dark as the default theme if none is found
    setTheme(preferredTheme as 'light' | 'dark')

    // Apply the theme to the document
    document.documentElement.classList.add(preferredTheme)
  }, [])

  useEffect(() => {
    // When theme changes, update localStorage and document class
    if (theme) {
      localStorage.setItem('theme', theme)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

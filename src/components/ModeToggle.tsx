import { Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-context'
import Button from './ui/Button'

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <Button
      onClick={toggleTheme}
      size='md'
      variant='ghost'
      theme={theme} // Pass theme to Button
      className='flex items-center rounded-lg'
    >
      {theme === 'dark' ? (
        <Moon className='h-5 w-5 text-slate-400' />
      ) : (
        <Sun className='h-5 w-5 text-orange-400' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

export default ModeToggle

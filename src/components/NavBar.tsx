import ModeToggle from './ModeToggle'
import { XIcon as LucideXIcon, MenuIcon as LucideMenuIcon } from 'lucide-react'
import { useState } from 'react'

// Rename local components to avoid conflicts
const LocalMenuIcon = () => <LucideMenuIcon className='text-muted-foreground size-6' />
const LocalXIcon = () => <LucideXIcon className='text-muted-foreground size-6' />

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen)

  const navItems = ['Hero', 'About', 'Features', 'Story', 'Contact']

  return (
    <header className='holder col-span-3 px-4 py-3 shadow-sm'>
      <nav className='flex items-center justify-between'>
        <img src='/img/logo.png' alt='logo' className='w-10' />

        {/* Desktop navigation items */}
        <div className='flex items-center justify-center gap-6 max-md:hidden'>
          {navItems.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
              {item}
            </a>
          ))}
          <ModeToggle />
        </div>

        <div className='hidden justify-end max-md:flex max-md:flex-col'>
          <button
            type='button'
            onClick={toggleNavbar}
            aria-label={mobileDrawerOpen ? 'Close menu' : 'Open menu'}
            title={mobileDrawerOpen ? 'Close menu' : 'Open menu'}
            className='focus:outline-none'
          >
            {mobileDrawerOpen ? <LocalXIcon /> : <LocalMenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation drawer */}
      {mobileDrawerOpen && (
        <div className='mt-4 hidden max-md:block'>
          <div className='flex flex-col gap-4'>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className='hover:text-primary flex flex-col items-center gap-4 text-xs'
                onClick={toggleNavbar} // Close the drawer on link click
              >
                {item}
              </a>
            ))}
            <div className='flex items-center justify-center'>
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default NavBar

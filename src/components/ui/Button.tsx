import React from 'react'
import clsx from 'clsx'

interface ButtonProps {
  id?: string // Optional id for the button
  size?: 'xs' | 'sm' | 'md' | 'lg' // Include 'xs' here
  variant?: 'ghost' | 'solid' | 'outline'
  theme?: 'dark' | 'light'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  id,
  size = 'md',
  variant = 'solid',
  theme = 'light',
  leftIcon,
  rightIcon,
  onClick,
  children,
  className = '',
}) => {
  const baseClass =
    'relative z-10 w-fit overflow-hidden rounded-full flex items-center justify-center'

  const sizeClasses = clsx(
    size === 'xs' && 'text-xs py-1 px-2',
    size === 'sm' && 'text-sm py-1 px-2',
    size === 'lg' && 'text-lg py-3 px-6',
    size === 'md' && 'text-base py-2 px-4'
  )

  const iconSizeClasses = clsx(
    size === 'xs' && 'h-3 w-3',
    size === 'sm' && 'h-5 w-5',
    size === 'lg' && 'h-7 w-7',
    size === 'md' && 'h-6 w-6'
  )

  const variantClasses = clsx(
    variant === 'ghost' && 'bg-transparent border-transparent',
    variant === 'outline' &&
      (theme === 'dark'
        ? 'border border-slate-800 text-slate-600'
        : 'border border-slate-300 text-gray-600'),
    variant === 'solid' && 'bg-blue-500 text-white'
  )

  return (
    <button
      id={id}
      type='button'
      onClick={onClick}
      className={clsx(baseClass, sizeClasses, variantClasses, className)}
    >
      {leftIcon && (
        <span className={clsx('mr-2 flex items-center', iconSizeClasses)}>{leftIcon}</span>
      )}
      {children}
      {rightIcon && (
        <span className={clsx('ml-2 flex items-center', iconSizeClasses)}>{rightIcon}</span>
      )}
    </button>
  )
}

export default Button

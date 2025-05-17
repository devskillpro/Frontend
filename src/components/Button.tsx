'use client'
import React from 'react'

interface ButtonProps {
  label?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  icon?: React.ElementType
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  children
}) => {
  const baseStyles = `px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2`
  const variants = {
    primary: `bg-black text-white hover:bg-[#D4AF37]`,
    secondary: `bg-white text-black border border-black`,
    outline: `bg-transparent border border-white text-white hover:bg-white hover:text-black`,
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="text-base" />}
      {/* Use children if provided, fallback to label */}
      {children || label}
      {Icon && iconPosition === 'right' && <Icon className="text-base" />}
    </button>
  )
}

export default Button

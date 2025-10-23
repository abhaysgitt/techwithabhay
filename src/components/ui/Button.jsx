'use client'
import { forwardRef } from 'react'
import { useTheme } from 'next-themes'

const Button = forwardRef(({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    disabled = false,
    onClick,
    href,
    target,
    rel,
    ...props 
}, ref) => {
    const { theme } = useTheme()

    const baseStyles = `
        inline-flex items-center justify-center font-bold rounded-2xl
        transition-all duration-500 ease-in-out transform group
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        relative overflow-hidden
    `

    const sizeStyles = {
        sm: 'px-6 py-3 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-10 py-5 text-lg',
        xl: 'px-12 py-6 text-xl'
    }

    const variantStyles = {
        primary: `bg-gradient-to-r from-blue-600 to-purple-600 text-white
                 hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-xl
                 focus:ring-blue-500 shadow-lg shadow-blue-500/25
                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
                 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000`,
        
        secondary: `bg-white dark:bg-gray-800 
                   text-gray-900 dark:text-white 
                   border-2 border-gray-300 dark:border-gray-700
                   hover:bg-gray-50 dark:hover:bg-gray-700 
                   hover:border-blue-500 dark:hover:border-blue-500 
                   hover:scale-105 hover:shadow-lg
                   focus:ring-blue-500 dark:focus:ring-gray-500
                   before:absolute before:inset-0 before:bg-gradient-to-r 
                   before:from-gray-200/0 before:via-gray-200/30 before:to-gray-200/0
                   dark:before:from-white/0 dark:before:via-white/10 dark:before:to-white/0
                   before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000`,
        
        outline: `bg-transparent 
                 text-blue-600 dark:text-blue-400 
                 border-2 border-blue-600 dark:border-blue-400
                 hover:bg-blue-600 dark:hover:bg-blue-400 
                 hover:text-white dark:hover:text-gray-900 
                 hover:scale-105 hover:shadow-lg
                 focus:ring-blue-600 dark:focus:ring-blue-400
                 before:absolute before:inset-0 before:bg-gradient-to-r 
                 before:from-white/0 before:via-white/30 before:to-white/0
                 dark:before:from-white/0 dark:before:via-white/20 dark:before:to-white/0
                 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000`,
        
        ghost: `bg-transparent 
               text-gray-700 dark:text-gray-300 
               hover:bg-gray-100 dark:hover:bg-gray-800 
               hover:text-gray-900 dark:hover:text-white
               hover:scale-105 focus:ring-gray-500
               before:absolute before:inset-0 before:bg-gradient-to-r 
               before:from-gray-200/0 before:via-gray-200/20 before:to-gray-200/0
               dark:before:from-white/0 dark:before:via-white/10 dark:before:to-white/0
               before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000`,
        
        gradient: `bg-gradient-to-r 
                  from-blue-600 to-cyan-600 dark:from-cyan-600 dark:to-blue-600 
                  text-white
                  hover:from-blue-500 hover:to-cyan-500 dark:hover:from-cyan-500 dark:hover:to-blue-500 
                  hover:scale-105 hover:shadow-xl
                  focus:ring-blue-500 shadow-lg 
                  shadow-blue-500/25 dark:shadow-cyan-500/25
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
                  before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000`,
        
        success: `bg-gradient-to-r from-green-500 to-emerald-600 text-white
                 hover:from-green-400 hover:to-emerald-500 hover:scale-105 hover:shadow-xl
                 focus:ring-green-500 shadow-lg shadow-green-500/25
                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
                 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000`,
        
        danger: `bg-gradient-to-r from-red-500 to-pink-600 text-white
                hover:from-red-400 hover:to-pink-500 hover:scale-105 hover:shadow-xl
                focus:ring-red-500 shadow-lg shadow-red-500/25
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000`
    }

    const combinedClassName = `
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
    `.trim().replace(/\s+/g, ' ')

    const Component = href ? 'a' : 'button'

    return (
        <Component
            ref={ref}
            className={combinedClassName}
            onClick={onClick}
            disabled={disabled}
            href={href}
            target={target}
            rel={rel}
            {...props}
        >
            <span className="relative z-10">
                {children}
            </span>
        </Component>
    )
})

Button.displayName = 'Button'

export default Button

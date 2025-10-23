"use client";

import { useEffect, useState } from 'react';

function GridBackground({ theme = 'dark', colorScheme = 'blue' }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Color configuration based on scheme
    const colors = {
    blue: {
        main: { light: 'rgba(59, 130, 246, 0.25)', dark: 'rgba(59, 130, 246, 0.25)' },
        secondary: { light: 'rgba(139, 92, 246, 0.3)', dark: 'rgba(139, 92, 246, 0.3)' },
        spotlight: { 
            light: 'rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.06), transparent 20%',
            dark: 'rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.08), transparent 20%'
        },
        dots: 'bg-blue-600/50 dark:bg-blue-400/40'
    },
    pink: {
        main: { light: 'rgba(236, 72, 153, 0.25)', dark: 'rgba(239, 68, 68, 0.25)' },
        secondary: { light: 'rgba(219, 39, 119, 0.3)', dark: 'rgba(220, 38, 38, 0.3)' },
        spotlight: { 
            light: 'rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.06), transparent 20%',
            dark: 'rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.08), transparent 20%'
        },
        dots: 'bg-pink-600/50 dark:bg-red-600/50'
    },
    teal: {
        main: { light: 'rgba(20, 184, 166, 0.25)', dark: 'rgba(13, 148, 136, 0.25)' },
        secondary: { light: 'rgba(45, 212, 191, 0.3)', dark: 'rgba(94, 234, 212, 0.3)' },
        spotlight: { 
            light: 'rgba(20, 184, 166, 0.1), rgba(45, 212, 191, 0.06), transparent 70%',
            dark: 'rgba(13, 148, 136, 0.15), rgba(94, 234, 212, 0.08), transparent 70%'
        },
        dots: 'bg-teal-500/50 dark:bg-teal-300/40'
    },
    amber: {
        main: { light: 'rgba(245, 158, 11, 0.25)', dark: 'rgba(217, 119, 6, 0.25)' },
        secondary: { light: 'rgba(251, 191, 36, 0.3)', dark: 'rgba(252, 211, 77, 0.3)' },
        spotlight: { 
            light: 'rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.06), transparent 70%',
            dark: 'rgba(217, 119, 6, 0.15), rgba(252, 211, 77, 0.08), transparent 70%'
        },
        dots: 'bg-amber-500/50 dark:bg-amber-300/40'
    },
    emerald: {
        main: { light: 'rgba(16, 185, 129, 0.25)', dark: 'rgba(5, 150, 105, 0.25)' },
        secondary: { light: 'rgba(52, 211, 153, 0.3)', dark: 'rgba(110, 231, 183, 0.3)' },
        spotlight: { 
            light: 'rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.06), transparent 20%',
            dark: 'rgba(5, 150, 105, 0.15), rgba(110, 231, 183, 0.08), transparent 20%'
        },
        dots: 'bg-emerald-500/50 dark:bg-emerald-300/40'
    },
    indigo: {
        main: { light: 'rgba(99, 102, 241, 0.25)', dark: 'rgba(79, 70, 229, 0.25)' },
        secondary: { light: 'rgba(129, 140, 248, 0.3)', dark: 'rgba(165, 180, 252, 0.3)' },
        spotlight: { 
            light: 'rgba(99, 102, 241, 0.1), rgba(129, 140, 248, 0.06), transparent 20%',
            dark: 'rgba(79, 70, 229, 0.15), rgba(165, 180, 252, 0.08), transparent 20%'
        },
        dots: 'bg-indigo-500/50 dark:bg-indigo-300/40'
    },
    ocean: {
        main: { light: 'rgba(56, 189, 248, 0.25)', dark: 'rgba(14, 165, 233, 0.25)' },
        secondary: { light: 'rgba(125, 211, 252, 0.3)', dark: 'rgba(56, 189, 248, 0.3)' },
        spotlight: {
            light: 'rgba(56, 189, 248, 0.1), rgba(125, 211, 252, 0.06), transparent 20%',
            dark: 'rgba(14, 165, 233, 0.15), rgba(56, 189, 248, 0.08), transparent 20%'
        },
        dots: 'bg-sky-500/50 dark:bg-sky-300/40'
    },

    lavender: {
        main: { light: 'rgba(168, 85, 247, 0.25)', dark: 'rgba(147, 51, 234, 0.25)' },
        secondary: { light: 'rgba(192, 132, 252, 0.3)', dark: 'rgba(167, 139, 250, 0.3)' },
        spotlight: {
            light: 'rgba(168, 85, 247, 0.1), rgba(192, 132, 252, 0.06), transparent 20%',
            dark: 'rgba(147, 51, 234, 0.15), rgba(167, 139, 250, 0.08), transparent 20%'
        },
        dots: 'bg-purple-500/50 dark:bg-purple-300/40'
    },

    sunset: {
        main: { light: 'rgba(251, 113, 133, 0.25)', dark: 'rgba(244, 63, 94, 0.25)' },
        secondary: { light: 'rgba(253, 164, 175, 0.3)', dark: 'rgba(251, 113, 133, 0.3)' },
        spotlight: {
            light: 'rgba(251, 113, 133, 0.1), rgba(253, 164, 175, 0.06), transparent 70%',
            dark: 'rgba(244, 63, 94, 0.15), rgba(251, 113, 133, 0.08), transparent 70%'
        },
        dots: 'bg-rose-500/50 dark:bg-rose-300/40'
    },

    mint: {
        main: { light: 'rgba(110, 231, 183, 0.25)', dark: 'rgba(52, 211, 153, 0.25)' },
        secondary: { light: 'rgba(167, 243, 208, 0.3)', dark: 'rgba(110, 231, 183, 0.3)' },
        spotlight: {
            light: 'rgba(110, 231, 183, 0.1), rgba(167, 243, 208, 0.06), transparent 70%',
            dark: 'rgba(52, 211, 153, 0.15), rgba(110, 231, 183, 0.08), transparent 70%'
        },
        dots: 'bg-emerald-400/50 dark:bg-emerald-200/40'
    },

    aurora: {
        main: { light: 'rgba(6, 182, 212, 0.25)', dark: 'rgba(14, 165, 233, 0.25)' },
        secondary: { light: 'rgba(129, 140, 248, 0.3)', dark: 'rgba(147, 197, 253, 0.3)' },
        spotlight: {
            light: 'rgba(6, 182, 212, 0.1), rgba(129, 140, 248, 0.06), transparent 20%',
            dark: 'rgba(14, 165, 233, 0.15), rgba(147, 197, 253, 0.08), transparent 20%'
        },
        dots: 'bg-cyan-400/50 dark:bg-indigo-300/40'
    },

    gold: {
        main: { light: 'rgba(253, 224, 71, 0.25)', dark: 'rgba(202, 138, 4, 0.25)' },
        secondary: { light: 'rgba(250, 204, 21, 0.3)', dark: 'rgba(234, 179, 8, 0.3)' },
        spotlight: {
            light: 'rgba(253, 224, 71, 0.1), rgba(250, 204, 21, 0.06), transparent 70%',
            dark: 'rgba(202, 138, 4, 0.15), rgba(234, 179, 8, 0.08), transparent 70%'
        },
        dots: 'bg-yellow-500/50 dark:bg-yellow-300/40'
    },
    green: {
        main: { light: 'rgba(34, 197, 94, 0.25)', dark: 'rgba(22, 163, 74, 0.25)' },
        secondary: { light: 'rgba(74, 222, 128, 0.3)', dark: 'rgba(134, 239, 172, 0.3)' },
        spotlight: {
            light: 'rgba(34, 197, 94, 0.1), rgba(74, 222, 128, 0.06), transparent 20%',
            dark: 'rgba(22, 163, 74, 0.15), rgba(134, 239, 172, 0.08), transparent 20%'
        },
        dots: 'bg-green-500/50 dark:bg-green-300/40'
    },

    gray: {
        main: { light: 'rgba(107, 114, 128, 0.25)', dark: 'rgba(75, 85, 99, 0.25)' },
        secondary: { light: 'rgba(156, 163, 175, 0.3)', dark: 'rgba(107, 114, 128, 0.3)' },
        spotlight: {
            light: 'rgba(107, 114, 128, 0.1), rgba(156, 163, 175, 0.06), transparent 20%',
            dark: 'rgba(75, 85, 99, 0.15), rgba(107, 114, 128, 0.08), transparent 20%'
        },
        dots: 'bg-gray-500/50 dark:bg-gray-400/40'
    },

    red: {
        main: { light: 'rgba(239, 68, 68, 0.25)', dark: 'rgba(220, 38, 38, 0.25)' },
        secondary: { light: 'rgba(248, 113, 113, 0.3)', dark: 'rgba(252, 165, 165, 0.3)' },
        spotlight: {
            light: 'rgba(239, 68, 68, 0.1), rgba(248, 113, 113, 0.06), transparent 20%',
            dark: 'rgba(220, 38, 38, 0.15), rgba(252, 165, 165, 0.08), transparent 20%'
        },
        dots: 'bg-red-500/50 dark:bg-red-300/40'
    },

    yellow: {
        main: { light: 'rgba(250, 204, 21, 0.25)', dark: 'rgba(234, 179, 8, 0.25)' },
        secondary: { light: 'rgba(253, 224, 71, 0.3)', dark: 'rgba(250, 204, 21, 0.3)' },
        spotlight: {
            light: 'rgba(250, 204, 21, 0.1), rgba(253, 224, 71, 0.06), transparent 20%',
            dark: 'rgba(234, 179, 8, 0.15), rgba(250, 204, 21, 0.08), transparent 20%'
        },
        dots: 'bg-yellow-400/50 dark:bg-yellow-300/40'
    },

    purple: {
        main: { light: 'rgba(147, 51, 234, 0.25)', dark: 'rgba(126, 34, 206, 0.25)' },
        secondary: { light: 'rgba(167, 139, 250, 0.3)', dark: 'rgba(196, 181, 253, 0.3)' },
        spotlight: {
            light: 'rgba(147, 51, 234, 0.1), rgba(167, 139, 250, 0.06), transparent 70%',
            dark: 'rgba(126, 34, 206, 0.15), rgba(196, 181, 253, 0.08), transparent 70%'
        },
        dots: 'bg-purple-500/50 dark:bg-purple-300/40'
    },

    orange: {
        main: { light: 'rgba(249, 115, 22, 0.25)', dark: 'rgba(234, 88, 12, 0.25)' },
        secondary: { light: 'rgba(251, 146, 60, 0.3)', dark: 'rgba(253, 186, 116, 0.3)' },
        spotlight: {
            light: 'rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.06), transparent 70%',
            dark: 'rgba(234, 88, 12, 0.15), rgba(253, 186, 116, 0.08), transparent 70%'
        },
        dots: 'bg-orange-500/50 dark:bg-orange-300/40'
    }
};


    const currentColors = colors[colorScheme] || colors.blue;

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main Grid Pattern */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, ${theme === 'dark' ? currentColors.main.dark : currentColors.main.light} 1px, transparent 1px),
                        linear-gradient(to bottom, ${theme === 'dark' ? currentColors.main.dark : currentColors.main.light} 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite'
                }}
            />

            {/* Secondary Grid Pattern - Smaller */}
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, ${theme === 'dark' ? currentColors.secondary.dark : currentColors.secondary.light} 1px, transparent 1px),
                        linear-gradient(to bottom, ${theme === 'dark' ? currentColors.secondary.dark : currentColors.secondary.light} 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    animation: 'gridMove 30s linear infinite reverse'
                }}
            />

            {/* Mouse Follow Spotlight */}
            <div
                className="absolute pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
                        theme === 'dark' ? currentColors.spotlight.dark : currentColors.spotlight.light
                    })`,
                    width: '100%',
                    height: '100%',
                    transition: 'all 0.3s ease'
                }}
            />

            {/* Floating Dots */}
            <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${currentColors.dots}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* CSS Styles */}
            <style jsx>{`
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }

                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px) scale(1);
                        opacity: 0.3;
                    }
                    50% { 
                        transform: translateY(-20px) scale(1.2);
                        opacity: 0.8;
                    }
                }
            `}</style>
        </div>
    );
};

export default GridBackground;

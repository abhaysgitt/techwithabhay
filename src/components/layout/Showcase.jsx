'use client'
import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import GridBackground from '../ui/GridBackground'

const Showcase = () => {
    const { theme } = useTheme()
    

    return (
        <section id="project-showcase" className={`relative py-10 min-h-screen ${   theme === "dark" ? '60a5fa' : '#2563eb' }`}>
            <GridBackground theme={theme} colorScheme="aurora" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Projects Gallery
                    </h2>
                    <div className="w-24 h-1 mx-auto rounded-full bg-blue-600 dark:bg-blue-400" />
                </div>

                {/* Main Showcase Container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl backdrop-blur-lg border transition-all duration-300 
                               bg-white/30 dark:bg-black/20 border-white/20 dark:border-white/10  shadow-gray-500/20 dark:shadow-black/30">
               
                    <div className="flex items-center gap-4 md:gap-8 p-6 md:p-12">
                        {/* Left: Octocat - Hidden on mobile, smaller on tablet */}
                        <div className="hidden sm:block flex-shrink-0">
                            <Image
                                src="/img/octocat.png"
                                alt="GitHub Octocat"
                                width={250}
                                height={250}
                                className="object-contain w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
                                priority
                            />
                        </div>

                        {/* Right: Project Preview */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative group w-full max-w-2xl">
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                    <Image
                                        src="/img/gif/showcase.gif"
                                        alt="Project Showcase"
                                        width={1200}
                                        height={600}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        priority
                                        unoptimized
                                    />
                                    
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                </div>
                                
                                {/* Border glow */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center pb-12">
                        <Link 
                            href="/gallery"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 group relative overflow-hidden 
                                     bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-600 dark:to-blue-600 
                                     text-white hover:from-blue-500 hover:to-cyan-500 dark:hover:from-cyan-500 dark:hover:to-blue-500 
                                     shadow-lg shadow-blue-500/25 dark:shadow-cyan-500/25"
                        >
                            {/* Button background animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            
                            <span className="relative z-10">Explore All Projects</span>
                            <ExternalLink className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                        
                        <p className="text-xl mt-4 text-gray-600 dark:text-gray-100">
                            Discover interactive project galleries and detailed case studies
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase

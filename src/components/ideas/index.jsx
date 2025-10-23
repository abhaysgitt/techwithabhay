'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaLightbulb } from 'react-icons/fa'
import GridBackground from '../ui/GridBackground'
import Dock from '../dock/Dock'
import Footer from '../layout/Footer'
import WaveBackground from '../ui/WaveBackground'
import { IDEAS_NAVIGATION_ITEMS } from '../../config/navigation'
import { LoadingSpinner } from "../ui/loading";

export default function IdeasPageClient() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <LoadingSpinner />
            </div>
        )
    }

    return (
        <>
            {/* Ideas Page Section */}
            <div className="relative min-h-screen bg-gray-100 dark:bg-gray-950">
                {/* Grid Background Component */}
                <GridBackground theme={theme} colorScheme="pink" />

                {/* Dock Navigation */}
                <Dock
                    theme={theme}
                    setTheme={setTheme}
                    activeSection={null}
                    scrollToSection={() => { }}
                    navigationItems={IDEAS_NAVIGATION_ITEMS}
                />

                {/* Main Content */}
                <div className="relative z-20 flex flex-col justify-center px-6 py-8" style={{ minHeight: 'calc(100vh - 120px)' }}>
                    <div className="container max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <FaLightbulb className="text-4xl text-amber-500 dark:text-amber-400" />
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                                    Future Ideas
                                </h1>
                            </div>
                            <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
                                ✨ Exploring innovative concepts and upcoming project possibilities
                            </p>
                        </div>

                        {/* Ideas Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Digital Art Store */}
                            <div className="group rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl bg-white shadow-md dark:bg-gray-900 dark:shadow-2xl flex flex-col min-h-[500px]">
                                <div className="flex items-start justify-between mb-4 md:mb-6 min-h-[80px]">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-100 dark:bg-purple-900/50 transition-all duration-300 group-hover:scale-110">
                                                🎨
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                                Idea 1:
                                            </h3>
                                            <p className="text-sm text-purple-600 dark:text-purple-400">
                                              •upcomming •upcomming •upcomming
                                            </p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                                        Concept
                                    </span>
                                </div>

                                <div className="flex-1 mb-4 md:mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        <strong>Details</strong> of Idea 1.. </p>

                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Feature 1</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">upcomming</p>
                                        </div>

                                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Feature 2</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">upcomming</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs rounded-full bg-yellow-500 text-white font-semibold">GenAi</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-black text-white">GenAi</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">GenAi</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-orange-500 text-white">GenAi</span>
                                </div>
                            </div>

                            {/* Language Testing Hub */}
                            <div className="group rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl bg-white shadow-md dark:bg-gray-900 dark:shadow-2xl flex flex-col min-h-[500px]">
                                <div className="flex items-start justify-between mb-4 md:mb-6 min-h-[80px]">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 transition-all duration-300 group-hover:scale-110">
                                                🌐
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                                Idea 2:
                                            </h3>
                                            <p className="text-sm text-blue-600 dark:text-blue-400">
                                                •upcomming •upcomming •upcomming
                                            </p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                                        Enterprise
                                    </span>
                                </div>

                                <div className="flex-1 mb-4 md:mb-6">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        <strong>Details </strong> of idea 2.. </p>

                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Feature 1</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">•upcomming</p>
                                        </div>

                                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Feature 2</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">•upcomming</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs rounded-full bg-yellow-500 text-white font-semibold">GenAi</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-red-600 text-white">GenAi</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500 text-white">GenAi</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">GenAi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Footer Section - Completely separate */}
            <Footer theme={theme} />
        </>
    )
}
import Button from '../ui/Button'
import { FaGithub, FaLinkedin, FaXTwitter, FaArrowDown } from "react-icons/fa6";
import WaveBackground from '../ui/WaveBackground'
import GridBackground from '../ui/GridBackground'
import TrongDongBackground from './TrongDongBackground'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectOverview({ theme, projectData, projectId }) {
    return (
        <section id="overview" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Grid Background - always show */}
            <GridBackground theme={theme} />
            
            {/* TrongDong Background - only for giveback project, overlay on top */}
            {projectId === 'giveback' && (
                <TrongDongBackground theme={theme} />
            )}
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-38 text-center relative z-10">
                <div style={{ animation: 'fadeInUp 1s ease-out' }}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white" style={{ 
                        animation: 'fadeInUp 1s ease-out 0.4s both',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent" style={{
                            backgroundSize: '200% 200%',
                            animation: 'gradientMove 3s ease-in-out infinite'
                        }}>
                            {projectData.name}
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
                        {projectData.tagline}
                    </p>
                    
                    <p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400" style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                        {projectData.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10" 
                         style={{ animation: 'fadeInUp 1s ease-out 1s both' }}>
                        {projectData.links?.live && (
                            <Button 
                                href={projectData.links.live}
                                target="_blank"
                                variant="primary"
                                size="lg"
                                className="flex items-center gap-2"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Live Demo
                            </Button>
                        )}
                        {projectData.links?.github && (
                            <Button 
                                href={projectData.links.github}
                                target="_blank"
                                variant="outline"
                                size="lg"
                                className="flex items-center gap-2"
                            >
                                <Github className="w-5 h-5" />
                                View Source
                            </Button>
                        )}
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto p-8 rounded-2xl backdrop-blur-lg border bg-white/50 border-white/20 dark:bg-white/5 dark:border-white/10" style={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}>
                        {projectData.timeline?.status && (
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {projectData.timeline.status}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Status
                                </div>
                            </div>
                        )}
                        {projectData.timeline?.startDate && (
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {projectData.timeline.startDate}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Started
                                </div>
                            </div>
                        )}
                        {projectData.features?.length > 0 && (
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {projectData.features.length}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Features
                                </div>
                            </div>
                        )}
                        {projectData.technologies && (
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {Object.values(projectData.technologies).flat().length}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Technologies
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
                                <div className="flex justify-center" style={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="p-2 animate-bounce"
                                    >
                                        <FaArrowDown size={30} />
                                    </Button>
                                </div>
        </section>
    )
}

'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Gallery from '../Gallery'
import ProjectCards from './ProjectCards'
import { useGallery } from '../../hooks/useGallery'
import GridBackground from '../ui/GridBackground'
import Footer from '../layout/Footer'

export default function GalleryPageClient() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    
    // Fetch all gallery items to extract unique projects
    const { images: galleryItems, loading } = useGallery(null)
    
    // Extract unique projects for cards
    const uniqueProjects = galleryItems ? 
        [...new Set(galleryItems.map(item => item.project))].map(projectName => {
            return {
                name: projectName,
                count: galleryItems.filter(item => item.project === projectName).length
            }
        }) : []

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="min-h-screen bg-blue-800" />
    }

    return (
        <div 
            className="min-h-screen"
            style={{
                margin: 0,
                background: theme === 'dark' 
                    ? '60a5fa' : '#2563eb',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}
        >
            <GridBackground theme={theme} colorScheme="pink" />
            {/* Project Cards - 32px from top of screen */}
            {!loading && (
                <div style={{
                    position: 'fixed',
                    top: '36px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 5,
                    width: '100%'
                }}>
                    <ProjectCards projects={uniqueProjects} />
                </div>
            )}
            
            {/* Gallery Component - unchanged layout */}
            <Gallery />
            {/* Footer Section - Completely separate */}
                        <Footer theme={theme} />
        </div>
    )
}

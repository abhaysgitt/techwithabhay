'use client'
import { useState, useEffect, useCallback, memo, useRef } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Dock from './dock/Dock'
import { GALLERY_NAVIGATION_ITEMS } from '../config/navigation'
import { createScrollFunction } from '../utils/navigation'
import { useGallery } from '../hooks/useGallery'
import { LoadingSpinner } from './ui/loading'


const Gallery = ({ projectFilter = null, showDock = true }) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    // Combine related states to reduce re-renders
    const [galleryState, setGalleryState] = useState({
        hoveredTitle: 'Auto-scrolling gallery - hover to pause',
        currentIndex: 0,
        isAutoPlaying: true,
        hoveredIndex: -1
    })

    const intervalRef = useRef(null)

    // Use hook to fetch project images
    const { images: galleryItems, loading, error } = useGallery(projectFilter)

    // Calculate dynamic width based on number of images - always fill 100% container
    const calculateItemWidth = (totalImages) => {
        if (!totalImages || totalImages === 0) return 0

        if (totalImages === 1) return 100 // Chỉ có 1 ảnh thì full width

        const activeItemWidth = 56.25 // Ảnh được focus chiếm 56.25%
        const remainingWidth = 100 - activeItemWidth // 43.75% cho tất cả ảnh còn lại
        const inactiveItemCount = totalImages - 1

        // Chia đều phần còn lại cho các ảnh inactive để luôn lấp đầy 100% box
        return remainingWidth / inactiveItemCount
    }

    const itemWidth = calculateItemWidth(galleryItems?.length || 0)

    // Responsive breakpoint cho mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
    const mobileItemWidth = isMobile ? Math.max(itemWidth * 1.5, 3) : itemWidth

    useEffect(() => {
        setMounted(true)
    }, [])

    // OPTIMIZED: Combined auto-scroll effect
    useEffect(() => {
        if (!galleryItems?.length || !galleryState.isAutoPlaying) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return
        }

        intervalRef.current = setInterval(() => {
            setGalleryState(prev => {
                const nextIndex = (prev.currentIndex + 1) % galleryItems.length
                return {
                    ...prev,
                    currentIndex: nextIndex,
                    hoveredTitle: galleryItems[nextIndex] ?
                        `${galleryItems[nextIndex].project}-${galleryItems[nextIndex].number}` :
                        'Auto-scrolling gallery'
                }
            })
        }, 800)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [galleryItems, galleryState.isAutoPlaying])

    const scrollToSection = createScrollFunction();

    if (!mounted) return null

    // Loading state
    if (loading) {
        return (
            <>
                {showDock && (
                    <Dock
                        theme={theme}
                        setTheme={setTheme}
                        activeSection={null}
                        scrollToSection={scrollToSection}
                        navigationItems={GALLERY_NAVIGATION_ITEMS}
                    />
                )}
                <div
                    className={`min-h-screen flex justify-center items-center p-5`}
                    style={{
                        margin: 0,
                        background: theme === 'dark'
                            ? 'linear-gradient(135deg, #1f2937, #374151, #4b5563)'
                            : 'linear-gradient(135deg, #0026bd, #b9a700, #460096)',
                    }}
                >
                    <div className="text-center">
                        <LoadingSpinner />
                        <p className="text-white text-lg mt-4">Loading Gallery!!</p>
                    </div>
                </div>
            </>
        )
    }

    // Error state
    if (error) {
        return (
            <>
                {showDock && (
                    <Dock
                        theme={theme}
                        setTheme={setTheme}
                        activeSection={null}
                        scrollToSection={scrollToSection}
                        navigationItems={GALLERY_NAVIGATION_ITEMS}
                    />
                )}
                <div
                    className={`min-h-screen flex justify-center items-center p-5`}
                    style={{
                        margin: 0,
                        background: theme === 'dark'
                            ? 'linear-gradient(135deg, #1f2937, #374151, #4b5563)'
                            : 'linear-gradient(135deg, #0026bd, #b9a700, #460096)',
                    }}
                >
                    <div className="text-center">
                        <div className="text-red-400 text-6xl mb-4">⚠️</div>
                        <h2 className="text-white text-2xl font-bold mb-2">Error Loading Gallery</h2>
                        <p className="text-gray-300 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </>
        )
    }

    // Empty state
    if (!galleryItems || galleryItems.length === 0) {
        return (
            <>
                {showDock && (
                    <Dock
                        theme={theme}
                        setTheme={setTheme}
                        activeSection={null}
                        scrollToSection={scrollToSection}
                        navigationItems={GALLERY_NAVIGATION_ITEMS}
                    />
                )}
                <div
                    className={`min-h-screen flex justify-center items-center p-5`}
                    style={{
                        margin: 0,
                        background: theme === 'dark'
                            ? 'linear-gradient(135deg, #1f2937, #374151, #4b5563)'
                            : 'linear-gradient(135deg, #0026bd, #b9a700, #460096)',
                    }}
                >
                    <div className="text-center">
                        <div className="text-gray-400 text-6xl mb-4">📷</div>
                        <h2 className="text-white text-2xl font-bold mb-2">No Images Found</h2>
                        <p className="text-gray-300">
                            {projectFilter ? `No images found for project "${projectFilter}"` : 'No project images available'}
                        </p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {/* Dock Navigation - chỉ logo + home + theme */}
            {showDock && (
                <Dock
                    theme={theme}
                    setTheme={setTheme}
                    activeSection={null} // Không track active section
                    scrollToSection={scrollToSection}
                    navigationItems={GALLERY_NAVIGATION_ITEMS}
                />
            )}

            {/* Main Content */}
            <div
                id="gallery"
                className="min-h-screen flex justify-center items-center p-5"
            >
                {/* Gallery Content */}
                <>
                    <style jsx>{`
                .gallery-container {
                    width: 95%;
                    max-width: 1600px;
                    position: relative;
                    overflow: hidden;
                    padding: 20px;
                    border-radius: 20px;
                    backdrop-filter: blur(10px);
                    border: 1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
                    background: ${theme === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.2)'};
                }

                .title-card {
                    padding: 20px 30px;
                    border-radius: 12px;
                    margin-bottom: 25px;
                    border: 1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 20px;
                    font-weight: 600;
                    color: #ffffff;
                    text-align: center;
                    min-height: 30px;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    background: ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.2)'};
                }

                .gallery-frame {
                    position: relative;
                    width: 100%;
                    padding-top: 36%;
                    border: 2px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
                    border-radius: 16px;
                    overflow: hidden;
                    background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'};
                    box-shadow: ${theme === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.6)' : '0 8px 25px rgba(0, 0, 0, 0.2)'};
                    margin-bottom: 15px;
                }

                .gallery-images {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    ${galleryItems && galleryItems.length <= 3
                            ? 'justify-content: center;'
                            : galleryItems && galleryItems.length > 30
                                ? 'justify-content: flex-start; overflow-x: auto; scrollbar-width: none;'
                                : 'justify-content: flex-start;'
                        }
                    gap: 2px;
                    padding: 2px;
                }

                .gallery-images::-webkit-scrollbar {
                    display: none; /* Ẩn scrollbar trên webkit browsers */
                }

                .scroll-indicator {
                    position: absolute;
                    bottom: 5px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 5px 12px;
                    border-radius: 15px;
                    font-size: 12px;
                    font-weight: 500;
                    opacity: 0.8;
                    z-index: 10;
                    pointer-events: none;
                    animation: fadeInOut 3s infinite;
                }

                @keyframes fadeInOut {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.9; }
                }

                .gallery-item {
                    position: relative;
                    height: 100%;
                    flex: 0 0 ${itemWidth}%;
                    transition: flex 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
                    overflow: hidden;
                    min-width: ${itemWidth < 1 ? '2px' : '0'}; /* Đảm bảo vẫn nhìn thấy như line khi rất nhỏ */
                    border-radius: ${itemWidth < 1 ? '0px' : '8px'}; /* Bỏ border radius khi thành line */
                    border: ${itemWidth < 1 ? '1px' : '2px'} solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
                    box-shadow: ${theme === 'dark' ? '0 2px 4px rgba(0, 0, 0, 0.6)' : '0 2px 4px rgba(0, 0, 0, 0.2)'};
                    cursor: pointer;
                    opacity: ${itemWidth < 1 ? '0.7' : '0.5'};
                    ${itemWidth < 1 ? 'background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);' : ''}
                }

                .gallery-item.active {
                    flex: 0 0 56.25% !important;
                    z-index: 1;
                    border-radius: 12px;
                    box-shadow: ${theme === 'dark' ? '0 4px 8px rgba(0, 0, 0, 0.8)' : '0 4px 8px rgba(0, 0, 0, 0.3)'};
                    border: 2px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
                    opacity: 1;
                }

                .gallery-item:hover {
                    flex: 0 0 56.25% !important;
                    z-index: 1;
                    border-radius: 12px;
                    box-shadow: ${theme === 'dark' ? '0 4px 8px rgba(0, 0, 0, 0.8)' : '0 4px 8px rgba(0, 0, 0, 0.3)'};
                    border: 2px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
                    opacity: 1;
                }

                .gallery-images:hover .gallery-item:not(:hover) {
                    flex: 0 0 ${itemWidth}% !important;
                    opacity: 0.5;
                }

                .gallery-item img {
                    width: 100%;
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border-radius: 6px;
                }

                .gallery-item.active,
                .gallery-item:hover {
                    background: rgba(0, 0, 0, 0.8);
                }

                .gallery-item.active img,
                .gallery-item:hover img {
                    border-radius: 10px;
                }

                .arrow-container {
                    text-align: center;
                    margin-top: 0px;
                    position: relative;
                }

                .arrow {
                    font-size: 60px;
                    line-height: 1;
                    color: transparent;
                    background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
                    background-size: 300% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    animation: gradientMove 2s linear infinite;
                    display: inline-block;
                    transform: rotate(180deg);
                }

                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 300% 50%; }
                }

                @media (max-width: 768px) {
                    .gallery-container {
                        width: 100%;
                        padding: 15px;
                    }
                    
                    .title-card {
                        padding: 15px 20px;
                        font-size: 16px;
                    }

                    .title-card::after {
                        font-size: 20px;
                        right: 15px;
                    }
                    
                    .gallery-frame {
                        border-radius: 8px;
                        padding-top: 50%; /* Tăng chiều cao trên mobile */
                    }
                    
                    .gallery-item {
                        border-radius: 6px;
                        flex: 0 0 ${mobileItemWidth}% !important;
                    }
                    
                    .gallery-item:hover,
                    .gallery-item.active {
                        flex: 0 0 ${galleryItems && galleryItems.length <= 3 ? 70 : 65}% !important;
                        border-radius: 8px;
                    }

                    .gallery-images:hover .gallery-item:not(:hover) {
                        flex: 0 0 ${mobileItemWidth}% !important;
                    }

                    .arrow {
                        font-size: 30px;
                    }
                    
                    ${galleryItems && galleryItems.length > 30 ? `
                    .gallery-images {
                        overflow-x: scroll;
                        scrollbar-width: thin;
                    }
                    ` : ''}
                }
            `}</style>

                    <div className="gallery-container enhanced-card">
                        <div className="title-card enhanced-card">
                            {galleryState.hoveredTitle}
                        </div>
                        <div className="gallery-frame">
                            <div className="gallery-images">
                                {galleryItems.map((item, index) => {
                                    // PERFORMANCE: Only render images within visible range for large galleries
                                    const isActive = index === galleryState.currentIndex && galleryState.isAutoPlaying
                                    const distanceFromActive = Math.abs(index - galleryState.currentIndex)
                                    const shouldLoadImage = galleryItems.length <= 50 || distanceFromActive <= 10 // Load within 10 items range

                                    return (
                                        <div
                                            key={`${item.project}-${item.number}-${index}`}
                                            className={`gallery-item ${isActive ? 'active' : ''}`}
                                            onMouseEnter={() => {
                                                setGalleryState(prev => ({
                                                    ...prev,
                                                    isAutoPlaying: false,
                                                    hoveredIndex: index,
                                                    hoveredTitle: `${item.project}-${item.number}`
                                                }))
                                            }}
                                            onMouseLeave={() => {
                                                setGalleryState(prev => ({
                                                    ...prev,
                                                    isAutoPlaying: true,
                                                    hoveredIndex: -1,
                                                    hoveredTitle: 'Auto-scrolling gallery - hover to pause'
                                                }))
                                            }}
                                            onClick={() => {
                                                window.location.href = `/project/${item.project}`;
                                            }}
                                        >
                                            {shouldLoadImage ? (
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    fill
                                                    style={{
                                                        objectFit: (index === galleryState.currentIndex && galleryState.isAutoPlaying) || index === galleryState.hoveredIndex ? 'contain' : 'cover',
                                                        objectPosition: 'center'
                                                    }}
                                                    className="transition-all duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                    <span className="text-gray-500">Loading !!</span>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                            {/* Scroll indicator for many images
                            {galleryItems && galleryItems.length > 50 && (
                                <div className="scroll-indicator">
                                    <span>← {galleryItems.length} images - Ultra compact view →</span>
                                </div>
                            )}
                            {galleryItems && galleryItems.length > 20 && galleryItems.length <= 50 && (
                                <div className="scroll-indicator">
                                    <span>← Scroll to explore all {galleryItems.length} images →</span>
                                </div>
                            )} */}
                        </div>
                    </div>
                </>

            </div>
        </>
    )
}

                export default Gallery


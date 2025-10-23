"use client";

import { FaGithub, FaLinkedin, FaXTwitter, FaArrowDown } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { useState, useEffect } from "react";
import Link from "next/link";
import WaveBackground from '../../ui/WaveBackground';
import GridBackground from '../../ui/GridBackground';
import Button from "../../ui/Button";
import { info } from "../../../utils/info";
import { Highlighter } from "@/components/magicui/highlighter";

const handleGetMyCV = () => {
    const link = document.createElement("a");
    link.href = "/data/abhaysresume.pdf";
    link.download = "abhaysresume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

export default function Hero({ theme, scrollToSection }) {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const fullText = `Hello, I'm ${info.displayName}`;
    
    useEffect(() => {
        let i = 0;
        let isDeleting = false;
        const typingSpeed = 80; // Faster typing
        const deletingSpeed = 50; // Faster deleting
        const pauseTime = 4000; // Pause before deleting
        
        const typeInterval = setInterval(() => {
            if (!isDeleting) {
                // Typing forward
                if (i < fullText.length) {
                    setDisplayText(fullText.slice(0, i + 1));
                    i++;
                } else {
                    // Pause then start deleting
                    setTimeout(() => {
                        isDeleting = true;
                    }, pauseTime);
                }
            } else {
                // Deleting backward
                if (i > 0) {
                    setDisplayText(fullText.slice(0, i - 1));
                    i--;
                } else {
                    // Reset and start typing again
                    isDeleting = false;
                    setTimeout(() => {
                        // Small delay before retyping
                    }, 500);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearInterval(typeInterval);
    }, [fullText]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Typing cursor */}
            <style jsx>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .typing-cursor::after {
                    content: '|';
                    animation: blink 1s infinite;
                    color: ${theme === 'dark' ? '#60a5fa' : '#2563eb'};
                }
            `}</style>

            {/* Animated Grid Background */}
          
             <GridBackground theme={theme} colorScheme="blue" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16 text-center relative z-10">
                <div style={{ animation: 'fadeInUp 1s ease-out' }}>
                    <p className={`text-lg font-medium mb-6 text-blue-600 dark:text-blue-400 ${showCursor ? 'typing-cursor' : ''}`} style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
                        {displayText && displayText.includes(info.displayName) ? (
                            <>
                                {displayText.replace(info.displayName, '')}{' '}
                                <span className={`bg-gradient-to-r ${
                                    theme === 'dark' 
                                        ? 'from-cyan-400 via-blue-500 to-purple-600' 
                                        : 'from-cyan-600 via-blue-700 to-purple-800'
                                } bg-clip-text text-transparent font-bold`}>
                                    {info.displayName}
                                </span>
                            </>
                        ) : (
                            displayText
                        )}
                    </p>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white" style={{ 
                        animation: 'fadeInUp 1s ease-out 0.4s both',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                            <Highlighter action="underline" color="#FF9800">
                        Full Stack
                        </Highlighter>
                        <br />
                        <span className={`bg-gradient-to-r ${
                            theme === 'dark' 
                                ? 'from-blue-400 via-purple-400 to-blue-400' 
                                : 'from-blue-600 via-purple-600 to-blue-600'
                        } bg-clip-text text-transparent`} style={{
                            backgroundSize: '200% 200%',
                            animation: 'gradientMove 3s ease-in-out infinite'
                        }}>
                            Web Developer
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
                        I create exceptional digital experiences through clean code, 
                        modern design, and innovative solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" 
                         style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>

                            <Button
                            onClick={() => scrollToSection('contact')}
                            variant="primary"
                            size="lg"
                        >
                            Get In Touch
                        </Button>
                        
                        <Button
                            onClick={handleGetMyCV}
                            variant="outline"
                            size="lg"
                        >
                            Download my CV
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-16" 
                         style={{ animation: 'fadeInUp 1s ease-out 1s both' }}>
                        {[
                            { Icon: FaGithub, href: info.social.github, label: 'GitHub' },
                            { Icon: FaLinkedin, href: info.social.linkedin, label: 'LinkedIn' },
                            { Icon: FaXTwitter, href: info.social.twitter, label: 'Twitter' },
                            { Icon: GoMail, href: `mailto:${info.email}`, label: 'Email' }
                        ].map(({ Icon, href, label }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                                    theme === 'dark'
                                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                                aria-label={label}
                            >
                                <Icon size={38} />
                            </Link>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center" style={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}>
                        <Button
                            onClick={() => scrollToSection('about')}
                            variant="ghost"
                            size="sm"
                            className="p-2 animate-bounce"
                        >
                            <FaArrowDown size={30} />
                        </Button>
                    </div>
                </div>
            </div>
            
            
        </section>
    );
}

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Preloader = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Animate progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 100);

        // When window loads, ensure progress hits 100 and animate out
        const handleLoad = () => {
            clearInterval(interval);
            setProgress(100);

            tl.to(textRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                delay: 0.2
            })
                .to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                });
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
            clearInterval(interval);
        };
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center text-white"
        >
            <div ref={textRef} className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-paragraph tracking-wider">
                    LUOHINO
                </h1>
                <div className="text-xl font-mono text-gray-400">
                    {Math.min(progress, 100)}%
                </div>
            </div>
        </div>
    );
};

export default Preloader;

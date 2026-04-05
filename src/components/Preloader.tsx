"use client";

import { useEffect, useState, useRef } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      const handleVideoEnd = () => {
        setIsExiting(true);
        // Wait for exit animation to complete
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      };

      // Listen for when the video ends
      video.addEventListener('ended', handleVideoEnd);
      
      // Also handle case where video fails to load
      const handleVideoError = () => {
        // Fallback to 2 seconds if video fails
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }, 2000);
      };

      video.addEventListener('error', handleVideoError);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('error', handleVideoError);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative preloader-enter">
        {/* Video Container */}
        <div className="relative w-52 h-26 md:w-60 md:h-30">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full h-full object-contain"
            playsInline
          >
            <source src="/mr-handy-logo-video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full flex items-center justify-center text-white text-lg">
              Mr. Handy
            </div>
          </video>
        </div>
      </div>
    </div>
  );
}

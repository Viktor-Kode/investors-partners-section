'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Reset error state when modal opens
      setVideoError(false);
      
      // Auto-play video when modal opens
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay failed, user will need to click play
        });
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      
      // Pause video when modal closes
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            aria-label="Close video modal"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-lg bg-black overflow-hidden">
              <button
                onClick={onClose}
                className="absolute -right-2 -top-2 z-10 rounded-full bg-white p-2 text-[#1f2937] shadow-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
                {videoError ? (
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
                    <p className="text-white mb-2">Video failed to load</p>
                    <p className="text-gray-400 text-sm mb-4">Please check that the video file exists at: {videoSrc}</p>
                    <button
                      onClick={() => {
                        setVideoError(false);
                        if (videoRef.current) {
                          videoRef.current.load();
                        }
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Retry
                    </button>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    src={encodeURI(videoSrc)}
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={title || 'Video player'}
                    onError={(e) => {
                      console.error('Video failed to load:', videoSrc);
                      console.error('Encoded path:', encodeURI(videoSrc));
                      setVideoError(true);
                    }}
                    onLoadedData={() => {
                      console.log('Video loaded successfully:', videoSrc);
                    }}
                  >
                    <source src={encodeURI(videoSrc)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              {title && (
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

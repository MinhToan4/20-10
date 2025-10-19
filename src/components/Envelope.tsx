import React from 'react';
import { FaHeart } from 'react-icons/fa';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function Envelope({ isOpen, onOpen }: EnvelopeProps) {
  return (
    <div className="envelope-wrap relative">
      {/* Enhanced floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sparkles */}
        <span className="sparkle absolute text-pink-300">✨</span>
        <span className="sparkle absolute text-pink-400" style={{ animationDelay: '0.5s' }}>💕</span>
        <span className="sparkle absolute text-pink-200" style={{ animationDelay: '1s' }}>🌸</span>
        <span className="sparkle absolute text-pink-300" style={{ animationDelay: '1.5s' }}>✨</span>
        <span className="sparkle absolute text-pink-400" style={{ animationDelay: '2s' }}>💖</span>
        <span className="sparkle absolute text-pink-200" style={{ animationDelay: '2.5s' }}>🌹</span>

        {/* Floating hearts */}
        <div className="floating-heart absolute text-pink-300 text-2xl" style={{ top: '15%', left: '8%' }}>💝</div>
        <div className="floating-heart absolute text-pink-400 text-xl" style={{ top: '25%', right: '12%', animationDelay: '1s' }}>💕</div>
        <div className="floating-heart absolute text-pink-200 text-lg" style={{ top: '70%', left: '15%', animationDelay: '2s' }}>💖</div>
        <div className="floating-heart absolute text-pink-300 text-xl" style={{ top: '60%', right: '8%', animationDelay: '0.5s' }}>💗</div>
      </div>

      {/* Decorative ribbons */}
      <div className="absolute top-8 left-4 text-pink-300 text-3xl animate-bounce" style={{ animationDelay: '0s' }}>🎀</div>
      <div className="absolute top-12 right-6 text-pink-400 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>🎀</div>

      <div className="flex flex-col items-center relative z-10">
        {/* Envelope container with enhanced styling */}
        <div className="relative">
          {/* Shadow/base effect */}
          <div className="absolute inset-0 bg-pink-300/20 rounded-xl blur-lg scale-105 transform translate-y-2"></div>

          <div
            className={`envelope relative ${isOpen ? 'open removing' : ''}`}
            role="button"
            aria-label="Mở lá thư tình"
            onClick={onOpen}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpen();
              }
            }}
            tabIndex={0}
          >
            <div className="body">
              <div className="flap">
                {/* Enhanced seal with multiple hearts */}
                <div className="seal" aria-hidden>
                  <div className="relative">
                    <span className="heart absolute animate-pulse">
                      <FaHeart />
                    </span>
                    <span className="heart-small absolute top-1 left-1 animate-pulse" style={{ animationDelay: '0.3s' }}>
                      <FaHeart />
                    </span>
                    <span className="heart-small absolute top-1 right-1 animate-pulse" style={{ animationDelay: '0.6s' }}>
                      <FaHeart />
                    </span>
                  </div>
                </div>

                {/* Decorative elements on flap */}
                <div className="absolute top-2 left-2 text-pink-200 text-xs">✨</div>
                <div className="absolute top-3 right-3 text-pink-200 text-xs">💕</div>
              </div>

              {/* Enhanced interior with beautiful paper texture */}
              <div className="absolute bottom-0 left-0 right-0 h-[45%] p-4">
                <div className="w-full h-full rounded-lg bg-gradient-to-b from-pink-50/95 via-white/98 to-pink-25/90 shadow-inner relative overflow-hidden border border-pink-100/50">
                  {/* Paper texture overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-transparent via-pink-100/20 to-transparent"></div>
                  </div>

                  {/* Decorative border frame */}
                  <div className="absolute inset-1 border border-pink-200/30 rounded-md pointer-events-none"></div>

                  {/* Beautiful decorative elements */}
                  <div className="absolute inset-0">
                    {/* Corner decorations */}
                    <div className="absolute top-1 left-1 text-pink-300/60 text-xs transform rotate-12">❀</div>
                    <div className="absolute top-2 right-2 text-pink-400/60 text-xs transform -rotate-12">✿</div>
                    <div className="absolute bottom-1 left-2 text-pink-300/60 text-xs transform rotate-45">❀</div>
                    <div className="absolute bottom-2 right-1 text-pink-400/60 text-xs transform -rotate-45">✿</div>

                    {/* Center decorative elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="flex items-center justify-center gap-2 opacity-40">
                        <span className="text-pink-300 text-xs animate-pulse">💕</span>
                        <span className="text-pink-400 text-xs animate-pulse" style={{ animationDelay: '0.5s' }}>✨</span>
                        <span className="text-pink-300 text-xs animate-pulse" style={{ animationDelay: '1s' }}>💕</span>
                      </div>
                    </div>

                    {/* Side decorative vines */}
                    <div className="absolute left-0 top-1/4 text-pink-200/40 text-xs transform -rotate-90">🌿</div>
                    <div className="absolute right-0 bottom-1/4 text-pink-200/40 text-xs transform rotate-90">🌿</div>

                    {/* Floating particles */}
                    <div className="absolute top-3 left-1/4 text-pink-300/30 text-xs animate-bounce" style={{ animationDelay: '0s' }}>•</div>
                    <div className="absolute top-4 right-1/3 text-pink-400/30 text-xs animate-bounce" style={{ animationDelay: '0.7s' }}>•</div>
                    <div className="absolute bottom-3 left-1/3 text-pink-300/30 text-xs animate-bounce" style={{ animationDelay: '1.4s' }}>•</div>
                    <div className="absolute bottom-4 right-1/4 text-pink-400/30 text-xs animate-bounce" style={{ animationDelay: '0.3s' }}>•</div>
                  </div>

                  {/* Subtle watermark effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <div className="text-pink-300 text-lg font-serif transform rotate-12">Love Letter</div>
                  </div>
                </div>
              </div>

              {/* Ribbon effect on envelope body */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-1 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced caption with decorative elements */}
        <div className="envelope-caption mt-6 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-pink-300 text-lg">✨</span>
            <span className="text-pink-400 text-lg">💕</span>
            <span className="text-pink-300 text-lg">✨</span>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-pink-100/50 rounded-full px-6 py-3 border border-pink-200/50 shadow-sm">
            <p className="text-sm font-medium text-pink-700 mb-1">
              Dành cho <strong className="text-pink-800">Người đặc biệt</strong>
            </p>
            <p className="text-xs text-pink-600/80">
              Nhấn để mở lá thư 💌
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="text-pink-300 text-lg animate-pulse">🌸</span>
            <span className="text-pink-400 text-lg animate-pulse" style={{ animationDelay: '0.5s' }}>💖</span>
            <span className="text-pink-300 text-lg animate-pulse" style={{ animationDelay: '1s' }}>🌸</span>
          </div>
        </div>
      </div>
    </div>
  );
}

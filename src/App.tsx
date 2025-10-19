import React, { useEffect, useState, useRef } from 'react';
import Envelope from './components/Envelope';
import Letter from './components/Letter';

type AppState = 'envelope' | 'transitioning' | 'letter';

function App() {
  const [appState, setAppState] = useState<AppState>('envelope');
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle envelope opening sequence
  const handleEnvelopeOpen = () => {
    if (appState !== 'envelope') return;

    setIsEnvelopeOpen(true);
    setAppState('transitioning');

    // Sequence: flap opens (700ms) -> envelope slides away (400ms) -> letter appears
    const envelopeSlideDelay = 700;
    const letterRevealDelay = envelopeSlideDelay + 400;

    setTimeout(() => {
      setAppState('letter');
    }, letterRevealDelay);
  };

  // Handle music playback
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play();
        setIsMusicPlaying(true);
      }
    }
  };

  // Optional: Add subtle entrance animation on mount
  useEffect(() => {
    // Could add preloader or sound effects here in the future
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/a.mp3"
        loop
        preload="auto"
      />

      <div className="w-full max-w-4xl">
        {appState === 'envelope' && (
          <Envelope
            isOpen={isEnvelopeOpen}
            onOpen={handleEnvelopeOpen}
          />
        )}

        {appState === 'letter' && <Letter onToggleMusic={toggleMusic} />}
      </div>
    </div>
  );
}

export default App;
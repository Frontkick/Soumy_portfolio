import React, { useState,useEffect } from 'react';
import './Piano.css'; // Import your CSS file for styling

// Import your audio files
import C from './Sound/C.mp3';
import CSharp from './Sound/CSharp.mp3';
import D from './Sound/D.mp3';
import DSharp from './Sound/DSharp.mp3';
import E from './Sound/E.mp3';
import F from './Sound/F.mp3';
import FSharp from './Sound/FSharp.mp3';
import G from './Sound/G.mp3';
import GSharp from './Sound/GSharp.mp3';
import A from './Sound/A.mp3';
import ASharp from './Sound/ASharp.mp3';
import B from './Sound/B.mp3';

const Piano = () => {
  const [pressedKeys, setPressedKeys] = useState([]);
  const [autoPlayIndex, setAutoPlayIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs for audio elements
  const audioRefs = {
    C: React.useRef(new Audio(C)),
    CSharp: React.useRef(new Audio(CSharp)),
    D: React.useRef(new Audio(D)),
    DSharp: React.useRef(new Audio(DSharp)),
    E: React.useRef(new Audio(E)),
    F: React.useRef(new Audio(F)),
    FSharp: React.useRef(new Audio(FSharp)),
    G: React.useRef(new Audio(G)),
    GSharp: React.useRef(new Audio(GSharp)),
    A: React.useRef(new Audio(A)),
    ASharp: React.useRef(new Audio(ASharp)),
    B: React.useRef(new Audio(B)),
  };

  // Play audio function
  const playSound = (key) => {
    if (audioRefs[key] && audioRefs[key].current) {
      audioRefs[key].current.currentTime = 0;
      audioRefs[key].current.play();
    }
  };

  const handleKeyDown = (key) => {
    if (!pressedKeys.includes(key)) {
      setPressedKeys([...pressedKeys, key]);
      playSound(key); // Call playSound when key is pressed
    }
  };

  const handleKeyUp = (key) => {
    if (pressedKeys.includes(key)) {
      setPressedKeys(pressedKeys.filter((k) => k !== key));
    }
  };
  const playKeysAutomatically = () => {
    const keysToPlay = ['G', 'G', 'A', 'G', 'C', 'B', 'G', 'G', 'A', 'G', 'D', 'C', 'G', 'G', 'E', 'D', 'C', 'B', 'A','C','C','B','A','B','A'];
    if (autoPlayIndex < keysToPlay.length) {
      const key = keysToPlay[autoPlayIndex];
      playSound(key);
      setPressedKeys([key]); // Highlight the key being played
      setAutoPlayIndex(autoPlayIndex + 1);
      
    } else {
      setIsPlaying(false);
        // Reset to play again if looping is desired
        setAutoPlayIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        playKeysAutomatically();
      }, 800); // Adjust delay between key presses here (in milliseconds)

      // Clean up interval on unmount
      return () => clearInterval(interval);
    }
  }, [isPlaying, autoPlayIndex]); // Run effect when isPlaying or autoPlayIndex changes

  const startAutoPlay = () => {
    setIsPlaying(true); // Start automatic play
  };

  
    const play = () => {
      const audio = new Audio(G);
      audio.currentTime = 0;
      audio.play();
    };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div className="piano-container">
      <div className="piano">
        <div
          className={`key white ${pressedKeys.includes('F') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('F')}
          onMouseUp={() => handleKeyUp('F')}
        >
          F
        </div>
        <div
          className={`key black ${pressedKeys.includes('FSharp') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('FSharp')}
          onMouseUp={() => handleKeyUp('FSharp')}
        >
          F#
        </div>
        <div
          className={`key white ${pressedKeys.includes('G') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('G')}
          onMouseUp={() => handleKeyUp('G')}
        >
          G
        </div>
        <div
          className={`key black ${pressedKeys.includes('GSharp') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('GSharp')}
          onMouseUp={() => handleKeyUp('GSharp')}
        >
          G#
        </div>
        <div
          className={`key white ${pressedKeys.includes('A') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('A')}
          onMouseUp={() => handleKeyUp('A')}
        >
          A
        </div>
        <div
          className={`key black ${pressedKeys.includes('ASharp') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('ASharp')}
          onMouseUp={() => handleKeyUp('ASharp')}
        >
          A#
        </div>
        <div
          className={`key white ${pressedKeys.includes('B') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('B')}
          onMouseUp={() => handleKeyUp('B')}
        >
          B
        </div>
        <div
          className={`key white ${pressedKeys.includes('C') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('C')}
          onMouseUp={() => handleKeyUp('C')}
        >
          C
        </div>
        <div
          className={`key black ${pressedKeys.includes('CSharp') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('CSharp')}
          onMouseUp={() => handleKeyUp('CSharp')}
        >
          C#
        </div>
        <div
          className={`key white ${pressedKeys.includes('D') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('D')}
          onMouseUp={() => handleKeyUp('D')}
        >
          D
        </div>
        <div
          className={`key black ${pressedKeys.includes('DSharp') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('DSharp')}
          onMouseUp={() => handleKeyUp('DSharp')}
        >
          D#
        </div>
        <div
          className={`key white ${pressedKeys.includes('E') ? 'pressed' : ''}`}
          onMouseDown={() => handleKeyDown('E')}
          onMouseUp={() => handleKeyUp('E')}
        >
          E
        </div>

      </div>
      {/* Audio elements */}
      {Object.keys(audioRefs).map((key) => (
        <audio key={key} ref={audioRefs[key]} src={audioRefs[key].current.src} />
      ))}
      <div>
        {/* Start button */}
      <button className=' bg-slate-600 w-36 ml-20 rounded-sm border-r-2 border-black' 
        onClick={startAutoPlay} disabled={isPlaying}>
        {isPlaying ? 'Playing...' : 'Play Happy Birthday '}
      </button>
      </div>
      
    </div>
    </section>
    

    
  );
};

export default Piano;

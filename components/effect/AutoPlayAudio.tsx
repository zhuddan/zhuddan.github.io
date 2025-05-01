'use client'

import { useEffect, useRef } from 'react'
import AudioControlIcon from './AudioControlIcon'

interface AutoPlayAudioProps {
  src: string
  autoPlay?: boolean
  loop?: boolean
  controls?: boolean
  showIcon?: boolean
}

export default function AutoPlayAudio({
  src,
  autoPlay = false,
  loop = false,
  controls = false,
  showIcon = true,
}: AutoPlayAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current

    // Function to attempt playback
    const attemptPlay = async () => {
      if (audio && autoPlay) {
        try {
          await audio.play()
        }
        catch (error) {
          console.error('Auto-play was prevented:', error)
        }
      }
    }

    // Initial attempt to play
    // attemptPlay()

    // Setup event listeners for user interaction to enable audio
    const handleUserInteraction = () => {
      attemptPlay()
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }

    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('touchstart', handleUserInteraction)

    // Cleanup event listeners
    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [autoPlay])

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        controls={controls}
        loop={loop}
      />
      {showIcon && <AudioControlIcon audioRef={audioRef} initialPlaying={autoPlay} />}
    </>
  )
}

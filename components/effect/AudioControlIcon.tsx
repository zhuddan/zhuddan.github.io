'use client'

import { Volume2, VolumeX } from 'lucide-react'
import { useEffect, useState } from 'react'

interface AudioControlIconProps {
  audioRef: React.RefObject<HTMLAudioElement | null>
  initialPlaying?: boolean
}

export default function AudioControlIcon({
  audioRef,
  initialPlaying = false,
}: AudioControlIconProps) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio)
      return

    // Set initial state based on audio element
    // setIsPlaying(!audio.paused)

    // Event listeners to update icon state
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [audioRef])

  const toggleAudio = () => {
    const audio = audioRef.current
    if (!audio)
      return

    if (isPlaying) {
      audio.pause()
    }
    else {
      audio.play().catch((error) => {
        console.error('Failed to play audio:', error)
      })
    }
  }

  return (
    <div className="flex w-full justify-end">
      <div className=" top-4 right-4 z-50 cursor-pointer p-2  bg-opacity-50 rounded-full shadow-md hover:bg-opacity-80 transition-all">
        {isPlaying
          ? (
              <Volume2
                size={24}
                onClick={toggleAudio}
                // className="text-blue-600"
              />
            )
          : (
              <VolumeX
                size={24}
                onClick={toggleAudio}
                // className="text-gray-600"
              />
            )}
      </div>
    </div>
  )
}

import React, { useCallback, useEffect, useRef, useState } from "react"
import { PauseIcon, PlayIcon } from "lucide-react"
import WaveSurfer from "wavesurfer.js"

import { Loader } from "../ui/loader"
import { useWavesurfer } from "./use-wavesurfer"
import { formatTime } from "./utils"

export interface AudioPlayerSimpleProps {
  url?: string
  loading?: boolean
}

const initialOptions = {
  height: 16,
  waveColor: "#2D342F",
  progressColor: "#1B211D",
  cursorColor: "#36EA73",
  cursorWidth: 2,
  barWidth: 2,
  barGap: 2,
  barRadius: 2,
  barHeight: 0.9,
  normalize: false,
  minPxPerSec: 1,
  fillParent: true,
  // url: "/wavesurfer-code/examples/audio/audio.wav",
  mediaControls: false,
  audioRate: 1,
  autoScroll: false,
  autoCenter: true,
}

export const AudioPlayerSimple: React.FC<AudioPlayerSimpleProps> = ({
  url,
  loading,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const wavesurfer = useWavesurfer(containerRef, { ...initialOptions, url })

  const [isPlaying, setIsPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  // On play button click
  const onTogglePlaying = useCallback(() => {
    wavesurfer?.isPlaying() ? wavesurfer.pause() : wavesurfer?.play()
  }, [wavesurfer])

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return

    setIsPlaying(false)

    const subscriptions = [
      wavesurfer.on("play", () => setIsPlaying(true)),
      wavesurfer.on("pause", () => setIsPlaying(false)),
      wavesurfer.on("ready", () => setReady(true)),
    ]

    return () => {
      subscriptions.forEach((unsub) => unsub())
    }
  }, [wavesurfer])

  const classNames = "adiago-audio-simple"

  return (
    <div className={classNames}>
      <div className="flex items-center space-x-2">
        <button
          className="bg-surface-brand text-surface-base flex size-7 min-w-7 items-center justify-center rounded-full"
          onClick={onTogglePlaying}
          disabled={(wavesurfer && !ready) || loading}
        >
          {(wavesurfer && !ready) || loading ? (
            <Loader className="fill-surface-base size-4" />
          ) : isPlaying ? (
            <PauseIcon className="size-4" />
          ) : (
            <PlayIcon className="size-3" />
          )}
        </button>
        {url ? (
          <div
            className="min-h-[16px] w-full min-w-[200px] shrink-[2] rounded-lg bg-transparent"
            ref={containerRef}
          />
        ) : (
          <div className="w-full shrink-[2]" />
        )}
        <PlayerTime wavesurfer={wavesurfer} />
      </div>
    </div>
  )
}

interface PlayerTimeProps {
  wavesurfer: WaveSurfer | null
}
const PlayerTime: React.FC<PlayerTimeProps> = ({ wavesurfer }) => {
  const [currentTime, setCurrentTime] = useState(0)
  useEffect(() => {
    if (!wavesurfer) return

    setCurrentTime(0)

    const subscriptions = [
      wavesurfer.on("decode", (duration) => setCurrentTime(duration * 1000)),
      wavesurfer.on("timeupdate", (ct) => setCurrentTime(ct * 1000)),
    ]

    return () => {
      subscriptions.forEach((unsub) => unsub())
    }
  }, [wavesurfer])

  return (
    <p className="text-text-secondary w-full max-w-[32px] text-sm font-medium">
      {formatTime(currentTime)}
    </p>
  )
}
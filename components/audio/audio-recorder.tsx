"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { SelectViewport } from "@radix-ui/react-select"
import { Mic, StopCircle } from "lucide-react"

import { Button } from "../ui/button"
import { Loader } from "../ui/loader"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { BlobEncoding, MediaDeviceInfo, OnRecordEndFn } from "./types"
import { useWavesurfer, useWavesurferRecorder } from "./use-wavesurfer"
import RecordPlugin from "./wavesurfer-record-plugin"

export interface AudioRecorderProps {
  blobEncoding?: BlobEncoding
  onRecordStart?: () => void
  onRecordEnd?: OnRecordEndFn
  loading?: boolean
}

const initialOptions = {
  height: 42,
  waveColor: "#fecdd3",
  progressColor: "#881337",
  cursorColor: "#e11d48",
  cursorWidth: 3,
  barWidth: 3,
  barGap: 3,
  barRadius: 30,
  barHeight: 38,
  minPxPerSec: 0.01,
  fillParent: true,
  // url: "/wavesurfer-code/examples/audio/audio.wav",
  mediaControls: false,
  audioRate: 1,
  autoScroll: false,
  autoCenter: false,
}

const initialRecorderOptions = {
  renderRecordedAudio: false,
  mimeType: "audio/wav",
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({
  blobEncoding = "audio/ogg; codecs=opus",
  onRecordStart,
  onRecordEnd,
  loading,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [wavesurfer] = useWavesurfer(containerRef, initialOptions)
  const { recorder, isRecording } = useWavesurferRecorder(
    wavesurfer,
    initialRecorderOptions,
    {
      onRecordStart,
      onRecordEnd,
    }
  )

  const [devices, setDevices] = useState<MediaDeviceInfo[]>([])
  const [selectedDevice, setSelectedDevice] = useState<string>()
  useEffect(() => {
    RecordPlugin.getAvailableAudioDevices().then(
      (devices: MediaDeviceInfo[]) => {
        setDevices(devices)
        setSelectedDevice(devices[0]?.deviceId)
      }
    )
  }, [])

  const handleRecordPress = useCallback(() => {
    if (!recorder) return

    if (isRecording) {
      recorder.stopRecording()
      recorder.stopMic()
      return
    }
    recorder.startRecording({ deviceId: selectedDevice })
  }, [recorder, isRecording, selectedDevice])

  return (
    <div className="border-border-2 bg-surface-base flex w-full flex-col space-y-2 rounded-lg border p-2">
      <div className="flex justify-between">
        <Select
          value={selectedDevice}
          onValueChange={setSelectedDevice}
          disabled={isRecording || loading}
        >
          <SelectTrigger>
            <Mic size={12} />
            <SelectValue placeholder="Select a mic" />
          </SelectTrigger>

          <SelectContent>
            <SelectViewport>
              {devices.map((device) => (
                <SelectItem
                  value={device.deviceId || "default"}
                  key={`recorder-mic-${device.deviceId}`}
                  title={device.label}
                >
                  {device.label}
                </SelectItem>
              ))}
            </SelectViewport>
          </SelectContent>
        </Select>

        <Button color="opaque" onClick={() => onRecordEnd?.()}>
          Cancel
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <RecordButton
          isRecording={isRecording}
          onClick={handleRecordPress}
          isLoading={loading}
        />
        <div
          className="w-full min-w-[200px] rounded-lg bg-rose-50"
          ref={containerRef}
        />
      </div>
    </div>
  )
}

interface RecordButtonProps {
  isRecording?: boolean
  isLoading?: boolean
  onClick: () => void
}
export const RecordButton: React.FC<RecordButtonProps> = ({
  isRecording,
  isLoading,
  onClick,
}) => {
  if (isLoading) {
    return (
      <button
        className="text-surface-base flex size-6 items-center justify-center rounded-full bg-rose-200"
        disabled
      >
        <Loader className="fill-surface-base" />
      </button>
    )
  }
  if (isRecording) {
    return (
      <button
        className="text-surface-base flex size-6 items-center justify-center rounded-full bg-rose-500"
        onClick={onClick}
      >
        <StopCircle width={13} />
      </button>
    )
  }

  return (
    <button
      className="bg-surface-level-2 flex size-6 items-center justify-center rounded-full"
      onClick={onClick}
    >
      <div className="bg-surface-level-1 flex size-[22px] items-center justify-center rounded-full">
        <div className="size-4 rounded-full bg-rose-500" />
      </div>
    </button>
  )
}

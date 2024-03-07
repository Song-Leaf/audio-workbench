import { MutableRefObject, useEffect, useState } from "react"
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js"
import RecordPlugin, {
  RecordPluginOptions,
} from "wavesurfer.js/dist/plugins/record.js"

export type OnRecordEndFn = (result?: { blob: Blob; url: string }) => void

export const useWavesurfer = (
  containerRef: MutableRefObject<HTMLElement | null>,
  url: string,
  options: Omit<WaveSurferOptions, "container" | "url">
): [WaveSurfer | null, boolean] => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null)
  const [error, setError] = useState<boolean>(false)

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef?.current) return

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    })

    ws.load(url).catch((e: Error) => {
      setError(true)
      console.error("Failed to load audio", e)
    })

    setWavesurfer(ws)

    return () => {
      ws.destroy()
    }
  }, [url, containerRef, options])

  return [wavesurfer, error]
}

export const useWavesurferRecorder = (
  wavesurfer: WaveSurfer | null,
  options: RecordPluginOptions,
  hooks?: {
    onRecordStart?: () => void
    onRecordEnd?: OnRecordEndFn
  }
) => {
  const [isRecording, setIsRecording] = useState(false)
  const [recorder, setRecorder] = useState<RecordPlugin | null>(null)

  useEffect(() => {
    if (!wavesurfer) return

    const r = wavesurfer.registerPlugin(RecordPlugin.create(options))
    r.on("record-start", () => {
      setIsRecording(true)
      hooks?.onRecordStart?.()
    })
    r.on("record-end", (blob: Blob) => {
      setIsRecording(false)
      hooks?.onRecordEnd?.({ blob, url: URL.createObjectURL(blob) })
    })
    r.on("record-pause", () => setIsRecording(false))
    r.on("record-resume", () => setIsRecording(true))

    setRecorder(r)

    return () => {
      r.destroy()
    }
  }, [
    options.audioBitsPerSecond,
    options.mimeType,
    options.renderRecordedAudio,
    wavesurfer,
  ])

  return { recorder, isRecording }
}

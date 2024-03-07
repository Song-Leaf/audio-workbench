import audioData from "./audio.data"
import { AudioExample } from "./audio.types"

const originalAudio = {
  filetype: "wav",
  sampleRate: 48000,
  bitDepth: 24,
}

export const musicOptions = [
  "acoustic",
  "piano",
  "metal",
  "rock",
  "hiphop",
  "lofi",
]

export const ambienceOptions = ["forestRain", "oceanWaves", "cityRooftop"]

export const filetypes = [
  "m4a/alac",
  "m4a/aac",
  "aac",
  "caf",
  "flac",
  "mp3",
  "mp4",
  "ogg",
  "opus",
  "wav",
]

export const getAudioExample = (option: string): AudioExample[] => {
  const category = musicOptions.includes(option) ? "music" : "ambience"
  return audioData[category][option].map((d) => {
    d.fullPath = `/audio/${category}/${option}/${d.path}`
    return d as AudioExample
  })
}

export const audio = {
  music: musicOptions,
  ambience: ambienceOptions,
}

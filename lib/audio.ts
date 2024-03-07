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

export const getOptionFilenames = (option: string) => {
  const category = musicOptions.includes(option) ? "music" : "ambience"
  return filetypes.map((t) => {
    let filename = `${option}.${t}`
    if (t === "m4a/alac") {
      filename = `${option}-lossless.m4a`
    } else if (t === "m4a/aac") {
      filename = `${option}-lossy.m4a`
    }
    return {
      path: `/audio/${category}/${option}/${filename}`,
      type: t,
    }
  })
}

export const audio = {
  music: musicOptions,
  ambience: ambienceOptions,
}

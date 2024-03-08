import { AudioExample } from "./audio.types"

type AudioData = {
  music: {
    [key: string]: Partial<AudioExample>[]
  }
  ambience: {
    [key: string]: Partial<AudioExample>[]
  }
}

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

const audioData: AudioData = {
  music: {
    acoustic: [
      {
        name: "acoustic",
        path: "acoustic-lossless.m4a",
        type: "m4a/alac",
        sampleRate: 48000,
        bitDepth: 24,
        bitRate: 1680,
        compression: "lossless",
        fileSize: 32696463,
        browserCompatibility: {
          chrome: "no",
          firefox: "no",
          safari: "yes",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/Apple_Lossless",
            label: "Wikipedia",
          },
        ],
      },
      {
        name: "acoustic",
        path: "acoustic-lossy.m4a",
        type: "m4a/aac",
        sampleRate: 48000,
        bitRate: 128,
        compression: "lossy",
        fileSize: 2535086,
        browserCompatibility: {
          chrome: "yes",
          firefox: "yes",
          safari: "yes",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/Advanced_Audio_Coding",
            label: "Wikipedia",
          },
        ],
      },
      {
        name: "acoustic",
        path: "acoustic.aac",
        type: "aac",
        sampleRate: 48000,
        bitRate: 126,
        compression: "lossy",
        fileSize: 2556102,
        browserCompatibility: {
          chrome: "yes",
          firefox: "yes",
          safari: "yes",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/Advanced_Audio_Coding",
            label: "Wikipedia",
          },
        ],
      },
      {
        name: "acoustic",
        path: "acoustic.caf",
        type: "caf",
        sampleRate: 48000,
        bitRate: 1536,
        compression: "none",
        fileSize: 29880346,
        browserCompatibility: {
          chrome: "no",
          firefox: "no",
          safari: "yes",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/Core_Audio_Format",
            label: "Wikipedia",
          },
        ],
      },
      {
        name: "acoustic",
        path: "acoustic.flac",
        type: "flac",
        sampleRate: 48000,
        bitDepth: 24,
        bitRate: 1664,
        compression: "lossless",
        fileSize: 32384611,
        browserCompatibility: {
          chrome: "yes",
          firefox: "yes",
          safari: "yes",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/FLAC",
            label: "Wikipedia",
          },
        ],
      },
      {
        name: "acoustic",
        path: "acoustic.mp3",
        type: "mp3",
        sampleRate: 48000,
        bitRate: 128,
        compression: "lossy",
        fileSize: 2491116,
        browserCompatibility: {
          chrome: "yes",
          firefox: "yes",
          safari: "yes",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/MP3",
            label: "Wikipedia",
          },
        ],
      },
      {
        name: "acoustic",
        path: "acoustic.mp4",
        type: "mp4",
        sampleRate: 48000,
        bitRate: 128,
        compression: "lossy",
        fileSize: 2535106,
        browserCompatibility: {
          chrome: "yes",
          firefox: "yes",
          safari: "yes",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/MP4_file_format",
            label: "Wikipedia",
          },
        ],
      },
      {
        name: "acoustic",
        path: "acoustic.ogg",
        type: "ogg",
        sampleRate: 48000,
        bitRate: 112,
        compression: "lossy",
        fileSize: 2130263,
        browserCompatibility: {
          chrome: "yes",
          firefox: "yes",
          safari: "no",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/Ogg",
            label: "Wikipedia",
          },
        ],
      },
      {
        name: "acoustic",
        path: "acoustic.opus",
        type: "opus",
        sampleRate: 48000,
        bitRate: 49,
        compression: "lossy",
        fileSize: 971340,
        browserCompatibility: {
          chrome: "yes",
          firefox: "yes",
          safari: "no",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/Opus_(audio_format)",
            label: "Wikipedia",
          },
        ],
      },

      {
        name: "acoustic",
        path: "acoustic.wav",
        type: "wav",
        sampleRate: 48000,
        bitDepth: 24,
        compression: "none",
        fileSize: 44879104,
        browserCompatibility: {
          chrome: "yes",
          firefox: "yes",
          safari: "yes",
          edge: "yes",
          ios: "yes",
          android: "yes",
        },
        moreInfo: [
          {
            url: "https://en.wikipedia.org/wiki/WAV",
            label: "Wikipedia",
          },
        ],
      },
    ],
  },
  ambience: {},
}

export default audioData

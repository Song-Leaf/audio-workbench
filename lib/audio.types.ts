export interface AudioExample {
  name: string
  path: string
  fullPath: string
  type: string
  compression: "lossless" | "lossy" | "none"
  bitDepth: number
  sampleRate: number
  browserCompatibility: {
    chrome?: string
    firefox?: string
    safari?: string
    edge?: string
    ios?: string
    android?: string
  }
  moreInfo: [
    {
      url: string
      label: string
    }
  ]
}

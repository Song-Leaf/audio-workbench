export type BlobEncoding =
  | "audio/ogg;codecs=opus"
  | "audio/webm;codecs=opus"
  | "audio/webm;codecs=pcm"
  | "audio/mp4"
  | "audio/mpeg"
  // | "audio/wav"
  | "audio/mp3"

export type OnRecordEndFn = (result?: { blob: Blob; url: string }) => void

/** Copy of the MediaDeviceInfo interface from the web API.
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaDeviceInfo)
 */
export interface MediaDeviceInfo {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaDeviceInfo/deviceId) */
  readonly deviceId: string
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaDeviceInfo/groupId) */
  readonly groupId: string
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaDeviceInfo/kind) */
  readonly kind: MediaDeviceKind
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaDeviceInfo/label) */
  readonly label: string
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaDeviceInfo/toJSON) */
  toJSON(): any
}

export type MediaDeviceKind = "audioinput" | "audiooutput" | "videoinput"

/**
 * formatTime
 * @param time time in milliseconds
 * @returns string in format HH:MM:SS
 */
export const formatTime = (time: number): string => {
  if (isNaN(time)) return "--:--"
  if (time === Infinity) return "--:--"
  if (time === 0) return "00:00"

  const date = new Date(time)

  const hours = date.getUTCHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${hours === 0 ? "" : (hours < 10 ? "0" + hours : hours) + ":"}${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`
}

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

export const copyToClipboard = (str: string) => {
  return navigator.clipboard.writeText(str)
}

export const getFileSize = (size: number): string => {
  const units = ["B", "KB", "MB", "GB", "TB"]
  let unit = 0
  while (size >= 1024) {
    size /= 1024
    unit++
  }
  return `${size.toFixed(2)} ${units[unit]}`
}

export const getkHz = (rate: number): string => {
  return `${(rate / 1000).toFixed(1)} kHz`
}

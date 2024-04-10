"use client"

import { useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { AudioPlayerSimple } from "@/components/audio/audio-player-simple"
import { AudioRecorder } from "@/components/audio/audio-recorder"

export default function IndexPage() {
  const [recordings, setRecordings] = useState<
    { id: string; blob: Blob; url: string }[]
  >([])
  return (
    <section className="grid items-center gap-2 px-1 pb-8 pt-2 md:py-1">
      <div className="flex w-full flex-col items-start gap-2">
        <p className="w-full rounded-lg bg-muted p-3 text-sm text-muted-foreground">
          Simply put there is no built-in cross browser way to record audio to a
          common format.
          <br />
          <br />
          The MediaRecorder API is supported in most modern browsers, but does
          encode audio in any shared codec. This means that Chrome may support
          recording and encoding audio with the webm format, and Safari may not
          support playback of that type. Let alone you may want to record audio
          in a different format like wav or mp3 which may not be supported by
          the browser at all.
          <br />
          <br />
          <strong>
            <i>However,</i>
          </strong>{" "}
          there are polyfills and libraries that can help you record audio in
          the browser, and this example uses the{" "}
          <a
            href="https://github.com/chrisguttandin/extendable-media-recorder"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            extendable-media-recorder
          </a>{" "}
          to record to wav format.
        </p>
      </div>

      <AudioRecorder
        onRecordEnd={(result) => {
          console.log("Recording ended", result)

          if (result) {
            setRecordings((rs) => [
              { id: Math.random().toString(36).substring(7), ...result },
              ...rs,
            ])
          }
        }}
      />

      {recordings.map((recording, index) => (
        <div key={recording.id} className="flex items-center space-x-2">
          <AudioPlayerSimple url={recording.url} />
        </div>
      ))}
    </section>
  )
}

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
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Recording
        </h1>
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

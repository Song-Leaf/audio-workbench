"use client"

import { useState } from "react"

import { getAudioExample } from "@/lib/audio"
import { AudioExample } from "@/lib/audio.types"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Separator } from "../ui/separator"
import { AudioPlayerSimple } from "./audio-player-simple"

// import { ScrollArea } from "@/components/ui/scroll-area"

interface ExamplesProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesList({ className }: ExamplesProps) {
  const [option, setOption] = useState("acoustic")
  const examples = getAudioExample(option)

  return (
    <div>
      <div className="flex gap-4">
        <Select
          defaultValue="acoustic"
          onValueChange={setOption}
          value={option}
        >
          <SelectTrigger className="w-[180px]" defaultValue="acoustic">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Music</SelectLabel>
              <SelectItem value="acoustic">Acoustic</SelectItem>
              <SelectItem value="paino">Piano</SelectItem>
              <SelectItem value="metal">Metal</SelectItem>
              <SelectItem value="rock">Rock</SelectItem>
              <SelectItem value="hipHop">Hip Hop</SelectItem>
              <SelectItem value="lofi">LoFi</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Ambience</SelectLabel>
              <SelectItem value="forestRain">Forest Rain</SelectItem>
              <SelectItem value="oceanWaves">Ocean Waves</SelectItem>
              <SelectItem value="cityRooftop">City Rooftop</SelectItem>
            </SelectGroup>
            {/* <SelectGroup>
              <SelectLabel>Voice</SelectLabel>
              <SelectItem value="podcast">Podcast</SelectItem>
              <SelectItem value="radio">Radio</SelectItem>
            </SelectGroup> */}
          </SelectContent>
        </Select>
      </div>
      <div className="py-4">
        {examples.slice(1, 2).map((e, i) => (
          <Example key={e.path} example={e} />
        ))}
      </div>
    </div>
  )
}

interface ExampleProps {
  example: AudioExample
}
function Example({ example }: ExampleProps) {
  return (
    <div className="py-1">
      {/* type */}

      <div className="flex items-center space-x-2">
        <p className="text-sm">{example.type}</p>
        <p className="text-xs">{example.path}</p>
      </div>

      <div className="rounded-md border border-slate-200 p-1 pr-2">
        <AudioPlayerSimple url={example.fullPath} />

        <Separator className="mt-1" />
        <div className="pb-1 pt-2">
          <div className="flex h-4 items-center justify-between space-x-1 text-xs">
            <p>{example.compression}</p>

            <Separator orientation="vertical" decorative />

            <p>{example.bitDepth}</p>

            <Separator orientation="vertical" />

            <p>{example.sampleRate}</p>

            <Separator orientation="vertical" />

            <p>{JSON.stringify(example.browserCompatibility)}</p>

            <Separator orientation="vertical" />

            <p>
              {example.moreInfo?.map(({ url, label }) => (
                <a key={url} href={url} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ))}
            </p>
          </div>
        </div>

        {/* compatibility grid */}
        {/* 
        type
        file extension
        compression - none, lossy, lossless
        bit depth?
        sample rate?
        browser compatibility
        links to more info

      */}
      </div>
    </div>
  )
}

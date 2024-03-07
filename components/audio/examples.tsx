"use client"

import { useState } from "react"

import { getOptionFilenames } from "@/lib/audio"
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

import { AudioPlayerSimple } from "./audio-player-simple"

// import { ScrollArea } from "@/components/ui/scroll-area"

interface ExamplesProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesList({ className }: ExamplesProps) {
  const [option, setOption] = useState("acoustic")
  const examples = getOptionFilenames(option)

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
      <div>
        {examples.map((e, i) => (
          <Example
            key={`example-${i}`}
            example={{
              name: option,
              ...e,
            }}
          />
        ))}
      </div>
    </div>
  )
}

interface ExampleProps {
  example: {
    name: string
    path: string
    type: string
  }
}
function Example({ example }: ExampleProps) {
  return (
    <div>
      {/* type */}

      <div>{example.type}</div>

      <AudioPlayerSimple url={example.path} />

      {/* audio player */}
      {/* <audio controls src={example.path} /> */}

      {/* compatibility grid */}
    </div>
  )
}

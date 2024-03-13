"use client"

import { useState } from "react"
import cs from "classnames"

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
import { getFileSize, getkHz } from "./utils"

// import { ScrollArea } from "@/components/ui/scroll-area"

interface ExamplesProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesList({ className }: ExamplesProps) {
  const [option] = useState("acoustic")
  const examples = getAudioExample(option)

  return (
    <div>
      <div className="flex gap-4">
        {/* <Select
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
            <SelectGroup>
              <SelectLabel>Voice</SelectLabel>
              <SelectItem value="podcast">Podcast</SelectItem>
              <SelectItem value="radio">Radio</SelectItem>
            </SelectGroup> 
          </SelectContent>
        </Select> */}
      </div>
      <div className="py-4">
        {examples.map((e, i) => (
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
      <div className="rounded-md border border-border p-1 pr-2">
        <div className="flex items-center space-x-2 p-1">
          <p className="text-sm font-semibold">{example.path}</p>
        </div>
        <AudioPlayerSimple url={example.fullPath} />

        <Separator className="mt-1" />
        <div className="pb-1 pt-2">
          <div className="flex flex-wrap items-center justify-between space-x-1 text-xs">
            <div className="flex-1 text-center">
              <p>{example.type}</p>
            </div>

            <Separator orientation="vertical" decorative className="h-7" />
            <div className="flex-1 text-center">
              <p>{getFileSize(example.fileSize)}</p>
            </div>

            <Separator orientation="vertical" decorative className="h-7" />

            <div className="flex-1 text-center">
              <p>{example.compression}</p>
            </div>

            <Separator orientation="vertical" decorative className="h-7" />

            <div
              className={cs("text-center", {
                "flex items-center justify-center space-x-4 flex-[2_2_0%]":
                  example.bitDepth && example.bitRate,
                "flex-1": !example.bitDepth || !example.bitRate,
              })}
            >
              {example.bitDepth && <p>{example.bitDepth} Bit</p>}
              {example.bitRate && <p>{example.bitRate} kb/s</p>}
            </div>

            <Separator orientation="vertical" decorative className="h-7" />
            <div className="flex-1 text-center">
              <p>{getkHz(example.sampleRate)}</p>
            </div>

            <Separator orientation="vertical" decorative className="h-7" />

            <div className="flex-[6_1_0%] text-center">
              <BrowserCompatibility
                compatibility={example.browserCompatibility}
              />
            </div>

            <Separator orientation="vertical" decorative className="h-7" />

            <div className="flex-1 text-center">
              <p>
                {example.moreInfo?.map(({ url, label }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary-foreground underline"
                  >
                    {label}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 inline-block size-2"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BrowserCompatibility = ({
  compatibility,
}: {
  compatibility: AudioExample["browserCompatibility"]
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between space-x-1 space-y-1 px-1">
      <Compat browser="Chrome" compat={compatibility.chrome} />
      <Compat browser="Firefox" compat={compatibility.firefox} />
      <Compat browser="Safari" compat={compatibility.safari} />
      <Compat browser="Edge" compat={compatibility.edge} />
      <Compat browser="iOS" compat={compatibility.ios} />
      <Compat browser="Android" compat={compatibility.android} />
    </div>
  )
}

const Compat = ({ browser, compat }: { browser: string; compat?: string }) => {
  const classNames = cs("text-xxs px-1.5 py-0.5 rounded-md", {
    "bg-emerald-200": compat === "yes",
    "bg-rose-200": compat === "no" || !compat,
  })
  return <p className={classNames}>{browser}</p>
}

function compatibleText(compatable?: string) {
  return compatable === "yes" ? "Yes" : "No"
}

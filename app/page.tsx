import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-2 pb-8 pt-2 md:py-1">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <p className="max-w-[700px] text-sm text-foreground">Audio examples</p>
      </div>
      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-[180px]" defaultValue="acoustic">
            <SelectValue placeholder="Example" />
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
    </section>
  )
}

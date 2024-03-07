import { ExamplesList } from "@/components/audio/examples"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-2 px-1 pb-8 pt-2 md:py-1">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <p className="max-w-[700px] text-sm text-foreground">Audio examples</p>
      </div>
      <div>
        <ExamplesList />
      </div>
    </section>
  )
}

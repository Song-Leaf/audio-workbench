import { ExamplesList } from "@/components/audio/examples"

export default function IndexPage() {
  return (
    <section className="flex w-full pb-8 pt-2 md:py-1">
      <div className="max-w-96">
        <p className="rounded-lg bg-slate-200 p-3 text-xs text-slate-600">
          The project is a work in progress, and will be updated with new
          examples and interactions as time goes on.
        </p>
        <br />
        <p className="text-sm">
          This is a collection of audio interactions on the web. The aim is to
          provide a clear viewpoint into using audio on the web, along with its
          many pitfalls.
        </p>
      </div>
    </section>
  )
}

import { ExamplesList } from "@/components/audio/examples"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-2 px-1 pb-8 pt-2 md:py-1">
      <div className="flex w-full flex-col items-start gap-2">
        <p className="w-full rounded-lg bg-muted p-3 text-sm text-muted-foreground">
          ● <strong>mp3</strong> is the <em>overall</em> best choice for audio
          on the web, as it has the best browser compatibility and one of the
          smallest file sizes. However, it will not contain all the audio data
          from a recording.
          <br />
          <br />● <strong>flac</strong> is the best choice for playback of
          lossless audio. The file size can be significantly larger than mp3,
          but the audio quality is much better. This is the best choice for
          listening to music, or any audio that needs to be of the highest
          quality.
          {/* <br />
          <br />● <strong>wav</strong> should be used when you need to retain
           */}
        </p>
      </div>
      <div>
        <ExamplesList />
      </div>
    </section>
  )
}

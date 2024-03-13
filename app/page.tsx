import Link from "next/link"

export default function IndexPage() {
  return (
    <section className="flex w-full pb-8 pt-2 md:py-1">
      <div className="max-w-96">
        <p className="rounded-lg bg-muted p-3 text-xs text-muted-foreground">
          This is a work in progress, and will be updated with new examples and
          interactions as time goes on.
        </p>
        <br />
        <p className="text-sm">
          This is a collection of audio interactions on the web. The aim is to
          provide a clear view into what is needed for developing web
          applications that use audio.
        </p>
        <br />
        <Link href="/playback">
          <h2 className="font-bold">Playback</h2>
        </Link>
        <p className="text-sm">
          A collection of audio examples, each with a different format and
          compression type. Each example has a detailed breakdown of its
          properties, including the browser compatibility. You can listen
          carefully to the audio, and see how the different formats and
          compression types affect the audio quality, although might be hard for
          most to hear.
          <br />
          <br />
          <span className="block rounded-lg bg-muted p-3 text-xs text-muted-foreground">
            When listening for quality differences don&apos;t use bluetooth
            headphones or speakers, as bluetooth is lossy in nature and will
            affect the audio quality. Read more about lossless audio on Apple
            hardware{" "}
            <a
              className="underline"
              href="https://support.apple.com/en-us/118295"
            >
              here
            </a>
            .
          </span>
          <br />
          In addition, I&apos;ve called out recommendations of the best choice
          of format depending on what you want to achieve with your audio.
        </p>
        <br />
        <Link href="/recording">
          <h2 className="font-bold">Recording</h2>
        </Link>
        <p className="text-sm">Coming soon</p>
        {/* <p className="text-sm">
          Recording
          <br />
          <br />
          I&apos;ve also called out recommendations of the best choice of format
          depending on what you want to achieve with your audio.
        </p> */}
      </div>
    </section>
  )
}

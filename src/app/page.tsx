import Image from "next/image";
import { WaveNavigation } from "@/components/navigation/WaveNavigation";

export default function HomePage() {
  return (
    <section className="relative pb-64 pt-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <header className="w-full space-y-6">
          <div className="relative mx-auto aspect-[3/1] w-full max-w-4xl">
            <Image
              src="/banner.png"
              alt="Banner de LucasCarri.Art"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1040px"
            />
          </div>

          <h1 className="font-brittany-signature text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            LucasCarriArt
          </h1>

          <p className="font-gagalin text-lg uppercase tracking-[0.2em] sm:text-2xl md:text-3xl">
            A TSUNAMI OF INFINITE CREATION
          </p>
        </header>

        <div className="mt-8 max-w-3xl space-y-5 font-gagalin text-base leading-relaxed text-black/80 sm:text-lg">
          <p>
            Due to being involved in the Surf industry for over a decade (Surfcamps, SurfHouses, Shops and cafes)
            I developed a particular feeling for the Rad Old School illustrations over the new more sober too serious
            designs and this is what you will find here
          </p>
          <p>original illustrations, vectors and logos totally customised and full of personality</p>
          <p>take a look at some of this awesome collaborations and commission works</p>
          <p>and now the question... Fancy an original design???</p>
        </div>
      </div>

      <WaveNavigation className="fixed bottom-[4.5rem] left-0 right-0 z-50 flex justify-center border-y border-black/20 bg-[rgb(214,210,193)]/95 px-4 py-3 backdrop-blur-sm" />
    </section>
  );
}

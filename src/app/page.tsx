import Image from "next/image";
import { WaveNavigation } from "@/components/navigation/WaveNavigation";

export default function HomePage() {
  return (
    <section className="relative pb-12 pt-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <header className="w-full">

          <div className="relative mx-auto aspect-2/1 w-full max-w-4xl px-0">
            <Image
              src="/banner.png"
              alt="Banner de LucasCarri.Art"
              fill
              className="object-contain transform sm:scale-125 md:scale-150"
              priority
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1040px"
            />
          </div>

          <h1 className="font-brittany-signature text-5xl leading-[0.95] sm:text-9xl md:text-10xl">
            LucasCarriArt
          </h1>
          
          <p className="font-kingthings-lickorishe text-lg uppercase tracking-[0.2em] sm:text-2xl md:text-3xl mt-25">
            A TSUNAMI OF INFINITE CREATION
          </p>
        </header>

        <div className="mt-8 max-w-3xl space-y-5 font-retro-wild text-base leading-relaxed text-black/80 sm:text-xl">
          <p>
            Due to being involved in the Surf industry for over a decade 
            (Surfcamps, SurfHouses, Shops and cafes) 
            I developed a particular feeling for the Rad Old School 
            illustrations over the new more sober too serious designs
            and this is what you will find here
            original illustrations, vectors and logos 
            totally customised and full of personality 
          </p>
          <br />
          <p>take a look at some of this awesome collaborations and commission works</p>
          <br />
          <p>and now the question... Fancy an original design???</p>
        </div>
      </div>

      <WaveNavigation className="mt-12 mb-1 py-2" />
    </section>
  );
}

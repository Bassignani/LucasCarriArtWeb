import Image from "next/image";
import { WaveNavigation } from "@/components/navigation/WaveNavigation";

export default function HomePage() {
  return (
    <section className="relative pb-12 pt-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <header className="w-full">

          <div className="relative mx-auto aspect-2.5/1 w-full max-w-4xl px-0">
            <Image
              src="/banner.png"
              alt="Banner de LucasCarri.Art"
              fill
              className="object-contain transform sm:scale-125 md:scale-150"
              priority
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1040px"
            />
          </div>

          <h1 className="font-brittany-signature text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            LucasCarriArt
          </h1>
          
          <p className="font-gagalin text-lg uppercase tracking-[0.2em] sm:text-2xl md:text-3xl mt-25">
            A TSUNAMI OF INFINITE CREATION
          </p>
        </header>

        <div className="mt-8 max-w-3xl space-y-5 font-gagalin text-base leading-relaxed text-black/80 sm:text-lg">
          <p>
            DUE TO BEING INVOLVED UN THE SURF INDUSTRY FOR OVER A DECADE (SURFCAMPS, SURFHOUSES, SHOPS AND CAFES)
            I DEVELOPED A PARTICULAR FEELING FOR THE RAD OLD SCHOOL ILLUSTRATIONS OVER TRH NEW MORE SOBER TOO SERIOUS
            DESIGNS AND THIS IS WHAT YOU WILL FIND HERE 
          </p>
          <p>ORIGINAL ILLUSTRATIONS, VECTORS AND LOGOS TOTALLY CUSTOMISED AND FULL OF PERSONALITY</p>
          <p>TAKE A LOOK AT SOME OF THIS AWESOME COLLABORATIONS AND COMMISSION WORKS</p>
          <p>AND NOW THE QUESTION ...FANCY AN ORIGINAL DESIGN???</p>
        </div>
      </div>

      <WaveNavigation className="mt-12 mb-1 py-2" />
    </section>
  );
}

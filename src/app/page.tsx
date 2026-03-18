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
            A WAVE OF INFINITE CREATION
          </p>
        </header>

        <div className="mt-8 max-w-3xl space-y-5 font-retro-wild text-base leading-relaxed text-black/80 sm:text-xl">
          <p className="text-lg  sm:text-2xl">Olá, I’m Lucas – a surf artist based in Lagos, Portugal.</p>
          <br />
          <p>
            I’ve had a passion for art, design and illustration since early childhood, 
            finding inspiration in everything I see around me. After moving to Portugal 
            15 years ago, I became part of the surf community here in the Algarve, where 
            I continued to find inspiration in the waves. My art naturally graduated towards a more 
            relaxed, surf-influenced style, choosing old school illustration methods over newer, more 
            serious designs, and this is what you’ll find here: original artwork, totally customised and full of personality.
 
          </p>
          <br />
          <p className="text-lg  sm:text-2xl">I’m available for all of your design needs – from personalised portraits, to professional branding and everything in between.</p>
          <br />
          <p className="text-lg  sm:text-2xl">Let’s get in contact and create something unique!</p>
        </div>
      </div>

      <WaveNavigation className="mt-12 mb-1 py-2" />
    </section>
  );
}

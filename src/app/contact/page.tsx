import { ContactSection } from "@/components/contact/ContactSection";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex justify-center pt-0 pb-0">
        <ContactSection />
      </section>

      <div className="relative mt-0 w-full px-4 md:mt-0 md:px-6">
        {/* <Image
          src="/images/Contact/celebrizo.png"
          alt="Celebrizo"
          width={2400}
          height={2400}
          className="w-full h-auto object-contain relative z-0"
        />
        <div className="absolute z-10 w-3/4 left--3 top-20">
          <Image
            src="/images/Contact/manoIzquierda.png"
            alt="Mano izquierda"
            width={2400}
            height={2400}
            className="w-full h-auto object-contain rotate-45"
          />
        </div>
        <div className="absolute z-10 w-3/4 right-0  top-20">
          <Image
            src="/images/Contact/manoDerecha.png"
            alt="Mano derecha"
            width={2400}
            height={2400}
            className="w-full h-auto object-contain -rotate-45"
          />
        </div> */}
        <h2 id="contact-heading" className="mt-20 text-center text-3xl leading-none font-kingthings-lickorishe md:text-7xl">LETS DO THIS!</h2>
        <Image
          src="/images/Contact/end.png"
          alt="Celebrizo"
          width={2400}
          height={2400}
          className="relative z-0 mx-auto -mt-15 h-auto w-full max-w-3xl object-contain md:-mt-44 md:max-w-4xl"
        />
      </div>


    </div>
  );
}

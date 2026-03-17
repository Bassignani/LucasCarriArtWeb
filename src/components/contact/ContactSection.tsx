import Image from "next/image";

export function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="w-full max-w-xl r p-6 md:p-8">
      <h2 id="contact-heading" className="text-center text-3xl font-kingthings-lickorishe md:text-7xl">Contacts</h2>

      <div className="font-brittany-signature mt-6 space-y-6 text-center text-3xl md:text-4xl" aria-label="Canales de contacto">
        <div className="flex items-center justify-center gap-3">
          <Image src="/ui/button.png" alt="Icono de ola" width={40} height={40} className="h-10 w-10 md:h-12 md:w-12" />
          <a href="mailto:lucascarriart@gmail.com" className="hover:underline focus-visible:underline">
            Email: lucascarriart@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Image src="/ui/button.png" alt="Icono de ola" width={40} height={40} className="h-10 w-10 md:h-12 md:w-12" />
          <a
            href="https://instagram.com/lucascarriart"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus-visible:underline"
          >
            Instagram: @lucascarriart
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Image src="/ui/button.png" alt="Icono de ola" width={40} height={40} className="h-10 w-10 md:h-12 md:w-12" />
          <a
            href="https://wa.me/351913454810"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus-visible:underline"
          >
            Whatsapp: +351913454810
          </a>
        </div>
      </div>
    </section>
  );
}

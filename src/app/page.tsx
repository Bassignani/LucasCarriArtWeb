import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-black p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-black/60">Portfolio</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Ilustración para surf, skate y cultura costera.</h2>
        <p className="mt-4 max-w-2xl text-black/70">
          Bienvenido a LucasCarri.Art. Explora las categorías usando las olas y abre cada obra para verla ampliada con animación integrada en la galería.
        </p>
      </div>
      <ContactSection />
    </section>
  );
}

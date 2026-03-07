import { ContactSection } from "@/components/contact/ContactSection";
import { WaveNavigation } from "@/components/navigation/WaveNavigation";

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-240px)] flex-col justify-between space-y-8">
      <div className="space-y-8">
        <div className="rounded-2xl border border-black p-6 md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-black/60">Portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Ilustración para surf, skate y cultura costera.</h2>
          <p className="mt-4 max-w-2xl text-black/70">
            Bienvenido a LucasCarri.Art. Explora las categorías desde la navegación por olas al final de la página.
          </p>
        </div>

        <ContactSection />
      </div>

      <WaveNavigation className="border-t border-black/20 pt-6" />
    </section>
  );
}

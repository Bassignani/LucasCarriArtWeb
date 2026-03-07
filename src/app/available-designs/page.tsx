import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getArtworksByCategory } from "@/data/artworks";

export default function AvailableDesignsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Available Designs</h2>
      <p className="text-sm text-black/70">Galería preparada para futura tienda: cada card deja visible un estado para botón de compra.</p>
      <GalleryGrid artworks={getArtworksByCategory("available")} showFutureBuyAction />
    </section>
  );
}

import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getArtworksByCategory } from "@/data/artworks";

export default function IllustrationsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Illustrations</h2>
      <GalleryGrid artworks={getArtworksByCategory("illustrations")} />
    </section>
  );
}

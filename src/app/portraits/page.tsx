import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getArtworksByCategory } from "@/data/artworks";

export default function PortraitsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Portraits</h2>
      <GalleryGrid artworks={getArtworksByCategory("portraits")} />
    </section>
  );
}

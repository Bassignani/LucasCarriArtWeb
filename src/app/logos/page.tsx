import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getArtworksByCategory } from "@/data/artworks";

export default function LogosPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Logos</h2>
      <GalleryGrid artworks={getArtworksByCategory("logos")} />
    </section>
  );
}

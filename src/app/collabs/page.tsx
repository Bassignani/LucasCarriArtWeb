import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getArtworksByCategory } from "@/data/artworks";

export default function CollabsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Collabs</h2>
      <GalleryGrid artworks={getArtworksByCategory("collabs")} />
    </section>
  );
}

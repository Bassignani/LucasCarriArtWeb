import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import type { Artwork } from "@/data/artworks";
import fs from "fs/promises";
import path from "path";

async function readCollabsFromPublic(): Promise<Artwork[]> {
  const dir = path.join(process.cwd(), "public", "images", "Collabs");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch (e) {
    return [];
  }

  const imageFiles = files.filter((f) => !f.startsWith('.') && /\.(png|jpe?g|svg|webp)$/i.test(f));

  return imageFiles.map((file, i) => ({
    id: `collab-${i}`,
    title: file.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " "),
    image: `/images/Collabs/${encodeURIComponent(file)}`,
    category: "collabs",
  } as Artwork));
}

export default async function CollabsPage() {
  const artworks = await readCollabsFromPublic();

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-gagalin">Collabs</h2>
      <GalleryGrid artworks={artworks} />
    </section>
  );
}

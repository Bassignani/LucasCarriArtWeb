import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import type { Artwork } from "@/data/artworks";
import fs from "fs/promises";
import path from "path";

async function readPortraitsFromPublic(): Promise<Artwork[]> {
  const dir = path.join(process.cwd(), "public", "images", "Portraits");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch (e) {
    return [];
  }
  const imageFiles = files.filter((f) => !f.startsWith('.') && /\.(png|jpe?g|svg|webp)$/i.test(f));

  return imageFiles.map((file, i) => ({
    id: `portrait-${i}`,
    title: file.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " "),
    image: `/images/Portraits/${encodeURIComponent(file)}`,
    category: "portraits",
  } as Artwork));
}

export default async function PortraitsPage() {
  const artworks = await readPortraitsFromPublic();

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-kingthings-lickorishe">Portraits</h2>
      <GalleryGrid artworks={artworks} />
    </section>
  );
}

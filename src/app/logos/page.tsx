import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import type { Artwork } from "@/data/artworks";
import fs from "fs/promises";
import path from "path";

async function readLogosFromPublic(): Promise<Artwork[]> {
  const dir = path.join(process.cwd(), "public", "images", "Logos");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }
  const imageFiles = files.filter((f) => !f.startsWith('.') && /\.(png|jpe?g|svg|webp)$/i.test(f));

  return imageFiles.map((file, i) => ({
    id: `logo-${i}`,
    title: file.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " "),
    image: `/images/Logos/${encodeURIComponent(file)}`,
    category: "logos",
  } as Artwork));
}

export default async function LogosPage() {
  const artworks = await readLogosFromPublic();

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-kingthings-lickorishe">Logos</h2>
      <GalleryGrid artworks={artworks} imageFit="contain" />
    </section>
  );
}

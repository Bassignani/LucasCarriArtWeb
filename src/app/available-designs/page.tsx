import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import type { Artwork } from "@/data/artworks";
import fs from "fs/promises";
import path from "path";

async function readAvailablesFromPublic(): Promise<Artwork[]> {
  const dir = path.join(process.cwd(), "public", "images", "Availables");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch (e) {
    return [];
  }
  const imageFiles = files.filter((f) => !f.startsWith('.') && /\.(png|jpe?g|svg|webp)$/i.test(f));

  return imageFiles.map((file, i) => ({
    id: `avail-${i}`,
    title: file.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " "),
    image: `/images/Availables/${encodeURIComponent(file)}`,
    category: "available",
    isAvailableForPurchase: true,
  } as Artwork));
}

export default async function AvailableDesignsPage() {
  const artworks = await readAvailablesFromPublic();

  return (
    <section className="space-y-6">
      <h2 className="text-3xl  font-gagalin ">Available Designs</h2> 
      {/* font-semibold */}
      <GalleryGrid artworks={artworks} showFutureBuyAction />
    </section>
  );
}

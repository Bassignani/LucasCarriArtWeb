import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import type { Artwork } from "@/data/artworks";
import fs from "fs/promises";
import path from "path";

async function readCollabsAlgarveSportlandFromPublic(): Promise<Artwork[]> {
  const dir = path.join(process.cwd(), "public", "images", "Collabs", "AlgarveSportland");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const imageFiles = files.filter((f) => !f.startsWith('.') && /\.(png|jpe?g|svg|webp)$/i.test(f));

  return imageFiles.map((file, i) => ({
    id: `collab-algarve-${i}`,
    title: file.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " "),
    image: `/images/Collabs/AlgarveSportland/${encodeURIComponent(file)}`,
    category: "collabs",
  } as Artwork));
}


async function readCollabsContestsFromPublic(): Promise<Artwork[]> {
  const dir = path.join(process.cwd(), "public", "images", "Collabs", "Contests");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const imageFiles = files.filter((f) => !f.startsWith('.') && /\.(png|jpe?g|svg|webp)$/i.test(f));

  return imageFiles.map((file, i) => ({
    id: `collab-contests-${i}`,
    title: file.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " "),
    image: `/images/Collabs/Contests/${encodeURIComponent(file)}`,
    category: "collabs",
  } as Artwork));
}


async function readCollabsLOSCFromPublic(): Promise<Artwork[]> {
  const dir = path.join(process.cwd(), "public", "images", "Collabs", "LOSC");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const imageFiles = files.filter((f) => !f.startsWith('.') && /\.(png|jpe?g|svg|webp)$/i.test(f));

  return imageFiles.map((file, i) => ({
    id: `collab-losc-${i}`,
    title: file.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " "),
    image: `/images/Collabs/LOSC/${encodeURIComponent(file)}`,
    category: "collabs",
  } as Artwork));
}


async function readCollabsSurfItEasyFromPublic(): Promise<Artwork[]> {
  const dir = path.join(process.cwd(), "public", "images", "Collabs", "SurfItEasy");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const imageFiles = files.filter((f) => !f.startsWith('.') && /\.(png|jpe?g|svg|webp)$/i.test(f));

  return imageFiles.map((file, i) => ({
    id: `collab-surfiteasy-${i}`,
    title: file.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " "),
    image: `/images/Collabs/SurfItEasy/${encodeURIComponent(file)}`,
    category: "collabs",
  } as Artwork));
}

export default async function CollabsPage() {
  const artworksAlgarveSportland = await readCollabsAlgarveSportlandFromPublic();
  const artworksContests = await readCollabsContestsFromPublic();
  const artworksLOSC = await readCollabsLOSCFromPublic();
  const artworksSurfItEasy = await readCollabsSurfItEasyFromPublic();


  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-kingthings-lickorishe">Collabs - Surf It Easy</h2>
      <GalleryGrid artworks={artworksSurfItEasy} />
      <h2 className="text-3xl font-kingthings-lickorishe">Collabs - Algarve Sport Land</h2>
      <GalleryGrid artworks={artworksAlgarveSportland} />
      <h2 className="text-3xl font-kingthings-lickorishe">Collabs - Lagos Ocean Sports Clube</h2>
      <GalleryGrid artworks={artworksLOSC} />
      <h2 className="text-3xl font-kingthings-lickorishe">Collabs - Contests</h2>
      <GalleryGrid artworks={artworksContests} />
    </section>
  );
}


// import { GalleryGrid } from "@/components/gallery/GalleryGrid";
// import type { Artwork } from "@/data/artworks";
// import fs from "fs/promises";
// import path from "path";

// async function readCollabsFromPublic(): Promise<Artwork[]> {
//   const dir = path.join(process.cwd(), "public", "images", "Collabs");
//   let files: string[] = [];
//   try {
//     files = await fs.readdir(dir);
//   } catch (e) {
//     return [];
//   }

//   const imageFiles = files.filter((f) => !f.startsWith('.') && /\.(png|jpe?g|svg|webp)$/i.test(f));

//   return imageFiles.map((file, i) => ({
//     id: `collab-${i}`,
//     title: file.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " "),
//     image: `/images/Collabs/${encodeURIComponent(file)}`,
//     category: "collabs",
//   } as Artwork));
// }

// export default async function CollabsPage() {
//   const artworks = await readCollabsFromPublic();

//   return (
//     <section className="space-y-6">
//       <h2 className="text-3xl font-kingthings-lickorishe">Collabs</h2>
//       <GalleryGrid artworks={artworks} />
//     </section>
//   );
// }

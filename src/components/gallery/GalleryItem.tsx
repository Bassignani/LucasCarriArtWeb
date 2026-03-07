"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Artwork } from "@/data/artworks";

type GalleryItemProps = {
  artwork: Artwork;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  showFutureBuyAction?: boolean;
};

export function GalleryItem({ artwork, isExpanded, onToggle, showFutureBuyAction }: GalleryItemProps) {
  if (isExpanded) {
    return <div aria-hidden className="aspect-[4/5] rounded-xl border border-dashed border-black/30" />;
  }

  return (
    <motion.button
      layoutId={artwork.id}
      type="button"
      onClick={() => onToggle(artwork.id)}
      className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-black text-left"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={artwork.image}
        alt={artwork.title}
        fill
        className="object-cover transition duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-white/90 p-2">
        <p className="text-sm font-medium">{artwork.title}</p>
        {showFutureBuyAction ? <span className="text-xs text-black/70">Preparado para botón Buy</span> : null}
      </div>
    </motion.button>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Artwork } from "@/data/artworks";

type ExpandedArtworkProps = {
  artwork: Artwork;
  onClose: () => void;
};

export function ExpandedArtwork({ artwork, onClose }: ExpandedArtworkProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 grid place-items-center p-4" aria-live="polite">
      <motion.button
        type="button"
        onClick={onClose}
        className="pointer-events-auto absolute inset-0 bg-black/20"
        aria-label="Cerrar imagen ampliada"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        layoutId={artwork.id}
        className="pointer-events-auto relative h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-black bg-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 2 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full border text-white border-black bg-black px-2 py-1 text-xs"
        >
          Cerrar
        </button>
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 90vh"
          priority
        />
      </motion.div>
    </div>
  );
}

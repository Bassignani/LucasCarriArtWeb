"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Artwork } from "@/data/artworks";
import { GalleryItem } from "@/components/gallery/GalleryItem";
import { ExpandedArtwork } from "@/components/gallery/ExpandedArtwork";

type GalleryGridProps = {
  artworks: Artwork[];
  showFutureBuyAction?: boolean;
  imageFit?: "cover" | "contain";
};

export function GalleryGrid({ artworks, showFutureBuyAction = false, imageFit = "cover" }: GalleryGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const expandedArtwork = useMemo(
    () => artworks.find((artwork) => artwork.id === expandedId) ?? null,
    [artworks, expandedId],
  );

  const handleToggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <GalleryItem
            key={artwork.id}
            artwork={artwork}
            isExpanded={expandedId === artwork.id}
            onToggle={handleToggle}
            showFutureBuyAction={showFutureBuyAction}
            imageFit={imageFit}
          />
        ))}
      </div>
      <AnimatePresence>{expandedArtwork ? <ExpandedArtwork artwork={expandedArtwork} onClose={() => setExpandedId(null)} /> : null}</AnimatePresence>
    </>
  );
}

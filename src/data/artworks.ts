export type ArtworkCategory =
  | "illustrations"
  | "logos"
  | "portraits"
  | "available"
  | "collabs";

export type Artwork = {
  id: string;
  title: string;
  image: string;
  category: ArtworkCategory;
  description?: string;
  isAvailableForPurchase?: boolean;
};

export const artworks: Artwork[] = [
  { id: "ill-1", title: "Salt Water Journal", image: "/images/placeholders/illustrations/illustrations-1.svg", category: "illustrations" },
  { id: "ill-2", title: "Surf Shack Memories", image: "/images/placeholders/illustrations/illustrations-2.svg", category: "illustrations" },
  { id: "ill-3", title: "Evening Tide", image: "/images/placeholders/illustrations/illustrations-3.svg", category: "illustrations" },
  { id: "ill-4", title: "North Wind Riders", image: "/images/placeholders/illustrations/illustrations-4.svg", category: "illustrations" },

  { id: "logo-1", title: "Board House Co.", image: "/images/placeholders/logos/logos-1.svg", category: "logos" },
  { id: "logo-2", title: "Salty Club", image: "/images/placeholders/logos/logos-2.svg", category: "logos" },
  { id: "logo-3", title: "Break Point Lab", image: "/images/placeholders/logos/logos-3.svg", category: "logos" },
  { id: "logo-4", title: "Longline Studio", image: "/images/placeholders/logos/logos-4.svg", category: "logos" },

  { id: "portrait-1", title: "Coastal Friend", image: "/images/placeholders/portraits/portraits-1.svg", category: "portraits" },
  { id: "portrait-2", title: "Summer Face", image: "/images/placeholders/portraits/portraits-2.svg", category: "portraits" },
  { id: "portrait-3", title: "Road to the Beach", image: "/images/placeholders/portraits/portraits-3.svg", category: "portraits" },
  { id: "portrait-4", title: "Skate Morning", image: "/images/placeholders/portraits/portraits-4.svg", category: "portraits" },

  { id: "av-1", title: "Palm & Skull", image: "/images/placeholders/available/available-1.svg", category: "available", isAvailableForPurchase: true },
  { id: "av-2", title: "Foamy Dreams", image: "/images/placeholders/available/available-2.svg", category: "available", isAvailableForPurchase: true },
  { id: "av-3", title: "Vintage Barrel", image: "/images/placeholders/available/available-3.svg", category: "available", isAvailableForPurchase: true },
  { id: "av-4", title: "Tropical Bones", image: "/images/placeholders/available/available-4.svg", category: "available", isAvailableForPurchase: true },

  { id: "col-1", title: "Surf Club Capsule", image: "/images/placeholders/collabs/collabs-1.svg", category: "collabs" },
  { id: "col-2", title: "Beach Contest Identity", image: "/images/placeholders/collabs/collabs-2.svg", category: "collabs" },
  { id: "col-3", title: "Skate Event Pack", image: "/images/placeholders/collabs/collabs-3.svg", category: "collabs" },
  { id: "col-4", title: "Local Brand Campaign", image: "/images/placeholders/collabs/collabs-4.svg", category: "collabs" },
];

export function getArtworksByCategory(category: ArtworkCategory): Artwork[] {
  return artworks.filter((artwork) => artwork.category === category);
}

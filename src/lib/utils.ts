export function titleFromCategory(category: string): string {
  const map: Record<string, string> = {
    illustrations: "Illustrations",
    logos: "Logos",
    portraits: "Portraits",
    available: "Available Designs",
    collabs: "Collabs",
  };

  return map[category] ?? category;
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  key: string;
  label: string;
  href: string;
};

type WaveNavigationProps = {
  className?: string;
};

const NAV_ITEMS: NavItem[] = [
  { key: "illustrations", label: "Illustrations", href: "/illustrations" },
  { key: "logos", label: "Logos", href: "/logos" },
  { key: "portraits", label: "Portraits", href: "/portraits" },
  { key: "available", label: "Available", href: "/available-designs" },
  { key: "collabs", label: "Collabs", href: "/collabs" },
];

function WaveIcon({ label, href, isCurrent }: { label: string; href: string; isCurrent: boolean }) {
  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <span aria-hidden className="relative h-20 w-20 shrink-0 transition duration-200 group-hover:-translate-y-1">
        <Image src="/ui/button.png" alt="" fill className="object-contain" sizes="80px" />
      </span>
      <span className="font-brittany-signature text-sm uppercase tracking-wide">{label}</span>
    </Link>
  );
}

export function WaveNavigation({ className = "" }: WaveNavigationProps) {
  const pathname = usePathname();

  const items = pathname === "/"
    ? NAV_ITEMS
    : [{ key: "home", label: "Home", href: "/" }, ...NAV_ITEMS.filter((item) => item.href !== pathname)];

  const isHome = pathname === "/";

  return (
    <nav aria-label="Navegación principal" className={className}>
      <ul className="flex flex-wrap justify-center gap-y-2">
        {items.map((item, index) => {
          const homeItemWidth = isHome ? (index < 3 ? "w-1/3" : "w-1/2") : "w-1/3";

          return (
            <li key={item.key} className={`flex justify-center ${homeItemWidth}`}>
              <WaveIcon label={item.label} href={item.href} isCurrent={item.href === pathname} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

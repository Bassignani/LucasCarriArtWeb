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
      className="group flex min-w-20 flex-col items-center gap-2 rounded-xl px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <span aria-hidden className="relative h-12 w-12 transition duration-200 group-hover:-translate-y-1">
        <Image src="/ui/button.png" alt="" fill className="object-contain" sizes="48px" />
      </span>
      <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
    </Link>
  );
}

export function WaveNavigation({ className = "" }: WaveNavigationProps) {
  const pathname = usePathname();

  const items = pathname === "/"
    ? NAV_ITEMS
    : [{ key: "home", label: "Home", href: "/" }, ...NAV_ITEMS.filter((item) => item.href !== pathname)];

  return (
    <nav aria-label="Navegación principal" className={className}>
      <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
        {items.map((item) => (
          <li key={item.key}>
            <WaveIcon label={item.label} href={item.href} isCurrent={item.href === pathname} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

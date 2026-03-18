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
  { key: "portraits", label: "Portraits", href: "/portraits" },
  { key: "logos", label: "Logos", href: "/logos" },
  { key: "collabs", label: "Collabs", href: "/collabs" },
  { key: "available", label: "Available Designs", href: "/available-designs" },
  { key: "contact", label: "Contact", href: "/contact" },
  // { key: "illustrations", label: "Illustrations", href: "/illustrations" },
];

function WaveIcon({ label, href, isCurrent }: { label: string; href: string; isCurrent: boolean }) {
  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className="group inline-flex flex-col sm:flex-row items-center gap-1 rounded-xl px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black overflow-visible"
    >
      <span aria-hidden className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-20 lg:w-20 shrink-0 transition-transform duration-300 group-hover:scale-[1.4] transform-origin-center">
        <Image
          src="/ui/button_lim.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 640px) 36px, (max-width: 1024px) 56px, 88px"
        />
      </span>
      {/* <span className="font-brittany-signature text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-wide text-center sm:text-left transition-transform duration-250 group-hover:scale-[1.2]  transform-origin-center">{label}</span> */}
      <span className="font-brittany-signature text-lg sm:text-xl md:text-3xl lg:text-4xl tracking-wide text-center sm:text-left   transform-origin-center">{label}</span>
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
      {/* Mobile: vertical list */}
      <ul className="flex flex-col md:hidden space-y-3">
        {items.map((item) => (
          <li key={item.key} className="flex justify-center">
            <WaveIcon label={item.label} href={item.href} isCurrent={item.href === pathname} />
          </li>
        ))}
      </ul>

      {/* Tablet & Desktop: two rows (3 top, 2 bottom) */}
      <div className="hidden md:block">
        <ul className="flex justify-center gap-x-6 mb-3">
          {items.slice(0, 3).map((item) => (
            <li key={item.key} className="flex justify-center min-w-0">
              <WaveIcon label={item.label} href={item.href} isCurrent={item.href === pathname} />
            </li>
          ))}
        </ul>

        <ul className="flex justify-center gap-x-6">
          {items.slice(3).map((item) => (
            <li key={item.key} className="flex justify-center min-w-0">
              <WaveIcon label={item.label} href={item.href} isCurrent={item.href === pathname} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

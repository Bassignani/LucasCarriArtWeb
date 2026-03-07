"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { WaveNavigation } from "@/components/navigation/WaveNavigation";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome ? <WaveNavigation className="mb-8" /> : null}
      <main>{children}</main>
    </>
  );
}

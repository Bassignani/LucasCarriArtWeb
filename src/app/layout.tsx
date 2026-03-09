import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "LucasCarri.Art",
  description: "Portfolio de ilustración surf, vintage y skate culture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="bg-[rgb(214,210,193)] font-sans text-[#111]">
        <PageContainer>
          <SiteShell>{children}</SiteShell>
          <Footer />
        </PageContainer>
      </body>
    </html>
  );
}

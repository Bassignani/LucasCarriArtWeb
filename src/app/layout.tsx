import type { Metadata } from "next";
// import Image from "next/image";
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
          {/* <header className="mb-8 border-b border-black/20 pb-6 pt-2">
            <div className="mx-auto relative h-16 w-full max-w-md md:h-20">
              <Image src="/banner.png" alt="LucasCarri.Art" fill className="object-contain" priority sizes="(max-width: 768px) 70vw, 500px" />
            </div>
            <p className="mt-2 text-center text-sm text-black/70">Surf · Vintage · Handmade Illustration</p>
          </header> */}
          <SiteShell>{children}</SiteShell>
          <Footer />
        </PageContainer>
      </body>
    </html>
  );
}

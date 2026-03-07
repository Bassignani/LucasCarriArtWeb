import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { PageContainer } from "@/components/layout/PageContainer";
import { WaveNavigation } from "@/components/navigation/WaveNavigation";

export const metadata: Metadata = {
  title: "LucasCarri.Art",
  description: "Portfolio de ilustración surf, vintage y skate culture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="bg-white font-sans text-[#111]">
        <PageContainer>
          <header className="mb-8 border-b border-black/20 pb-6 pt-2">
            <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl">LucasCarri.Art</h1>
            <p className="mt-2 text-center text-sm text-black/70">Surf · Vintage · Handmade Illustration</p>
          </header>
          <WaveNavigation />
          <main>{children}</main>
          <Footer />
        </PageContainer>
      </body>
    </html>
  );
}

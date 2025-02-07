import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarMenu from "@/components/layouts/navbar/Navbar";
import SearchBar from "@/components/layouts/navbar/SearchHeader";
import MenuStateProvider from "@/providers/MenuStateProvider";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuStateProvider>
          <div className="min-h-screen bg-gray-50 flex">
            {/* Ana içerik alanı */}
            <div className="flex-1 flex flex-col">
              {/* Üst kısım - Search Bar */}
              <header className="sticky top-0 z-30 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                  <SearchBar />
                </div>
              </header>

              {/* Ana içerik */}
              <main className="flex-1 pb-16 lg:pb-0 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto py-6">{children}</div>
              </main>
            </div>

            {/* Navigation Menu */}
            <NavbarMenu />
          </div>
        </MenuStateProvider>
      </body>
    </html>
  );
}

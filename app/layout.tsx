import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import Providers from "@/components/providers/providers";
import Navbar from "@/components/templates/navbar";
import Bottombar from "@/components/templates/bottombar";

export const metadata: Metadata = {
  title: {
    template: "%s - Tiny Blog",
    default: "Tiny Blog",
  },
  description: "Write small blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />

          {children}

          <div className="pt-14 lg:p-0">
            <div className="w-full fixed bottom-0 bg-background">
              <Bottombar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

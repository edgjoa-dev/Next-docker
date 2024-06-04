import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/ui/NavBar";

const Font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio | Edgar Joaquin Flores",
  description: "Portafolio de proyectos de edgar joaquin flores gonzalez",
  keywords: ["Protafolio", "Desarrollo web", "portfolio", "Edgar Joaquin", "Edgar Flores", "Edgar Joaquin Flores", "Nextjs", "Reactjs", "javascript", ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Font.className}>
        <section className="flex flex-col flex-wrap justify-center content-center" >
        {children}
        </section>
      </body>
    </html>
  );
}



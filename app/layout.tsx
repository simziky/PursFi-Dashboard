import "./globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import StyledComponentsRegistry from "@/lib/AntdConfig";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

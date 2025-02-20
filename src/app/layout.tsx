import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Método de autenticação para projetos SENAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">{children}</body>
    </html>
  );
}

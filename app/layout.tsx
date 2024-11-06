import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MobiFit - App de Treino e Projetos Fitness",
  description: "Emagrecimento ou ganho de músculos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon"></link>
      <meta name="apple-itunes-app" content="app-id=6737747199" />
      <body>{children}</body>
    </html>
  );
}

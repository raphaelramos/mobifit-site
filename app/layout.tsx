import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MobiFit - App de Treino, Academia, Fitness",
  description: "Aplicativo com Projetos para exercicios de musculação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <meta name="apple-itunes-app" content="app-id=6737747199" />
      </head>
      <body>{children}</body>
    </html>
  );
}

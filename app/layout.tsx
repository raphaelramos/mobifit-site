import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MobiFit - App Academia, Treinos e IA",
  description: "Aplicativo para treinos de musculação e cardio. Exercícios, desafios em grupo e recursos de IA.",
  keywords: "app fitness, aplicativo academia, treino musculação, desafios fitness, IA fitness, app treino, personal trainer, saúde e bem-estar",
  robots: "index, follow",
  applicationName: "MobiFit",
  authors: [{ name: "Raphael Ramos", url: "https://raphaelramos.dev" }],
  creator: "Raphael Ramos",
  publisher: "MobiFit",
  category: "fitness",
  openGraph: {
    type: "website",
    url: "https://mobifit.app",
    title: "MobiFit - Acadêmia com IA",
    description: "App fitness com funcionalidades offline, desafios em grupo e IA para personalizar seu treinamento.",
    siteName: "MobiFit",
  },
  alternates: {
    canonical: "https://mobifit.app"
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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

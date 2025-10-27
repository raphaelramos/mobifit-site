import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();

  return {
    title: messages.metadata.title as string,
    description: messages.metadata.description as string,
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
      title: messages.metadata.title as string,
      description: messages.metadata.description as string,
      siteName: "MobiFit",
    },
    alternates: {
      canonical: "https://mobifit.app"
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <meta name="apple-itunes-app" content="app-id=6737747199" />
      </head>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import "./globals.css";
import { Calistoga, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-montserrat",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "gergö codes👋🏻",
  description:
    "hi, i'm gergö and i'm a javascript developer. this is my site, if you want to find out more about me take a look around.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`mx-auto in-h-screen max-w-3xl px-8 ${calistoga.variable} ${montserrat.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

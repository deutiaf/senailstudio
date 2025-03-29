import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import {
  Cinzel,
  Cormorant_Garamond,
  Cormorant_SC,
  Dancing_Script,

  Geist_Mono,
  Inter,
  Josefin_Sans,
  Poppins,
  Roboto,
  Trirong,
  Rufina,
  Bangers,
  Cherry_Bomb_One,
  Fontdiner_Swanky
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const cinzel = Cinzel({
  weight: ['400', '500', '600', '700', '800', '900'],  // 400..900
  variable: '--font-cinzel',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const rufina = Rufina({
  weight: ['400', '700'],  // 400..900
  variable: '--font-rufina',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],  // ital,wght@0,300;0,400;...;1,700
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  display: 'swap',
})

const cormorantSC = Cormorant_SC({
  weight: ['300', '400', '500', '600', '700'],  // wght@300;400;500;600;700
  variable: '--font-cormorant-sc',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],  // 400..700
  variable: '--font-dancing-script',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  // 100..900
  style: ['normal', 'italic'],  // ital,opsz,wght@0,14..32,100..900;1,14..32,100..900
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const josefinSans = Josefin_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],  // 100..700
  style: ['normal', 'italic'],  // ital,wght@0,100..700;1,100..700
  variable: '--font-josefin-sans',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],  // ital,wght@0,100;...;1,900
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],  // 100..900 (en réalité tous les poids de 100 à 900)
  style: ['normal', 'italic'],  // ital,wght@0,100..900;1,100..900
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
})

const trirong = Trirong({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],  // ital,wght@0,100;...;1,900
  variable: '--font-trirong',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// New fonts
const bangers = Bangers({
  weight: ['400'],  // Bangers only has 400 weight
  variable: '--font-bangers',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const cherryBombOne = Cherry_Bomb_One({
  weight: ['400'],  // Cherry Bomb One only has 400 weight
  variable: '--font-cherry-bomb-one',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const fontdinerSwanky = Fontdiner_Swanky({
  weight: ['400'],  // Fontdiner Swanky only has 400 weight
  variable: '--font-fontdiner-swanky',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  colorScheme: 'light',
  themeColor: '#a1003e' // Couleur Tailwind blue-500 par exemple

};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  // Type-safe locale validation using a type assertion
  const validLocales = routing.locales as readonly string[];
  if (!validLocales.includes(locale)) {
    notFound();
  }



  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();


  return (
    <html lang="en" data-force-color-scheme="light" className={`${cinzel.variable} ${rufina.variable} ${cormorantGaramond.variable} ${cormorantSC.variable} ${dancingScript.variable} ${inter.variable} ${josefinSans.variable} ${poppins.variable} ${roboto.variable} ${trirong.variable} ${geistMono.variable} ${bangers.variable} ${cherryBombOne.variable} ${fontdinerSwanky.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>

          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
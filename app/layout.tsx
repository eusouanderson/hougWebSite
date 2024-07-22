'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "./containers/navbar";
import { Footer } from "./containers/footer";
import Head from 'next/head';
import metadata from './utils/metadata';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas_neue',
  display: 'swap',
  weight: "400"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathURL = usePathname();
  const isDashboardRoute = pathURL.startsWith('/dashboard');

  return (
    <html lang="en">
         <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="icon" href={metadata.favicon} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        {/* <meta property="og:image" content={metadata.og.image} /> */}
      </Head>
      <body className={`${inter.variable} ${bebas_neue.variable}`}>
        {!isDashboardRoute && <Navbar />}
        {children}
        {!isDashboardRoute && <Footer />}
      </body>
    </html>
  );
}

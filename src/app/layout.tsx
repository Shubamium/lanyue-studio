import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Tooltip from "./Tooltip";

const osc_sb = localFont({
  src: "./fonts/OSCSemibold.ttf",
  variable: "--fontsb",
  weight: "600",
});
const osc_r = localFont({
  src: "./fonts/OSCRegular.ttf",
  variable: "--fontr",
});
const osc_b = localFont({
  src: "./fonts/OSCBold.ttf",
  variable: "--fontb",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--fontP",
});

const title = "Lan'Yue Studio | Live2D | Illustrations";
const description =
  "Lan'Yue Studio offers Live2D VTuber Art + Rigging, Illustration, Graphic Design, and many more services for any and all of your artistic needs. Our artists are masters of their craft and your satisfaction is our utmost priority. We can't wait to work with you. Commission us today to bring your visions to life!";
const banner = "";
const url = "https://lanyuestudio.com";

export const metadata: Metadata = {
  title: title,

  metadataBase: new URL(url),
  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  keywords: [
    "live2d",
    "art",
    "artist",
    "illustrations",
    "vtuber",
    "vtubers",
    "commission",
    "commissions",
    "rig",
    "model",
    "rigging",
    "stream",
    "design",
  ],
  description: description,
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.variable} ${osc_b.variable} ${osc_r.variable} ${osc_sb.variable}`}
      >
        <Header />
        {children}
        <Tooltip />
        <Footer />
      </body>
    </html>
  );
}

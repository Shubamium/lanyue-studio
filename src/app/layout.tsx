import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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

export const metadata: Metadata = {
  title: "Lan'Yue Studio",
  description: "",
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
        <Footer />
      </body>
    </html>
  );
}

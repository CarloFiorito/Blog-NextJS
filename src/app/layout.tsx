import Head from "next/head";
import "./globals.scss";
import { Providers } from "@/redux/provider";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata = {
  title: "Blog Idea",
  description: "A blog for everyone",
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

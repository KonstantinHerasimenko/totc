import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-geist-mono",
  weight:["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TOTC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-normal text-normal`}
        
      >
          {children}
      </body>
    </html>
  );
}

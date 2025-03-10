import { Metadata } from "next";
import "./globals.css";
import { Fonts } from "@/lib/fonts";
import StairTransition from "./components/motions/NavTransition";

export const metadata: Metadata = {
  title: "Karim",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Fonts.nueue.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <StairTransition />
        {children}
      </body>
    </html>
  );
}

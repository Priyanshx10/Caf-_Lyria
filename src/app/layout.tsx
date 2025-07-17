import "./globals.css";
import { Inter, Lora } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata = {
  title: "Café Lyria - Artisanal Coffee in NYC",
  description: "Specialty coffee shop located at 166 Crosby St, New York",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}

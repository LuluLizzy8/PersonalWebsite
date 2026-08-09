import "@/styles/globals.css";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });

export const metadata = {
  title: "lizzy's pc",
  description: "work in progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={greatVibes.variable}>
      <body>{children}</body>
    </html>
  );
}

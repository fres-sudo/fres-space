import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fres Space",
  description: "Francesco Calicchio's personal space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        defaultTheme="dark"
        attribute="class"
        disableTransitionOnChange
        enableSystem>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}

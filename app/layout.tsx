import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./providers/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NEA Bill Calculator",
  description:
    "NEA Bill Calculator helps to calculate the bill amount based on the ampere and units",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className, "relative")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen flex flex-col items-center md:justify-center gap-4 py-20 md:py-4 px-4 sm:px-0">
            <div className="absolute top-4 right-4">
              <ThemeSwitcher />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

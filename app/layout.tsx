import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background dark:bg-black font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

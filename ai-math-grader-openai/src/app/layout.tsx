import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "AI Math Grader | OpenAI-Powered Exam Assessment",
    description: "Automated math exam grading system powered by OpenAI GPT-4o and Vercel AI SDK. Perfect for students preparing for Hvitfeldska spetsutbildning and parents helping their children master mathematics.",
    keywords: ["math grading", "AI", "OpenAI", "exam grading", "Hvitfeldska", "mathematics", "education", "Sweden"],
    authors: [{ name: "Harvad Lee" }],
    openGraph: {
        title: "AI Math Grader",
        description: "Automated math exam grading powered by OpenAI",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.variable} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import type { Viewport } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "NovaHelm Studios",
    description: "Crafting immersive indie game experiences focused on narrative-driven gameplay and creative mechanics.",
    manifest: "/manifest.json",
    icons: {
        icon: "/icon1.png",
        apple: "/apple-icon.png",
    },
    openGraph: {
        title: 'NovaHelm Studios',
        description: 'We make indie games — narrative-driven and experimental.',
        siteName: 'NovaHelm Studios',
    },
};

// Preload critical fonts for faster rendering
const fontPreload = [
    { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap", rel: "stylesheet" },
];

export const viewport: Viewport = {
    themeColor: "#0f172a",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {fontPreload.map((link, i) => (
                    <link key={i} {...link} />
                ))}
            </head>
            <body className="min-h-screen flex flex-col antialiased">
                <a href="#main-content" className="skip-link">
                    Skip to content
                </a>
                <Navbar />
                <main id="main-content" className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black/15 backdrop-blur-sm text-gray-400 py-8 select-none">
            <div className="mx-auto max-w-6xl px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="text-sm">
                    © {new Date().getFullYear()} <span className="text-white font-semibold">NovaHelm Studios</span>. All rights reserved.
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    <Link href="/" className="hover:text-white focus-visible:text-white transition-colors duration-150">Home</Link>
                    <Link href="/about" className="hover:text-white focus-visible:text-white transition-colors duration-150">About</Link>
                    <Link href="/projects" className="hover:text-white focus-visible:text-white transition-colors duration-150">Projects</Link>
                    <Link href="/studio" className="hover:text-white focus-visible:text-white transition-colors duration-150">Studio</Link>
                    <Link href="/careers" className="hover:text-white focus-visible:text-white transition-colors duration-150">Careers</Link>
                    <Link href="/contact" className="hover:text-white focus-visible:text-white transition-colors duration-150">Contact</Link>
                </div>

                <div className="text-sm">
                    <a href="mailto:novahelmstudios@gmail.com" className="bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text hover:underline focus-visible:underline">
                        novahelmstudios@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

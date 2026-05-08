import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black/15 backdrop-blur-sm py-8 text-gray-400 select-none sm:py-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
                <div className="text-sm leading-6">
                    © {new Date().getFullYear()} <span className="text-white font-semibold">NovaHelm Studios</span>. All rights reserved.
                </div>

                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm md:justify-start">
                    <Link href="/" className="transition-colors duration-150 hover:text-white focus-visible:text-white">Home</Link>
                    <Link href="/about" className="transition-colors duration-150 hover:text-white focus-visible:text-white">About</Link>
                    <Link href="/projects" className="transition-colors duration-150 hover:text-white focus-visible:text-white">Projects</Link>
                    <Link href="/studio" className="transition-colors duration-150 hover:text-white focus-visible:text-white">Studio</Link>
                    <Link href="/careers" className="transition-colors duration-150 hover:text-white focus-visible:text-white">Careers</Link>
                    <Link href="/contact" className="transition-colors duration-150 hover:text-white focus-visible:text-white">Contact</Link>
                </div>

                <div className="text-sm leading-6">
                    <a href="mailto:novahelmstudios@gmail.com" className="bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text transition-opacity duration-150 hover:opacity-90 hover:underline focus-visible:opacity-90 focus-visible:underline">
                        novahelmstudios@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

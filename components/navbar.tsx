import Link from "next/link";
import { FaItchIo, FaInstagram, FaYoutube, FaDiscord, FaPatreon } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav aria-label="Primary" className="sticky top-0 z-50 select-none">
            <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
                <div className="rounded-3xl border border-white/10 bg-slate-950/75 backdrop-blur-xl shadow-2xl shadow-black/20">
                    <div className="flex flex-col gap-3 px-3 py-3 sm:px-4 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
                        <div className="flex items-center justify-between gap-3 lg:shrink-0">
                            <Link href="/" aria-label="Novahelm Studios home" className="flex items-center shrink-0">
                                <img src="/logo.png" alt="Novahelm Studios" className="h-7 w-auto sm:h-8" />
                            </Link>

                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 px-4 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-300 hover:bg-emerald-400/10 focus-visible:bg-emerald-400/10 transition-all duration-300 lg:hidden">
                                Contact
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2 lg:flex-1">
                            <Link href="/about" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-medium tracking-wide text-emerald-100 transition-all duration-300 hover:border-transparent hover:bg-white/10 hover:text-emerald-300 focus-visible:border-transparent focus-visible:bg-white/10 focus-visible:text-emerald-300 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-base sword-underline">
                                About
                            </Link>
                            <Link href="/projects" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-medium tracking-wide text-emerald-100 transition-all duration-300 hover:border-transparent hover:bg-white/10 hover:text-emerald-300 focus-visible:border-transparent focus-visible:bg-white/10 focus-visible:text-emerald-300 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-base sword-underline">
                                Projects
                            </Link>
                            <Link href="/studio" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-medium tracking-wide text-emerald-100 transition-all duration-300 hover:border-transparent hover:bg-white/10 hover:text-emerald-300 focus-visible:border-transparent focus-visible:bg-white/10 focus-visible:text-emerald-300 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-base sword-underline">
                                Studio
                            </Link>
                            <Link href="/careers" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-medium tracking-wide text-emerald-100 transition-all duration-300 hover:border-transparent hover:bg-white/10 hover:text-emerald-300 focus-visible:border-transparent focus-visible:bg-white/10 focus-visible:text-emerald-300 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-base sword-underline">
                                Careers
                            </Link>
                            <Link href="/contact" className="hidden items-center justify-center rounded-full border border-emerald-400/30 px-4 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-300 hover:bg-emerald-400/10 focus-visible:bg-emerald-400/10 transition-all duration-300 lg:inline-flex">
                                Contact
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center justify-center gap-5">
                            <a aria-label="Novahelm Studios on Itch.io" href="https://novahelmstudios.itch.io/" className="transition-all duration-300 hover:scale-110 focus-visible:scale-110">
                                <FaItchIo className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                            </a>
                            <a aria-label="Novahelm Studios on Instagram" href="https://www.instagram.com/novahelmstudios/" className="transition-all duration-300 hover:scale-110 focus-visible:scale-110">
                                <FaInstagram className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                            </a>
                            <a aria-label="Novahelm Studios on Discord" href="https://discord.com/invite/r2esGF6zwy" className="transition-all duration-300 hover:scale-110 focus-visible:scale-110">
                                <FaDiscord className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                            </a>
                            <a aria-label="Novahelm Studios on YouTube" href="https://www.youtube.com/@NovahelmStudios" className="transition-all duration-300 hover:scale-110 focus-visible:scale-110">
                                <FaYoutube className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                            </a>
                            <a aria-label="Novahelm Studios on Patreon" href="https://www.patreon.com/NovahelmStudios" className="transition-all duration-300 hover:scale-110 focus-visible:scale-110">
                                <FaPatreon className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


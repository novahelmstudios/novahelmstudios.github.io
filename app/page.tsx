"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { Gamepad2, ArrowRight, Mail, Users, FolderOpen } from "lucide-react";

export default function Home() {
    return (
        <div className="px-4 py-10 sm:px-6 sm:py-16 lg:py-24">
            <section className="mx-auto flex min-h-0 max-w-7xl items-start py-6 sm:min-h-[calc(100vh-7rem)] sm:items-center sm:py-0">
                <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
                    <div>
                        <p className="mb-4 inline-flex max-w-full rounded-full border border-emerald-400/20 bg-black/20 px-4 py-2 text-xs font-medium leading-none text-emerald-100/90 backdrop-blur-sm sm:mb-5 sm:text-sm">
                            Indie games built with narrative, systems, and care
                        </p>
                        <h1 className="max-w-4xl text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-orange-300 sm:text-5xl lg:text-7xl leading-tight mb-5 sm:mb-6">
                            We make games that are easy to discover and hard to forget.
                        </h1>
                        <p className="max-w-3xl text-base sm:text-lg lg:text-2xl text-emerald-50/90 font-light leading-relaxed mb-8 sm:mb-10">
                            NovaHelm Studios creates immersive indie experiences with clear goals, strong atmosphere, and gameplay that respects your time.
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                            <Link
                                href="/projects"
                                className="group relative inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-emerald-950/20 transition-all duration-300 hover:from-emerald-400 hover:to-emerald-500 hover:-translate-y-0.5 sm:w-auto sm:text-lg"
                            >
                                <Gamepad2 className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                                Explore Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-emerald-400/30 px-8 py-4 text-base font-medium text-emerald-100 transition-all duration-300 hover:border-orange-400/50 hover:bg-orange-400/10 hover:text-orange-100 sm:w-auto sm:text-lg"
                            >
                                <Mail className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                                Contact Us
                            </Link>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2 text-xs text-emerald-100/80 sm:mt-6 sm:gap-3 sm:text-sm">
                            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm sm:px-4">Narrative-first</span>
                            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm sm:px-4">Playable prototypes</span>
                            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm sm:px-4">Under active development</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="grid gap-4 sm:grid-cols-2"
                    >
                        <div className="rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-xl sm:col-span-2">
                            <div className="mb-4 flex items-center gap-3 text-white">
                                <FolderOpen className="h-5 w-5 text-emerald-300" />
                                <h2 className="text-lg font-semibold">Featured paths</h2>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-300">
                                Start with the projects page to see what we’re building, then head to the studio page for our workflow and the careers page if you want to join in.
                            </p>
                        </div>

                        <Link href="/projects" className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                            <h3 className="mb-2 text-base font-semibold text-white">Projects</h3>
                            <p className="text-sm text-gray-300">Browse current games and prototypes with direct detail pages.</p>
                        </Link>

                        <Link href="/studio" className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-orange-400/40">
                            <h3 className="mb-2 text-base font-semibold text-white">Studio</h3>
                            <p className="text-sm text-gray-300">See the tools, systems, and engineering mindset behind the studio.</p>
                        </Link>

                        <Link href="/about" className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                            <h3 className="mb-2 text-base font-semibold text-white">About</h3>
                            <p className="text-sm text-gray-300">Learn what the team is focused on and how to reach us.</p>
                        </Link>

                        <Link href="/careers" className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-orange-400/40">
                            <h3 className="mb-2 text-base font-semibold text-white">Careers</h3>
                            <p className="text-sm text-gray-300">Check roles and see whether you’d be a fit for the team.</p>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

// Note: this page is a client component (uses framer-motion). Site-wide metadata lives in `app/layout.tsx`.

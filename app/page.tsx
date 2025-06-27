"use client"

import { motion } from "framer-motion";
import { Gamepad2, ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <>
            <section className="h-screen flex items-center">
                <div className="max-w-6xl mx-auto px-6 w-full">
                    <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-orange-300 leading-tight tracking-tight mb-6">
                        <span className="text-gradient bg-gradient-to-r from-emerald-400 via-orange-400 to-orange-600 bg-clip-text text-transparent">We Make Games</span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-emerald-200/90 font-light leading-relaxed mb-12 max-w-3xl mx-auto lg:mx-0">
                        Crafting immersive indie game experiences that push the boundaries of
                        <span className="text-orange-300 font-medium"> interactive storytelling</span> and
                        <span className="text-emerald-300 font-medium"> creative gameplay</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <motion.a
                            href="/projects"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-2xl transition-all duration-300 hover:from-emerald-400 hover:to-emerald-500 hover:shadow-emerald-500/25 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <Gamepad2 className="w-5 h-5 group-hover:-translate-y-0.5 ease-in transition-transform" />
                                Explore Our Games
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                        </motion.a>
                        <motion.a
                            href="/about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium text-emerald-300 border-2 border-emerald-400/30 rounded-2xl hover:border-orange-400/50 hover:bg-gradient-to-r hover:from-orange-400/10 hover:to-emerald-400/10 hover:text-orange-200 transition-all duration-300 backdrop-blur-sm"
                        >
                            Learn More
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                    </div>
                </div>
            </section >

        </>
    );
}

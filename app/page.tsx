export default function Home() {
    return (
        <>
            <section className="h-screen flex items-center">
                <div className="max-w-6xl mx-auto px-6 w-full">
                    <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-orange-300 leading-tight tracking-tight mb-6">
                        <span className="text-gradient bg-gradient-to-r from-emerald-400 via-orange-400 to-orange-600 bg-clip-text text-transparent">We Make Games</span>
                    </h1>
                    <p className="text-xl text-emerald-200/90 font-light leading-relaxed mb-12 max-w-2xl">
                        Crafting immersive indie game experiences that push the boundaries of interactive storytelling
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href="/projects"
                            className="group relative inline-flex items-center justify-center px-5 py-3 text-md font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl shadow-2xl transition-all duration-300 hover:from-emerald-400 hover:to-emerald-500 hover:shadow-orange-500/45 hover:-translate-y-1"
                        >
                            <span className="relative z-10">Explore Our Games</span>
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </a>
                        <a
                            href="/projects"
                            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-emerald-300 border-2 border-emerald-400/50 rounded-xl hover:border-orange-400 hover:bg-orange-400/10 hover:text-orange-200 transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
}

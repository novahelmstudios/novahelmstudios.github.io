import { FaItchIo, FaInstagram, FaYoutube, FaDiscord, FaPatreon } from 'react-icons/fa'

export default function Home() {
    return (
        <>
            <div className="relative min-h-screen">
                <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-sm z-50 border-b border-emerald-400/20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center">
                        <a href='#' className="flex-shrink-0">
                            <img src="/logo.png" alt="Novahelm Studios" className="h-36 w-auto" />
                        </a>
                        <div className="flex-1 flex justify-center">
                            <div className="hidden md:flex items-center space-x-12">
                                {['Home', 'About', 'Games', 'Studio'].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="relative text-emerald-100 hover:text-emerald-300 font-medium tracking-wide transition-all duration-300 group text-lg"
                                    >
                                        {item}
                                        <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-orange-300 group-hover:w-full transition-all duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="https://novahelmstudios.itch.io/" className="transition-all duration-300 hover:scale-110">
                                <FaItchIo className="text-emerald-200 hover:text-emerald-400 w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/novahelmstudios/" className="transition-all duration-300 hover:scale-110">
                                <FaInstagram className="text-emerald-200 hover:text-emerald-400 w-6 h-6" />
                            </a>
                            <a href="https://discord.com/invite/r2esGF6zwy" className="transition-all duration-300 hover:scale-110">
                                <FaDiscord className="text-emerald-200 hover:text-emerald-400 w-6 h-6" />
                            </a>
                            <a href="https://www.youtube.com/@NovahelmStudios" className="transition-all duration-300 hover:scale-110">
                                <FaYoutube className="text-emerald-200 hover:text-emerald-400 w-6 h-6" />
                            </a>
                            <a href="https://www.patreon.com/NovahelmStudios" className="transition-all duration-300 hover:scale-110">
                                <FaPatreon className="text-emerald-200 hover:text-emerald-400 w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </nav>

                <section className="relative min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-orange-300 leading-tight tracking-tight mb-8">
                                <span className="text-gradient bg-gradient-to-r from-orange-600 via-orange-400 to-emerald-400 bg-clip-text text-transparent">We Make Games</span>
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-emerald-200/90 font-light leading-relaxed mb-12 max-w-2xl">
                                Crafting immersive indie game experiences that push the boundaries of interactive storytelling
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="/studio"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl shadow-2xl transition-all duration-300 hover:from-emerald-400 hover:to-emerald-500 hover:shadow-orange-500/25 hover:-translate-y-1"
                                >
                                    <span className="relative z-10">Explore Our Games</span>
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-emerald-300 border-2 border-emerald-400/50 rounded-xl hover:border-orange-400 hover:bg-orange-400/10 hover:text-orange-200 transition-all duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

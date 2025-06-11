import { FaItchIo, FaInstagram, FaYoutube, FaDiscord, FaPatreon } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="fixed top-16 left-0 w-full z-50 border-emerald-400/20 select-none">
            <div className="max-w-7xl mx-auto px-2 lg:px-8 h-20 flex items-center">

                <a href='/' className="flex-shrink-0">
                    <img src="/logo.png" alt="Novahelm Studios" className="h-32 w-auto" />
                </a>

                <div className="flex-1 flex justify-center">
                    <div className="hidden md:flex items-center space-x-12">
                        <a href="/about" className="relative text-emerald-100 hover:text-emerald-300 font-medium tracking-wide transition-all duration-300 group text-md sword-underline">
                            About
                        </a>
                        <a href="/projects" className="relative text-emerald-100 hover:text-emerald-300 font-medium tracking-wide transition-all duration-300 group text-md sword-underline">
                            Projects
                        </a>
                        <a href="/studio" className="relative text-emerald-100 hover:text-emerald-300 font-medium tracking-wide transition-all duration-300 group text-md sword-underline">
                            Studio
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <a href="https://novahelmstudios.itch.io/" className="transition-all duration-300 hover:scale-110">
                        <FaItchIo className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/novahelmstudios/" className="transition-all duration-300 hover:scale-110">
                        <FaInstagram className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                    </a>
                    <a href="https://discord.com/invite/r2esGF6zwy" className="transition-all duration-300 hover:scale-110">
                        <FaDiscord className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/@NovahelmStudios" className="transition-all duration-300 hover:scale-110">
                        <FaYoutube className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                    </a>
                    <a href="https://www.patreon.com/NovahelmStudios" className="transition-all duration-300 hover:scale-110">
                        <FaPatreon className="text-emerald-200 hover:text-emerald-400 w-5 h-5" />
                    </a>
                </div>
            </div>
        </nav>
    );
}


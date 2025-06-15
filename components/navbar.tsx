import { FaItchIo, FaInstagram, FaYoutube, FaDiscord, FaPatreon } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="relative top-15 left-0 w-full z-50 select-none">
            <div className="max-w-7xl px-8 mx-auto h-20 flex items-center">

                <a href='/'>
                    <img src="/logo.svg" alt="Novahelm Studios" className="h-12 w-auto" />
                </a>

                <div className="flex-1 flex justify-center">
                    <div className="flex items-center space-x-12">
                        <a href="/about"    className="relative text-emerald-100 hover:text-emerald-300 font-medium tracking-wide transition-all duration-300 group text-md sword-underline">
                            About
                        </a>
                        <a href="/projects" className="relative text-emerald-100 hover:text-emerald-300 font-medium tracking-wide transition-all duration-300 group text-md sword-underline">
                            Projects
                        </a>
                        <a href="/studio"   className="relative text-emerald-100 hover:text-emerald-300 font-medium tracking-wide transition-all duration-300 group text-md sword-underline">
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


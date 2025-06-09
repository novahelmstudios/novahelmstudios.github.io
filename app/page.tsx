import { FaItchIo, FaInstagram, FaYoutube, FaDiscord, FaPatreon } from 'react-icons/fa'

export default function Home() {
    return (
        <div className="relative min-h-screen">

            <nav className="fixed top-12 left-0 w-full bg-opacity-50 z-50 bg-transparent">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">

                    <div className="flex items-center space-x-25">
                        <img src="/logo.png" alt="Logo" className="h-54 w-auto" />

                        <div className="hidden md:flex space-x-10 font-bold tracking-wider uppercase text-sm">
                            <a href="#" className="text-orange-300 hover:text-red-800">Home</a>
                            <a href="#" className="text-orange-300 hover:text-red-800">About</a>
                            <a href="#" className="text-orange-300 hover:text-red-900">Services</a>
                            <a href="#" className="text-orange-300 hover:text-orange-500">Projects</a>
                        </div>
                    </div>

                    <div className="ml-auto hidden md:flex space-x-4">

                        <a href="https://novahelmstudios.itch.io/">
                            <FaItchIo className="text-orange-300 hover:text-orange-500" />
                        </a>
                        <a href="https://www.instagram.com/novahelmstudios/">
                            <FaInstagram className="text-orange-300 hover:text-orange-500" />
                        </a>
                        <a href="https://discord.com/invite/r2esGF6zwy">
                            <FaDiscord className="text-orange-300 hover:text-orange-500" />
                        </a>
                        <a href="https://www.youtube.com/@NovahelmStudios">
                            <FaYoutube className="text-orange-300 hover:text-orange-500" />
                        </a>
                        <a href="https://www.patreon.com/NovahelmStudios">
                            <FaPatreon className="text-orange-300 hover:text-orange-500" />
                        </a>

                    </div>
                </div>
            </nav>

        </div>

    );
}

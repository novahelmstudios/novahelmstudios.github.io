export default function Footer() {
    return (
        <footer className="bg-black/15 backdrop-blur-sm text-gray-400 py-8 select-none">
            <div className="max-w-6xl mx-auto flex flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm">
                    © {new Date().getFullYear()} <span className="text-white font-semibold">NovaHelm</span>. All rights reserved.
                </div>

                <div className="flex space-x-6 text-sm">
                    <a href="/" className="hover:text-white transition-colors duration-150">Home</a>
                    <a href="/about" className="hover:text-white transition-colors duration-150">About</a>
                    <a href="/projects" className="hover:text-white transition-colors duration-150">Projects</a>
                    <a href="/studio" className="hover:text-white transition-colors duration-150">Studio</a>
                </div>

                <div className="text-sm">
                    <a href="mailto:novahelmstudios@gmail.com" className="bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text hover:underline">
                        novahelmstudios@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

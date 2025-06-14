export default function About() {
    return (
        <>
            <div className="h-screen flex items-center select-none">
                <div className="max-w-5xl mx-auto px-6 w-full">
                    {/* Main Header */}
                    <div className="mb-16">
                        <h1 className="text-4xl inline-block font-bold bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text mb-6">About Us</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-orange-400"></div>
                    </div>

                    <div className="mb-16">
                        <p className="text-md leading-relaxed text-gray-300 font-light max-w-xl">
                            Passionate game developers creating unique experiences and sharing the journey with you. From 🎯 gameplay
                            mechanics and 🌍 world-building to 🎥 behind-the-scenes insights, we cover everything about bringing games
                            to life. Reach out to us via
                            <a href="mailto:novahelmstudios@gmail.com" className="bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text"> Email </a>
                            .
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}

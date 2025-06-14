export default function Studio() {
    return (
        <>

            <div className="h-screen flex items-center mt-4 select-none">
                <div className="max-w-5xl mx-auto px-6 w-full">
                    {/* Main Header */}
                    <div className="mb-16">
                        <h1 className="text-4xl inline-block font-bold bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text mb-6">Studio</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-orange-400"></div>
                    </div>

                    <div className="mb-16">
                        <p className="text-md leading-relaxed text-gray-300 font-light max-w-3xl">
                            <span className="block mb-4">
                                <strong className="text-white">NovaHelm</strong> is a dev-first studio where the stack is hand-built, inspected, and fully controlled.
                                We believe in a simple principle: <em>"Own your stack, or your stack owns you."</em>
                            </span>

                            <span className="block mb-4">
                                We specialize in native and engine-level development—working across <strong className="text-white">C, C++, Unity, Unreal Engine, OpenGL, SDL, Raylib</strong>, and <strong className="text-white">SFML</strong>.
                                Everything from low-level graphics to high-level gameplay systems is developed with performance and full-stack visibility in mind.
                            </span>

                            <span className="block mb-4">
                                Our workflow is tuned for precision: modular codebases, terminal tooling, and deep integration testing across platforms.
                                We don’t just build games—we build the systems that run them.
                            </span>

                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}

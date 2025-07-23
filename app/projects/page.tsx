export default function Project() {
    const projects = [
        {
            title: "Genesis",
            description: " modular C++ game engine built with OpenGL, GLFW, and FreeType. Designed for real-time rendering, input handling, and extensible game architecture",
            category: "Platformer",
            link: "https://github.com/novahelmstudios/genesis"
        },
        {
            title: "BadBot",
            description: " A drone shooter made in Unreal Engine 5. Featuring AI, homing missiles, and boss battles. A fast-paced action game with a focus on combat and exploration.",
            category: "Space Shooter",
            link: "https://github.com/novahelmstudios/badbot"
        },
    ];

    return (
        <>
            <div className="h-screen flex items-center select-none">
                <div className="max-w-5xl mx-auto mt-30">
                    <div className="mb-16">
                        <h1 className="text-4xl inline-block font-bold bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text mb-6">
                            Our Projects
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-orange-400"></div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                        {projects.map((project, index) => {
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
                                >

                                    {/* Project Content */}
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-md font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-orange-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-gray-400 font-medium mb-3">
                                                {project.category}
                                            </p>
                                        </div>

                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Hover Overlay */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="mt-4 pt-4 border-t border-slate-700/50">
                                                <a
                                                    href={project.link}
                                                    className="block text-sm font-medium bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text hover:from-emerald-300 hover:to-orange-300 transition-all duration-200"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Learn More →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div >
        </>
    );
}

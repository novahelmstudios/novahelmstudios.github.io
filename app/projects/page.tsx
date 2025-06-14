export default function Project() {
    const projects = [
        {
            title: "Neon Drift",
            description: "A high-octane cyberpunk racing game featuring stunning neon visuals and adaptive AI opponents. Experience the thrill of street racing in a dystopian future.",
            status: "Released",
            category: "Racing",
            gradient: "from-purple-400 to-pink-400",
            link: "#"
        },
        {
            title: "Echoes of the Void",
            description: "An atmospheric puzzle-adventure game where players manipulate sound waves to solve mysteries in an abandoned space station.",
            status: "In Development",
            category: "Puzzle Adventure",
            gradient: "from-blue-400 to-indigo-400",
            link: "#"
        },
        {
            title: "Forge Masters",
            description: "A strategic resource management game where players build and manage medieval forges, crafting legendary weapons and armor.",
            status: "Beta Testing",
            category: "Strategy",
            gradient: "from-amber-400 to-orange-400",
            link: "#"
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

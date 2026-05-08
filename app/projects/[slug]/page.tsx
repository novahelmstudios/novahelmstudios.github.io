import Link from "next/link";

const projects = [
        {
            title: "Genesis",
            description: " modular C++ game engine built with OpenGL, GLFW, and FreeType. Designed for real-time rendering, input handling, and extensible game architecture",
            category: "Platformer",
            repo: "https://github.com/novahelmstudios/genesis",
            slug: "genesis",
        },
        {
            title: "BadBot",
            description: " A drone shooter made in Unreal Engine 5. Featuring enemy AI, homing missiles, and boss battles. A fast-paced action game with a focus on combat and exploration.",
            category: "Space Shooter",
            repo: "https://github.com/novahelmstudios/badbot",
            slug: "badbot",
        },
        {
            title: "Stillness Below",
            description: "Under development. Stillness Below is a narrative-driven psychological survival horror game featuring a gripping story, immersive atmosphere, and challenging gameplay.",
            category: "Psychological Survival Horror",
            repo: "https://github.com/novahelmstudios/evilbela",
            slug: "stillness-below",
        },
    ];

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: any) {

    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Project not found</h2>
                    <p className="text-sm text-gray-400 mt-2">The project you're looking for doesn't exist.</p>
                    <div className="mt-4">
                        <Link href="/projects" className="text-emerald-300 hover:underline">Back to projects</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-start px-6 pt-24 pb-12">
            <div className="max-w-4xl mx-auto w-full">
                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                    <p className="text-sm text-gray-400 mt-1">{project.category}</p>
                </div>

                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    <div className="mt-6 flex items-center gap-4">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline">View repository</a>
                        <Link href="/projects" className="text-gray-400 hover:underline">Back to projects</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateMetadata({ params }: any) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return { title: 'Project — Novahelm Studios' };
    return {
        title: `${project.title} — Novahelm Studios`,
        description: project.description,
    };
}

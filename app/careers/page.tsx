export default function Careers() {
    return (
        <>
            <div className="min-h-screen text-gray-300 px-6 mt-35 select-none">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text mb-4">
                            Careers
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-orange-400"></div>
                    </div>

                    {/* Intro */}
                    <div className="mb-12 max-w-3xl text-lg leading-relaxed">
                        <p className="mb-4">
                            NovaHelm isn’t hiring for paper titles. We’re looking for engineers who understand systems, write tight code,
                            and take responsibility for their tools. If you think in terms of memory, input latency, render time, or
                            network payloads—we’re listening.
                        </p>
                        <p>
                            We operate with one core belief: <em className="text-white">own your stack or the stack owns you.</em> If that aligns with your workflow,
                            let’s build.
                        </p>
                    </div>

                    {/* Open Roles */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold text-white mb-6">Open Roles</h2>
                        <ul className="space-y-6 text-gray-300">
                            <li>
                                <h3 className="text-xl text-white font-medium">C++ Systems Programmer</h3>
                                <p className="text-sm max-w-2xl">
                                    Build engine-level modules, performance-critical runtime systems, and low-level tooling. Experience with SDL, Raylib, or SFML preferred.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl text-white font-medium">Graphics Engineer (OpenGL/Unreal)</h3>
                                <p className="text-sm max-w-2xl">
                                    Work on rendering pipelines, shaders, and performance tuning across GL and engine-native rendering backends.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-xl text-white font-medium">Unity Gameplay Developer</h3>
                                <p className="text-sm max-w-2xl">
                                    Focus on systems architecture and core mechanics. ECS experience or burst knowledge is a plus.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="max-w-2xl text-lg">
                        <p>
                            To apply, email your GitHub, past work, or a short write-up to
                            <a
                                href="mailto:novahelmstudios@gmail.com"
                                className="bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text ml-1"
                            >
                                novahelmstudios@gmail.com
                            </a>
                            .
                        </p>
                        <p className="mt-4">
                            No resumes. Just show us what you’ve built.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

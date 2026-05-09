export default function Careers() {
    return (
        <section className="min-h-[calc(100vh-7rem)] px-6 py-20 text-gray-300 flex items-center">
            <div className="mx-auto w-full max-w-6xl">
                <div className="mb-12">
                    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-200/70">Careers</p>
                    <h1 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400 sm:text-6xl">
                        Careers
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-orange-400" />
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur-xl">
                        <p className="mb-4 text-lg leading-8">
                            We're not actively hiring right now. NovaHelm Studios is focused on shipping Unreal Engine projects and tightening the studio workflow.
                        </p>
                        <p className="text-lg leading-8">
                            If you’re interested in joining later, internship opportunities may open up first. We’ll post updates here when that changes.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl">
                        <h2 className="mb-6 text-2xl font-semibold text-white">What we’d look for later</h2>
                        <ul className="space-y-5">
                            <li>
                                <h3 className="text-xl font-medium text-white">Unreal Engine Intern</h3>
                                <p className="text-sm leading-7 text-gray-300">Help with gameplay systems, tools, or content workflows while learning how the studio ships games.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur-xl text-lg leading-8">
                    <p>
                        To apply, email your GitHub, past work, or a short write-up to
                        <a href="mailto:novahelmstudios@gmail.com" className="ml-1 bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text underline-offset-4 hover:underline focus-visible:underline">novahelmstudios@gmail.com</a>.
                    </p>
                    <p className="mt-4">No resumes needed if you’re reaching out for future internship opportunities — just show us what you’ve built.</p>
                </div>
            </div>
        </section>
    );
}

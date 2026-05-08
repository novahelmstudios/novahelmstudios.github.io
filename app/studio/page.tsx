export default function Studio() {
    return (
        <section className="min-h-[calc(100vh-7rem)] px-6 py-20 flex items-center">
            <div className="mx-auto w-full max-w-5xl">
                <div className="mb-12">
                    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-200/70">Studio</p>
                    <h1 className="inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400 sm:text-5xl mb-4">Studio</h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-orange-400" />
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <article className="rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur-xl lg:col-span-2">
                        <p className="text-base leading-8 text-gray-300 sm:text-lg">
                            <strong className="text-white">NovaHelm</strong> is a dev-first studio where the stack is hand-built, inspected, and fully controlled.
                            We believe in a simple principle: <em>“Own your stack, or your stack owns you.”</em>
                        </p>
                        <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
                            We build in <strong className="text-white">Unreal Engine</strong>. Our workflow keeps performance, tooling, and iteration visible at every step.
                        </p>
                    </article>

                    <div className="grid gap-4">
                        <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                            <h2 className="text-lg font-semibold text-white mb-2">Workflow</h2>
                            <p className="text-sm leading-7 text-gray-300">Modular codebases, terminal tooling, and short feedback loops.</p>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                            <h2 className="text-lg font-semibold text-white mb-2">Focus</h2>
                            <p className="text-sm leading-7 text-gray-300">Low-level graphics, gameplay systems, and fast iteration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

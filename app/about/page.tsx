export default function About() {
    return (
        <section className="min-h-[calc(100vh-7rem)] px-6 py-20 flex items-center">
            <div className="mx-auto w-full max-w-5xl">
                <div className="mb-12">
                    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-200/70">About</p>
                    <h1 className="inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400 sm:text-5xl mb-4">About Us</h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-orange-400" />
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur-xl">
                        <p className="text-base leading-8 text-gray-300 sm:text-lg">
                            We’re a small studio focused on building games with strong identity and clear systems.
                            That means sharp gameplay loops, readable design, and enough polish to make the experience feel intentional.
                        </p>
                        <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
                            We share the process as we go, from gameplay mechanics and world-building to behind-the-scenes updates.
                            If you want to follow along or reach out, email us at
                            <a href="mailto:novahelmstudios@gmail.com" className="ml-1 bg-gradient-to-r from-emerald-400 to-orange-400 text-transparent bg-clip-text underline-offset-4 hover:underline focus-visible:underline">novahelmstudios@gmail.com</a>.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                            <h2 className="text-lg font-semibold text-white mb-2">What we value</h2>
                            <p className="text-sm leading-7 text-gray-300">Clarity, feedback loops, and making games that are easy to understand and fun to return to.</p>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                            <h2 className="text-lg font-semibold text-white mb-2">How we work</h2>
                            <p className="text-sm leading-7 text-gray-300">We keep the stack lean, the goals visible, and the iteration cycle short.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ContactPage() {
    return (
        <section className="min-h-[calc(100vh-7rem)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 text-center sm:gap-8">
                <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/70">Contact</p>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">Get in touch</h1>
                    <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                        We&apos;re currently under development. For inquiries, collaborations, or project questions, reach out through email and we&apos;ll get back to you directly.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
                    <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-center sm:text-left">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Prefer email?</h2>
                            <p className="text-sm leading-7 text-gray-300 sm:text-base">
                                Send us a note from your email client and include any links, references, or context you want us to review.
                            </p>
                        </div>

                        <div className="flex justify-center sm:justify-end">
                            <a
                                href="mailto:novahelmstudios@gmail.com"
                                className="group inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-emerald-500/30 focus-visible:-translate-y-1 focus-visible:scale-[1.03] focus-visible:shadow-emerald-500/30 active:translate-y-0 active:scale-[0.98] sm:w-auto"
                            >
                                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5">
                                    Email Us
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const metadata = {
    title: 'Contact — NovaHelm Studios',
    description: 'Contact NovaHelm Studios for inquiries, collaborations, or support. We are currently under development.',
};

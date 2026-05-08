export default function ContactPage() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="max-w-3xl w-full text-center">
                <h1 className="text-4xl font-bold mb-4">Contact</h1>
                <p className="text-gray-300 mb-6">We're currently under development. For inquiries, email us at <a href="mailto:novahelmstudios@gmail.com" className="text-emerald-300 hover:underline">novahelmstudios@gmail.com</a>.</p>

                <div className="bg-black/30 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50">
                    <p className="text-gray-300">Want to collaborate or ask about a project? Send us a message using your email client.</p>
                    <div className="mt-4">
                        <a href="mailto:novahelmstudios@gmail.com" className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl text-white font-medium">Email Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const metadata = {
    title: 'Contact — Novahelm Studios',
    description: 'Contact Novahelm Studios for inquiries, collaborations, or support. We are currently under development.',
};

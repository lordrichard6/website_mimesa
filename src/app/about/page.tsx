
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-brand-coffee mb-8">
                    We believe dining is an <span className="text-brand-orange italic">art</span>.
                </h1>
                <p className="text-xl text-brand-grey max-w-2xl mx-auto">
                    miMesa was built to help restaurateurs focus on what they do best: creating unforgettable experiences for their guests.
                </p>
            </section>

            {/* Our Story */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
                        {/* Placeholder for team/office image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            [Office/Team Image]
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-brand-coffee mb-6">Our Story</h2>
                        <div className="space-y-4 text-brand-grey text-lg">
                            <p>
                                It started with a simple observation: managing reservations was becoming a chore, not a hospitality tool. Clunky interfaces, expensive per-cover fees, and disconnected systems were holding restaurants back.
                            </p>
                            <p>
                                We gathered a team of designers, engineers, and hospitality veterans to build something different. A system that looks as good as your dining room and works as hard as your head chef.
                            </p>
                            <p>
                                Today, miMesa serves thousands of guests daily, helping restaurants reclaim their time and ownership of their customer relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 bg-brand-coffee text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-brand-orange">Hospitality First</h3>
                            <p className="text-white/80">
                                We build software with the same care you serve your guests. Every pixel is considered, every interaction smoothed out.
                            </p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-brand-orange">Transparent Partnership</h3>
                            <p className="text-white/80">
                                No hidden fees, no per-cover taxes. We are partners in your success, not a tax on your growth.
                            </p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-brand-orange">Design Matters</h3>
                            <p className="text-white/80">
                                Tools shouldn't just work; they should inspire. A beautiful interface reduces stress and increases joy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

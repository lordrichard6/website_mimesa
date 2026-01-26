
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Layout, Users, Smartphone, Clock, TrendingUp } from "lucide-react";

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 text-center bg-brand-coffee text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">
                        Everything you need to <span className="text-brand-orange">run your floor</span>.
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Powerful tools for reservations, table management, and guest relationships.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <FeatureCard
                        icon={<Layout className="text-brand-orange" size={32} />}
                        title="Visual Table Planner"
                        description="Drag and drop reservations onto your exact floor plan. See availability at a glance and maximize seating capacity."
                    />
                    <FeatureCard
                        icon={<Calendar className="text-brand-orange" size={32} />}
                        title="Online Booking"
                        description="Accept reservations 24/7 from your website, Google, and social media. No cover fees, ever."
                    />
                    <FeatureCard
                        icon={<Users className="text-brand-orange" size={32} />}
                        title="Guest CRM"
                        description="Build a database of your guests. Track allergies, preferences, and visit history to provide personalized service."
                    />
                    <FeatureCard
                        icon={<Smartphone className="text-brand-orange" size={32} />}
                        title="Waitlist Management"
                        description="Quote accurate wait times and notify guests via SMS when their table is ready."
                    />
                    <FeatureCard
                        icon={<Clock className="text-brand-orange" size={32} />}
                        title="Shift Management"
                        description="Plan server rotations and manage floor sections effortlessly."
                    />
                    <FeatureCard
                        icon={<TrendingUp className="text-brand-orange" size={32} />}
                        title="Analytics & Reporting"
                        description="Understand your peak times, most loyal guests, and revenue trends with detailed reports."
                    />
                </div>
            </section>

            {/* Deep Dive Section (Placeholder for screenshots) */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                    <div className="text-center max-w-3xl">
                        <h2 className="text-3xl font-bold text-brand-coffee mb-4">Designed for speed</h2>
                        <p className="text-brand-grey">
                            In a busy restaurant, every second counts. miMesa is built to be fast, responsive, and easy to learn.
                        </p>
                    </div>

                    {/* Mock UI for Table Planner */}
                    <div className="w-full aspect-[16/9] bg-white rounded-xl shadow-xl border border-gray-200 flex items-center justify-center p-8">
                        <div className="text-gray-300 font-bold text-2xl flex flex-col items-center gap-4">
                            <Layout size={64} />
                            <span>Interactive Floor Plan Mockup</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-orange transition-colors">
            <div className="mb-6 p-4 bg-orange-50 rounded-xl inline-block">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-brand-coffee mb-4">{title}</h3>
            <p className="text-brand-grey leading-relaxed">{description}</p>
        </div>
    )
}

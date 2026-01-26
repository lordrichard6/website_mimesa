
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, X } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-40 pb-24 px-6 text-center bg-brand-light-grey">
                <h1 className="text-4xl md:text-5xl font-bold text-brand-coffee mb-6">Simple, transparent pricing.</h1>
                <p className="text-xl text-brand-grey mb-12">No setup fees. No hidden costs. Cancel anytime.</p>

                {/* Toggles (Monthly/Yearly) could go here */}
            </section>

            <section className="pb-24 px-6 -mt-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <h3 className="text-xl font-bold text-brand-coffee">Starter</h3>
                        <p className="text-sm text-gray-400 mt-2">For small cafes and pop-ups.</p>
                        <div className="my-6">
                            <span className="text-4xl font-bold text-brand-coffee">$0</span>
                            <span className="text-gray-400">/mo</span>
                        </div>
                        <Link href="/signup" className="block w-full py-3 bg-gray-100 text-brand-coffee font-bold rounded-lg text-center hover:bg-gray-200">Get Started</Link>
                        <ul className="mt-8 space-y-4">
                            <FeatureItem text="Up to 100 covers/mo" />
                            <FeatureItem text="Basic Floor Plan" />
                            <FeatureItem text="Email Support" />
                            <FeatureItem text="SMS Reminders ($0.05/msg)" active={false} />
                        </ul>
                    </div>

                    {/* Pro (Highlighted) */}
                    <div className="bg-brand-coffee text-white rounded-2xl p-8 shadow-2xl border border-brand-coffee relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-brand-orange text-xs font-bold px-3 py-1 rounded-bl-lg text-white">POPULAR</div>
                        <h3 className="text-xl font-bold">Professional</h3>
                        <p className="text-sm text-white/60 mt-2">For busy restaurants.</p>
                        <div className="my-6">
                            <span className="text-4xl font-bold">$49</span>
                            <span className="text-white/60">/mo</span>
                        </div>
                        <Link href="/signup" className="block w-full py-3 bg-brand-orange text-white font-bold rounded-lg text-center hover:bg-yellow-600 transition-colors">Start Free Trial</Link>
                        <ul className="mt-8 space-y-4">
                            <FeatureItem text="Unlimited covers" inverted />
                            <FeatureItem text="Advanced Floor Plan" inverted />
                            <FeatureItem text="Priority Support" inverted />
                            <FeatureItem text="SMS Reminders included" inverted />
                            <FeatureItem text="Guest CRM" inverted />
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <h3 className="text-xl font-bold text-brand-coffee">Enterprise</h3>
                        <p className="text-sm text-gray-400 mt-2">For multi-location groups.</p>
                        <div className="my-6">
                            <span className="text-4xl font-bold text-brand-coffee">Custom</span>
                        </div>
                        <Link href="/contact" className="block w-full py-3 bg-white border-2 border-brand-coffee text-brand-coffee font-bold rounded-lg text-center hover:bg-gray-50">Contact Sales</Link>
                        <ul className="mt-8 space-y-4">
                            <FeatureItem text="All Pro features" />
                            <FeatureItem text="Multi-location management" />
                            <FeatureItem text="Dedicated account manager" />
                            <FeatureItem text="API Access" />
                            <FeatureItem text="Custom Integration" />
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FeatureItem({ text, active = true, inverted = false }: { text: string, active?: boolean, inverted?: boolean }) {
    return (
        <li className={`flex items-center gap-3 text-sm ${inverted ? 'text-white/80' : 'text-gray-600'}`}>
            {active ? (
                <Check size={18} className={inverted ? "text-brand-orange" : "text-green-500"} />
            ) : (
                <X size={18} className="text-gray-300" />
            )}
            <span className={!active ? "text-gray-400 line-through" : ""}>{text}</span>
        </li>
    )
}

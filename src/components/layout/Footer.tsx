
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-coffee text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center mb-6 group">
                            <div className="relative h-10 w-10">
                                <Image src="/logo-icon.png" alt="miMesa Logo" fill className="object-contain" />
                            </div>
                            <div className="text-2xl font-bold tracking-tighter flex items-center -ml-1 pt-[2px]">
                                <span className="text-brand-orange">i</span>
                                <span className="text-yellow-400">Mesa</span>
                            </div>
                        </Link>
                        <p className="text-white/60 mb-6">
                            The operating system for modern restaurants. Handle reservations, tables, and guests with elegance.
                        </p>
                        <div className="flex gap-4 mb-6">
                            <a href="#" aria-label="Twitter" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Instagram size={20} /></a>
                            <a href="#" aria-label="LinkedIn" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Linkedin size={20} /></a>
                        </div>

                        {/* Swiss Made Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                            <span className="text-lg" aria-hidden="true">🇨🇭</span>
                            <span className="text-xs font-semibold text-white/80 tracking-wide">SWISS MADE</span>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-brand-orange">Product</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
                            <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-brand-orange">Company</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-brand-orange">Legal</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/data-protection" className="hover:text-white transition-colors">Data Protection (DSG)</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Data Protection Notice */}
                <div className="mb-8 p-5 bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3 shrink-0">
                            <span className="text-2xl" aria-hidden="true">🇨🇭</span>
                            <span className="text-sm font-semibold text-white/90">Data Stored in Switzerland</span>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed">
                            All restaurant and guest data is stored exclusively on servers located in Switzerland, fully compliant with the Swiss Federal Act on Data Protection (revDSG / nFADP) and the EU General Data Protection Regulation (GDPR). Your data never leaves Swiss jurisdiction.
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} miMesa. All rights reserved.</p>
                    <p>
                        Built by{" "}
                        <a
                            href="https://lopes2tech.ch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-orange hover:text-amber-400 transition-colors font-medium"
                        >
                            Lopes2tech
                        </a>
                        {" "}— Switzerland
                    </p>
                </div>
            </div>
        </footer>
    );
}

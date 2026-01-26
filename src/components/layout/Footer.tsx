
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Twitter size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Instagram size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-brand-orange">Product</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/features" className="hover:text-white">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                            <li><Link href="/changelog" className="hover:text-white">Changelog</Link></li>
                            <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-brand-orange">Company</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-brand-orange">Legal</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
                    &copy; {new Date().getFullYear()} miMesa. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

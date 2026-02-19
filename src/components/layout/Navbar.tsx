
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-coffee/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <div className="relative h-10 w-10">
                        <Image src="/logo-icon.png" alt="miMesa Logo" fill className="object-contain" />
                    </div>
                    <div className="text-2xl font-bold tracking-tighter flex items-center -ml-1 pt-[1px]">
                        <span className="text-brand-orange">i</span>
                        <span className="text-yellow-400">Mesa</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <Link href="/features" className="hover:text-brand-orange transition-colors">Features</Link>
                    <Link href="/pricing" className="hover:text-brand-orange transition-colors">Pricing</Link>
                    <Link href="/about" className="hover:text-brand-orange transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="https://app.mimesa.ch/login" className="text-white hover:text-white/80 font-medium">
                        Log in
                    </a>
                    <a
                        href="https://app.mimesa.ch/signup"
                        className="px-5 py-2.5 bg-brand-orange text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors shadow-[0_4px_0_0_rgba(180,83,9,1)] hover:shadow-none hover:translate-y-[2px]"
                    >
                        Start for free
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white sm:mr-3"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-brand-coffee border-t border-white/10 md:hidden p-6 flex flex-col gap-6 shadow-2xl">
                    <Link href="/features" className="text-lg text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                    <Link href="/pricing" className="text-lg text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                    <Link href="/about" className="text-lg text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href="/contact" className="text-lg text-white hover:text-brand-orange" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <hr className="border-white/10" />
                    <a href="https://app.mimesa.ch/login" className="text-lg text-white hover:text-white/80" onClick={() => setMobileMenuOpen(false)}>Log in</a>
                    <a
                        href="https://app.mimesa.ch/signup"
                        className="px-5 py-3 bg-brand-orange text-white font-bold rounded-lg text-center hover:bg-yellow-600 shadow-[0_4px_0_0_rgba(180,83,9,1)]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Start for free
                    </a>
                </div>
            )}
        </nav>
    );
}

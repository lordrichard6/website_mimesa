'use client';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'cookie_consent';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(CONSENT_KEY);
        if (!stored) {
            setVisible(true);
        } else {
            updateGAConsent(stored === 'accepted');
        }
    }, []);

    const updateGAConsent = (granted: boolean) => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                analytics_storage: granted ? 'granted' : 'denied',
                ad_storage: granted ? 'granted' : 'denied',
            });
        }
    };

    const handleAccept = () => {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        updateGAConsent(true);
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(CONSENT_KEY, 'declined');
        updateGAConsent(false);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-xl border border-[#2F2519]/20 bg-[#FAF6F0] p-4 shadow-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
            <div className="flex items-start gap-3">
                <span className="mt-0.5 text-xl" aria-hidden="true">🍪</span>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#2F2519]">We use cookies</p>
                    <p className="mt-1 text-xs text-[#2F2519]/60 leading-relaxed">
                        We use analytics cookies to understand how visitors use our site.
                        No personal data is sold or shared.{' '}
                        <a href="/en/privacy" className="underline underline-offset-2 hover:text-[#2F2519] transition-colors">
                            Privacy Policy
                        </a>
                    </p>
                    <div className="mt-3 flex gap-2">
                        <button
                            onClick={handleAccept}
                            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#2F2519] text-white hover:bg-[#2F2519]/80 transition-colors"
                        >
                            Accept
                        </button>
                        <button
                            onClick={handleDecline}
                            className="px-4 py-1.5 text-xs font-semibold rounded-lg border border-[#2F2519]/20 text-[#2F2519]/70 hover:bg-[#2F2519]/5 transition-colors"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

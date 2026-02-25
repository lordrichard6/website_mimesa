import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-B9DC37XZX9';

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Default denied — GDPR compliant (EEA/Switzerland)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });

            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
                }}
            />
        </>
    );
}

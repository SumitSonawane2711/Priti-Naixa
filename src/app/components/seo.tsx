'use client';

import Head from 'next/head';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string; // "website" or "article"
}

export default function SEO({
    title = 'Priti-Naixa T-Permit Vehicle Services & Showroom',
    description = 'Trusted provider for T-Permit vehicles, showroom services, and transport licensing assistance.',
    keywords = 'T-permit vehicles, T-permit New car, T-permit Used car, T-permit cars, T-permit cars in maharashtra, T-permit cars in Mumbai, T-permit car showroom, Priti-Naixa, T-permit car sales and purchase',
    image = '/favicon.png',
    url = 'https://pritinaixa.com',
    type = 'website',
}: SEOProps) {
    return (
        <Head>
            {/* Basic SEO */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Priti-Naixa Vehicle Services" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Open Graph (Facebook / LinkedIn) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Priti-Naixa Showroom" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.png" />

            {/* JSON-LD Structured Data for better SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'LocalBusiness',
                        name: 'Priti-Naixa T-Permit Vehicle Services & Showroom',
                        url,
                        logo: image,
                        description,
                        telephone: "+91-9136771018",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Shop 1 & 2, Tarique Galaxy, Plot-181,",
                            addressLocality: "Sector-2, Taloja, Panvel, Raigarh,(MH),",
                            addressRegion: "Maharashtra",
                            postalCode: "410208",
                            addressCountry: "IN",
                        },
                    }),
                }}
            />
        </Head>
    );
}

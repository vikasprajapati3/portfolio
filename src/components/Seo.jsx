import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://portfolio-vikasprajapati.vercel.app'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

export default function SEO({
    title,
    description,
    path = '/',
    jsonLd = null,
    image = DEFAULT_IMAGE,
}) {
    const fullTitle = title ? `${title} — Vikas Prajapati` : undefined
    const url = `${SITE_URL}${path}`

    return (
        <Helmet>
            {/* Only override if prop is provided */}
            {fullTitle && <title>{fullTitle}</title>}
            {description && <meta name="description" content={description} />}
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            {fullTitle && <meta property="og:title" content={fullTitle} />}
            {description && <meta property="og:description" content={description} />}
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            {fullTitle && <meta name="twitter:title" content={fullTitle} />}
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={image} />

            {/* JSON-LD */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    )
}
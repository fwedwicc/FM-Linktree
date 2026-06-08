import "./globals.css"
import Script from "next/script"

export const metadata = {
  metadataBase: new URL('https://linktree.fwedwicc.com'),
  title: "FM Linktree",
  description: "Links to all of Frederick Moreno's (fwedwicc) social media, projects, and web presence.",
  keywords: ["fwedwicc", "frederick moreno", "frontend developer", "ui ux designer", "links", "linktree"],
  authors: [{ name: "Frederick Moreno", url: "https://fwedwicc.com" }],

  openGraph: {
    title: "FM Linktree",
    description: "Links to all of Frederick Moreno's (fwedwicc) social media, projects, and web presence.",
    url: "https://linktree.fwedwicc.com",
    siteName: "fwedwicc Linktree",
    type: "website",
    // images: [
    //   {
    //     url: "/preview.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "fwedwicc Links",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FM Linktree",
    description: "Links to all of Frederick Moreno's (fwedwicc) social media, projects, and web presence.",
    // images: ["/preview.png"],
  },

  alternates: {
    canonical: "https://linktree.fwedwicc.com",
  },

  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "fwedwicc Links",
  "url": "https://linktree.fwedwicc.com",
  "author": {
    "@type": "Person",
    "name": "Frederick Moreno",
    "alternateName": "fwedwicc",
    "url": "https://fwedwicc.com",
    "jobTitle": "Frontend Developer & UI/UX Designer",
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2EC7RQQC3Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2EC7RQQC3Q');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}

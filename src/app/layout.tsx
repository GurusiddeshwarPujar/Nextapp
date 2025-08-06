// src/app/layout.tsx
import './globals.css' // You can create this if needed
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'




export const metadata = {
  title: 'First Aid Medicine',
  description: 'AMC MCQ CLINICAL PESCI Online Courses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* CSS Assets */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        
      </head>
      <body className="body-home-page">
        <Header />
        <main>{children}</main>
        <Footer />

        {/* JS Scripts */}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

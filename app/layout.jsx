import './globals.css';

const siteUrl = 'https://argentina-al-horno.vercel.app';
const title = 'Argentina al Horno | Empanadas artesanales en Puerto Rico';
const description = 'Armá tu combo de empanadas argentinas: docena a $34. Pedidos por WhatsApp, ATH Móvil o efectivo. Delivery en San Juan y áreas cercanas, a coordinar.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'Argentina al Horno',
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/images/argentina-al-horno-logo.webp', type: 'image/webp' }],
    apple: [{ url: '/images/argentina-al-horno-social.jpg' }],
  },
  openGraph: {
    type: 'website',
    locale: 'es_PR',
    url: '/',
    siteName: 'Argentina al Horno',
    title,
    description,
    images: [{ url: '/images/argentina-al-horno-social.jpg', width: 1254, height: 1254, alt: 'Argentina al Horno · Empanadas artesanales · 787-948-3022' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/argentina-al-horno-social.jpg'],
  },
};
export const viewport = { themeColor: '#75c9ed' };
export default function RootLayout({ children }) {
  return <html lang="es-PR"><body>{children}</body></html>;
}

import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ParticlesBackground } from '@/components/ParticlesBackground';

export const metadata: Metadata = {
  title: 'Kasumi - Something Extraordinary',
  description: 'Join the Kasumi waitlist and be among the first to experience something extraordinary',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0014',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-kasumi-bg text-kasumi-text overflow-x-hidden">
        <ParticlesBackground theme="purple" density={100} />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify Code - Kasumi',
  description: 'Verify your Kasumi code to complete your waitlist entry',
};

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

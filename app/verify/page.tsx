import { Suspense } from 'react';
import { VerifyPageContent } from '@/components/VerifyPageContent';

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <main className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin">
              <div className="w-12 h-12 border-4 border-kasumi-primary border-t-kasumi-accent rounded-full" />
            </div>
            <p className="mt-4 text-kasumi-text-muted">Verifying...</p>
          </div>
        </main>
      }
    >
      <VerifyPageContent />
    </Suspense>
  );
}

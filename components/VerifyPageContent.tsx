'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CopyButton } from './CopyButton';

type VerifyStatus = 'loading' | 'verified' | 'error' | 'no_code';

export function VerifyPageContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<VerifyStatus>('loading');
  const [message, setMessage] = useState('');
  const [resetCommand, setResetCommand] = useState('');

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      setStatus('no_code');
      return;
    }

    const verifyCode = async () => {
      try {
        const response = await fetch('/api/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus('verified');
          setMessage('Your code is verified! Welcome to the Kasumi experience.');
          setResetCommand(data.resetCommand || '');
        } else {
          setStatus('error');
          setMessage(data.error || 'Verification failed. Please check your code.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('An error occurred during verification. Please try again.');
      }
    };

    verifyCode();
  }, [searchParams]);

  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl slide-in-up">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 glow">
            Verification
          </h1>
          <p className="text-lg md:text-xl text-kasumi-text-muted">
            {status === 'loading' && 'Verifying your code...'}
            {status === 'verified' && 'Code Verified Successfully'}
            {status === 'error' && 'Verification Failed'}
            {status === 'no_code' && 'No Code Provided'}
          </p>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          {status === 'loading' && (
            <div className="text-center">
              <div className="inline-block">
                <div className="animate-spin">
                  <div className="w-12 h-12 border-4 border-kasumi-primary border-t-kasumi-accent rounded-full" />
                </div>
              </div>
              <p className="mt-4 text-kasumi-text-muted">Processing...</p>
            </div>
          )}

          {status === 'verified' && (
            <div className="text-center">
              <div className="mb-6 inline-block">
                <svg
                  className="w-16 h-16 text-kasumi-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-lg text-kasumi-text mb-6">{message}</p>
              {resetCommand && (
                <div className="bg-kasumi-surface border border-kasumi-border rounded-lg p-4 mb-4">
                  <p className="text-sm text-kasumi-text-muted mb-3">
                    Your reset command:
                  </p>
                  <code className="block font-mono text-kasumi-accent text-sm break-all mb-4">
                    {resetCommand}
                  </code>
                  <CopyButton
                    text={resetCommand}
                    label="Copy Command"
                    className="w-full justify-center"
                  />
                </div>
              )}
              <a
                href="/"
                className="inline-block mt-6 px-6 py-3 bg-kasumi-primary hover:bg-kasumi-primary-light text-kasumi-bg font-medium rounded-lg transition-all duration-250"
              >
                Back to Home
              </a>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center">
              <div className="mb-6 inline-block">
                <svg
                  className="w-16 h-16 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-lg text-red-400 mb-6">{message}</p>
              <a
                href="/"
                className="inline-block px-6 py-3 bg-kasumi-primary hover:bg-kasumi-primary-light text-kasumi-bg font-medium rounded-lg transition-all duration-250"
              >
                Try Again
              </a>
            </div>
          )}

          {status === 'no_code' && (
            <div className="text-center">
              <div className="mb-6 inline-block">
                <svg
                  className="w-16 h-16 text-kasumi-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-lg text-kasumi-text mb-6">
                No verification code was provided.
              </p>
              <p className="text-kasumi-text-muted mb-6">
                Please check the link in your email and try again.
              </p>
              <a
                href="/"
                className="inline-block px-6 py-3 bg-kasumi-primary hover:bg-kasumi-primary-light text-kasumi-bg font-medium rounded-lg transition-all duration-250"
              >
                Back to Home
              </a>
            </div>
          )}
        </div>

        <div className="mt-8 pt-8 border-t border-kasumi-border text-center">
          <p className="text-sm text-kasumi-text-muted">
            Questions? Contact us at{' '}
            <a href="mailto:support@kasumi.dev" className="text-kasumi-accent hover:text-kasumi-primary">
              support@kasumi.dev
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

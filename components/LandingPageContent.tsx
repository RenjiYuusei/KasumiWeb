'use client';

import { useState } from 'react';
import { CopyButton } from './CopyButton';

export function LandingPageContent() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Check your email for verification!');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Subscription failed');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl slide-in-up">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 glow">
            Kasumi
          </h1>
          <p className="text-xl md:text-2xl text-kasumi-text-muted mb-2">
            Something extraordinary is coming
          </p>
          <p className="text-sm md:text-base text-kasumi-text-muted">
            Join our waitlist to be among the first to experience it
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-effect p-8 rounded-xl mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-kasumi-surface border border-kasumi-border text-kasumi-text placeholder-kasumi-text-muted focus:outline-none focus:border-kasumi-primary focus:ring-2 focus:ring-kasumi-primary/30 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-kasumi-accent hover:bg-kasumi-accent-dark disabled:bg-kasumi-text-muted text-kasumi-bg font-medium rounded-lg transition-all duration-250 whitespace-nowrap"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>

          {message && (
            <div
              className={`text-center text-sm font-medium ${
                status === 'success' ? 'text-kasumi-success' : 'text-red-400'
              }`}
            >
              {message}
            </div>
          )}
        </form>

        <div className="glass-effect p-6 rounded-xl">
          <p className="text-sm text-kasumi-text-muted mb-4 text-center">
            Already got your code? Verify it here:
          </p>
          <div className="text-center">
            <a
              href="/verify"
              className="inline-block px-6 py-2 border border-kasumi-primary text-kasumi-primary hover:bg-kasumi-primary/10 rounded-lg transition-all duration-250 font-medium"
            >
              Verify Code
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-kasumi-border">
          <p className="text-center text-xs text-kasumi-text-muted">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </main>
  );
}

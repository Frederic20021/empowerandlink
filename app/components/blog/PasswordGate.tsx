'use client';

import { useState, useEffect, useCallback } from 'react';

type PasswordGateProps = {
  children: React.ReactNode;
};

const SESSION_KEY = 'blog_auth';

export default function PasswordGate({ children }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const correctPassword = process.env.NEXT_PUBLIC_BLOG_PASSWORD || '';

    if (!password) {
      setError('パスワードを入力してください。');
      return;
    }

    if (password === correctPassword) {
      setAnimating(true);
      setTimeout(() => {
        sessionStorage.setItem(SESSION_KEY, 'true');
        setAuthenticated(true);
      }, 400);
    } else {
      setError('パスワードが正しくありません。');
    }
  }, [password]);

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="password-gate-overlay">
      <div className={`password-gate-modal ${animating ? 'gate-exit' : 'gate-enter'}`}>
        <div className="gate-lock-icon">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h2>パスワードが必要です</h2>
        <p>このコンテンツを表示するにはパスワードを入力してください。</p>
        <form onSubmit={handleSubmit} className="gate-form">
          <div className="gate-input-wrap">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="パスワード"
              autoFocus
              className="gate-input"
            />
          </div>
          {error && <p className="gate-error">{error}</p>}
          <button type="submit" className="btn btn-glow gate-btn">
            認証する
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

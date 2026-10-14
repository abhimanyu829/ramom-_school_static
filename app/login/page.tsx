'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  GraduationCap,
  User,
  Lock,
  LogIn,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('superadmin@cambridge.edu');
  const [password, setPassword] = useState('••••••••');
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg('Authenticating credentials...');
    setTimeout(() => {
      setMsg('Access granted! Redirecting to dashboard...');
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#141619] relative flex items-center justify-center p-4 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-radial from-[#311b92]/20 via-[#181a1f] to-[#121316] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#ff5252]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#3949ab]/15 blur-3xl pointer-events-none" />

      {/* Top Banner with Quick Jump to ERP or Installer */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs z-10">
        <Link
          href="/dashboard"
          className="text-[#9ca3af] hover:text-white flex items-center gap-1.5 bg-[#202328]/80 backdrop-blur px-3 py-1.5 rounded border border-[#32363f] transition-colors"
        >
          <span>← Back to ERP Dashboard</span>
        </Link>
        <Link
          href="/installer"
          className="text-[#ff8a80] hover:text-white flex items-center gap-1.5 bg-[#202328]/80 backdrop-blur px-3 py-1.5 rounded border border-[#32363f] transition-colors"
        >
          <span>🚀 View Web Installer Wizard</span>
        </Link>
      </div>

      {/* Central Login Card (Matching login.png) */}
      <div className="relative z-10 w-full max-w-4xl bg-[#1e2126] rounded-xl shadow-2xl border border-[#343841] overflow-hidden flex flex-col md:flex-row my-8">
        {/* LEFT PANEL: Purple-to-red angled gradient card */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#3f2b96] via-[#7b1fa2] to-[#c2185b] p-8 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 space-y-6 text-center md:text-left mt-2">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#ffcc80] mb-1">
                ABHIBHIDEVELOPERS School Management ERP
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">WELCOME TO</h2>
              <div className="w-12 h-1 bg-white/50 my-2 rounded-full mx-auto md:mx-0"></div>
            </div>

            <div className="flex flex-col items-center md:items-start py-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur border border-white/20 p-2 flex items-center justify-center shadow-lg mb-3">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <span className="font-black text-xl tracking-wide">ABHIBHIDEVELOPERS</span>
              <span className="text-xs text-white/80 font-medium">School ERP System v7.0</span>
            </div>

            <p className="text-xs text-white/80 leading-relaxed font-light">
              4458 Quincy Street Norristown.<br />PA 19403, United States
            </p>
          </div>

          {/* Social Links matching screenshot */}
          <div className="relative z-10 pt-6 border-t border-white/20 flex items-center justify-center md:justify-start gap-2.5">
            <a
              href="#facebook"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#twitter"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              title="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#linkedin"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#youtube"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT PANEL: Dark Charcoal Form */}
        <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-between bg-[#22252a]">
          <div>
            {/* Header with School Crest */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#2c3038] border border-[#ff5252]/40 flex items-center justify-center text-[#ff5252] shadow mb-3">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h1 className="text-lg font-bold text-white tracking-wide">Cambridge High School</h1>
              <p className="text-xs text-[#8e94a0] mt-0.5">Please sign in to access your administrative workspace</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-[11px] font-semibold text-[#a8b0bd] uppercase tracking-wider mb-1">
                  Email Address / Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#717783]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full bg-[#1a1c20] border border-[#353942] rounded px-3 py-2.5 pl-9 text-xs text-white placeholder-[#555a64] focus:outline-none focus:border-[#ff5252] transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-[11px] font-semibold text-[#a8b0bd] uppercase tracking-wider mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#717783]">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-[#1a1c20] border border-[#353942] rounded px-3 py-2.5 pl-9 text-xs text-white placeholder-[#555a64] focus:outline-none focus:border-[#ff5252] transition-colors"
                  />
                </div>
              </div>

              {/* Remember Me & Lose Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-[#a8b0bd]">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="rounded bg-[#1a1c20] border-[#353942] text-[#ff5252] focus:ring-0 focus:ring-offset-0"
                  />
                  <span>Remember</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert('Password reset instructions sent to registered administrator email.')}
                  className="text-[#9ca3af] hover:text-[#ff5252] text-xs transition-colors"
                >
                  Lose Your Password?
                </button>
              </div>

              {msg && (
                <div className="p-2 rounded bg-[#ff5252]/10 border border-[#ff5252]/30 text-[#ff8a80] text-xs text-center font-medium">
                  {msg}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ff5252] hover:bg-[#e04545] text-white font-semibold text-xs py-3 rounded shadow transition-all flex items-center justify-center gap-2 mt-4"
              >
                <LogIn className="w-4 h-4" />
                <span>{loading ? 'Logging in...' : 'Login'}</span>
              </button>
            </form>
          </div>

          {/* Quick Demo Pre-filled Credentials */}
          <div className="mt-6 pt-4 border-t border-[#30343d] flex flex-col gap-2">
            <div className="text-[10px] text-[#717783] flex items-center justify-between">
              <span>Demo Login Account:</span>
              <button
                onClick={() => {
                  setEmail('superadmin@cambridge.edu');
                  setPassword('admin123');
                }}
                className="text-[#00bcd4] hover:underline"
              >
                Auto Fill Superadmin
              </button>
            </div>
            <p className="text-[10px] text-[#5c626e] text-center">
              2026 © All Rights Reserved - <span className="text-[#ff5252]">techtune</span> | ABHIBHIDEVELOPERS School Management ERP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

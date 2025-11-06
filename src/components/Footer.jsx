import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#090910] py-10 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_50%_0%,rgba(99,102,241,0.18),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-white/60">© {new Date().getFullYear()} ahmd zian. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="rounded p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:you@example.com" aria-label="Email" className="rounded p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

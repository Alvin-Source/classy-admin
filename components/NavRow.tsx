'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavRow() {
  const pathname = usePathname();
  
  return (
    <div className="relative rounded-2xl px-5 py-3.5 flex items-center justify-between mb-7 flex-wrap gap-4" style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)' }}>
      <div className="flex items-center gap-3 pr-5 border-r border-white/[0.08]">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
          <span className="bg-[var(--text-dim)] rounded-[1px]"></span>
          <span className="bg-[var(--text-dim)] rounded-[1px]"></span>
          <span className="bg-[var(--text-dim)] rounded-[1px]"></span>
          <span className="bg-[var(--text-dim)] rounded-[1px]"></span>
        </div>
        <span className="font-bold text-base">Dashboard Overview</span>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-[var(--text-mid)]">
        <Link href="/">
          <button className={`px-4 py-2 rounded-full font-bold transition-colors ${pathname === '/' ? 'bg-gradient-to-r from-[#e79a5f] to-[#f3c495] text-[#0a0c12]' : 'hover:bg-white/5'}`}>
            Home
          </button>
        </Link>
        <Link href="/units">
          <button className={`px-4 py-2 rounded-full transition-colors ${pathname.startsWith('/units') ? 'bg-gradient-to-r from-[#e79a5f] to-[#f3c495] text-[#0a0c12] font-bold' : 'hover:bg-white/5'}`}>
            Units
          </button>
        </Link>
        <Link href="/checklist">
          <button className={`px-4 py-2 rounded-full transition-colors ${pathname.startsWith('/checklist') ? 'bg-gradient-to-r from-[#e79a5f] to-[#f3c495] text-[#0a0c12] font-bold' : 'hover:bg-white/5'}`}>
            Pelaksanaan Checklist
          </button>
        </Link>
        <Link href="/templates">
          <button className={`px-4 py-2 rounded-full transition-colors ${pathname.startsWith('/templates') ? 'bg-gradient-to-r from-[#e79a5f] to-[#f3c495] text-[#0a0c12] font-bold' : 'hover:bg-white/5'}`}>
            Template Checklist
          </button>
        </Link>
        <Link href="/divisi">
          <button className={`px-4 py-2 rounded-full transition-colors ${pathname.startsWith('/divisi') ? 'bg-gradient-to-r from-[#e79a5f] to-[#f3c495] text-[#0a0c12] font-bold' : 'hover:bg-white/5'}`}>
            Divisi
          </button>
        </Link>
        <Link href="/users">
          <button className={`px-4 py-2 rounded-full transition-colors ${pathname.startsWith('/users') ? 'bg-gradient-to-r from-[#e79a5f] to-[#f3c495] text-[#0a0c12] font-bold' : 'hover:bg-white/5'}`}>
            Users
          </button>
        </Link>
      </div>
    </div>
  );
}
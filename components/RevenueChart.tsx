'use client';

import React from 'react';
import { Maximize2, Minimize2, BarChart3, Search, ChevronDown } from 'lucide-react';

export default function RevenueChart() {
  const yLabels = ['$14k', '$9k', '$6k', '$3k'];
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div className="rounded-2xl px-7 py-7" style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)' }}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 className="text-base font-bold">Admin revenue</h2>
        
        <div className="flex items-center gap-2.5">
          <button className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-mid)] text-sm" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)' }}>
            <Maximize2 size={14} />
          </button>
          <button className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-mid)] text-sm" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)' }}>
            <Minimize2 size={14} />
          </button>
          <button className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-mid)] text-sm" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)' }}>
            <BarChart3 size={14} />
          </button>
          <button className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-mid)] text-sm" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)' }}>
            <Search size={14} />
          </button>
          <button className="px-3.5 py-2 rounded-xl flex items-center gap-2 text-sm text-[var(--text-mid)]" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)' }}>
            Year <ChevronDown size={10} className="opacity-70" />
          </button>
        </div>
      </div>
      
      <div className="flex gap-4">
        <div className="flex flex-col justify-between text-xs text-[var(--text-dim)] py-1 pb-9" style={{ height: '210px' }}>
          {yLabels.map((label, i) => <span key={i}>{label}</span>)}
        </div>
        
        <div className="flex-1">
          <svg viewBox="0 0 720 210" preserveAspectRatio="none" style={{ width: '100%', height: '210px', display: 'block' }}>
            <defs>
              <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e79a5f" stopOpacity="0.35"/>
                <stop offset="100%" stopColor="#e79a5f" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <line x1="0" y1="20" x2="720" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <line x1="0" y1="80" x2="720" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <line x1="0" y1="140" x2="720" y2="140" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <line x1="0" y1="195" x2="720" y2="195" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <path d="M0,150 C30,120 60,165 90,155 C120,145 150,158 180,150 C210,142 230,80 260,55 C285,34 300,60 330,90 C360,120 390,140 420,130 C450,120 480,95 510,105 C540,115 570,140 600,120 C630,102 660,80 720,95"
              fill="none" stroke="#e79a5f" strokeWidth="3" strokeLinecap="round"/>
            <path d="M0,150 C30,120 60,165 90,155 C120,145 150,158 180,150 C210,142 230,80 260,55 C285,34 300,60 330,90 C360,120 390,140 420,130 C450,120 480,95 510,105 C540,115 570,140 600,120 C630,102 660,80 720,95 L720,210 L0,210 Z"
              fill="url(#revFill)" stroke="none"/>
          </svg>
          
          <div className="flex justify-between text-xs text-[var(--text-dim)] mt-2 px-1">
            {xLabels.map((label, i) => <span key={i}>{label}</span>)}
          </div>
          
          <div className="flex gap-2 mt-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e79a5f]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/15"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/15"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

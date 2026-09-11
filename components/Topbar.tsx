'use client';

import React from 'react';
import { Settings, Sparkles, Grid3x3, HelpCircle, Bell } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e79a5f] to-[#f3c495] flex items-center justify-center font-extrabold text-lg text-[#0a0c12]">
          C
        </div>
        <div className="font-bold text-lg">Clasy</div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-mid)] hover:text-[var(--text-100)] transition-colors" style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid var(--glass-border)' }}>
          <Settings size={16} />
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-mid)] hover:text-[var(--text-100)] transition-colors" style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid var(--glass-border)' }}>
          <Sparkles size={16} />
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-mid)] hover:text-[var(--text-100)] transition-colors" style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid var(--glass-border)' }}>
          <Grid3x3 size={16} />
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-mid)] hover:text-[var(--text-100)] transition-colors" style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid var(--glass-border)' }}>
          <HelpCircle size={16} />
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-mid)] hover:text-[var(--text-100)] transition-colors relative" style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid var(--glass-border)' }}>
          <Bell size={16} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#e79a5f]"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5fc9c9] to-[#e79a5f] flex items-center justify-center font-bold text-sm text-[#0a0c12]">
          MT
        </div>
      </div>
    </div>
  );
}

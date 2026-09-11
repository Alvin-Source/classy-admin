'use client';

import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface WithdrawalItem {
  id: string;
  name: string;
  email: string;
  amount: string;
  avatarGradient: string;
  initials: string;
}

const withdrawals: WithdrawalItem[] = [
  {
    id: '1',
    name: 'Aria Bailey',
    email: 'bockeiboy@att.net',
    amount: '$5.22',
    avatarGradient: 'linear-gradient(135deg,#e79a5f,#f3c495)',
    initials: 'AB',
  },
  {
    id: '2',
    name: 'Thomas Garcia',
    email: 'adamk@yahoo.com',
    amount: '$14.81',
    avatarGradient: 'linear-gradient(135deg,#5fc9c9,#8fe3d3)',
    initials: 'TG',
  },
  {
    id: '3',
    name: 'Ariana Baker',
    email: 'groischie@mac.com',
    amount: '$11.70',
    avatarGradient: 'linear-gradient(135deg,#c58fe0,#e79a5f)',
    initials: 'AB',
  },
  {
    id: '4',
    name: 'Ethan Hernandez',
    email: 'sinclair@att.net',
    amount: '$17.84',
    avatarGradient: 'linear-gradient(135deg,#5f8fe7,#5fc9c9)',
    initials: 'EH',
  },
];

export default function WithdrawalList() {
  return (
    <div className="rounded-2xl px-7 py-7" style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)' }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-bold">Requested withdrawal</h2>
        <button className="px-3.5 py-2 rounded-xl flex items-center gap-2 text-sm text-[var(--text-mid)]" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)' }}>
          Year <ChevronDown size={10} className="opacity-70" />
        </button>
      </div>
      
      <div>
        {withdrawals.map((withdrawal, index) => (
          <div
            key={withdrawal.id}
            className={`flex items-center justify-between py-3.5 ${index < withdrawals.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
          >
            <div className="flex items-center gap-3.5">
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-[#0a0c12] flex-shrink-0"
                style={{ background: withdrawal.avatarGradient }}
              >
                {withdrawal.initials}
              </div>
              <div>
                <div className="text-xs text-[var(--text-dim)]">{withdrawal.email}</div>
                <div className="text-sm font-semibold mt-0.5">{withdrawal.name}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3.5">
              <div className="text-right">
                <div className="text-xs text-[var(--text-dim)]">Amount</div>
                <div className="text-base font-bold mt-0.5" style={{ fontVariantNumeric: 'tabular-nums' }}>{withdrawal.amount}</div>
              </div>
              <button className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--text-mid)] text-sm" style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid var(--glass-border)' }}>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
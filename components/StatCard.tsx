import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StatCardProps {
  icon: string;
  label: string;
  value: number;
  stats: {
    label: string;
    value: number;
  }[];
}

export default function StatCard({ icon, label, value, stats }: StatCardProps) {
  return (
    <div className="relative rounded-2xl px-5 py-5" style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid var(--glass-border)' }}>
      <button className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-dim)] text-xs" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)' }}>
        <ArrowUpRight size={12} />
      </button>
      
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-white/[0.06]">
          {icon}
        </div>
        <div className="text-sm font-medium text-[var(--text-mid)]">{label}</div>
      </div>
      
      <div className="text-4xl font-extrabold mb-5" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </div>
      
      <div className="flex justify-between pt-4 border-t border-white/[0.08]">
        {stats.map((stat, index) => (
          <div key={index} className="text-xs text-[var(--text-dim)]">
            <div>{stat.label}</div>
            <strong className="block mt-1 text-base font-bold text-[var(--text-100)]">{stat.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

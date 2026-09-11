'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Edit } from 'lucide-react';

export default function ViewUnitPage({ params }: { params: { id: string } }) {
  const unit = {
    id: params.id,
    unit_code: 'ESC-001',
    unit_name: 'Escalator 1',
    division: 'Escalator & Lift',
    location: 'Main Lobby',
    floor: 'GF',
    area: 'East Wing',
    status: 'active',
    description: 'Main escalator at ground floor lobby area.',
    created_at: '15 Aug 2024, 10:30',
    updated_at: '20 Aug 2024, 14:45'
  };

  const sectionStyle = { background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px', marginBottom: '20px' };

  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto', padding: '26px 36px 70px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/units" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-mid)', fontSize: '0.875rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Units
          </Link>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '22px', padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '8px' }}>{unit.unit_name}</h1>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>Code: <span style={{ color: '#e79a5f', fontFamily: 'monospace', fontWeight: '600' }}>{unit.unit_code}</span></p>
            </div>
          </div>
          <div style={sectionStyle}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px' }}>Identitas Unit</h2>
            <p>Unit details will be shown here</p>
          </div>
        </div>
      </div>
    </>
  );
}
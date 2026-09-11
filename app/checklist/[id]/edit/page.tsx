'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function EditChecklistPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto', padding: '26px 36px 70px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/checklist" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-mid)', fontSize: '0.875rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Kembali ke daftar
          </Link>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '22px', padding: '32px' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '8px' }}>Edit Pemeriksaan</h1>
          <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem', marginBottom: '32px' }}>Perbarui hasil pemeriksaan checklist</p>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px' }}>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              Form edit pemeriksaan dengan pertanyaan, jawaban, upload foto, dan catatan akan ditampilkan di sini.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
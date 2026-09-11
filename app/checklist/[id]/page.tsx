'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ViewChecklistPage({ params }: { params: { id: string } }) {
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '8px' }}>Pemeriksaan Harian Escalator</h1>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>ID Pemeriksaan: #{params.id}</p>
            </div>
            <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: '600', background: 'rgba(95, 201, 201, 0.15)', color: '#5fc9c9' }}>
              Selesai
            </span>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '16px' }}>Informasi Pelaksanaan</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '4px' }}>Template Checklist</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>Pemeriksaan Harian Escalator</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '4px' }}>Unit / Equipment</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>Escalator 1</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '4px' }}>Teknisi Pelaksana</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>Ahmad Saputra</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '4px' }}>Dibuat</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>10 Jan 2024, 08:30</div>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '16px' }}>Hasil Pemeriksaan</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              Detail hasil pemeriksaan akan ditampilkan di sini dengan list pertanyaan, jawaban, foto, dan catatan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
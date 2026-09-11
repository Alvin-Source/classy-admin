'use client';

import React from 'react';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import NavRow from '@/components/NavRow';
import { ArrowLeft, Edit } from 'lucide-react';

export default function ViewDivisiPage({ params }: { params: { id: string } }) {
  const division = {
    id: parseInt(params.id),
    nama_divisi: 'HVAC',
    warna: '#3498db',
    slug: 'hvac',
    is_active: true,
    events_count: 12,
    created_at: '15 Jan 2024, 10:30',
    updated_at: '20 Mar 2024, 14:45'
  };

  const sectionStyle = { background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px', marginBottom: '20px' };
  const fieldStyle = { marginBottom: '20px' };
  const labelStyle = { display: 'block', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' };
  const valueStyle = { color: '#f3f1ec', fontSize: '0.9375rem', fontWeight: '500' };

  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1360px', margin: '0 auto', padding: '26px 36px 0' }}>
        <Topbar />
        <NavRow />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto', padding: '0 36px 70px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/divisi" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-mid)', fontSize: '0.875rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Kembali ke Divisi
          </Link>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '22px', padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '8px' }}>{division.nama_divisi}</h1>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>Slug: <span style={{ color: '#e79a5f', fontFamily: 'monospace', fontWeight: '600' }}>{division.slug}</span></p>
            </div>
            <Link href={`/divisi/${params.id}/edit`}>
              <button style={{ background: 'linear-gradient(135deg, #e79a5f, #f3c495)', color: '#0a0c12', padding: '10px 20px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Edit size={16} /> Edit Divisi
              </button>
            </Link>
          </div>

          <div style={sectionStyle}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px' }}>Informasi Divisi</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              <div style={fieldStyle}>
                <label style={labelStyle}>Nama Divisi</label>
                <div style={valueStyle}>{division.nama_divisi}</div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Warna Indikator</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: division.warna }}></div>
                  <span style={{ ...valueStyle, fontFamily: 'monospace' }}>{division.warna}</span>
                </div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Slug</label>
                <div style={{ ...valueStyle, fontFamily: 'monospace', color: 'var(--text-mid)' }}>{division.slug}</div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Status</label>
                <span style={{ background: division.is_active ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)', color: division.is_active ? '#22c55e' : '#ef4444', padding: '6px 14px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block' }}>
                  {division.is_active ? 'Aktif' : 'Nonaktif'}
                </span>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Jumlah Event</label>
                <div style={valueStyle}>{division.events_count} events</div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Dibuat</label>
                <div style={{ ...valueStyle, color: 'var(--text-mid)' }}>{division.created_at}</div>
              </div>

              <div style={{ ...fieldStyle, gridColumn: 'span 2' }}>
                <label style={labelStyle}>Diperbarui</label>
                <div style={{ ...valueStyle, color: 'var(--text-mid)' }}>{division.updated_at}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
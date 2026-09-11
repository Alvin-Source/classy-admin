'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Topbar from '@/components/Topbar';
import NavRow from '@/components/NavRow';
import { ArrowLeft } from 'lucide-react';

export default function EditDivisiPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  // Mock data - would be fetched based on params.id
  const [formData, setFormData] = useState({
    nama_divisi: 'HVAC',
    warna: '#3498db',
    is_active: true
  });

  const handleSubmit = () => {
    console.log('Update division:', params.id, formData);
    router.push('/divisi');
  };

  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1360px', margin: '0 auto', padding: '26px 36px 0' }}>
        <Topbar />
        <NavRow />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '0 36px 140px' }}>
        <Link href="/divisi" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-mid)', textDecoration: 'none', marginBottom: '26px', cursor: 'pointer', transition: 'color 0.2s' }}>
          <ArrowLeft size={16} /> Kembali ke daftar divisi
        </Link>

        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '1.9rem', fontWeight: '800', letterSpacing: '-0.01em' }}>Edit divisi</h1>
          <p style={{ marginTop: '8px', color: 'var(--text-dim)', fontSize: '0.95rem' }}>Perbarui informasi divisi engineering</p>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '28px 30px 30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '11px', background: 'rgba(231, 154, 95, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>👥</div>
            <h2 style={{ fontSize: '1.08rem', fontWeight: '700' }}>Informasi divisi</h2>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '4px 0 22px 50px' }}>Nama divisi dan warna indikator untuk identifikasi visual</div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Nama Divisi <span style={{ color: '#e08a94' }}>*</span></label>
              <input 
                type="text" 
                value={formData.nama_divisi} 
                onChange={(e) => setFormData({...formData, nama_divisi: e.target.value})} 
                placeholder="Contoh: HVAC / Escalator & Lift" 
                style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none' }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Warna Indikator <span style={{ color: '#e08a94' }}>*</span></label>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <input 
                  type="color" 
                  value={formData.warna} 
                  onChange={(e) => setFormData({...formData, warna: e.target.value})} 
                  style={{ width: '56px', height: '48px', background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', cursor: 'pointer', outline: 'none' }} 
                />
                <input 
                  type="text" 
                  value={formData.warna} 
                  onChange={(e) => setFormData({...formData, warna: e.target.value})} 
                  placeholder="#3498db" 
                  style={{ flex: 1, background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', fontFamily: 'monospace', outline: 'none' }} 
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', gridColumn: '1 / -1' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={formData.is_active} 
                  onChange={(e) => setFormData({...formData, is_active: e.target.checked})} 
                  style={{ width: '20px', height: '20px', marginTop: '2px', cursor: 'pointer', accentColor: '#e79a5f' }} 
                />
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-mid)', fontWeight: '600', display: 'block', marginBottom: '4px' }}>Divisi Aktif</span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)' }}>Nonaktifkan jika divisi sudah tidak beroperasi</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', padding: '18px 24px', zIndex: 30 }}>
        <div style={{ width: '100%', maxWidth: '900px', background: 'rgba(15, 18, 25, 0.72)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', border: '1px solid var(--glass-border)', borderRadius: '18px', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', boxShadow: '0 -20px 50px rgba(0,0,0,0.35)', gap: '12px' }}>
          <Link href="/divisi">
            <button style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-mid)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '12px 22px', borderRadius: '12px', cursor: 'pointer' }}>Batal</button>
          </Link>
          <button onClick={handleSubmit} style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0a0c12', background: 'linear-gradient(135deg, #e79a5f, #f3c495)', border: 'none', padding: '12px 26px', borderRadius: '12px', cursor: 'pointer' }}>Perbarui divisi</button>
        </div>
      </div>
    </>
  );
}
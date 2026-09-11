'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function CreateChecklistPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    template_id: '',
    unit_id: '',
  });

  const handleSubmit = () => {
    console.log('Create checklist:', formData);
    router.push('/checklist');
  };

  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '34px 36px 140px' }}>
        <Link href="/checklist" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-mid)', textDecoration: 'none', marginBottom: '26px', cursor: 'pointer', transition: 'color 0.2s' }}>
          <ArrowLeft size={16} /> Kembali ke daftar
        </Link>

        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '1.9rem', fontWeight: '800', letterSpacing: '-0.01em' }}>Buat Pemeriksaan Baru</h1>
          <p style={{ marginTop: '8px', color: 'var(--text-dim)', fontSize: '0.95rem' }}>Pilih template dan unit untuk memulai pemeriksaan.</p>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '28px 30px 30px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Template Checklist <span style={{ color: '#e08a94' }}>*</span></label>
              <select value={formData.template_id} onChange={(e) => setFormData({...formData, template_id: e.target.value})} style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none', cursor: 'pointer' }}>
                <option value="">Pilih template</option>
                <option value="1">Pemeriksaan Harian Escalator</option>
                <option value="2">Pemeriksaan Mingguan HVAC</option>
                <option value="3">Pemeriksaan Harian Lift</option>
                <option value="4">Pemeriksaan Electrical Panel</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Unit / Equipment <span style={{ color: '#e08a94' }}>*</span></label>
              <select value={formData.unit_id} onChange={(e) => setFormData({...formData, unit_id: e.target.value})} style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none', cursor: 'pointer' }}>
                <option value="">Pilih unit</option>
                <option value="1">Escalator 1</option>
                <option value="2">Escalator 2</option>
                <option value="3">Lift 1</option>
                <option value="4">AHU-001</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', padding: '18px 24px', zIndex: 30 }}>
          <div style={{ width: '100%', maxWidth: '800px', background: 'rgba(15, 18, 25, 0.72)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', border: '1px solid var(--glass-border)', borderRadius: '18px', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', boxShadow: '0 -20px 50px rgba(0,0,0,0.35)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link href="/checklist">
                <button style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-mid)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '12px 22px', borderRadius: '12px', cursor: 'pointer' }}>Batal</button>
              </Link>
              <button onClick={handleSubmit} style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0a0c12', background: 'linear-gradient(135deg, #e79a5f, #f3c495)', border: 'none', padding: '12px 26px', borderRadius: '12px', cursor: 'pointer' }}>Mulai Pemeriksaan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
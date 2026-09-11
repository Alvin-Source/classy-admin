'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Topbar from '@/components/Topbar';
import NavRow from '@/components/NavRow';
import { ArrowLeft } from 'lucide-react';

export default function EditUserPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  // Mock data - would be fetched based on params.id
  const [formData, setFormData] = useState({
    name: 'Ahmad Fauzi',
    email: 'ahmad.fauzi@company.com',
    phone: '08123456789',
    password: '',
    password_confirmation: '',
    division_id: '1',
    status: 'tetap',
    role: 'technician'
  });

  const handleSubmit = () => {
    console.log('Update user:', params.id, formData);
    router.push('/users');
  };

  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1360px', margin: '0 auto', padding: '26px 36px 0' }}>
        <Topbar />
        <NavRow />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '0 36px 140px' }}>
        <Link href="/users" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-mid)', textDecoration: 'none', marginBottom: '26px', cursor: 'pointer', transition: 'color 0.2s' }}>
          <ArrowLeft size={16} /> Kembali ke daftar users
        </Link>

        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '1.9rem', fontWeight: '800', letterSpacing: '-0.01em' }}>Edit user</h1>
          <p style={{ marginTop: '8px', color: 'var(--text-dim)', fontSize: '0.95rem' }}>Perbarui informasi pengguna dan hak akses</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Informasi Pengguna */}
          <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '28px 30px 30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '11px', background: 'rgba(231, 154, 95, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>👤</div>
              <h2 style={{ fontSize: '1.08rem', fontWeight: '700' }}>Informasi Pengguna</h2>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '4px 0 22px 50px' }}>Data identitas pengguna</div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Nama Lengkap <span style={{ color: '#e08a94' }}>*</span></label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Nama lengkap" style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Email <span style={{ color: '#e08a94' }}>*</span></label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="email@company.com" style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>No. HP</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="08123456789" style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none' }} />
              </div>
            </div>
          </div>

          {/* Keamanan Akun */}
          <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '28px 30px 30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '11px', background: 'rgba(231, 154, 95, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>🔒</div>
              <h2 style={{ fontSize: '1.08rem', fontWeight: '700' }}>Keamanan Akun</h2>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '4px 0 22px 50px' }}>Kosongkan jika tidak ingin mengubah password</div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Password</label>
                <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} placeholder="Minimal 8 karakter" style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Konfirmasi Password</label>
                <input type="password" value={formData.password_confirmation} onChange={(e) => setFormData({...formData, password_confirmation: e.target.value})} placeholder="Ulangi password" style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none' }} />
              </div>
            </div>
          </div>

          {/* Penempatan & Hak Akses */}
          <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '28px 30px 30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '11px', background: 'rgba(231, 154, 95, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>🛡️</div>
              <h2 style={{ fontSize: '1.08rem', fontWeight: '700' }}>Penempatan & Hak Akses</h2>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '4px 0 22px 50px' }}>Divisi, status kepegawaian, dan role sistem</div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Divisi <span style={{ color: '#e08a94' }}>*</span></label>
                <select value={formData.division_id} onChange={(e) => setFormData({...formData, division_id: e.target.value})} style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none', cursor: 'pointer' }}>
                  <option value="">Pilih divisi</option>
                  <option value="1">HVAC</option>
                  <option value="2">Escalator & Lift</option>
                  <option value="3">Electrical</option>
                  <option value="4">Plumbing</option>
                  <option value="5">Building Automation</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Status Pegawai <span style={{ color: '#e08a94' }}>*</span></label>
                <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none', cursor: 'pointer' }}>
                  <option value="tetap">Tetap</option>
                  <option value="kontrak">Kontrak</option>
                  <option value="magang">Magang</option>
                  <option value="lepas">Freelance</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Role Sistem <span style={{ color: '#e08a94' }}>*</span></label>
                <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} style={{ background: 'rgba(255, 255, 255, 0.045)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '13px 16px', fontSize: '0.92rem', color: '#f3f1ec', outline: 'none', cursor: 'pointer' }}>
                  <option value="">Pilih role</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="engineer">Engineer</option>
                  <option value="technician">Technician</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', padding: '18px 24px', zIndex: 30 }}>
        <div style={{ width: '100%', maxWidth: '900px', background: 'rgba(15, 18, 25, 0.72)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', border: '1px solid var(--glass-border)', borderRadius: '18px', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', boxShadow: '0 -20px 50px rgba(0,0,0,0.35)', gap: '12px' }}>
          <Link href="/users">
            <button style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-mid)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '12px 22px', borderRadius: '12px', cursor: 'pointer' }}>Batal</button>
          </Link>
          <button onClick={handleSubmit} style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0a0c12', background: 'linear-gradient(135deg, #e79a5f, #f3c495)', border: 'none', padding: '12px 26px', borderRadius: '12px', cursor: 'pointer' }}>Perbarui user</button>
        </div>
      </div>
    </>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import NavRow from '@/components/NavRow';
import { ArrowLeft, Edit } from 'lucide-react';

export default function ViewUserPage({ params }: { params: { id: string } }) {
  const user = {
    id: parseInt(params.id),
    name: 'Ahmad Fauzi',
    email: 'ahmad.fauzi@company.com',
    phone: '08123456789',
    division: 'HVAC',
    division_color: '#3498db',
    status: 'tetap',
    role: 'Technician',
    created_at: '15 Jan 2024, 10:30',
    updated_at: '20 Mar 2024, 14:45'
  };

  const sectionStyle = { background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px', marginBottom: '20px' };
  const fieldStyle = { marginBottom: '20px' };
  const labelStyle = { display: 'block', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' };
  const valueStyle = { color: '#f3f1ec', fontSize: '0.9375rem', fontWeight: '500' };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'tetap': return { bg: 'rgba(34, 197, 94, 0.15)', text: '#22c55e' };
      case 'kontrak': return { bg: 'rgba(251, 146, 60, 0.15)', text: '#fb923c' };
      case 'magang': return { bg: 'rgba(59, 130, 246, 0.15)', text: '#3b82f6' };
      case 'lepas': return { bg: 'rgba(156, 163, 175, 0.15)', text: '#9ca3af' };
      default: return { bg: 'rgba(156, 163, 175, 0.15)', text: '#9ca3af' };
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'tetap': return 'Tetap';
      case 'kontrak': return 'Kontrak';
      case 'magang': return 'Magang';
      case 'lepas': return 'Lepas/Freelance';
      default: return status;
    }
  };

  const statusColor = getStatusColor(user.status);

  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1360px', margin: '0 auto', padding: '26px 36px 0' }}>
        <Topbar />
        <NavRow />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto', padding: '0 36px 70px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/users" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-mid)', fontSize: '0.875rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Kembali ke Users
          </Link>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '22px', padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '8px' }}>{user.name}</h1>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>{user.email}</p>
            </div>
            <Link href={`/users/${params.id}/edit`}>
              <button style={{ background: 'linear-gradient(135deg, #e79a5f, #f3c495)', color: '#0a0c12', padding: '10px 20px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Edit size={16} /> Edit User
              </button>
            </Link>
          </div>

          <div style={sectionStyle}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px' }}>Informasi Pengguna</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              <div style={fieldStyle}>
                <label style={labelStyle}>Nama Lengkap</label>
                <div style={valueStyle}>{user.name}</div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Email</label>
                <div style={valueStyle}>{user.email}</div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>No. HP</label>
                <div style={{ ...valueStyle, color: 'var(--text-mid)' }}>{user.phone || '-'}</div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Divisi</label>
                <span style={{ background: `${user.division_color}20`, color: user.division_color, padding: '6px 14px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block' }}>
                  {user.division}
                </span>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Status Pegawai</label>
                <span style={{ background: statusColor.bg, color: statusColor.text, padding: '6px 14px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block' }}>
                  {getStatusLabel(user.status)}
                </span>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Role Sistem</label>
                <div style={valueStyle}>{user.role}</div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Dibuat</label>
                <div style={{ ...valueStyle, color: 'var(--text-mid)' }}>{user.created_at}</div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Diperbarui</label>
                <div style={{ ...valueStyle, color: 'var(--text-mid)' }}>{user.updated_at}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
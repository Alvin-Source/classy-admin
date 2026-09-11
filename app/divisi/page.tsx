'use client';

import { useState } from 'react';
import Topbar from '@/components/Topbar';
import NavRow from '@/components/NavRow';
import { Search, Eye, Edit, Trash2, Plus, ArrowLeft, X } from 'lucide-react';
import Link from 'next/link';

export default function DivisiPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; division: any }>({ open: false, division: null });

  // Mock data based on Engineering Divisi model
  const divisions = [
    { id: 1, nama_divisi: 'HVAC', warna: '#3498db', slug: 'hvac', is_active: true, events_count: 12, created_at: '2024-01-15' },
    { id: 2, nama_divisi: 'Escalator & Lift', warna: '#e74c3c', slug: 'escalator-lift', is_active: true, events_count: 8, created_at: '2024-01-20' },
    { id: 3, nama_divisi: 'Electrical', warna: '#f39c12', slug: 'electrical', is_active: true, events_count: 15, created_at: '2024-02-01' },
    { id: 4, nama_divisi: 'Plumbing', warna: '#2ecc71', slug: 'plumbing', is_active: true, events_count: 10, created_at: '2024-02-10' },
    { id: 5, nama_divisi: 'Fire Protection', warna: '#9b59b6', slug: 'fire-protection', is_active: false, events_count: 5, created_at: '2024-02-15' },
    { id: 6, nama_divisi: 'Building Automation', warna: '#1abc9c', slug: 'building-automation', is_active: true, events_count: 18, created_at: '2024-03-01' },
  ];

  const filteredData = divisions.filter(d => 
    d.nama_divisi.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (division: any) => {
    setDeleteModal({ open: true, division });
  };

  const confirmDelete = () => {
    console.log('Delete division:', deleteModal.division?.id);
    setDeleteModal({ open: false, division: null });
  };

  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1360px', margin: '0 auto', padding: '26px 36px 0' }}>
        <Topbar />
        <NavRow />
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal.open && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(4px)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'var(--glass-fill-strong)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '32px', maxWidth: '480px', width: '100%', boxShadow: '0 24px 50px rgba(0,0,0,0.45)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f3f1ec' }}>Hapus Divisi</h2>
              <button onClick={() => setDeleteModal({ open: false, division: null })} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '6px', color: 'var(--text-mid)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <X size={18} />
              </button>
            </div>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.5' }}>
              Apakah Anda yakin ingin menghapus divisi <strong style={{ color: '#f3f1ec' }}>{deleteModal.division?.nama_divisi}</strong>? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setDeleteModal({ open: false, division: null })} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-mid)', padding: '10px 20px', borderRadius: '10px', fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                Batal
              </button>
              <button onClick={confirmDelete} style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', color: '#fff', padding: '10px 20px', borderRadius: '10px', border: 'none', fontWeight: '700', fontSize: '0.875rem', cursor: 'pointer', transition: 'transform 0.2s' }}>
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1360px', margin: '0 auto', padding: '0 36px 70px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-mid)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}>
            <ArrowLeft size={16} /> Kembali ke Dashboard
          </Link>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '22px', padding: '26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '6px' }}>Divisi</h1>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>Kelola divisi engineering dan warna penanda</p>
            </div>
            <Link href="/divisi/create">
              <button style={{ background: 'linear-gradient(135deg, #e79a5f, #f3c495)', color: '#0a0c12', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'transform 0.2s' }}>
                <Plus size={18} /> Buat Divisi Baru
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
              <input type="text" placeholder="Cari divisi berdasarkan nama atau slug..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '11px 16px 11px 42px', color: '#f3f1ec', fontSize: '0.875rem', outline: 'none', width: '100%' }} />
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Warna</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Nama Divisi</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Slug</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Jumlah Event</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Dibuat</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((division) => (
                  <tr key={division.id} style={{ transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '16px', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: division.warna }}></div>
                    </td>
                    <td style={{ padding: '16px', color: '#f3f1ec', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: '500' }}>{division.nama_divisi}</td>
                    <td style={{ padding: '16px', color: 'var(--text-mid)', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontFamily: 'monospace' }}>{division.slug}</span>
                    </td>
                    <td style={{ padding: '16px', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ background: 'rgba(231, 154, 95, 0.15)', color: '#e79a5f', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600' }}>
                        {division.events_count} events
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ background: division.is_active ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)', color: division.is_active ? '#22c55e' : '#ef4444', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600' }}>
                        {division.is_active ? 'Aktif' : 'Nonaktif'}
                      </span>
                    </td>
                    <td style={{ padding: '16px', color: 'var(--text-mid)', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      {new Date(division.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '16px', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <Link href={`/divisi/${division.id}`}>
                          <button style={{ background: 'rgba(95, 201, 201, 0.15)', border: '1px solid rgba(95, 201, 201, 0.3)', borderRadius: '8px', padding: '8px', color: '#5fc9c9', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }} title="View">
                            <Eye size={16} />
                          </button>
                        </Link>
                        <Link href={`/divisi/${division.id}/edit`}>
                          <button style={{ background: 'rgba(231, 154, 95, 0.15)', border: '1px solid rgba(231, 154, 95, 0.3)', borderRadius: '8px', padding: '8px', color: '#e79a5f', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }} title="Edit">
                            <Edit size={16} />
                          </button>
                        </Link>
                        <button onClick={() => handleDelete(division)} style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '8px', color: '#ef4444', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }} title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>Showing {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}</p>
            <select style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '8px 12px', color: 'var(--text-mid)', fontSize: '0.875rem', cursor: 'pointer' }}>
              <option>10 per page</option>
              <option>25 per page</option>
              <option>50 per page</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
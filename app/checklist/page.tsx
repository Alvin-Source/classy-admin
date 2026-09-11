'use client';
import Topbar from '@/components/Topbar';
import NavRow from '@/components/NavRow';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Eye, Edit, Trash2, Plus, ArrowLeft, X } from 'lucide-react';

const mockData = [
  { id: 1, template: 'Pemeriksaan Harian Escalator', unit: 'Escalator 1', technician: 'Ahmad Saputra', status: 'completed', created_at: '10 Jan 2024, 08:30' },
  { id: 2, template: 'Pemeriksaan Mingguan HVAC', unit: 'AHU-001', technician: 'Budi Santoso', status: 'submitted', created_at: '09 Jan 2024, 14:20' },
  { id: 3, template: 'Pemeriksaan Harian Lift', unit: 'Lift 1', technician: 'Citra Dewi', status: 'supervisor_approved', created_at: '08 Jan 2024, 09:15' },
  { id: 4, template: 'Pemeriksaan Electrical Panel', unit: 'Panel A', technician: 'Dedi Kurniawan', status: 'draft', created_at: '07 Jan 2024, 16:45' },
  { id: 5, template: 'Pemeriksaan Pompa Air', unit: 'Pump-001', technician: 'Eko Prasetyo', status: 'rejected', created_at: '06 Jan 2024, 11:00' },
];

export default function ChecklistPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [checklists, setChecklists] = useState(mockData);
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; checklist: any }>({ open: false, checklist: null });

  const getStatusBadge = (status: string) => {
    const styles: Record<string, { bg: string; text: string; label: string }> = {
      draft: { bg: 'rgba(156, 163, 175, 0.15)', text: '#9ca3af', label: 'Draft' },
      submitted: { bg: 'rgba(59, 130, 246, 0.15)', text: '#3b82f6', label: 'Menunggu Supervisor' },
      supervisor_approved: { bg: 'rgba(34, 197, 94, 0.15)', text: '#22c55e', label: 'Menunggu Head' },
      completed: { bg: 'rgba(95, 201, 201, 0.15)', text: '#5fc9c9', label: 'Selesai' },
      rejected: { bg: 'rgba(239, 68, 68, 0.15)', text: '#ef4444', label: 'Ditolak' },
    };
    const style = styles[status] || styles.draft;
    return (
      <span style={{ display: 'inline-block', padding: '5px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '600', background: style.bg, color: style.text }}>
        {style.label}
      </span>
    );
  };

  const filteredData = checklists.filter(item =>
    item.template.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.unit.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.technician.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (checklist: any) => {
    setDeleteModal({ open: true, checklist });
  };

  const confirmDelete = () => {
    if (deleteModal.checklist) {
      setChecklists(checklists.filter(c => c.id !== deleteModal.checklist.id));
      setDeleteModal({ open: false, checklist: null });
    }
  };

  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1360px', margin: '0 auto', padding: '26px 36px 0' }}>
        <Topbar />
        <NavRow />
      </div>

      {deleteModal.open && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(4px)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'var(--glass-fill-strong)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '32px', maxWidth: '480px', width: '100%', boxShadow: '0 24px 50px rgba(0,0,0,0.45)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f3f1ec' }}>Delete Checklist</h2>
              <button onClick={() => setDeleteModal({ open: false, checklist: null })} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '6px', color: 'var(--text-mid)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <X size={18} />
              </button>
            </div>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.5' }}>
              Are you sure you want to delete this checklist? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setDeleteModal({ open: false, checklist: null })} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-mid)', padding: '10px 20px', borderRadius: '10px', fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                Cancel
              </button>
              <button onClick={confirmDelete} style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', color: '#fff', padding: '10px 20px', borderRadius: '10px', border: 'none', fontWeight: '700', fontSize: '0.875rem', cursor: 'pointer', transition: 'transform 0.2s' }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1360px', margin: '0 auto', padding: '0 36px 70px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-mid)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}>
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '22px', padding: '26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '6px' }}>Pelaksanaan Checklist</h1>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>Kelola dan monitor pemeriksaan rutin equipment</p>
            </div>
            <Link href="/checklist/create">
              <button style={{ background: 'linear-gradient(135deg, #e79a5f, #f3c495)', color: '#0a0c12', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'transform 0.2s' }}>
                <Plus size={18} /> Buat Pemeriksaan Baru
              </button>
            </Link>
          </div>

          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)', pointerEvents: 'none' }} />
            <input type="text" placeholder="Search units..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '12px 16px 12px 44px', color: '#f3f1ec', fontSize: '0.875rem', outline: 'none', transition: 'border 0.2s' }} />
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TEMPLATE</th>
                  <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>UNIT / EQUIPMENT</th>
                  <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TEKNISI</th>
                  <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>STATUS</th>
                  <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DIBUAT</th>
                  <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)', transition: 'background 0.15s' }}>
                    <td style={{ padding: '18px 16px' }}>
                      <div style={{ fontWeight: '700', fontSize: '0.875rem', color: '#f3f1ec' }}>{item.template}</div>
                    </td>
                    <td style={{ padding: '18px 16px', fontSize: '0.875rem', color: 'var(--text-mid)' }}>{item.unit}</td>
                    <td style={{ padding: '18px 16px', fontSize: '0.875rem', color: 'var(--text-mid)' }}>{item.technician}</td>
                    <td style={{ padding: '18px 16px' }}>{getStatusBadge(item.status)}</td>
                    <td style={{ padding: '18px 16px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>{item.created_at}</td>
                    <td style={{ padding: '18px 16px' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <Link href={`/checklist/${item.id}`}>
                          <button style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(95, 201, 201, 0.12)', border: '1px solid rgba(95, 201, 201, 0.25)', color: '#5fc9c9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                            <Eye size={16} />
                          </button>
                        </Link>
                        <Link href={`/checklist/${item.id}/edit`}>
                          <button style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(231, 154, 95, 0.12)', border: '1px solid rgba(231, 154, 95, 0.25)', color: '#e79a5f', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                            <Edit size={16} />
                          </button>
                        </Link>
                        <button onClick={() => handleDelete(item)} style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-dim)' }}>
              <p style={{ fontSize: '0.95rem' }}>No checklists found</p>
            </div>
          )}

          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            <span>Showing {filteredData.length} results</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>10 per page</span>
            </div>
          </div>
        </div>
            </div>
    </>

  );
}
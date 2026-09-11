'use client';
import Topbar from '@/components/Topbar';
import NavRow from '@/components/NavRow';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Eye, Edit, Trash2, Plus, ArrowLeft, X } from 'lucide-react';

const mockData = [
  { id: 1, name: 'Pemeriksaan Harian Escalator', division: 'Escalator & Lift', questions_count: 12, is_active: true, created_at: '15 Des 2023' },
  { id: 2, name: 'Pemeriksaan Mingguan HVAC', division: 'HVAC', questions_count: 20, is_active: true, created_at: '10 Des 2023' },
  { id: 3, name: 'Pemeriksaan Bulanan Lift', division: 'Escalator & Lift', questions_count: 25, is_active: true, created_at: '05 Des 2023' },
  { id: 4, name: 'Pemeriksaan Electrical Panel', division: 'Electrical', questions_count: 15, is_active: false, created_at: '01 Des 2023' },
  { id: 5, name: 'Pemeriksaan Sistem Plumbing', division: 'Plumbing', questions_count: 18, is_active: true, created_at: '25 Nov 2023' },
];

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [templates, setTemplates] = useState(mockData);
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; template: any }>({ open: false, template: null });

  const filteredData = templates.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.division.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (template: any) => {
    setDeleteModal({ open: true, template });
  };

  const confirmDelete = () => {
    if (deleteModal.template) {
      setTemplates(templates.filter(t => t.id !== deleteModal.template.id));
      setDeleteModal({ open: false, template: null });
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
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f3f1ec' }}>Delete Template</h2>
              <button onClick={() => setDeleteModal({ open: false, template: null })} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '6px', color: 'var(--text-mid)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <X size={18} />
              </button>
            </div>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.5' }}>
              Are you sure you want to delete <strong style={{ color: '#f3f1ec' }}>{deleteModal.template?.name}</strong>? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setDeleteModal({ open: false, template: null })} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-mid)', padding: '10px 20px', borderRadius: '10px', fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s' }}>
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
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '6px' }}>Template Checklist</h1>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>Kelola template untuk pemeriksaan rutin equipment</p>
            </div>
            <Link href="/templates/create">
              <button style={{ background: 'linear-gradient(135deg, #e79a5f, #f3c495)', color: '#0a0c12', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'transform 0.2s' }}>
                <Plus size={18} /> Buat Template Baru
              </button>
            </Link>
          </div>

          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)', pointerEvents: 'none' }} />
            <input type="text" placeholder="Search templates..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '12px 16px 12px 44px', color: '#f3f1ec', fontSize: '0.875rem', outline: 'none', transition: 'border 0.2s' }} />
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>NAMA TEMPLATE</th>
                  <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DIVISI</th>
                  <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>JUMLAH PERTANYAAN</th>
                  <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>STATUS</th>
                  <th style={{ textAlign: 'left', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DIBUAT</th>
                  <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)', transition: 'background 0.15s' }}>
                    <td style={{ padding: '18px 16px' }}>
                      <div style={{ fontWeight: '700', fontSize: '0.875rem', color: '#f3f1ec' }}>{item.name}</div>
                    </td>
                    <td style={{ padding: '18px 16px' }}>
                      <span style={{ display: 'inline-block', padding: '5px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '600', background: 'rgba(231, 154, 95, 0.15)', color: '#e79a5f' }}>
                        {item.division}
                      </span>
                    </td>
                    <td style={{ padding: '18px 16px', textAlign: 'center' }}>
                      <span style={{ display: 'inline-block', padding: '5px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '600', background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                        {item.questions_count}
                      </span>
                    </td>
                    <td style={{ padding: '18px 16px', textAlign: 'center' }}>
                      {item.is_active ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '600', background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></span>Aktif
                        </span>
                      ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '600', background: 'rgba(156, 163, 175, 0.15)', color: '#9ca3af' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9ca3af' }}></span>Nonaktif
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '18px 16px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>{item.created_at}</td>
                    <td style={{ padding: '18px 16px' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <Link href={`/templates/${item.id}`}>
                          <button style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(95, 201, 201, 0.12)', border: '1px solid rgba(95, 201, 201, 0.25)', color: '#5fc9c9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                            <Eye size={16} />
                          </button>
                        </Link>
                        <Link href={`/templates/${item.id}/edit`}>
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
              <p style={{ fontSize: '0.95rem' }}>No templates found</p>
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
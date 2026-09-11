'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import NavRow from '@/components/NavRow';
import { Search, Eye, Edit, Trash2, Plus, ArrowLeft, X } from 'lucide-react';

const unitsData = [
  { id: 1, unit_code: 'ESC-001', unit_name: 'Escalator 1', division: 'Escalator & Lift', location: 'Main Lobby', floor: 'GF', area: 'East Wing', status: 'active' },
  { id: 2, unit_code: 'ESC-002', unit_name: 'Escalator 2', division: 'Escalator & Lift', location: 'Main Lobby', floor: 'GF', area: 'West Wing', status: 'active' },
  { id: 3, unit_code: 'LIFT-001', unit_name: 'Passenger Lift 1', division: 'Escalator & Lift', location: 'Tower A', floor: 'GF-10F', area: 'North', status: 'active' },
  { id: 4, unit_code: 'AHU-001', unit_name: 'Air Handling Unit 1', division: 'HVAC', location: 'Rooftop', floor: 'RF', area: 'Central', status: 'active' },
  { id: 5, unit_code: 'CHI-001', unit_name: 'Chiller Unit 1', division: 'HVAC', location: 'Basement', floor: 'B2', area: 'Mechanical', status: 'inactive' },
];

export default function UnitsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [units, setUnits] = useState(unitsData);
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; unit: any }>({ open: false, unit: null });

  const filteredUnits = units.filter(unit => 
    unit.unit_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    unit.unit_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    unit.division.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (unit: any) => {
    setDeleteModal({ open: true, unit });
  };

  const confirmDelete = () => {
    if (deleteModal.unit) {
      setUnits(units.filter(u => u.id !== deleteModal.unit.id));
      setDeleteModal({ open: false, unit: null });
    }
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
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f3f1ec' }}>Delete Unit</h2>
              <button onClick={() => setDeleteModal({ open: false, unit: null })} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '6px', color: 'var(--text-mid)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <X size={18} />
              </button>
            </div>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.5' }}>
              Are you sure you want to delete <strong style={{ color: '#f3f1ec' }}>{deleteModal.unit?.unit_name}</strong> ({deleteModal.unit?.unit_code})? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setDeleteModal({ open: false, unit: null })} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-mid)', padding: '10px 20px', borderRadius: '10px', fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s' }}>
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
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '6px' }}>Units</h1>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.875rem' }}>Manage all units and equipment</p>
            </div>
            <Link href="/units/create">
              <button style={{ background: 'linear-gradient(135deg, #e79a5f, #f3c495)', color: '#0a0c12', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'transform 0.2s' }}>
                <Plus size={18} /> New Unit
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
              <input type="text" placeholder="Search units..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '11px 16px 11px 42px', color: '#f3f1ec', fontSize: '0.875rem', outline: 'none', width: '100%' }} />
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Kode</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Nama Unit</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Divisi</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Lokasi</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Lantai</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Area</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUnits.map((unit) => (
                  <tr key={unit.id} style={{ transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '16px', color: '#f3f1ec', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontFamily: 'monospace', color: '#e79a5f', fontWeight: '600' }}>{unit.unit_code}</span>
                    </td>
                    <td style={{ padding: '16px', color: '#f3f1ec', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: '500' }}>{unit.unit_name}</td>
                    <td style={{ padding: '16px', color: 'var(--text-mid)', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{unit.division}</td>
                    <td style={{ padding: '16px', color: 'var(--text-mid)', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{unit.location}</td>
                    <td style={{ padding: '16px', color: 'var(--text-mid)', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{unit.floor}</td>
                    <td style={{ padding: '16px', color: 'var(--text-mid)', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{unit.area}</td>
                    <td style={{ padding: '16px', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ background: unit.status === 'active' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)', color: unit.status === 'active' ? '#22c55e' : '#ef4444', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600' }}>
                        {unit.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td style={{ padding: '16px', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <Link href={`/units/${unit.id}`}>
                          <button style={{ background: 'rgba(95, 201, 201, 0.15)', border: '1px solid rgba(95, 201, 201, 0.3)', borderRadius: '8px', padding: '8px', color: '#5fc9c9', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }} title="View">
                            <Eye size={16} />
                          </button>
                        </Link>
                        <Link href={`/units/${unit.id}/edit`}>
                          <button style={{ background: 'rgba(231, 154, 95, 0.15)', border: '1px solid rgba(231, 154, 95, 0.3)', borderRadius: '8px', padding: '8px', color: '#e79a5f', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }} title="Edit">
                            <Edit size={16} />
                          </button>
                        </Link>
                        <button onClick={() => handleDelete(unit)} style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '8px', color: '#ef4444', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }} title="Delete">
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
            <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>Showing {filteredUnits.length} result{filteredUnits.length !== 1 ? 's' : ''}</p>
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
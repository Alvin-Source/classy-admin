'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const mockQuestions = [
  { order: 1, label: 'Cek kondisi step escalator (tidak retak, tidak aus)', type: 'yes_no', is_required: true },
  { order: 2, label: 'Cek bunyi tidak normal saat beroperasi', type: 'yes_no', is_required: true },
  { order: 3, label: 'Cek fungsi emergency stop button', type: 'yes_no', is_required: true },
  { order: 4, label: 'Cek kebersihan area escalator', type: 'yes_no', is_required: false },
  { order: 5, label: 'Catat suhu motor (°C)', type: 'numeric', is_required: true },
  { order: 6, label: 'Periksa pelumasan rel dan rantai penggerak', type: 'yes_no', is_required: true },
];

export default function ViewTemplatePage({ params }: { params: { id: string } }) {
  const requiredCount = mockQuestions.filter(q => q.is_required).length;
  const optionalCount = mockQuestions.filter(q => !q.is_required).length;

  return (
    <>
      <div className="glow-bg"></div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '860px', margin: '0 auto', padding: '34px 36px 140px' }}>
        
        <Link href="/templates" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-mid)', textDecoration: 'none', marginBottom: '26px', cursor: 'pointer', transition: 'color 0.2s' }}>
          <ArrowLeft size={16} /> Kembali ke daftar
        </Link>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', marginBottom: '28px', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: '1.9rem', fontWeight: '800', letterSpacing: '-0.01em' }}>Pemeriksaan Harian Escalator</h1>
            <div style={{ marginTop: '8px', color: 'var(--text-dim)', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              Template ID #TPL-0004 · Terakhir diperbarui 3 hari lalu
            </div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: '600', color: '#6fcf97', background: 'rgba(111, 207, 151, 0.12)', border: '1px solid rgba(111, 207, 151, 0.28)', padding: '8px 16px', borderRadius: '999px', flexShrink: 0 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6fcf97' }}></span>Aktif
          </span>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '26px 28px 28px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(231, 154, 95, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem', flexShrink: 0 }}>📋</div>
            <h2 style={{ fontSize: '1.02rem', fontWeight: '700' }}>Informasi template</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '8px' }}>Divisi</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: '600', padding: '6px 13px', borderRadius: '999px', color: '#f3c495', background: 'rgba(231, 154, 95, 0.14)', border: '1px solid rgba(231, 154, 95, 0.28)' }}>
                Escalator & Lift
              </span>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '8px' }}>Jumlah pertanyaan</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: '600', padding: '6px 13px', borderRadius: '999px', color: '#ab9be0', background: 'rgba(171, 155, 224, 0.14)', border: '1px solid rgba(171, 155, 224, 0.28)' }}>
                {mockQuestions.length} pertanyaan
              </span>
            </div>
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '8px' }}>Deskripsi</div>
          <p style={{ fontSize: '0.93rem', lineHeight: '1.6', color: 'var(--text-mid)' }}>
            Template untuk pemeriksaan rutin harian escalator, mencakup pemeriksaan visual, fungsi, dan kebersihan unit sebelum jam operasional dimulai.
          </p>
        </div>

        <div style={{ background: 'var(--glass-fill)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '26px 28px 28px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(231, 154, 95, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem', flexShrink: 0 }}>📝</div>
            <h2 style={{ fontSize: '1.02rem', fontWeight: '700' }}>Urutan pemeriksaan</h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '22px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#e79a5f' }}></span>{mockQuestions.length} langkah
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#e08a94' }}></span>{requiredCount} wajib diisi
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--text-dim)' }}></span>{optionalCount} opsional
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {mockQuestions.map((q, idx) => (
              <div key={q.order} style={{ display: 'flex', gap: '18px', padding: '18px 4px', borderBottom: idx < mockQuestions.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(231, 154, 95, 0.12)', border: '1px solid rgba(231, 154, 95, 0.28)', color: '#f3c495', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.82rem', fontWeight: '700', fontVariantNumeric: 'tabular-nums' }}>
                    {String(q.order).padStart(2, '0')}
                  </div>
                  {idx < mockQuestions.length - 1 && (
                    <div style={{ width: '1px', flex: 1, background: 'rgba(255,255,255,0.08)', marginTop: '6px' }}></div>
                  )}
                </div>
                <div style={{ flex: 1, paddingTop: '2px' }}>
                  <div style={{ fontSize: '0.98rem', fontWeight: '600', lineHeight: '1.45' }}>{q.label}</div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', fontWeight: '600', padding: '5px 11px', borderRadius: '999px', color: q.type === 'numeric' ? '#ab9be0' : '#5fc9c9', background: q.type === 'numeric' ? 'rgba(171, 155, 224, 0.13)' : 'rgba(95, 201, 201, 0.13)', border: q.type === 'numeric' ? '1px solid rgba(171, 155, 224, 0.26)' : '1px solid rgba(95, 201, 201, 0.26)' }}>
                      {q.type === 'yes_no' ? 'Ya / Tidak' : 'Angka'}
                    </span>
                    {q.is_required ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', fontWeight: '600', padding: '5px 11px', borderRadius: '999px', color: '#e08a94', background: 'rgba(224, 138, 148, 0.12)', border: '1px solid rgba(224, 138, 148, 0.26)' }}>
                        Wajib
                      </span>
                    ) : (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', fontWeight: '600', padding: '5px 11px', borderRadius: '999px', color: 'var(--text-dim)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--glass-border)' }}>
                        Opsional
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', padding: '18px 24px', zIndex: 30 }}>
        <div style={{ width: '100%', maxWidth: '860px', background: 'rgba(15, 18, 25, 0.72)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', border: '1px solid var(--glass-border)', borderRadius: '18px', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 -20px 50px rgba(0,0,0,0.35)', gap: '14px', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '0.84rem', color: 'var(--text-dim)' }}>Template ini dipakai di 4 unit aktif</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button style={{ fontFamily: 'inherit', fontWeight: '600', fontSize: '0.88rem', color: '#e08a94', background: 'rgba(224, 138, 148, 0.08)', border: '1px solid rgba(224, 138, 148, 0.22)', padding: '11px 18px', borderRadius: '12px', cursor: 'pointer' }}>
              Nonaktifkan
            </button>
            <button style={{ fontFamily: 'inherit', fontWeight: '600', fontSize: '0.88rem', color: 'var(--text-mid)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '11px 18px', borderRadius: '12px', cursor: 'pointer' }}>
              Duplikat
            </button>
            <Link href={`/templates/${params.id}/edit`}>
              <button style={{ fontFamily: 'inherit', fontWeight: '700', fontSize: '0.88rem', color: '#0a0c12', background: 'linear-gradient(135deg, #e79a5f, #f3c495)', border: 'none', padding: '11px 22px', borderRadius: '12px', cursor: 'pointer' }}>
                Edit template
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
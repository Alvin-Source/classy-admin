'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
    // Redirect to dashboard after login
    router.push('/');
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --ink-950: #0a0c12;
          --glass-fill: rgba(255, 255, 255, 0.055);
          --glass-fill-strong: rgba(255, 255, 255, 0.09);
          --glass-border: rgba(255, 255, 255, 0.10);
          --amber-500: #e79a5f;
          --amber-300: #f3c495;
          --teal-400: #5fc9c9;
          --violet-400: #ab9be0;
          --text-100: #f3f1ec;
          --text-dim: rgba(243, 241, 236, 0.5);
          --text-mid: rgba(243, 241, 236, 0.72);
        }
      `}</style>

      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: -1, 
        background: `
          radial-gradient(ellipse 55% 45% at 15% 0%, rgba(231, 154, 95, 0.16), transparent 60%),
          radial-gradient(ellipse 50% 40% at 95% 15%, rgba(95, 201, 201, 0.10), transparent 60%),
          radial-gradient(ellipse 60% 45% at 40% 100%, rgba(171, 155, 224, 0.08), transparent 65%),
          linear-gradient(180deg, #0a0c12 0%, #0f1219 55%, #0a0c12 100%)
        `
      }} />

      <div style={{ 
        minHeight: '100vh', 
        display: 'grid', 
        gridTemplateColumns: '1.1fr 1fr',
        background: 'var(--ink-950)',
        color: 'var(--text-100)'
      }}>
        {/* Left Showcase Panel */}
        <div style={{ 
          position: 'relative', 
          padding: '52px 56px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          borderRight: '1px solid var(--glass-border)' 
        }} className="showcase-panel">
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '38px', 
              height: '38px', 
              borderRadius: '11px', 
              background: 'linear-gradient(135deg, var(--amber-500), var(--amber-300))', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: '800', 
              fontSize: '1.05rem', 
              color: 'var(--ink-950)' 
            }}>
              C
            </div>
            <div style={{ fontWeight: '700', fontSize: '1.15rem' }}>Clasy</div>
          </div>

          {/* Showcase Body */}
          <div style={{ maxWidth: '460px', marginTop: '40px' }}>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 3.4vw, 2.7rem)', 
              fontWeight: '800', 
              lineHeight: '1.18', 
              letterSpacing: '-0.01em' 
            }}>
              Kelola operasional gedung dengan lebih tenang.
            </h1>
            <p style={{ marginTop: '18px', fontSize: '1rem', lineHeight: '1.65', color: 'var(--text-mid)' }}>
              Satu dashboard untuk unit, checklist pemeriksaan, dan laporan tim — semuanya sinkron dan bisa diakses siapa saja yang berwenang.
            </p>

            {/* Feature Stack */}
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '14px', 
                background: 'var(--glass-fill)', 
                backdropFilter: 'blur(16px)', 
                WebkitBackdropFilter: 'blur(16px)', 
                border: '1px solid var(--glass-border)', 
                borderRadius: '16px', 
                padding: '16px 18px', 
                maxWidth: '380px' 
              }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '11px', 
                  background: 'rgba(255,255,255,0.06)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1rem', 
                  flexShrink: 0 
                }}>
                  🗓️
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Pemeriksaan harian terjadwal</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>Tidak ada unit yang terlewat dicek</div>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '14px', 
                background: 'var(--glass-fill)', 
                backdropFilter: 'blur(16px)', 
                WebkitBackdropFilter: 'blur(16px)', 
                border: '1px solid var(--glass-border)', 
                borderRadius: '16px', 
                padding: '16px 18px', 
                maxWidth: '380px',
                marginLeft: '44px'
              }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '11px', 
                  background: 'rgba(255,255,255,0.06)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1rem', 
                  flexShrink: 0 
                }}>
                  🧾
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Riwayat unit tercatat rapi</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>Semua log tersimpan otomatis</div>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '14px', 
                background: 'var(--glass-fill)', 
                backdropFilter: 'blur(16px)', 
                WebkitBackdropFilter: 'blur(16px)', 
                border: '1px solid var(--glass-border)', 
                borderRadius: '16px', 
                padding: '16px 18px', 
                maxWidth: '380px' 
              }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '11px', 
                  background: 'rgba(255,255,255,0.06)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1rem', 
                  flexShrink: 0 
                }}>
                  🔄
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Tim selalu sinkron</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>Perubahan langsung terlihat real-time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Showcase Footer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ 
                width: '28px', 
                height: '28px', 
                borderRadius: '50%', 
                border: '2px solid var(--ink-950)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '0.62rem', 
                fontWeight: '700', 
                color: 'var(--ink-950)',
                background: 'linear-gradient(135deg,#e79a5f,#f3c495)'
              }}>
                MT
              </div>
              <div style={{ 
                width: '28px', 
                height: '28px', 
                borderRadius: '50%', 
                border: '2px solid var(--ink-950)', 
                marginLeft: '-8px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '0.62rem', 
                fontWeight: '700', 
                color: 'var(--ink-950)',
                background: 'linear-gradient(135deg,#5fc9c9,#8fe3d3)'
              }}>
                AB
              </div>
              <div style={{ 
                width: '28px', 
                height: '28px', 
                borderRadius: '50%', 
                border: '2px solid var(--ink-950)', 
                marginLeft: '-8px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '0.62rem', 
                fontWeight: '700', 
                color: 'var(--ink-950)',
                background: 'linear-gradient(135deg,#ab9be0,#e79a5f)'
              }}>
                RH
              </div>
            </div>
            Dipercaya oleh lebih dari 30 tim fasilitas gedung
          </div>
        </div>

        {/* Right Form Panel */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 32px' }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '400px', 
            background: 'var(--glass-fill)', 
            backdropFilter: 'blur(22px)', 
            WebkitBackdropFilter: 'blur(22px)', 
            border: '1px solid var(--glass-border)', 
            borderRadius: '22px', 
            padding: '38px 34px 32px', 
            boxShadow: '0 30px 70px rgba(0,0,0,0.35)' 
          }}>
            {/* Mobile Brand (hidden on desktop) */}
            <div style={{ display: 'none', alignItems: 'center', gap: '10px', marginBottom: '28px' }} className="mobile-brand">
              <div style={{ 
                width: '38px', 
                height: '38px', 
                borderRadius: '11px', 
                background: 'linear-gradient(135deg, var(--amber-500), var(--amber-300))', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: '800', 
                fontSize: '1.05rem', 
                color: 'var(--ink-950)' 
              }}>
                C
              </div>
              <div style={{ fontWeight: '700', fontSize: '1.15rem' }}>Clasy</div>
            </div>

            {/* Login Header */}
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Masuk ke akun Anda</h1>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                Masukkan kredensial yang diberikan admin sistem Anda.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin}>
              {/* Email Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '22px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Email kerja</label>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  background: emailFocused ? 'rgba(231, 154, 95, 0.06)' : 'rgba(255, 255, 255, 0.045)', 
                  border: emailFocused ? '1px solid rgba(231, 154, 95, 0.5)' : '1px solid var(--glass-border)', 
                  borderRadius: '12px', 
                  padding: '13px 16px',
                  transition: 'all 0.2s'
                }}>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-dim)', flexShrink: 0 }}>✉</span>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    placeholder="nama@perusahaan.com"
                    style={{ 
                      border: 'none', 
                      background: 'transparent', 
                      outline: 'none', 
                      color: 'var(--text-100)', 
                      fontSize: '0.92rem', 
                      width: '100%' 
                    }}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '22px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Kata sandi</label>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  background: passwordFocused ? 'rgba(231, 154, 95, 0.06)' : 'rgba(255, 255, 255, 0.045)', 
                  border: passwordFocused ? '1px solid rgba(231, 154, 95, 0.5)' : '1px solid var(--glass-border)', 
                  borderRadius: '12px', 
                  padding: '13px 16px',
                  transition: 'all 0.2s'
                }}>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-dim)', flexShrink: 0 }}>🔒</span>
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    placeholder="••••••••"
                    style={{ 
                      border: 'none', 
                      background: 'transparent', 
                      outline: 'none', 
                      color: 'var(--text-100)', 
                      fontSize: '0.92rem', 
                      width: '100%' 
                    }}
                  />
                  <span 
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ fontSize: '0.85rem', color: 'var(--text-dim)', cursor: 'pointer', flexShrink: 0 }}
                  >
                    👁
                  </span>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '18px' }}>
                <div 
                  onClick={() => setFormData({...formData, remember: !formData.remember})}
                  style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.85rem', color: 'var(--text-mid)', cursor: 'pointer' }}
                >
                  <span style={{ 
                    width: '17px', 
                    height: '17px', 
                    borderRadius: '5px', 
                    border: formData.remember ? 'none' : '1px solid var(--glass-border)', 
                    background: formData.remember ? 'linear-gradient(135deg, var(--amber-500), var(--amber-300))' : 'rgba(255,255,255,0.05)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '0.65rem',
                    color: formData.remember ? 'var(--ink-950)' : 'transparent'
                  }}>
                    ✓
                  </span>
                  Ingat saya
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--amber-300)', cursor: 'pointer' }}>Lupa kata sandi?</span>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                style={{ 
                  width: '100%', 
                  marginTop: '26px', 
                  fontWeight: '700', 
                  fontSize: '0.94rem', 
                  color: 'var(--ink-950)', 
                  background: 'linear-gradient(135deg, var(--amber-500), var(--amber-300))', 
                  border: 'none', 
                  padding: '14px', 
                  borderRadius: '13px', 
                  cursor: 'pointer' 
                }}
              >
                Masuk
              </button>
            </form>

            {/* Divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '26px 0 20px', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
              <span style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.09)' }} />
              atau
              <span style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.09)' }} />
            </div>

            {/* Google SSO Button */}
            <button 
              onClick={handleGoogleLogin}
              type="button"
              style={{ 
                width: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '10px', 
                fontWeight: '600', 
                fontSize: '0.88rem', 
                color: 'var(--text-100)', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--glass-border)', 
                padding: '13px', 
                borderRadius: '13px', 
                cursor: 'pointer' 
              }}
            >
              <span>G</span> Masuk dengan Google Workspace
            </button>

            {/* Footer */}
            <div style={{ textAlign: 'center', marginTop: '26px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Belum punya akun? <span style={{ color: 'var(--teal-400)', cursor: 'pointer', fontWeight: '600' }}>Hubungi admin sistem</span>
            </div>

            {/* Security Note */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', marginTop: '22px', fontSize: '0.76rem', color: 'var(--text-dim)' }}>
              🔒 Koneksi terenkripsi end-to-end
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          .showcase-panel {
            display: none !important;
          }
          .mobile-brand {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
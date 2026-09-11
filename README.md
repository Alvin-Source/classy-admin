# Classy Admin Dashboard

Panel admin modern dengan dark theme menggunakan Next.js, TypeScript, dan Tailwind CSS.

## 🚀 Fitur

- ✨ Dark theme modern dengan orange accent
- 📊 Dashboard dengan statistik cards (Courses, Lessons, Enrollees, Students)
- 📈 Chart revenue dengan gradient dan smooth curves
- 💰 List requested withdrawal dengan avatar dan hover effects
- 🎨 Responsive design
- ⚡ Built with Next.js 16 dan Turbopack

## 🛠️ Tech Stack

- **Framework:** Next.js 16.3.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Chart.js + react-chartjs-2
- **Icons:** Lucide React

## 📦 Instalasi

Semua dependencies sudah terinstall. Untuk menjalankan project:

```bash
npm run dev
```

Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## 📁 Struktur Project

```
classy-admin/
├── app/
│   ├── globals.css          # Global styles dengan dark theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Dashboard page
├── components/
│   ├── Sidebar.tsx          # Sidebar navigation
│   ├── Navbar.tsx           # Top navigation bar
│   ├── StatCard.tsx         # Statistics card component
│   ├── RevenueChart.tsx     # Revenue chart dengan Chart.js
│   └── WithdrawalList.tsx   # Withdrawal requests list
└── public/                  # Static assets
```

## 🎨 Komponen

### StatCard
Card untuk menampilkan statistik dengan icon, nilai utama, dan sub-statistik.

### RevenueChart
Line chart dengan gradient orange untuk menampilkan revenue admin. Termasuk controls untuk filter Year/Month/Week.

### WithdrawalList
List withdrawal requests dengan avatar, nama, email, dan amount. Button arrow muncul saat hover.

### Sidebar & Navbar
Navigation components dengan dark theme dan hover effects.

## 🎯 Customization

### Warna Tema
Edit file `app/globals.css` untuk mengubah color scheme:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

### Data
Edit file `app/page.tsx` untuk mengubah data statistik dan komponen lainnya.

## 📱 Responsive

Dashboard sudah responsive dan bekerja dengan baik di berbagai ukuran layar:
- Desktop: Grid 4 kolom untuk stats
- Tablet: Grid 2 kolom
- Mobile: Grid 1 kolom

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📝 License

MIT License

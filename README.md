# 🏠 RentFlow - Smart Tenant-Landlord Portal

RentFlow adalah platform Micro-SaaS yang dirancang untuk menyederhanakan komunikasi antara pemilik properti (Landlord) dan penyewa (Tenant). Fokus pada transparansi pelaporan kerusakan dan manajemen pembayaran.

## 🚀 Fitur Utama
- **Role-Based Access:** Dashboard berbeda untuk Pemilik dan Penyewa.
- **Ticketing System:** Penyewa dapat melaporkan kerusakan dengan foto; Pemilik dapat memperbarui status secara real-time.
- **Payment Tracking:** Unggah bukti transfer dan verifikasi pembayaran instan.
- **Secure Auth:** Login aman menggunakan Supabase Auth.
- **Real-time Updates:** Notifikasi status perbaikan tanpa refresh halaman.

## 🛠️ Tech Stack
- **Frontend:** Next.js 15, Tailwind CSS, shadcn/ui.
- **Backend:** Supabase (PostgreSQL, Edge Functions).
- **Storage:** Supabase Storage (untuk foto bukti bayar & kerusakan).
- **State Management:** TanStack Query.

## 📋 Skema Database (ERD)
- `profiles`: id, email, full_name, role (landlord/tenant)
- `properties`: id, name, address, owner_id
- `tickets`: id, title, description, image_url, status, tenant_id
- `payments`: id, amount, proof_url, status, tenant_id

## 🏗️ Cara Menjalankan Lokal
1. Clone repositori ini.
2. Install dependensi: `npm install`.
3. Buat file `.env.local` dan masukkan kredensial Supabase Anda.
4. Jalankan aplikasi: `npm run dev`.

## 📈 Roadmap Pengembangan
- [ ] Integrasi AI untuk deteksi otomatis urgensi kerusakan.
- [ ] Export laporan keuangan bulanan ke PDF.
- [ ] Integrasi WhatsApp Gateway untuk notifikasi otomatis.
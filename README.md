# 🌥️ Penilaian Tengah Semester — PaaS (EduLearn Cloud)

## 📘 Deskripsi Proyek
**EduLearn Cloud** adalah aplikasi pembelajaran sederhana berbasis web yang dijalankan di platform **PaaS (Platform as a Service)** seperti **Render** atau **Railway**.  
Aplikasi ini dibuat untuk mendemonstrasikan **integrasi database PostgreSQL** dan **persistent storage** dalam lingkungan cloud.

Fitur utama:
- Form input data pengguna (nama & email)
- Menyimpan data ke **PostgreSQL database**
- Upload & tampilkan foto profil pengguna di **persistent storage**
- Menggunakan **environment variable (.env)** untuk keamanan koneksi database

---

## 🧠 Tujuan Pembelajaran
1. Memahami integrasi **Database & Storage** di PaaS  
2. Mengelola **kredensial dan environment variable** secara aman  
3. Mengimplementasikan koneksi aplikasi ke **PostgreSQL Cloud Database**  
4. Menjalankan aplikasi berbasis Node.js di lingkungan cloud  

---

## ⚙️ Teknologi yang Digunakan
| Komponen | Teknologi |
|-----------|------------|
| Bahasa Pemrograman | Node.js (Express.js) |
| Database | PostgreSQL (Railway / Render) |
| Template Engine | EJS |
| Storage | Persistent Storage bawaan PaaS |
| Package Manager | npm |
| Middleware | Multer (untuk upload file) |
| Variabel Lingkungan | dotenv |

---

## 🏗️ Struktur Folder
---

## 📦 Instalasi & Persiapan

### 1️⃣ Clone Repositori
git clone https://github.com/Sabilaraa/Penilaian-Tengah-Semester-PaaS.git
cd "Penilaian-Tengah-Semester-PaaS"
2️⃣ Instal Dependensi
npm install express pg multer dotenv ejs
3️⃣ Konfigurasi Environment Variable
Buat file .env dan isi dengan:

env
DATABASE_URL=postgresql://username:password@hostname:port/databasename
STORAGE_PATH=uploads
PORT=3000
🔒 Catatan: Jangan pernah push file .env ke GitHub.

🧩 Kode Utama (app.js)
Aplikasi utama menggunakan Express.js dan pg untuk menghubungkan ke database PostgreSQL, serta Multer untuk upload file.

🎨 Tampilan Menarik (index.ejs)
Form dan daftar pengguna dengan gaya modern, warna lembut, dan tata letak terpusat.

💾 Konfigurasi .gitignore
Pastikan file berikut diabaikan agar tidak ikut diunggah:

node_modules/
.env
uploads/
🚀 Menjalankan Aplikasi Secara Lokal
Jalankan server Node.js

node app.js
Buka browser dan akses:
http://localhost:3000

Uji fitur:
Isi nama & email
Upload foto
Tekan “Simpan”
Lihat data tampil di bawah form

☁️ Deploy ke Platform PaaS (Railway)
Langkah umum:
Buat akun di https://render.com

Hubungkan GitHub repository proyek ini.
Tambahkan Environment Variables di dashboard PaaS:
DATABASE_URL →
STORAGE_PATH → uploads
PORT → 3000
Deploy project → tunggu hingga status “Live”.

📘 Dokumentasi Langkah Pengerjaan

Membuat folder proyek PTS-PaaS

Inisialisasi Git:

git init


Membuat file app.js, views/index.ejs, .env, .gitignore, README.md

Menginstal package:

npm install express pg multer dotenv ejs


Menulis kode dan konfigurasi database

Menjalankan lokal server:

node app.js


Membuat commit dan push ke GitHub:

git add .
git commit -m "Initial commit - PTS PaaS EduLearn Cloud"
git branch -M main
git remote add origin https://github.com/Sabilaraa/Penilaian-Tengah-Semester-PaaS.git
git push -u origin main


Menghubungkan GitHub ke platform PaaS (Render/Railway)

Menambahkan environment variables di dashboard

Deploy dan uji di browser

🧑‍💻 Pembuat

Nama: Salsabila Rafeyfa Asyla
Kelas: XII SIJA B
Sekolah: SMK Negeri 2 Depok Sleman
Tugas: Penilaian Tengah Semester — PaaS

💬 Lisensi

Proyek ini dibuat untuk tujuan pembelajaran.
Silakan digunakan atau dimodifikasi untuk kepentingan edukasi.

🌷 “Belajar teknologi bukan sekadar memahami kode, tapi memahami bagaimana setiap bagian saling terhubung.”
— Salsabila R. A.


---
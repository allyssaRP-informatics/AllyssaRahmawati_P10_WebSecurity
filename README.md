# AllyssaRahmawati_P10_WebSecurity

# 📚 UNSIA Digital Library RESTful API

RESTful API sederhana yang dibangun menggunakan **Node.js** dan **Express.js** untuk memenuhi tugas Praktikum Pemrograman Web II. API ini menerapkan autentikasi menggunakan **JSON Web Token (JWT)**, enkripsi password menggunakan **bcryptjs**, validasi input menggunakan **express-validator**, serta middleware keamanan untuk melindungi endpoint.

---

## 📖 Deskripsi

UNSIA Digital Library RESTful API merupakan backend yang dirancang untuk mengelola autentikasi pengguna pada sistem perpustakaan digital. API ini memungkinkan pengguna untuk melakukan registrasi, login, dan mengakses halaman profil yang diproteksi menggunakan JWT.

---

## ✨ Fitur

- ✅ Registrasi pengguna
- ✅ Login pengguna
- ✅ Password di-enkripsi menggunakan bcrypt
- ✅ Autentikasi menggunakan JSON Web Token (JWT)
- ✅ Validasi input pengguna
- ✅ Protected Route menggunakan Middleware
- ✅ Global Error Handling
- ✅ Rate Limiter
- ✅ Helmet Security
- ✅ CORS Support

---

## 🛠️ Teknologi yang Digunakan

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcryptjs
- express-validator
- Helmet
- CORS
- express-rate-limit
- dotenv

---

## 📁 Struktur Project

Allyssa Rahmawati Prihanto_P10
	src
  •	controllers
    o	authController.js
    o	userController.js
  •	data
    o	users.js
  •	middleware
    o	auth.js
    o	errorHandler.js
    o	notFound.js
    o	rateLimiter.js
  •	routes
    o	authRoutes.js
    o	userRoutes.js
  •	utils
    o	generateToken.js
  •	validators
    o	authValidator.js
  •	app.js
	server.js
	package.json
	package-lock.json
	gitignore


## ⚙️ Instalasi

Clone repository

```bash
git clone <repository-url>
```

Masuk ke folder project

```bash
cd AllyssaRahmawati_P10_WebSecurity
```

Install dependency

```bash
npm install
```

Buat file `.env`

```env
PORT=3000
JWT_SECRET=unsia_secret_key
JWT_EXPIRES_IN=1h
```

Menjalankan project

```bash
npm start
```

atau menggunakan Nodemon

```bash
npm run dev
```

---

## 📡 API Endpoint

1. POST =  `/api/auth/register` (Registrasi pengguna)
2. POST = `/api/auth/login` (Login pengguna)
3. GET = `/api/users/profile` (Melihat profil pengguna (JWT Required))

---

## 🧪 Pengujian API

Pengujian dilakukan menggunakan Thunder Client dengan skenario berikut:

1.	Registrasi pengguna baru : ✅ Berhasil
2.	Login pengguna  : ✅ Berhasil
3.	Mengakses profil menggunakan JWT : ✅ Berhasil 
4.	Mengakses profil tanpa JWT : ✅ Ditolak (401 Unauthorized) 
5.	Registrasi dengan username yang sudah digunakan : ✅ Validasi berhasil 
6.	Registrasi dengan password kurang dari 6 karakter : ✅ Validasi berhasil 
7.	Login dengan password yang salah : ✅ Ditolak 
8.	Login dengan username yang tidak terdaftar : ✅ Ditolak

---

## 🔐 Keamanan yang Diterapkan

- Password hashing menggunakan **bcryptjs**
- Autentikasi menggunakan **JSON Web Token (JWT)**
- Validasi input menggunakan **express-validator**
- HTTP Security Header menggunakan **Helmet**
- Cross-Origin Resource Sharing (**CORS**)
- Rate Limiting untuk mencegah brute-force attack
- Global Error Handling

---

## 👩‍💻 Author

Nama : Allyssa Rahmawati Prihanto
NIM : 240401070514
Kelas : IF401
Prodi : Informatika

=============

Mata Kuliah : Pemrograman Web II
Dosen : Ratih Titi Komalasari, S.T., M.M., M.MSI

Universitas Siber Asia

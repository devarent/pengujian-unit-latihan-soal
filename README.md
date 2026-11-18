# Pengujian Unit - Latihan Soal

Paket belajar singkat tentang unit testing menggunakan JavaScript dan fitur bawaan Node.js. Tidak memerlukan instalasi paket tambahan.

## Isi folder

- `latihan.md` - materi, diagram, latihan, dan panduan menjalankan pengujian.
- `latihan.docx` dan `latihan.pdf` - versi dokumen siap dibaca atau dicetak.
- `src/checkout.js` - contoh implementasi fungsi yang diuji.
- `tests/checkout.test.js` - contoh unit test dengan `node:test`.
- `graphs/` - diagram alur unit test dan piramida pengujian.

## Menjalankan test

Pastikan Node.js versi 18 atau lebih baru tersedia, lalu buka terminal di folder ini dan jalankan:

```powershell
node --test
```

Test memeriksa perhitungan total pesanan, diskon, ongkos kirim, pembulatan, dan input tidak valid.

---

## Project Governance

[![CI](https://github.com/aryafatthurahman4-collab/pengujian-unit-latihan-soal/actions/workflows/ci.yml/badge.svg)](https://github.com/aryafatthurahman4-collab/pengujian-unit-latihan-soal/actions/workflows/ci.yml)

[Contributing](CONTRIBUTING.md) | [Security Policy](SECURITY.md) | [Code of Conduct](CODE_OF_CONDUCT.md)
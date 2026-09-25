# 📦 Object (Objek) dalam JavaScript

Object adalah tipe data non-primitif yang digunakan untuk **menyimpan kumpulan data dalam bentuk pasangan *key* (kunci) dan *value* (nilai)**. Objek sangat cocok digunakan untuk merepresentasikan entitas nyata, seperti data pengguna, produk, konfigurasi, dan sebagainya.

---

## Ringkasan Konsep & Operasi Objek

| Operasi | Sintaks | Keterangan |
|---|---|---|
| **Membuat Objek** | `{ nama: "Andi", usia: 17 }` | Object Literal (paling umum) |
| **Dot Notation** | `obj.nama` | Mengakses nilai dengan nama properti tetap |
| **Bracket Notation** | `obj["nama"]` atau `obj[variabel]` | Mengakses properti dinamis atau bernorma spasi |
| **Method** | `{ sapa() { ... } }` | Fungsi yang menjadi properti dari sebuah objek |
| **Kata Kunci `this`** | `this.properti` | Merujuk ke objek pemilik method |
| **Destructuring** | `const { nama, usia } = obj;` | Mengekstrak properti ke variabel terpisah |
| **Spread Operator** | `{ ...obj, status: "aktif" }` | Menggabungkan atau menyalin shallow copy objek |
| **Optional Chaining** | `obj?.alamat?.kota` | Menghindari error saat mengakses properti yang `null`/`undefined` |

---

## 1. Membuat Object

### Cara 1: Object Literal (Sangat Disarankan)

```js
const siswa = {
  nama: "Rian Pratama",
  kelas: "11 RPL 1",
  umur: 16,
  aktif: true
};
```

### Cara 2: Object Constructor (`new Object()`)

```js
const mobil = new Object();
mobil.merk = "Toyota";
mobil.tahun = 2022;
```

---

## 2. Mengakses, Mengubah, dan Menghapus Properti

### Dot Notation vs Bracket Notation

```js
const user = {
  nama: "Ayu",
  "tipe akun": "Premium", // properti dengan spasi
  usia: 20
};

// Dot Notation
console.log(user.nama); // "Ayu"

// Bracket Notation (Wajib jika nama key memiliki spasi / karakter khusus)
console.log(user["tipe akun"]); // "Premium"

// Bracket Notation untuk Key Dinamis dari Variabel
const propertiYangDicari = "usia";
console.log(user[propertiYangDicari]); // 20
```

### Menambah & Mengubah Properti

```js
const produk = { id: 1, nama: "Keyboard" };

// Mengubah nilai
produk.nama = "Mechanical Keyboard";

// Menambah properti baru
produk.harga = 450000;
produk["stok"] = 15;

console.log(produk);
// { id: 1, nama: 'Mechanical Keyboard', harga: 450000, stok: 15 }
```

### Menghapus Properti (`delete`)

```js
delete produk.stok;
console.log(produk.stok); // undefined
```

---

## 3. Method dan Kata Kunci `this`

Method adalah **fungsi yang didefinisikan sebagai bagian dari objek**.

```js
const kalkulator = {
  pemilik: "Doni",

  // Penulisan method modern (shorthand)
  tambah(a, b) {
    return a + b;
  },

  // Menggunakan 'this' untuk mengakses properti dalam objek itu sendiri
  info() {
    return `Kalkulator milik ${this.pemilik}`;
  }
};

console.log(kalkulator.tambah(5, 3)); // 8
console.log(kalkulator.info());        // "Kalkulator milik Doni"
```

> **⚠️ Perhatian tentang Arrow Function:**
> Hindari menggunakan arrow function sebagai method objek jika membutuhkan `this`. Arrow function tidak memiliki binding `this` sendiri, melainkan mengambil `this` dari scope luar/global.

```js
const profil = {
  nama: "Hadi",
  sapaSalah: () => `Halo, ${this.nama}`, // ❌ this.nama akan undefined
  sapaBenar() { return `Halo, ${this.nama}`; } // ✅ Benar
};
```

---

## 4. Object Bersarang (Nested Objects)

Objek dapat menyimpan objek lain sebagai nilai propertinya.

```js
const karyawan = {
  id: "EMP-001",
  nama: "Rina",
  departemen: {
    nama: "Engineering",
    lokasi: "Lantai 4",
    lead: "Pak Hendra"
  }
};

console.log(karyawan.departemen.nama);   // "Engineering"
console.log(karyawan.departemen.lokasi); // "Lantai 4"
```

---

## 5. Memeriksa Properti Objek

### Menggunakan Operator `in`

```js
const laptop = { merk: "Dell", ram: "16GB" };

console.log("ram" in laptop);      // true
console.log("vga" in laptop);      // false
```

### Menggunakan `Object.hasOwn()` (Standar Modern)

```js
console.log(Object.hasOwn(laptop, "merk")); // true
console.log(Object.hasOwn(laptop, "ssd"));  // false
```

---

## 6. Iterasi pada Objek

Objek biasa bukan *iterable* berurutan seperti array, namun JavaScript menyediakan beberapa cara untuk mengiterasi isinya:

### 1. `for...in` Loop
Mengiterasi semua *key* dari objek.

```js
const skor = { MTK: 85, IPA: 90, B_INDO: 88 };

for (const mapel in skor) {
  console.log(`${mapel}: ${skor[mapel]}`);
}
```

### 2. `Object.keys()`, `Object.values()`, dan `Object.entries()`

```js
const kursus = { judul: "Web Dev", durasi: "3 Bulan", siswa: 25 };

// Mengambil semua key (kunci) sebagai array
console.log(Object.keys(kursus));
// ['judul', 'durasi', 'siswa']

// Mengambil semua values (nilai) sebagai array
console.log(Object.values(kursus));
// ['Web Dev', '3 Bulan', 25]

// Mengambil pasangan [key, value]
console.log(Object.entries(kursus));
// [ ['judul', 'Web Dev'], ['durasi', '3 Bulan'], ['siswa', 25] ]

// Kombinasi for...of dan Object.entries (Sangat direkomendasikan)
for (const [kunci, nilai] of Object.entries(kursus)) {
  console.log(`${kunci} -> ${nilai}`);
}
```

---

## 7. Destructuring Assignment pada Object

Mengekstrak nilai properti objek ke variabel terpisah secara ringkas.

```js
const buku = {
  judul: "Laskar Pelangi",
  penulis: "Andrea Hirata",
  halaman: 529
};

// Dasar destructuring
const { judul, penulis } = buku;
console.log(judul);   // "Laskar Pelangi"
console.log(penulis); // "Andrea Hirata"

// Mengganti nama variabel (Alias) & Memberikan Nilai Default
const { judul: namaBuku, penerbit = "Bentang Pustaka" } = buku;
console.log(namaBuku); // "Laskar Pelangi"
console.log(penerbit); // "Bentang Pustaka" (default digunakan karena tidak ada di buku)
```

---

## 8. Spread Operator (`...`) & Penggabungan Objek

### Menggabungkan Beberapa Objek

```js
const identitas = { nama: "Fajar", umur: 18 };
const kontak = { email: "fajar@example.com", kota: "Surabaya" };

const dataLengkap = {
  ...identitas,
  ...kontak,
  status: "Aktif" // menambah properti baru
};

console.log(dataLengkap);
// { nama: 'Fajar', umur: 18, email: 'fajar@example.com', kota: 'Surabaya', status: 'Aktif' }
```

### Menyalin Objek (Shallow vs Deep Copy)

Spread operator menghasilkan **shallow copy** (level 1 tersalin, namun objek bersarang di dalamnya tetap berupa referensi).

```js
// Shallow Copy
const original = { a: 1, detail: { nilai: 100 } };
const salinan = { ...original };

salinan.a = 99; // original.a TIDAK berubah
salinan.detail.nilai = 500; // original.detail.nilai IKUT berubah! (karena referensi bersama)

// Deep Copy Modern (JavaScript ES2022+)
const deepCopy = structuredClone(original);
deepCopy.detail.nilai = 999; // original TIDAK ikut berubah ✅
```

---

## 9. Immutability: `Object.freeze()` vs `Object.seal()`

| Method | Tambah Properti? | Hapus Properti? | Ubah Nilai Properti? |
|---|---|---|---|
| **`Object.freeze()`** | ❌ Tidak bisa | ❌ Tidak bisa | ❌ Tidak bisa (Beku total) |
| **`Object.seal()`** | ❌ Tidak bisa | ❌ Tidak bisa | ✅ Bisa diubah |

```js
const config = Object.freeze({
  apiKey: "XYZ-123",
  host: "api.domain.com"
});

config.host = "api.lain.com"; // Tidak akan berpengaruh (atau throw error di 'use strict')
console.log(config.host);     // "api.domain.com"
```

---

## 10. Fitur Modern: Optional Chaining (`?.`) & Nullish Coalescing (`??`)

Fitur penting untuk membaca properti yang mungkin belum ada atau `null`/`undefined`.

```js
const pelanggan = {
  id: 101,
  profil: {
    nama: "Gilang"
    // alamat belum diisi
  }
};

// Optional Chaining (?.) — Menghindari TypeError "Cannot read properties of undefined"
console.log(pelanggan.profil?.alamat?.kota); // undefined (tidak menyebabkan error crash!)

// Nullish Coalescing (??) — Memberikan fallback jika nilainya null atau undefined
const kotaTinggal = pelanggan.profil?.alamat?.kota ?? "Kota Belum Ditentukan";
console.log(kotaTinggal); // "Kota Belum Ditentukan"
```

---

## Best Practices

1. **Gunakan Object Literal `{}`** untuk membuat objek baru daripada `new Object()`.
2. **Gunakan Dot Notation** untuk penulisan standar, dan **Bracket Notation** hanya jika nama properti berupa variabel atau memuat spasi/karakter khusus.
3. **Manfaatkan Destructuring** saat menerima objek besar atau sebagai parameter fungsi.
4. **Gunakan `Object.freeze()`** untuk objek konfigurasi atau data statis yang tidak boleh diubah.
5. **Gunakan `?.` (Optional Chaining)** untuk navigasi properti bersarang yang nilainya mungkin kosong dari API.
6. **Pahami konsep Referensi vs Nilai**: Mengubah objek salinan biasa (`let b = a`) akan mengubah objek aslinya. Gunakan `{ ...a }` atau `structuredClone(a)` saat menduplikasi objek.

---

## 📁 File Contoh Kode

Lihat implementasi lengkap dan contoh siap jalankan di [`index.js`](./index.js)

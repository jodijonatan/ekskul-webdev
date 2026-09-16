# 🔁 Looping (Perulangan) dalam JavaScript

Looping adalah mekanisme untuk **menjalankan sekumpulan perintah secara berulang** selama kondisi tertentu terpenuhi. JavaScript menyediakan berbagai jenis perulangan yang masing-masing memiliki kasus penggunaan yang tepat.

---

## Jenis-Jenis Looping

| Jenis | Digunakan Ketika |
|---|---|
| `for` | Jumlah perulangan sudah diketahui |
| `while` | Perulangan berlanjut selama kondisi benar |
| `do...while` | Kode dijalankan minimal sekali, lalu cek kondisi |
| `for...of` | Iterasi nilai dari iterable (array, string, dll.) |
| `for...in` | Iterasi key dari object |
| `forEach()` | Iterasi setiap elemen array |
| `map()`, `filter()`, dll. | Iterasi fungsional array |

---

## 1. `for` Loop

Loop paling umum. Cocok saat jumlah iterasi **sudah diketahui**.

```js
for (inisialisasi; kondisi; update) {
  // kode yang diulang
}
```

```js
for (let i = 1; i <= 5; i++) {
  console.log(`Iterasi ke-${i}`);
}
// Iterasi ke-1
// Iterasi ke-2
// Iterasi ke-3
// Iterasi ke-4
// Iterasi ke-5
```

### Iterasi Array dengan `for`

```js
const buah = ["Apel", "Mangga", "Pisang"];

for (let i = 0; i < buah.length; i++) {
  console.log(`${i}: ${buah[i]}`);
}
// 0: Apel
// 1: Mangga
// 2: Pisang
```

### Loop Terbalik

```js
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// 5, 4, 3, 2, 1
```

---

## 2. `while` Loop

Perulangan berlanjut **selama kondisi bernilai `true`**. Kondisi dicek **sebelum** setiap iterasi.

```js
while (kondisi) {
  // kode yang diulang
}
```

```js
let stok = 5;

while (stok > 0) {
  console.log(`Stok tersisa: ${stok}`);
  stok--;
}
console.log("Stok habis!");
// Stok tersisa: 5
// Stok tersisa: 4
// ...
// Stok habis!
```

> **⚠️ Perhatian:** Pastikan kondisi pada `while` akhirnya akan menjadi `false`, agar tidak terjadi **infinite loop**.

---

## 3. `do...while` Loop

Mirip dengan `while`, tetapi kode dijalankan **minimal sekali** terlebih dahulu sebelum kondisi diperiksa.

```js
do {
  // kode yang diulang
} while (kondisi);
```

```js
let angka = 10;

do {
  console.log(`Nilai: ${angka}`);
  angka--;
} while (angka > 8);
// Nilai: 10
// Nilai: 9
// (berhenti karena 8 tidak > 8)

// Contoh: kondisi langsung false, tapi kode tetap jalan sekali
let x = 100;
do {
  console.log("Kode ini tetap jalan sekali!"); // ← tetap tampil
} while (x < 1); // kondisi false dari awal
```

---

## 4. `for...of` Loop

Digunakan untuk mengiterasi **nilai** dari sebuah iterable seperti Array, String, Map, Set, dll.

```js
for (const item of iterable) {
  // kode yang diulang
}
```

```js
// Iterasi Array
const siswa = ["Andi", "Budi", "Citra"];
for (const nama of siswa) {
  console.log(`Halo, ${nama}!`);
}

// Iterasi String
for (const huruf of "JavaScript") {
  process.stdout.write(huruf + "-"); // J-a-v-a-S-c-r-i-p-t-
}

// Dengan destructuring
const produk = [
  ["Buku", 25000],
  ["Pensil", 5000],
];
for (const [nama, harga] of produk) {
  console.log(`${nama}: Rp${harga.toLocaleString("id-ID")}`);
}
```

---

## 5. `for...in` Loop

Digunakan untuk mengiterasi **key (properti)** dari sebuah Object.

```js
for (const key in object) {
  // kode yang diulang
}
```

```js
const mahasiswa = {
  nama: "Sari",
  jurusan: "Informatika",
  ipk: 3.8,
  angkatan: 2023,
};

for (const key in mahasiswa) {
  console.log(`${key}: ${mahasiswa[key]}`);
}
// nama: Sari
// jurusan: Informatika
// ipk: 3.8
// angkatan: 2023
```

> **💡 Tips:** Gunakan `for...of` untuk array, dan `for...in` untuk object.

---

## 6. `forEach()` Method

Method array yang menerima **callback function** dan menjalankannya untuk setiap elemen.

```js
array.forEach((element, index, array) => {
  // kode yang diulang
});
```

```js
const nilai = [85, 92, 78, 65, 90];

nilai.forEach((n, i) => {
  const status = n >= 75 ? "Lulus" : "Remedial";
  console.log(`Siswa ${i + 1}: ${n} — ${status}`);
});
```

> **Perbedaan `forEach` vs `for...of`:**
> - `forEach` tidak bisa dihentikan dengan `break`
> - `for...of` mendukung `break` dan `continue`

---

## Kontrol Alur Perulangan

### `break` — Menghentikan Loop

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // berhenti saat i = 5
  console.log(i);
}
// 1, 2, 3, 4
```

### `continue` — Melewati Iterasi Saat Ini

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // lewati angka genap
  console.log(i);
}
// 1, 3, 5, 7, 9
```

### Label — Kontrol Loop Bersarang

```js
luarLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue luarLoop; // langsung lanjut ke iterasi berikutnya di loop luar
    console.log(`i=${i}, j=${j}`);
  }
}
// i=1, j=1
// i=2, j=1
// i=3, j=1
```

---

## Loop Bersarang (Nested Loop)

Loop di dalam loop. Sering digunakan untuk data multidimensi.

```js
const matriks = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let baris = 0; baris < matriks.length; baris++) {
  for (let kolom = 0; kolom < matriks[baris].length; kolom++) {
    process.stdout.write(matriks[baris][kolom] + " ");
  }
  console.log(); // newline
}
// 1 2 3
// 4 5 6
// 7 8 9
```

---

## Iterasi Fungsional (Functional Iteration)

Metode modern menggunakan method array. Lebih ekspresif dan mudah dibaca.

```js
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chaining method
const hasil = angka
  .filter(n => n % 2 === 0)   // ambil yang genap: [2, 4, 6, 8, 10]
  .map(n => n * n)             // kuadratkan: [4, 16, 36, 64, 100]
  .reduce((acc, n) => acc + n, 0); // jumlahkan: 220

console.log(hasil); // 220
```

---

## Perbandingan Semua Jenis Loop

```
┌───────────────┬──────────────────────────────────────────┬──────────┐
│  Jenis Loop   │          Kapan Digunakan                 │  break?  │
├───────────────┼──────────────────────────────────────────┼──────────┤
│ for           │ Jumlah iterasi diketahui                 │    ✅    │
│ while         │ Iterasi berdasarkan kondisi              │    ✅    │
│ do...while    │ Minimal sekali, lalu cek kondisi         │    ✅    │
│ for...of      │ Iterasi nilai array/string/iterable      │    ✅    │
│ for...in      │ Iterasi key object                       │    ✅    │
│ forEach()     │ Iterasi array (tanpa return value)       │    ❌    │
│ map/filter    │ Transformasi/filter array                │    ❌    │
└───────────────┴──────────────────────────────────────────┴──────────┘
```

---

## Best Practices

1. **Gunakan `for...of`** untuk iterasi array secara modern dan bersih
2. **Gunakan `forEach`** untuk side effects (logging, update DOM)
3. **Gunakan `map/filter/reduce`** untuk transformasi data
4. **Hindari mutasi array** di dalam loop — gunakan method fungsional
5. **Pastikan kondisi `while` pasti akan berubah** — cegah infinite loop
6. **Hindari nested loop yang dalam** — kompleksitas O(n²) ke atas bisa sangat lambat

---

## 📁 File Contoh Kode

Lihat implementasi lengkap di [`index.js`](./index.js)

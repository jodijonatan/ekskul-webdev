# 🗂️ Array dalam JavaScript

Array adalah **struktur data** yang digunakan untuk menyimpan **kumpulan nilai** dalam satu variabel. Nilai-nilai tersebut tersusun secara berurutan dan diakses menggunakan **indeks** yang dimulai dari `0`.

---

## Membuat Array

```js
// Cara 1: Array literal (direkomendasikan)
const buah = ["Apel", "Mangga", "Pisang"];

// Cara 2: Array constructor
const angka = new Array(1, 2, 3, 4, 5);

// Array kosong
const kosong = [];

// Array dengan tipe data campuran
const campur = ["Halo", 42, true, null, { nama: "Budi" }];
```

---

## Mengakses Elemen Array

Array menggunakan **indeks berbasis 0**, artinya elemen pertama ada di indeks `0`.

```js
const warna = ["Merah", "Hijau", "Biru", "Kuning"];

console.log(warna[0]);  // "Merah"
console.log(warna[2]);  // "Biru"
console.log(warna[warna.length - 1]); // "Kuning" — elemen terakhir
console.log(warna[99]); // undefined — indeks tidak ada
```

### Diagram Indeks

```
Index:  [  0   ] [  1   ] [  2   ] [  3   ]
Array:  ["Merah","Hijau","Biru","Kuning"]
```

---

## Properti Array

| Properti | Deskripsi |
|---|---|
| `.length` | Jumlah elemen dalam array |

```js
const huruf = ["a", "b", "c", "d", "e"];
console.log(huruf.length); // 5
```

---

## Method Array — Menambah & Menghapus Elemen

### `push()` — Menambah di akhir

```js
const siswa = ["Andi", "Budi"];
siswa.push("Citra");
console.log(siswa); // ["Andi", "Budi", "Citra"]
```

### `pop()` — Menghapus dari akhir

```js
const buah = ["Apel", "Mangga", "Pisang"];
const dihapus = buah.pop();
console.log(dihapus); // "Pisang"
console.log(buah);    // ["Apel", "Mangga"]
```

### `unshift()` — Menambah di awal

```js
const angka = [2, 3, 4];
angka.unshift(1);
console.log(angka); // [1, 2, 3, 4]
```

### `shift()` — Menghapus dari awal

```js
const antrian = ["A", "B", "C"];
const pertama = antrian.shift();
console.log(pertama); // "A"
console.log(antrian); // ["B", "C"]
```

### `splice()` — Menambah, Menghapus, atau Mengganti di posisi tertentu

```js
const kota = ["Jakarta", "Bandung", "Surabaya", "Medan"];

// Menghapus 1 elemen di indeks 1
kota.splice(1, 1);
console.log(kota); // ["Jakarta", "Surabaya", "Medan"]

// Menambah elemen baru di indeks 1
kota.splice(1, 0, "Yogyakarta", "Bali");
console.log(kota); // ["Jakarta", "Yogyakarta", "Bali", "Surabaya", "Medan"]

// Mengganti elemen
kota.splice(0, 1, "Depok");
console.log(kota); // ["Depok", "Yogyakarta", "Bali", "Surabaya", "Medan"]
```

---

## Method Array — Pencarian

| Method | Deskripsi | Return |
|---|---|---|
| `indexOf(val)` | Indeks pertama dari nilai | `number` (-1 jika tidak ada) |
| `lastIndexOf(val)` | Indeks terakhir dari nilai | `number` |
| `includes(val)` | Apakah nilai ada? | `boolean` |
| `find(fn)` | Elemen pertama yang memenuhi kondisi | elemen / `undefined` |
| `findIndex(fn)` | Indeks elemen pertama yang memenuhi kondisi | `number` |

```js
const nilai = [70, 85, 90, 85, 60];

console.log(nilai.indexOf(85));      // 1
console.log(nilai.lastIndexOf(85));  // 3
console.log(nilai.includes(90));     // true
console.log(nilai.includes(100));    // false

const lulusUTS = nilai.find(n => n >= 75);
console.log(lulusUTS); // 85

const indexLulus = nilai.findIndex(n => n >= 75);
console.log(indexLulus); // 1
```

---

## Method Array — Transformasi

### `map()` — Mengubah setiap elemen, menghasilkan array baru

```js
const suhu = [0, 20, 37, 100];
const fahrenheit = suhu.map(c => (c * 9/5) + 32);
console.log(fahrenheit); // [32, 68, 98.6, 212]
```

### `filter()` — Menyaring elemen berdasarkan kondisi

```js
const produk = [
  { nama: "Buku", harga: 25000 },
  { nama: "Tas", harga: 150000 },
  { nama: "Pensil", harga: 5000 },
  { nama: "Laptop", harga: 8000000 },
];

const terjangkau = produk.filter(p => p.harga <= 100000);
console.log(terjangkau);
// [{ nama: "Buku", ... }, { nama: "Pensil", ... }]
```

### `reduce()` — Merangkum seluruh elemen menjadi satu nilai

```js
const pengeluaran = [50000, 25000, 75000, 30000];
const total = pengeluaran.reduce((akumulasi, nilai) => akumulasi + nilai, 0);
console.log(total); // 180000
```

### `forEach()` — Menjalankan fungsi untuk setiap elemen (tidak menghasilkan array baru)

```js
const nama = ["Arif", "Bella", "Citra"];
nama.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});
// 1. Arif
// 2. Bella
// 3. Citra
```

---

## Method Array — Pengurutan & Pembalik

### `sort()` — Mengurutkan elemen

```js
// Mengurutkan string (default: alphabetical)
const buah = ["Mangga", "Apel", "Pisang", "Durian"];
buah.sort();
console.log(buah); // ["Apel", "Durian", "Mangga", "Pisang"]

// Mengurutkan angka — WAJIB pakai fungsi komparator!
const angka = [10, 1, 21, 5, 100, 8];
angka.sort((a, b) => a - b); // ascending
console.log(angka); // [1, 5, 8, 10, 21, 100]

angka.sort((a, b) => b - a); // descending
console.log(angka); // [100, 21, 10, 8, 5, 1]
```

### `reverse()` — Membalik urutan elemen

```js
const huruf = ["a", "b", "c", "d"];
huruf.reverse();
console.log(huruf); // ["d", "c", "b", "a"]
```

---

## Method Array — Lainnya

### `slice()` — Mengambil sebagian array (tidak mengubah asli)

```js
const alphabet = ["a", "b", "c", "d", "e"];
const sebagian = alphabet.slice(1, 4); // dari indeks 1, sebelum indeks 4
console.log(sebagian);    // ["b", "c", "d"]
console.log(alphabet);    // ["a", "b", "c", "d", "e"] — tidak berubah
```

### `concat()` — Menggabungkan dua atau lebih array

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const gabungan = arr1.concat(arr2, arr3);
console.log(gabungan); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### `join()` — Menggabungkan elemen menjadi string

```js
const kata = ["Belajar", "JavaScript", "itu", "Menyenangkan"];
console.log(kata.join(" "));   // "Belajar JavaScript itu Menyenangkan"
console.log(kata.join("-"));   // "Belajar-JavaScript-itu-Menyenangkan"
console.log(kata.join(""));    // "BelajarJavaScriptituMenyenangkan"
```

### `flat()` & `flatMap()` — Meratakan array bersarang

```js
const bersarang = [1, [2, 3], [4, [5, 6]]];
console.log(bersarang.flat());    // [1, 2, 3, 4, [5, 6]]
console.log(bersarang.flat(2));   // [1, 2, 3, 4, 5, 6]

const kalimat = ["Hello World", "Halo Dunia"];
const kata = kalimat.flatMap(k => k.split(" "));
console.log(kata); // ["Hello", "World", "Halo", "Dunia"]
```

---

## Spread Operator & Destructuring

### Spread `...` — Menyebarkan elemen array

```js
const a = [1, 2, 3];
const b = [4, 5, 6];

// Menggabungkan array
const gabung = [...a, ...b];
console.log(gabung); // [1, 2, 3, 4, 5, 6]

// Menyalin array (bukan referensi)
const salinan = [...a];
salinan.push(99);
console.log(a);       // [1, 2, 3] — tidak terpengaruh
console.log(salinan); // [1, 2, 3, 99]
```

### Destructuring — Mengurai elemen array ke variabel

```js
const rgb = [255, 128, 0];
const [r, g, b] = rgb;
console.log(r, g, b); // 255 128 0

// Melewati elemen
const [juara1, , juara3] = ["Emas", "Perak", "Perunggu"];
console.log(juara1, juara3); // "Emas" "Perunggu"

// Rest pattern
const [kepala, ...ekor] = [1, 2, 3, 4, 5];
console.log(kepala); // 1
console.log(ekor);   // [2, 3, 4, 5]
```

---

## Array Multidimensi

Array yang berisi array lain (nested array).

```js
const matriks = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matriks[0]);     // [1, 2, 3]
console.log(matriks[1][2]);  // 6
console.log(matriks[2][0]);  // 7
```

---

## Ringkasan Method Array

| Kategori | Method |
|---|---|
| **Tambah/Hapus** | `push`, `pop`, `unshift`, `shift`, `splice` |
| **Pencarian** | `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex` |
| **Transformasi** | `map`, `filter`, `reduce`, `forEach` |
| **Urutan** | `sort`, `reverse` |
| **Pemotongan** | `slice` |
| **Penggabungan** | `concat`, `join`, `flat`, `flatMap` |
| **Pengecekan** | `every`, `some` |
| **Spread/Rest** | `...` (spread operator) |

---

## 📁 File Contoh Kode

Lihat implementasi lengkap di [`index.js`](./index.js)

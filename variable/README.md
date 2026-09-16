# 📌 Variabel (Variable) dalam JavaScript

Variabel adalah **wadah untuk menyimpan nilai** yang bisa digunakan dan dimanipulasi sepanjang program berjalan. Di JavaScript modern, terdapat tiga cara untuk mendeklarasikan variabel: `var`, `let`, dan `const`.

---

## Cara Mendeklarasikan Variabel

```js
var  namaVar  = nilai; // ❌ Cara lama, hindari digunakan
let  namaLet  = nilai; // ✅ Untuk nilai yang bisa berubah
const namaConst = nilai; // ✅ Untuk nilai yang tidak boleh berubah
```

---

## 1. `var` — Deklarasi Lama (Legacy)

`var` adalah cara lama mendeklarasikan variabel. Meskipun masih valid, **penggunaannya tidak disarankan** di kode modern karena perilakunya yang tidak konsisten.

### Karakteristik `var`

| Karakteristik | Keterangan |
|---|---|
| **Scope** | Function scope (bukan block scope) |
| **Hoisting** | Ya — dipindahkan ke atas, nilainya `undefined` |
| **Re-deklarasi** | Diizinkan |
| **Re-assignment** | Diizinkan |

```js
var pesan = "Halo";
var pesan = "Dunia"; // ✅ re-deklarasi diizinkan — ini bermasalah!
console.log(pesan);  // "Dunia"

// var TIDAK memiliki block scope
if (true) {
  var x = 10;
}
console.log(x); // 10 — bisa diakses di luar block! ⚠️
```

### Hoisting pada `var`

```js
console.log(nama); // undefined — tidak error, tapi nilainya tidak ada
var nama = "Budi";
console.log(nama); // "Budi"

// Di balik layar, JavaScript membaca kode di atas seperti ini:
// var nama;       ← deklarasi "diangkat" ke atas (hoisted)
// console.log(nama); → undefined
// nama = "Budi";
```

---

## 2. `let` — Deklarasi Modern (Direkomendasikan)

`let` diperkenalkan di ES6 (2015) dan merupakan pilihan utama untuk variabel yang nilainya **bisa berubah**.

### Karakteristik `let`

| Karakteristik | Keterangan |
|---|---|
| **Scope** | Block scope `{}` |
| **Hoisting** | Ya — tetapi masuk "Temporal Dead Zone" (TDZ) |
| **Re-deklarasi** | ❌ Tidak diizinkan dalam scope yang sama |
| **Re-assignment** | ✅ Diizinkan |

```js
let skor = 0;
skor = 100;   // ✅ re-assignment diizinkan
console.log(skor); // 100

// let memiliki block scope
if (true) {
  let y = 20;
  console.log(y); // 20 — bisa diakses di dalam block
}
// console.log(y); // ❌ ReferenceError: y is not defined
```

### Temporal Dead Zone (TDZ)

```js
// console.log(nilai); // ❌ ReferenceError — tidak bisa diakses sebelum deklarasi
let nilai = 50;
console.log(nilai); // 50
```

---

## 3. `const` — Konstanta (Nilai Tetap)

`const` digunakan untuk mendeklarasikan nilai yang **tidak akan berubah** (konstanta). Sama seperti `let`, `const` juga memiliki block scope.

### Karakteristik `const`

| Karakteristik | Keterangan |
|---|---|
| **Scope** | Block scope `{}` |
| **Hoisting** | Ya — tetapi masuk "Temporal Dead Zone" (TDZ) |
| **Re-deklarasi** | ❌ Tidak diizinkan |
| **Re-assignment** | ❌ Tidak diizinkan |
| **Harus diinisialisasi** | ✅ Wajib diberi nilai saat deklarasi |

```js
const PI = 3.14159;
const NAMA_APLIKASI = "Ekskul WebDev";

// PI = 3.14; // ❌ TypeError: Assignment to constant variable.
```

> **⚠️ Perhatian:** `const` berarti **referensinya** yang tidak bisa diubah, bukan isinya. Object dan Array yang dideklarasikan dengan `const` masih bisa dimodifikasi isinya!

```js
const siswa = { nama: "Rina", umur: 16 };
siswa.umur = 17;        // ✅ Mengubah properti — diizinkan
siswa.kelas = "XI";     // ✅ Menambah properti — diizinkan
// siswa = {};          // ❌ Mengganti referensi — tidak diizinkan

const nilai = [80, 90, 70];
nilai.push(95);          // ✅ Menambah elemen — diizinkan
nilai[0] = 85;           // ✅ Mengubah elemen — diizinkan
// nilai = [];           // ❌ Mengganti referensi — tidak diizinkan
```

---

## Perbandingan `var`, `let`, dan `const`

| Fitur | `var` | `let` | `const` |
|---|:---:|:---:|:---:|
| Scope | Function | Block | Block |
| Hoisting | ✅ (undefined) | ✅ (TDZ) | ✅ (TDZ) |
| Re-deklarasi | ✅ | ❌ | ❌ |
| Re-assignment | ✅ | ✅ | ❌ |
| Inisialisasi wajib | ❌ | ❌ | ✅ |
| Direkomendasikan | ❌ | ✅ | ✅ |

---

## Scope (Ruang Lingkup) Variabel

Scope menentukan **di mana sebuah variabel bisa diakses**.

### 1. Global Scope

Variabel yang dideklarasikan di luar semua fungsi dan blok.

```js
let appName = "WebDev"; // Global scope

function tampilkan() {
  console.log(appName); // ✅ Bisa diakses dari mana saja
}
tampilkan(); // "WebDev"
```

### 2. Function Scope

Variabel yang dideklarasikan di dalam fungsi hanya bisa diakses dalam fungsi tersebut.

```js
function hitungLuas(p, l) {
  let luas = p * l; // hanya ada di dalam fungsi ini
  return luas;
}

console.log(hitungLuas(5, 3)); // 15
// console.log(luas); // ❌ ReferenceError: luas is not defined
```

### 3. Block Scope

Variabel `let` dan `const` hanya ada dalam blok `{}` tempat mereka dideklarasikan.

```js
{
  let angka = 42;
  const nama = "Joni";
  console.log(angka); // 42
  console.log(nama);  // "Joni"
}
// console.log(angka); // ❌ ReferenceError
// console.log(nama);  // ❌ ReferenceError
```

### 4. Nested Scope (Closure)

Fungsi di dalam fungsi bisa mengakses variabel dari scope luarnya.

```js
function luar() {
  let pesan = "Saya dari scope luar!";

  function dalam() {
    console.log(pesan); // ✅ Bisa mengakses variabel scope luar
  }

  dalam();
}
luar(); // "Saya dari scope luar!"
```

---

## Aturan Penamaan Variabel

Nama variabel di JavaScript mengikuti aturan berikut:

### ✅ Yang Diizinkan

```js
let namaLengkap = "Budi";      // camelCase (konvensi utama JS)
let _nilai = 90;                // boleh diawali underscore
let $harga = 50000;             // boleh diawali tanda dollar
let nilai1 = 100;               // boleh mengandung angka (bukan di awal)
```

### ❌ Yang Tidak Diizinkan

```js
// let 1nilai = 100;    // ❌ tidak boleh diawali angka
// let nama-lengkap;    // ❌ tidak boleh menggunakan tanda hubung
// let let = 5;         // ❌ tidak boleh menggunakan reserved keyword
// let class = "XI";    // ❌ reserved keyword
```

### Konvensi Penamaan yang Umum Digunakan

| Konvensi | Contoh | Digunakan Untuk |
|---|---|---|
| **camelCase** | `namaLengkap`, `totalHarga` | Variabel & fungsi |
| **PascalCase** | `NamaMahasiswa`, `KelasRuang` | Class & Constructor |
| **SCREAMING_SNAKE_CASE** | `MAX_VALUE`, `API_URL` | Konstanta global |
| **_privateVar** | `_password` | Variabel "privat" (konvensi saja) |

---

## Hoisting — Penjelasan Mendalam

JavaScript memindahkan **deklarasi** variabel ke atas scope-nya sebelum kode dijalankan. Inilah yang disebut **hoisting**.

```
                ┌─────────────────────────────────────┐
                │           HOISTING BEHAVIOR         │
                ├────────────┬────────────┬────────────┤
                │    var     │    let     │   const    │
                ├────────────┼────────────┼────────────┤
                │  Hoisted   │  Hoisted   │  Hoisted   │
                │    ✅      │    ✅      │    ✅      │
                ├────────────┼────────────┼────────────┤
                │ Nilai awal │    TDZ     │    TDZ     │
                │ undefined  │  ❌ Error  │  ❌ Error  │
                └────────────┴────────────┴────────────┘
```

---

## Best Practices

1. **Gunakan `const` secara default** — jika nilai tidak perlu berubah
2. **Gunakan `let`** — jika nilai memang perlu diperbarui
3. **Hindari `var`** — perilakunya tidak konsisten dan rawan bug
4. **Gunakan nama yang deskriptif** — `totalHarga` lebih baik dari `x`
5. **Deklarasikan di awal scope** — hindari hoisting yang membingungkan
6. **Satu variabel, satu tujuan** — jangan gunakan variabel yang sama untuk hal berbeda

```js
// ❌ Buruk
var x = 10;
var x = "Halo"; // re-deklarasi membingungkan

// ✅ Baik
const MAX_PERCOBAAN = 3;
let percobaan = 0;
```

---

## 📁 File Contoh Kode

Lihat implementasi lengkap di [`index.js`](./index.js)

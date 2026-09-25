# ⚙️ Function (Fungsi) dalam JavaScript

Function (fungsi) adalah **blok kode terorganisir dan dapat digunakan kembali** (*reusable*) yang dirancang untuk melakukan tugas tertentu. Fungsi membantu menerapkan prinsip **DRY** (*Don't Repeat Yourself*), membuat program lebih modular, terstruktur, dan mudah dipelihara.

---

## Ringkasan Jenis & Konsep Fungsi

| Konsep | Sintaks Ringkas | Keterangan |
|---|---|---|
| **Function Declaration** | `function sapa() {}` | Di-hoist secara penuh, bisa dipanggil sebelum dideklarasikan |
| **Function Expression** | `const sapa = function() {}` | Disimpan dalam variabel, tidak di-hoist |
| **Arrow Function** | `const sapa = () => {}` | Sintaks ringkas ES6, tidak memiliki binding `this` sendiri |
| **Default Parameter** | `function sapa(nama = "Tamu") {}` | Nilai fallback jika argumen tidak diberikan |
| **Rest Parameter** | `function hitung(...angka) {}` | Mengumpulkan banyak argumen ke dalam sebuah array |
| **Higher-Order Function** | `function proses(fn) {}` | Menerima fungsi sebagai argumen atau mengembalikan fungsi |
| **Closure** | Fungsi dalam mengakses variabel luar | Mempertahankan akses ke scope induknya |

---

## 1. Function Declaration (Deklarasi Fungsi)

Cara standar dan paling umum untuk membuat fungsi di JavaScript.

```js
function namaFungsi(parameter1, parameter2) {
  // blok kode
  return hasil;
}
```

### Contoh Sederhana

```js
function sapa(nama) {
  return `Halo, ${nama}! Selamat datang.`;
}

console.log(sapa("Budi")); // Halo, Budi! Selamat datang.
console.log(sapa("Siti")); // Halo, Siti! Selamat datang.
```

### Karakteristik Hoisting pada Function Declaration

Function declaration **mengalami hoisting secara penuh**. Artinya, kamu dapat memanggil fungsi **sebelum baris deklarasinya**.

```js
// Memanggil fungsi SEBELUM dideklarasikan — Berhasil!
console.log(tambah(3, 4)); // 7

function tambah(a, b) {
  return a + b;
}
```

---

## 2. Function Expression (Ekspresi Fungsi)

Fungsi dibuat sebagai ekspresi dan disimpan ke dalam sebuah variabel. Biasanya berupa *anonymous function* (fungsi tanpa nama).

```js
const kali = function (a, b) {
  return a * b;
};

console.log(kali(5, 4)); // 20
```

> **⚠️ Perhatian:** Function expression **tidak bisa dipanggil sebelum dideklarasikan** karena variabelnya terikat aturan TDZ (*Temporal Dead Zone*) saat menggunakan `let` atau `const`.

```js
// console.log(bagi(10, 2)); // ❌ ReferenceError: Cannot access 'bagi' before initialization

const bagi = function (a, b) {
  return a / b;
};
```

---

## 3. Arrow Function (ES6)

Diperkenalkan pada ES6 (2015), menyediakan sintaks yang lebih ringkas dan modern untuk menulis fungsi.

```js
// Sintaks standar
const kurang = (a, b) => {
  return a - b;
};

// Sintaks ringkas (Implicit Return) jika hanya satu baris
const kuadrat = x => x * x;

// Tanpa parameter
const salamPagi = () => "Selamat Pagi!";

console.log(kurang(10, 3)); // 7
console.log(kuadrat(6));     // 36
console.log(salamPagi());    // Selamat Pagi!
```

### Mengembalikan Objek pada Arrow Function

Bila arrow function mengembalikan objek secara implisit, bungkus objek tersebut dengan tanda kurung `()`.

```js
// Kurung kurawal {} tanpa () akan dianggap sebagai blok fungsi!
const buatPengguna = (nama, usia) => ({ nama: nama, usia: usia });

console.log(buatPengguna("Citra", 17)); // { nama: 'Citra', usia: 17 }
```

---

## 4. Parameter dan Argumen

- **Parameter**: Variabel yang didefinisikan pada deklarasi fungsi.
- **Argumen**: Nilai nyata yang dikirimkan saat fungsi dipanggil.

```js
function perkenalan(nama, umur) { // ← nama & umur adalah parameter
  console.log(`Saya ${nama}, berusia ${umur} tahun.`);
}

perkenalan("Dewi", 16); // ← "Dewi" & 16 adalah argumen
```

### Default Parameter

Memberikan nilai bawaan jika argumen tidak diisi atau bernilai `undefined`.

```js
function pesanMakan(makanan, jumlah = 1) {
  return `Pesanan: ${jumlah} porsi ${makanan}`;
}

console.log(pesanMakan("Nasi Goreng"));    // Pesanan: 1 porsi Nasi Goreng
console.log(pesanMakan("Mie Ayam", 3));   // Pesanan: 3 porsi Mie Ayam
```

### Rest Parameter (`...args`)

Mengizinkan fungsi menerima jumlah argumen yang fleksibel dan mengumpulkannya ke dalam satu array.

```js
function hitungTotal(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}

console.log(hitungTotal(10, 20));          // 30
console.log(hitungTotal(5, 10, 15, 20));   // 50
console.log(hitungTotal(1, 2, 3, 4, 5, 6)); // 21
```

> **Catatan:** Rest parameter harus diletakkan pada posisi paling akhir dalam daftar parameter.

---

## 5. Return Value (Nilai Kembalian)

Kata kunci `return` digunakan untuk **mengembalikan nilai** dari fungsi ke pemanggilnya sekaligus **menghentikan eksekusi** fungsi tersebut.

```js
function hitungDiskon(harga, persen) {
  return harga - (harga * (persen / 100));
}

const hargaAkhir = hitungDiskon(100000, 20);
console.log(`Harga setelah diskon: Rp${hargaAkhir}`); // 80000
```

### Pola Early Return (Keluar Lebih Awal)

Menghindari penggunaan percabangan `if/else` bersarang yang terlalu dalam.

```js
function cekKelulusan(nilai) {
  // Validasi awal
  if (nilai < 0 || nilai > 100) {
    return "Nilai tidak valid!";
  }

  if (nilai >= 75) {
    return "Lulus 🎉";
  }

  return "Tidak Lulus 📚";
}

console.log(cekKelulusan(85));  // Lulus 🎉
console.log(cekKelulusan(60));  // Tidak Lulus 📚
console.log(cekKelulusan(110)); // Nilai tidak valid!
```

---

## 6. Scope dalam Fungsi

Scope menentukan di mana sebuah variabel dapat diakses di dalam kode.

### Scope Global vs Lokal

```js
const situs = "Ekskul Webdev"; // Global Scope

function tampilkanInfo() {
  const materi = "JavaScript Function"; // Local/Function Scope
  console.log(`${situs} - ${materi}`);  // Bisa akses global & lokal
}

tampilkanInfo();
// console.log(materi); // ❌ ReferenceError: materi is not defined
```

### Block Scope (`let` & `const`)

Variabel yang dideklarasikan dengan `let` atau `const` di dalam blok `{}` tidak dapat diakses dari luar blok tersebut.

```js
function hitungBonus(poin) {
  if (poin > 100) {
    let bonus = 50000;
    console.log(`Bonus didapat: ${bonus}`);
  }
  // console.log(bonus); // ❌ ReferenceError: bonus is not defined
}
```

---

## 7. Closure (Penutupan Lexical)

Closure terjadi ketika sebuah fungsi **mengingat dan mengakses variabel dari scope luarnya** meskipun fungsi luar tersebut telah selesai dieksekusi.

```js
function buatPenghitung() {
  let hitungan = 0; // variabel privat terlindungi dalam closure

  return function() {
    hitungan++;
    return hitungan;
  };
}

const counterA = buatPenghitung();
console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterA()); // 3

const counterB = buatPenghitung();
console.log(counterB()); // 1 (memiliki scope independen)
```

---

## 8. Callback & Higher-Order Functions

JavaScript memperlakukan fungsi sebagai **First-Class Citizens** (dapat disimpan dalam variabel, dikirim sebagai argumen, atau dikembalikan dari fungsi lain).

### Callback Function

Fungsi yang dikirimkan sebagai argumen ke fungsi lain untuk dijalankan kemudian.

```js
function prosesData(angka, callback) {
  const hasil = angka * 2;
  callback(hasil);
}

// Mengirimkan anonymous arrow function sebagai callback
prosesData(10, (hasil) => {
  console.log(`Hasil pemrosesan: ${hasil}`); // Hasil pemrosesan: 20
});
```

### Higher-Order Function (Contoh Pembuatan Pengali)

```js
function buatPengali(faktor) {
  return function (angka) {
    return angka * faktor;
  };
}

const kaliDua = buatPengali(2);
const kaliLima = buatPengali(5);

console.log(kaliDua(10));  // 20
console.log(kaliLima(10)); // 50
```

---

## 9. IIFE (Immediately Invoked Function Expression)

Fungsi yang langsung dieksekusi begitu didefinisikan. Umum digunakan untuk mengisolasi variabel agar tidak mencemari global scope.

```js
(function () {
  const secretKey = "API_KEY_12345";
  console.log("Aplikasi diinisialisasi secara aman.");
})();
// secretKey tidak dapat diakses dari luar
```

---

## 10. Perbandingan Jenis Fungsi

```
┌─────────────────────────┬──────────────┬──────────────────┬─────────────────┐
│       Kriteria          │ Declaration  │    Expression    │ Arrow Function  │
├─────────────────────────┼──────────────┼──────────────────┼─────────────────┤
│ Sintaks Ringkas         │ Cukup        │ Sedang           │ Sangat Ringkas  │
│ Hoisting Lengkap        │      ✅      │        ❌        │       ❌        │
│ Punya `this` Sendiri    │      ✅      │        ✅        │       ❌        │
│ Cocok untuk Method Objek│      ✅      │        ✅        │ ❌ (hati-hati)  │
│ Cocok untuk Callback    │ Kurang cocok │      Cocok       │  Sangat Cocok   │
└─────────────────────────┴──────────────┴──────────────────┴─────────────────┘
```

---

## Best Practices

1. **Gunakan nama yang deskriptif** yang diawali kata kerja (contoh: `hitungTotal()`, `ambilDataPengguna()`, `isEmailValid()`).
2. **Prinsip Single Responsibility:** Satu fungsi sebaiknya hanya bertanggung jawab atas satu tugas spesifik.
3. **Gunakan Arrow Function** untuk callback atau fungsi utilitas singkat.
4. **Gunakan Default Parameter** daripada melakukan pengecekan manual seperti `if (!nama) nama = "..."`.
5. **Gunakan Early Return** untuk membuat alur kode lebih lurus dan mudah dipahami tanpa percabangan nested.
6. **Batasi jumlah parameter**, idealnya maksimal 3–4 parameter. Jika membutuhkan lebih banyak, gunakan parameter objek (destructuring).

---

## 📁 File Contoh Kode

Lihat implementasi lengkap dan contoh siap jalankan di [`index.js`](./index.js)

# 📚 Ekskul Web Development — Materi JavaScript

Repositori ini berisi kumpulan materi pembelajaran **JavaScript** yang dirancang secara terstruktur dan progresif untuk kegiatan Ekstrakurikuler Web Development. Setiap topik dilengkapi dengan penjelasan konsep yang komprehensif serta contoh kode yang siap dijalankan.

---

## 🗂️ Struktur Repositori

```
ekskul-webdev/
├── data-type/
│   ├── README.md   ← Materi & penjelasan tipe data
│   └── index.js    ← Contoh kode tipe data
├── variable/
│   ├── README.md   ← Materi & penjelasan variabel
│   └── index.js    ← Contoh kode variabel
├── array/
│   ├── README.md   ← Materi & penjelasan array
│   └── index.js    ← Contoh kode array
├── looping/
│   ├── README.md   ← Materi & penjelasan looping
│   └── index.js    ← Contoh kode looping
└── README.md       ← Halaman ini
```

---

## 📖 Daftar Materi

### 1. 📦 [Tipe Data (Data Types)](./data-type/README.md)

Memahami berbagai jenis nilai yang dapat digunakan dalam JavaScript, mulai dari tipe primitif hingga non-primitif.

**Topik yang dibahas:**
- `String` — Teks dan manipulasi string
- `Number` — Bilangan dan operasi matematika
- `BigInt` — Bilangan bulat skala besar
- `Boolean` — Nilai logika `true` / `false`
- `undefined` & `null` — Nilai kosong dan perbedaannya
- `Symbol` — Identifier unik
- `Object` & `Array` — Struktur data kompleks
- `typeof` — Mengecek tipe data
- **Type Conversion** — Konversi eksplisit dan implisit

---

### 2. 📌 [Variabel (Variables)](./variable/README.md)

Memahami cara mendeklarasikan dan mengelola variabel dengan menggunakan `var`, `let`, dan `const` secara tepat.

**Topik yang dibahas:**
- `var` — Deklarasi lama dan risikonya
- `let` — Deklarasi modern untuk nilai yang dapat berubah
- `const` — Konstanta dan batasan referensi
- **Scope** — Global, Function, Block, dan Nested Scope
- **Hoisting** & Temporal Dead Zone (TDZ)
- Aturan dan konvensi penamaan variabel
- **Destructuring Assignment** — Array & Object

---

### 3. 🗂️ [Array](./array/README.md)

Memahami struktur data array untuk menyimpan dan mengelola kumpulan nilai secara terurut.

**Topik yang dibahas:**
- Membuat & mengakses elemen array
- Method tambah/hapus: `push`, `pop`, `unshift`, `shift`, `splice`
- Method pencarian: `indexOf`, `includes`, `find`, `findIndex`, `some`, `every`
- Method transformasi: `map`, `filter`, `reduce`, `forEach`
- Method lainnya: `sort`, `reverse`, `slice`, `concat`, `join`, `flat`
- **Spread Operator** & **Destructuring** Array
- **Array Multidimensi**

---

### 4. 🔁 [Looping (Perulangan)](./looping/README.md)

Memahami berbagai jenis perulangan untuk menjalankan kode secara efisien dan berulang.

**Topik yang dibahas:**
- `for` — Loop dengan jumlah iterasi diketahui
- `while` — Loop berbasis kondisi
- `do...while` — Loop minimal sekali
- `for...of` — Iterasi nilai iterable (Array, String, Map, Set)
- `for...in` — Iterasi key Object
- `forEach()` — Iterasi fungsional array
- **`break` & `continue`** — Kontrol alur perulangan
- **Nested Loop** — Loop bersarang
- **Label** — Kontrol nested loop
- **Iterasi Fungsional** (chaining `map`, `filter`, `reduce`)

---

## 🚀 Cara Menjalankan Contoh Kode

Pastikan [Node.js](https://nodejs.org/) telah terpasang di komputer kamu. Kemudian jalankan perintah berikut di terminal:

```bash
# Menjalankan contoh tipe data
node data-type/index.js

# Menjalankan contoh variabel
node variable/index.js

# Menjalankan contoh array
node array/index.js

# Menjalankan contoh looping
node looping/index.js
```

---

## 🛠️ Prasyarat

| Teknologi | Keterangan |
|---|---|
| [Node.js](https://nodejs.org/) v18+ | Runtime JavaScript |
| Teks Editor | [VS Code](https://code.visualstudio.com/) (disarankan) |
| Terminal | PowerShell, CMD, atau Bash |

---

## 📌 Panduan Belajar

> Disarankan untuk mempelajari materi secara berurutan agar pemahaman konsep terbangun secara sistematis.

1. **Baca** file `README.md` di setiap folder materi
2. **Amati** contoh kode di file `index.js`
3. **Jalankan** kode menggunakan Node.js dan perhatikan output-nya
4. **Modifikasi** kode sendiri untuk memahami lebih dalam
5. **Eksplorasi** konsep lebih lanjut melalui referensi di bawah

---

## 📚 Referensi

- [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Specification](https://tc39.es/ecma262/)

---

<p align="center">
  Dibuat dengan ❤️ untuk Ekskul Web Development
</p>

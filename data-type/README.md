# 📦 Tipe Data (Data Types) dalam JavaScript

Tipe data adalah **klasifikasi nilai** yang menentukan operasi apa yang bisa dilakukan terhadap suatu data. JavaScript adalah bahasa yang **dynamically typed**, artinya tipe data sebuah variabel ditentukan secara otomatis saat program berjalan dan bisa berubah.

---

## Kategori Tipe Data

JavaScript membagi tipe data menjadi dua kategori besar:

| Kategori | Tipe Data |
|---|---|
| **Primitif** | `String`, `Number`, `BigInt`, `Boolean`, `undefined`, `null`, `Symbol` |
| **Non-Primitif** | `Object` (termasuk `Array`, `Function`, `Date`, dll.) |

---

## 1. String

String adalah tipe data untuk menyimpan **teks**. Nilai string diapit oleh tanda kutip tunggal (`'`), kutip ganda (`"`), atau backtick (`` ` ``).

```js
let nama = "Jodi";
let sapa = 'Halo, Dunia!';
let template = `Selamat datang, ${nama}!`; // Template Literal
```

### Properti & Method Umum

| Method / Properti | Deskripsi |
|---|---|
| `.length` | Mendapatkan panjang string |
| `.toUpperCase()` | Mengubah ke huruf kapital |
| `.toLowerCase()` | Mengubah ke huruf kecil |
| `.includes(str)` | Mengecek apakah string mengandung `str` |
| `.slice(start, end)` | Memotong bagian string |
| `.trim()` | Menghapus spasi di awal dan akhir |
| `.replace(old, new)` | Mengganti bagian string |

---

## 2. Number

Number adalah tipe data untuk **bilangan**, baik bilangan bulat maupun bilangan desimal (floating-point).

```js
let umur = 17;
let tinggi = 170.5;
let suhu = -3;
let infinity = Infinity;
let bukan_angka = NaN; // Not a Number
```

> **Catatan:** JavaScript hanya memiliki satu tipe Number (tidak ada `int` atau `float` terpisah seperti di bahasa lain).

### Nilai Khusus

| Nilai | Deskripsi |
|---|---|
| `Infinity` | Hasil dari pembagian dengan nol positif |
| `-Infinity` | Hasil dari pembagian dengan nol negatif |
| `NaN` | Hasil dari operasi matematika yang tidak valid |

---

## 3. BigInt

BigInt digunakan untuk merepresentasikan **bilangan bulat yang sangat besar**, melebihi batas aman Number biasa (`Number.MAX_SAFE_INTEGER`).

```js
let angkaBesar = 9007199254740991n; // tambahkan 'n' di akhir
let hasilKali = angkaBesar * 2n;
```

---

## 4. Boolean

Boolean hanya memiliki dua nilai: **`true`** atau **`false`**. Sering digunakan dalam kondisi dan logika program.

```js
let isLoggedIn = true;
let isEmpty = false;

let isAdult = umur >= 18; // menghasilkan true atau false
```

### Nilai yang Dianggap `false` (Falsy Values)

`false`, `0`, `""` (string kosong), `null`, `undefined`, `NaN`

Semua nilai lainnya dianggap **truthy**.

---

## 5. undefined

`undefined` adalah nilai yang diberikan secara otomatis ketika sebuah variabel **sudah dideklarasikan tetapi belum diberi nilai**.

```js
let x;
console.log(x); // undefined

let obj = { nama: "Budi" };
console.log(obj.alamat); // undefined (properti tidak ada)
```

---

## 6. null

`null` adalah nilai yang **secara eksplisit menyatakan "kosong" atau "tidak ada nilai"**. Berbeda dengan `undefined`, `null` harus diset secara manual oleh programmer.

```js
let data = null; // sengaja dikosongkan
```

> **Perbedaan `null` vs `undefined`:**
> - `undefined`: variabel ada tapi belum diisi (otomatis oleh JavaScript)
> - `null`: variabel ada dan sengaja dikosongkan (disengaja oleh programmer)

---

## 7. Symbol

Symbol adalah tipe data yang menghasilkan nilai **unik dan tidak bisa diubah**. Biasanya digunakan sebagai identifier unik untuk properti objek.

```js
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false — setiap Symbol selalu unik
```

---

## 8. Object

Object adalah tipe data **non-primitif** yang menyimpan koleksi pasangan **key-value**. Object bisa menyimpan berbagai tipe data lain di dalamnya.

```js
let mahasiswa = {
  nama: "Andi",
  umur: 20,
  jurusan: "Informatika",
  aktif: true
};

console.log(mahasiswa.nama); // "Andi"
console.log(mahasiswa["umur"]); // 20
```

---

## 9. Array

Array adalah **object khusus** yang menyimpan kumpulan data secara terurut, diakses menggunakan indeks (dimulai dari `0`).

```js
let buah = ["Apel", "Mangga", "Pisang"];
console.log(buah[0]); // "Apel"
console.log(buah.length); // 3
```

---

## 10. Function

Function juga merupakan tipe data **object** di JavaScript (first-class function), artinya function bisa disimpan dalam variabel, dioper sebagai argumen, dll.

```js
let salam = function(nama) {
  return `Halo, ${nama}!`;
};

console.log(typeof salam); // "function"
```

---

## Mengecek Tipe Data dengan `typeof`

Gunakan operator `typeof` untuk mengetahui tipe data dari sebuah nilai.

```js
typeof "Halo"        // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object" ⚠️ (ini adalah bug historis JavaScript)
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"
typeof Symbol()      // "symbol"
typeof 10n           // "bigint"
```

> ⚠️ `typeof null` mengembalikan `"object"` — ini adalah **bug lama di JavaScript** yang sengaja tidak diperbaiki agar tidak merusak kode-kode yang sudah ada.

---

## Konversi Tipe Data (Type Conversion)

JavaScript sering melakukan konversi tipe data secara otomatis (**implicit**) atau bisa dilakukan secara manual (**explicit**).

### Konversi Eksplisit

```js
// Ke String
String(123)       // "123"
String(true)      // "true"
(123).toString()  // "123"

// Ke Number
Number("42")      // 42
Number(true)      // 1
Number(false)     // 0
Number("")        // 0
Number("abc")     // NaN
parseInt("42px")  // 42
parseFloat("3.14m") // 3.14

// Ke Boolean
Boolean(0)        // false
Boolean("")       // false
Boolean(null)     // false
Boolean(1)        // true
Boolean("hello")  // true
```

### Konversi Implisit (Type Coercion)

```js
"5" + 3      // "53"  (number dikonversi ke string karena +)
"5" - 3      // 2     (string dikonversi ke number karena -)
"5" * "2"    // 10    (keduanya dikonversi ke number)
true + 1     // 2     (true dikonversi ke 1)
false + 1    // 1     (false dikonversi ke 0)
```

---

## Ringkasan

| Tipe Data | Contoh | `typeof` |
|---|---|---|
| String | `"Halo"`, `'JS'` | `"string"` |
| Number | `42`, `3.14`, `NaN` | `"number"` |
| BigInt | `100n` | `"bigint"` |
| Boolean | `true`, `false` | `"boolean"` |
| undefined | `undefined` | `"undefined"` |
| null | `null` | `"object"` ⚠️ |
| Symbol | `Symbol("id")` | `"symbol"` |
| Object | `{}`, `[]` | `"object"` |
| Function | `function(){}` | `"function"` |

---

## 📁 File Contoh Kode

Lihat implementasi lengkap di [`index.js`](./index.js)

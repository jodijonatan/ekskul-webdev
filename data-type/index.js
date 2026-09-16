// =============================================================
//  DATA TYPES IN JAVASCRIPT — Contoh Kode Lengkap
//  Ekskul Web Development
// =============================================================

// ─────────────────────────────────────────────
// 1. STRING
// ─────────────────────────────────────────────
console.log("═══════════════════════════");
console.log("       1. STRING");
console.log("═══════════════════════════");

let namaDepan = "Jodi";
let namaBelakang = 'Jonatan';
let templateLiteral = `Nama lengkap: ${namaDepan} ${namaBelakang}`;

console.log(namaDepan);         // Jodi
console.log(namaBelakang);      // Jonatan
console.log(templateLiteral);   // Nama lengkap: Jodi Jonatan

// Method String
let kalimat = "  Belajar JavaScript itu Menyenangkan!  ";
console.log(kalimat.length);            // 40
console.log(kalimat.trim());            // "Belajar JavaScript itu Menyenangkan!"
console.log(kalimat.toUpperCase());     // "  BELAJAR JAVASCRIPT ITU MENYENANGKAN!  "
console.log(kalimat.toLowerCase());     // "  belajar javascript itu menyenangkan!  "
console.log(kalimat.includes("JavaScript")); // true
console.log(kalimat.trim().slice(0, 7));     // "Belajar"
console.log(kalimat.trim().replace("Menyenangkan", "Seru")); // "Belajar JavaScript itu Seru!"


// ─────────────────────────────────────────────
// 2. NUMBER
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       2. NUMBER");
console.log("═══════════════════════════");

let bilangaBulat = 42;
let bilanganDesimal = 3.14;
let bilanganNegatif = -100;
let hasilBagi = 10 / 0;    // Infinity
let hasilInvalid = "abc" * 2; // NaN

console.log(bilangaBulat);      // 42
console.log(bilanganDesimal);   // 3.14
console.log(bilanganNegatif);   // -100
console.log(hasilBagi);         // Infinity
console.log(hasilInvalid);      // NaN

// Cek nilai khusus
console.log(isNaN(hasilInvalid));       // true
console.log(isFinite(hasilBagi));       // false
console.log(Number.isInteger(42));      // true
console.log(Number.isInteger(3.14));    // false

// Operasi matematika
console.log(Math.round(3.7));   // 4
console.log(Math.floor(3.9));   // 3
console.log(Math.ceil(3.1));    // 4
console.log(Math.abs(-50));     // 50
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.pow(2, 10));   // 1024
console.log(Math.sqrt(144));    // 12


// ─────────────────────────────────────────────
// 3. BIGINT
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       3. BIGINT");
console.log("═══════════════════════════");

let angkaBesar = 9007199254740991n;         // Number.MAX_SAFE_INTEGER
let angkaLebihBesar = 9007199254740992n;    // Melebihi batas aman Number

console.log(angkaBesar);                    // 9007199254740991n
console.log(angkaBesar + 1n);               // 9007199254740992n
console.log(angkaLebihBesar * 2n);          // 18014398509481984n
console.log(typeof angkaBesar);             // "bigint"


// ─────────────────────────────────────────────
// 4. BOOLEAN
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       4. BOOLEAN");
console.log("═══════════════════════════");

let isLoggedIn = true;
let isEmpty = false;
let umur = 17;
let isAdult = umur >= 18;       // false
let isTeenager = umur >= 13 && umur <= 19; // true

console.log(isLoggedIn);    // true
console.log(isEmpty);       // false
console.log(isAdult);       // false
console.log(isTeenager);    // true

// Falsy Values
console.log("\n— Falsy Values —");
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Truthy Values
console.log("\n— Truthy Values —");
console.log(Boolean(true));      // true
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true  (array kosong sekalipun!)
console.log(Boolean({}));        // true  (object kosong sekalipun!)


// ─────────────────────────────────────────────
// 5. UNDEFINED
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       5. UNDEFINED");
console.log("═══════════════════════════");

let tidakDiisi;
console.log(tidakDiisi);           // undefined
console.log(typeof tidakDiisi);    // "undefined"

let profil = { nama: "Budi", umur: 20 };
console.log(profil.alamat);        // undefined (properti tidak ada)

function tanpaReturn() {
  // tidak mengembalikan nilai apapun
}
console.log(tanpaReturn());        // undefined


// ─────────────────────────────────────────────
// 6. NULL
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       6. NULL");
console.log("═══════════════════════════");

let dataPengguna = null; // Belum ada data, sengaja dikosongkan
console.log(dataPengguna);          // null
console.log(typeof dataPengguna);   // "object" ⚠️ (bug historis JavaScript)

// Perbedaan null vs undefined
let varA;       // undefined — belum diisi
let varB = null; // null — sengaja dikosongkan

console.log(varA == varB);   // true  (loose equality)
console.log(varA === varB);  // false (strict equality — tipe berbeda)


// ─────────────────────────────────────────────
// 7. SYMBOL
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       7. SYMBOL");
console.log("═══════════════════════════");

let simbol1 = Symbol("id");
let simbol2 = Symbol("id");

console.log(simbol1);               // Symbol(id)
console.log(simbol1 === simbol2);   // false — selalu unik!
console.log(typeof simbol1);        // "symbol"

// Penggunaan Symbol sebagai key properti object
let userId = Symbol("userId");
let user = {
  nama: "Andi",
  [userId]: 12345, // Symbol sebagai key
};
console.log(user.nama);      // "Andi"
console.log(user[userId]);   // 12345


// ─────────────────────────────────────────────
// 8. OBJECT
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       8. OBJECT");
console.log("═══════════════════════════");

let mahasiswa = {
  nama: "Sari",
  umur: 19,
  jurusan: "Desain Komunikasi Visual",
  aktif: true,
  alamat: {
    kota: "Bandung",
    provinsi: "Jawa Barat",
  },
  salam: function () {
    return `Halo, saya ${this.nama} dari ${this.jurusan}!`;
  },
};

console.log(mahasiswa.nama);              // "Sari"
console.log(mahasiswa["jurusan"]);        // "Desain Komunikasi Visual"
console.log(mahasiswa.alamat.kota);       // "Bandung"
console.log(mahasiswa.salam());           // "Halo, saya Sari dari Desain Komunikasi Visual!"

// Menambah & mengubah properti
mahasiswa.email = "sari@email.com"; // menambah properti baru
mahasiswa.umur = 20;                // mengubah nilai
console.log(mahasiswa.email);       // "sari@email.com"
console.log(mahasiswa.umur);        // 20

// Menghapus properti
delete mahasiswa.aktif;
console.log(mahasiswa.aktif);       // undefined

// Iterasi properti object
console.log("\n— Daftar Properti Mahasiswa —");
for (let key in mahasiswa) {
  if (typeof mahasiswa[key] !== "function") {
    console.log(`${key}: ${JSON.stringify(mahasiswa[key])}`);
  }
}


// ─────────────────────────────────────────────
// 9. ARRAY
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       9. ARRAY");
console.log("═══════════════════════════");

let buah = ["Apel", "Mangga", "Pisang", "Jeruk", "Anggur"];
console.log(buah);          // ["Apel", "Mangga", "Pisang", "Jeruk", "Anggur"]
console.log(buah[0]);       // "Apel"
console.log(buah[4]);       // "Anggur"
console.log(buah.length);   // 5

// Method Array
buah.push("Durian");        // Menambah di akhir
console.log(buah);

buah.pop();                 // Menghapus dari akhir
console.log(buah);

buah.unshift("Strawberry"); // Menambah di awal
console.log(buah);

buah.shift();               // Menghapus dari awal
console.log(buah);

// Iterasi Array
console.log("\n— Daftar Buah —");
buah.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

// map, filter, find
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let dikaliDua = angka.map((n) => n * 2);
console.log("\nDikali dua:", dikaliDua);

let genapSaja = angka.filter((n) => n % 2 === 0);
console.log("Genap saja:", genapSaja);

let lebihDariLima = angka.find((n) => n > 5);
console.log("Pertama yang > 5:", lebihDariLima);


// ─────────────────────────────────────────────
// 10. TYPEOF OPERATOR
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("    10. TYPEOF OPERATOR");
console.log("═══════════════════════════");

console.log(typeof "Halo");           // "string"
console.log(typeof 42);               // "number"
console.log(typeof 100n);             // "bigint"
console.log(typeof true);             // "boolean"
console.log(typeof undefined);        // "undefined"
console.log(typeof null);             // "object" ⚠️ bug historis!
console.log(typeof {});               // "object"
console.log(typeof []);               // "object"
console.log(typeof function () {});   // "function"
console.log(typeof Symbol("x"));      // "symbol"


// ─────────────────────────────────────────────
// 11. TYPE CONVERSION
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("   11. TYPE CONVERSION");
console.log("═══════════════════════════");

// Explicit Conversion
console.log("— Ke String —");
console.log(String(100));       // "100"
console.log(String(true));      // "true"
console.log(String(null));      // "null"
console.log((255).toString(16)); // "ff" (ke hexadecimal)

console.log("\n— Ke Number —");
console.log(Number("42"));      // 42
console.log(Number("3.14"));    // 3.14
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(""));        // 0
console.log(Number("abc"));     // NaN
console.log(parseInt("42px"));  // 42
console.log(parseFloat("3.14m")); // 3.14

console.log("\n— Ke Boolean —");
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false

// Implicit Conversion (Coercion)
console.log("\n— Implicit Conversion (Coercion) —");
console.log("5" + 3);      // "53" (number → string karena +)
console.log("5" - 3);      // 2    (string → number karena -)
console.log("5" * "2");    // 10   (keduanya → number)
console.log(true + 1);     // 2    (true → 1)
console.log(false + 1);    // 1    (false → 0)
console.log(null + 1);     // 1    (null → 0)
console.log(undefined + 1); // NaN

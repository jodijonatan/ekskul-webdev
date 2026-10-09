// =============================================================
//  ARROW FUNCTION IN JAVASCRIPT — Panduan & Contoh Kode Lengkap
//  Ekskul Web Development
// =============================================================

// ─────────────────────────────────────────────
// 1. PENGENALAN & PERBANDINGAN SINTAKS
// ─────────────────────────────────────────────
console.log("════════════════════════════════════════════");
console.log("  1. PENGENALAN SINTAKS ARROW FUNCTION");
console.log("════════════════════════════════════════════");

// A. Function Declaration (Tradisional)
function sapaanBiasa(nama) {
  return `Halo, ${nama}! (dari Function Declaration)`;
}

// B. Function Expression (Tradisional)
const sapaanExpression = function (nama) {
  return `Halo, ${nama}! (dari Function Expression)`;
};

// C. Arrow Function (Modern - ES6)
// Menggunakan panah fat arrow (=>)
const sapaanArrow = (nama) => {
  return `Halo, ${nama}! (dari Arrow Function)`;
};

console.log(sapaanBiasa("Andi"));
console.log(sapaanExpression("Budi"));
console.log(sapaanArrow("Citra"));


// ─────────────────────────────────────────────
// 2. VARIASI PENULISAN PARAMETER
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  2. VARIASI PENULISAN PARAMETER");
console.log("════════════════════════════════════════════");

// A. Tanpa parameter: WAJIB menggunakan tanda kurung kosong ()
const haloDunia = () => "Halo, selamat datang di Ekskul WebDev!";
console.log("Tanpa parameter:", haloDunia());

// B. Tepat satu parameter: tanda kurung () bersifat OPSIONAL
const kuadratkan = x => x * x;
console.log("Satu parameter (kuadrat 7):", kuadratkan(7));

// C. Lebih dari satu parameter: WAJIB menggunakan tanda kurung ()
const hitungLuasSegitiga = (alas, tinggi) => (alas * tinggi) / 2;
console.log("Dua parameter (luas segitiga a=10, t=6):", hitungLuasSegitiga(10, 6));

// D. Menggunakan default parameter: WAJIB menggunakan tanda kurung ()
const sambutPengguna = (nama = "Pengunjung", peran = "Siswa") =>
  `Selamat datang, ${nama}! Peran kamu: ${peran}`;
console.log(sambutPengguna());
console.log(sambutPengguna("Dewi", "Mentor"));


// ─────────────────────────────────────────────
// 3. IMPLICIT RETURN VS EXPLICIT RETURN
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  3. IMPLICIT RETURN VS EXPLICIT RETURN");
console.log("════════════════════════════════════════════");

// A. Implicit Return:
// Jika badan fungsi hanya terdiri dari 1 baris ekspresi,
// tanda kurung kurawal {} dan kata kunci `return` bisa dihilangkan.
const konversiCelsiusKeReamur = c => (4 / 5) * c;
console.log("Implicit Return (100°C ke °R):", konversiCelsiusKeReamur(100));

// B. Explicit Return:
// Jika memiliki lebih dari 1 baris kode (multi-line),
// WAJIB memakai kurung kurawal {} dan kata kunci `return`.
const hitungNilaiAkhir = (tugas, uts, uas) => {
  const bobotTugas = tugas * 0.2;
  const bobotUTS = uts * 0.3;
  const bobotUAS = uas * 0.5;
  const nilaiTotal = bobotTugas + bobotUTS + bobotUAS;
  return nilaiTotal;
};
console.log("Explicit Return (Nilai Akhir):", hitungNilaiAkhir(85, 78, 90));


// ─────────────────────────────────────────────
// 4. MENGEMBALIKAN NILAI OBJEK SECARA IMPLISIT
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  4. MENGEMBALIKAN OBJEK (IMPLICIT RETURN)");
console.log("════════════════════════════════════════════");

// ⚠️ PERHATIAN:
// JavaScript menganggap kurung kurawal `{}` sebagai awal blok kode fungsi,
// bukan pembuatan objek. Agar dianggap sebagai objek literal,
// bungkus objek dengan tanda kurung biasa `()`.

// ❌ CARA SALAH:
// const buatUserSalah = (id, nama) => { id: id, nama: nama }; // Menghasilkan undefined atau error sintaks!

// ✅ CARA BENAR:
const buatUser = (id, username, email) => ({
  id,
  username,
  email,
  dibuatPada: new Date().toISOString().split("T")[0]
});

const penggunaBaru = buatUser(101, "jodi_dev", "jodi@example.com");
console.log("Hasil return objek implisit:", penggunaBaru);


// ─────────────────────────────────────────────
// 5. ARROW FUNCTION PADA ARRAY METHOD (CALLBACK)
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  5. PENGGUNAAN PADA ARRAY METHOD (CALLBACK)");
console.log("════════════════════════════════════════════");

const daftarNilai = [60, 75, 88, 92, 55, 100, 70];

// A. map() — Transformasi nilai
const nilaiDitambahBonus = daftarNilai.map(nilai => Math.min(100, nilai + 5));
console.log("Nilai + Bonus 5:", nilaiDitambahBonus);

// B. filter() — Menyaring data
const nilaiLulus = daftarNilai.filter(nilai => nilai >= 75);
console.log("Nilai Lulus (>= 75):", nilaiLulus);

// C. find() — Menemukan elemen pertama yang cocok
const nilaiSempurna = daftarNilai.find(nilai => nilai === 100);
console.log("Nilai 100 pertama:", nilaiSempurna);

// D. reduce() — Akumulasi total nilai
const totalNilai = daftarNilai.reduce((akumulator, nilai) => akumulator + nilai, 0);
const rataRata = (totalNilai / daftarNilai.length).toFixed(1);
console.log(`Total Nilai: ${totalNilai} | Rata-rata: ${rataRata}`);

// E. Chaining (Rantai pemanggilan method) yang rapi
const totalNilaiSiswaLulus = daftarNilai
  .filter(nilai => nilai >= 75)
  .map(nilai => nilai + 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log("Total nilai siswa lulus setelah penyesuaian:", totalNilaiSiswaLulus);


// ─────────────────────────────────────────────
// 6. PERILAKU 'this' (LEXICAL THIS)
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  6. PERBEDAAN 'this': REGULAR VS ARROW");
console.log("════════════════════════════════════════════");

// Regular Function memiliki binding `this` dinamis (tergantung cara pemanggilan).
// Arrow Function TIDAK memiliki binding `this` sendiri — melainkan mewarisi `this`
// dari scope tempat fungsi didefinisikan (Lexical Scope).

const klubCoding = {
  namaKlub: "Web Dev Club",
  anggota: ["Ali", "Bella", "Candra"],

  // 1. Menggunakan Regular Function di method: `this` merujuk ke klubCoding
  tampilkanInfo() {
    console.log(`Selamat datang di ${this.namaKlub}!`);
  },

  // 2. Arrow function di dalam callback mempertahankan `this` dari method induk!
  sapaSemuaAnggota() {
    this.anggota.forEach(nama => {
      // Di sini `this.namaKlub` tetap merujuk ke klubCoding!
      // Pada fungsi regular biasa tanpa bind, `this` di dalam forEach akan undefined / global window.
      console.log(`- Halo ${nama}, kamu adalah anggota dari ${this.namaKlub}`);
    });
  },

  // 3. ⚠️ JANGAN jadikan Arrow Function sebagai METHOD OBJEK langsung
  // karena `this`-nya akan mengarah ke scope luar (global / module), bukan ke objek itu sendiri!
  contohSalahMethod: () => {
    // Di Node.js/browser, this di sini bukan klubCoding!
    return `Klub: ${this.namaKlub}`; // this.namaKlub akan undefined
  }
};

klubCoding.tampilkanInfo();
klubCoding.sapaSemuaAnggota();
console.log("Efek salah pakai arrow untuk method objek:", klubCoding.contohSalahMethod());


// ─────────────────────────────────────────────
// 7. ARROW FUNCTION TIDAK MEMILIKI 'arguments'
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  7. 'arguments' OBJECT VS REST PARAMETER");
console.log("════════════════════════════════════════════");

// Regular function memiliki objek khusus bernama `arguments`:
function fungsiBiasaDenganArguments() {
  console.log("Jumlah argumen pada fungsi biasa:", arguments.length);
  console.log("Argumen pertama:", arguments[0]);
}
fungsiBiasaDenganArguments("HTML", "CSS", "JS");

// Arrow function TIDAK memiliki objek `arguments`.
// Solusi modern yang bersih: gunakan REST PARAMETER (...args)
const fungsiArrowDenganRest = (...args) => {
  console.log("Rest parameter pada arrow function (Array asli):", args);
  return args.join(" -> ");
};
console.log("Hasil alur materi:", fungsiArrowDenganRest("HTML", "CSS", "JavaScript", "DOM"));


// ─────────────────────────────────────────────
// 8. TIDAK BISA DIGUNAKAN SEBAGAI CONSTRUCTOR
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  8. TIDAK DAPAT DIJADIKAN CONSTRUCTOR");
console.log("════════════════════════════════════════════");

// Regular function bisa dipakai sebagai konstruktor dengan operator `new`
function Mobil(merk) {
  this.merk = merk;
}
const mobilBaru = new Mobil("Toyota");
console.log("Instance Mobil biasa:", mobilBaru.merk);

// Arrow function TIDAK memiliki properti `prototype` dan akan melempar TypeError jika dipanggil dengan `new`
const Motor = (merk) => {
  this.merk = merk;
};

try {
  const motorBaru = new Motor("Honda"); // ❌ TypeError: Motor is not a constructor
} catch (error) {
  console.log("Pesan Error saat `new` pada Arrow Function:", error.message);
}


// ─────────────────────────────────────────────
// 9. STUDI KASUS NYATA: PENGELOLA DATA KURSUS
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  9. STUDI KASUS PRAKTIK: DATA PRODUK/KURSUS");
console.log("════════════════════════════════════════════");

const katalogKursus = [
  { id: 1, judul: "HTML & CSS Dasar", harga: 150000, siswa: 45, kategori: "Frontend" },
  { id: 2, judul: "JavaScript Modern", harga: 250000, siswa: 80, kategori: "Frontend" },
  { id: 3, judul: "Node.js & Express API", harga: 300000, siswa: 35, kategori: "Backend" },
  { id: 4, judul: "DOM Manipulation & Mini Project", harga: 180000, siswa: 60, kategori: "Frontend" },
];

// Helper functions menggunakan Arrow Function ringkas
const hitungDiskon = (harga, persen) => harga - (harga * persen) / 100;
const formatRupiah = nominal => `Rp${nominal.toLocaleString("id-ID")}`;

// Saring kursus Frontend dengan siswa > 50 lalu hitung harga promo (diskon 20%)
const ringkasanPromoFrontend = katalogKursus
  .filter(kursus => kursus.kategori === "Frontend" && kursus.siswa >= 50)
  .map(kursus => ({
    judul: kursus.judul,
    hargaAsli: formatRupiah(kursus.harga),
    hargaPromo: formatRupiah(hitungDiskon(kursus.harga, 20)),
    jumlahSiswa: `${kursus.siswa} orang`
  }));

console.log("Kursus Frontend Promo Terpilih:");
console.table(ringkasanPromoFrontend);

console.log("\n✅ Selesai mempelajari Arrow Function!");

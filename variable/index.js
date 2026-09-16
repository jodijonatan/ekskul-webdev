// =============================================================
//  VARIABLE IN JAVASCRIPT — Contoh Kode Lengkap
//  Ekskul Web Development
// =============================================================


// ─────────────────────────────────────────────
// 1. VAR — Cara Lama (Hindari!)
// ─────────────────────────────────────────────
console.log("═══════════════════════════");
console.log("    1. VAR (Legacy)");
console.log("═══════════════════════════");

var kota = "Bandung";
console.log(kota); // "Bandung"

// Re-deklarasi diizinkan (bermasalah!)
var kota = "Jakarta";
console.log(kota); // "Jakarta"

// var TIDAK punya block scope
if (true) {
  var bocor = "Saya bisa diakses di luar blok!";
}
console.log(bocor); // "Saya bisa diakses di luar blok!" ⚠️

// var TIDAK punya function scope
function tesVar() {
  var dalamFungsi = "Saya hanya ada di dalam fungsi";
  console.log(dalamFungsi); // ✅
}
tesVar();
// console.log(dalamFungsi); // ❌ ReferenceError


// ─────────────────────────────────────────────
// 2. HOISTING pada VAR
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("  2. HOISTING pada VAR");
console.log("═══════════════════════════");

// Mengakses sebelum deklarasi — tidak error, tapi undefined
console.log(pesanHoisted); // undefined (bukan error!)
var pesanHoisted = "Saya sudah dideklarasikan";
console.log(pesanHoisted); // "Saya sudah dideklarasikan"

// JavaScript membaca kode di atas seolah-olah:
// var pesanHoisted;                    ← hoisted ke atas
// console.log(pesanHoisted);           → undefined
// pesanHoisted = "Saya sudah dideklarasikan";
// console.log(pesanHoisted);           → "Saya sudah dideklarasikan"


// ─────────────────────────────────────────────
// 3. LET — Deklarasi Modern
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       3. LET");
console.log("═══════════════════════════");

let skor = 0;
console.log("Skor awal:", skor); // 0

skor = 75;
console.log("Skor diperbarui:", skor); // 75

skor += 25;
console.log("Skor setelah bonus:", skor); // 100

// let memiliki block scope
if (true) {
  let skorBlok = 999;
  console.log("Di dalam blok:", skorBlok); // 999
}
// console.log(skorBlok); // ❌ ReferenceError: skorBlok is not defined

// Re-deklarasi TIDAK diizinkan
// let skor = 200; // ❌ SyntaxError: Identifier 'skor' has already been declared

// Contoh penggunaan let dalam loop
console.log("\n— let dalam for loop —");
for (let i = 1; i <= 5; i++) {
  console.log(`Iterasi ke-${i}, nilai i = ${i}`);
}
// console.log(i); // ❌ ReferenceError — i hanya ada dalam loop


// ─────────────────────────────────────────────
// 4. CONST — Konstanta
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       4. CONST");
console.log("═══════════════════════════");

const PI = 3.14159265358979;
const NAMA_SEKOLAH = "SMA Nusantara";
const TAHUN_AJARAN = 2025;

console.log(`PI = ${PI}`);
console.log(`Sekolah: ${NAMA_SEKOLAH}`);
console.log(`Tahun Ajaran: ${TAHUN_AJARAN}`);

// PI = 3.14; // ❌ TypeError: Assignment to constant variable.

// const dengan Object — isi bisa diubah, tapi referensi tidak!
console.log("\n— const dengan Object —");
const profil = {
  nama: "Rina Sari",
  kelas: "X",
  umur: 15,
};

console.log("Sebelum diubah:", profil);

profil.kelas = "XI";         // ✅ Mengubah properti
profil.umur = 16;            // ✅ Mengubah properti
profil.hobi = "Menggambar";  // ✅ Menambah properti baru

console.log("Setelah diubah:", profil);

// profil = { nama: "Budi" }; // ❌ TypeError — referensi tidak bisa diganti

// const dengan Array — elemen bisa diubah, tapi referensi tidak!
console.log("\n— const dengan Array —");
const mataPelajaran = ["Matematika", "Fisika", "Kimia"];
console.log("Sebelum:", mataPelajaran);

mataPelajaran.push("Biologi");   // ✅ Menambah elemen
mataPelajaran[0] = "Bahasa Indonesia"; // ✅ Mengubah elemen
mataPelajaran.pop();             // ✅ Menghapus elemen terakhir

console.log("Setelah:", mataPelajaran);
// mataPelajaran = []; // ❌ TypeError — referensi tidak bisa diganti


// ─────────────────────────────────────────────
// 5. SCOPE — Global, Function, Block
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("       5. SCOPE");
console.log("═══════════════════════════");

// ── Global Scope ──
let aplikasi = "Ekskul WebDev"; // Bisa diakses dari mana saja

function infoAplikasi() {
  console.log("Dari dalam fungsi:", aplikasi); // ✅ Akses variabel global
}
infoAplikasi();
console.log("Dari global:", aplikasi); // ✅

// ── Function Scope ──
console.log("\n— Function Scope —");
function hitungPersegi(sisi) {
  const luas = sisi * sisi;            // Hanya ada di dalam fungsi ini
  const keliling = 4 * sisi;
  return { luas, keliling };
}

const hasil = hitungPersegi(8);
console.log(`Luas: ${hasil.luas}`);         // 64
console.log(`Keliling: ${hasil.keliling}`); // 32
// console.log(luas);    // ❌ ReferenceError

// ── Block Scope ──
console.log("\n— Block Scope —");
let status = "Lulus";

if (status === "Lulus") {
  let pesan = `Selamat! Kamu ${status}.`; // Hanya ada dalam blok ini
  const emoji = "🎉";
  console.log(pesan + " " + emoji); // ✅
}
// console.log(pesan); // ❌ ReferenceError
// console.log(emoji); // ❌ ReferenceError

// ── Nested Scope (Closure) ──
console.log("\n— Nested Scope (Closure) —");
function buatPenyambut(bahasa) {
  const prefix = bahasa === "id" ? "Halo" : "Hello"; // scope luar

  function sapa(nama) {
    // Bisa mengakses 'prefix' dari scope luar
    return `${prefix}, ${nama}!`;
  }

  return sapa;
}

const sapaBahasaIndonesia = buatPenyambut("id");
const sapaBahasaInggris = buatPenyambut("en");

console.log(sapaBahasaIndonesia("Budi"));  // "Halo, Budi!"
console.log(sapaBahasaInggris("Budi"));    // "Hello, Budi!"


// ─────────────────────────────────────────────
// 6. TEMPORAL DEAD ZONE (TDZ)
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("  6. TEMPORAL DEAD ZONE");
console.log("═══════════════════════════");

// Dengan var — tidak error (nilai undefined)
console.log(varTest); // undefined
var varTest = "var boleh diakses setelah hoisting";

// Dengan let/const — ERROR jika diakses sebelum deklarasi
// console.log(letTest); // ❌ ReferenceError: Cannot access 'letTest' before initialization
let letTest = "let tidak boleh diakses sebelum deklarasi";
console.log(letTest); // ✅ "let tidak boleh diakses sebelum deklarasi"


// ─────────────────────────────────────────────
// 7. ATURAN PENAMAAN VARIABEL
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("  7. ATURAN PENAMAAN");
console.log("═══════════════════════════");

// ✅ Nama yang valid
let namaLengkap = "Andi Pratama";   // camelCase — konvensi JS
let _nilaiRahasia = 100;            // boleh diawali underscore
let $hargaItem = 75000;             // boleh diawali dollar
let jumlah2Barang = 5;              // angka boleh, asal bukan di awal

// ✅ Konvensi berdasarkan konteks
const MAX_LOGIN_PERCOBAAN = 3;      // SCREAMING_SNAKE_CASE untuk konstanta
class ProfilSiswa {}                // PascalCase untuk Class (tidak dijalankan di sini)

// Case-sensitive: variabel berikut BERBEDA satu sama lain
let nilai = 80;
let Nilai = 90;
let NILAI = 100;
console.log(nilai, Nilai, NILAI); // 80 90 100


// ─────────────────────────────────────────────
// 8. MULTIPLE ASSIGNMENT & DESTRUCTURING
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("  8. MULTIPLE & DESTRUCTURING");
console.log("═══════════════════════════");

// Deklarasi beberapa variabel sekaligus
let a = 1, b = 2, c = 3;
console.log(a, b, c); // 1 2 3

// Swap nilai dua variabel
let x = "Apel";
let y = "Mangga";
console.log(`Sebelum swap: x=${x}, y=${y}`);

[x, y] = [y, x]; // Destructuring assignment
console.log(`Setelah swap: x=${x}, y=${y}`);

// Array Destructuring
console.log("\n— Array Destructuring —");
const koordinat = [10, 20, 30];
const [posX, posY, posZ] = koordinat;
console.log(`x: ${posX}, y: ${posY}, z: ${posZ}`); // x: 10, y: 20, z: 30

// Dengan skip elemen
const [pertama, , ketiga] = ["Emas", "Perak", "Perunggu"];
console.log(`${pertama} dan ${ketiga}`); // "Emas dan Perunggu"

// Object Destructuring
console.log("\n— Object Destructuring —");
const siswa = {
  namaSiswa: "Dewi",
  kelasSiswa: "XII IPA",
  nilaiSiswa: 95,
};

const { namaSiswa, kelasSiswa, nilaiSiswa } = siswa;
console.log(`${namaSiswa} — Kelas ${kelasSiswa} — Nilai: ${nilaiSiswa}`);

// Destructuring dengan rename
const { namaSiswa: namaAsli, nilaiSiswa: skorAkhir } = siswa;
console.log(`${namaAsli} mendapat skor ${skorAkhir}`);

// Destructuring dengan default value
const { kota: kotaAsal = "Tidak Diketahui" } = siswa;
console.log(`Kota asal: ${kotaAsal}`); // "Tidak Diketahui"


// ─────────────────────────────────────────────
// 9. BEST PRACTICES — CONTOH NYATA
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════");
console.log("    9. BEST PRACTICES");
console.log("═══════════════════════════");

// ── Contoh: Sistem Penilaian Siswa ──

const NILAI_KELULUSAN = 75;   // const — nilai ini tidak akan berubah
const NAMA_MAPEL = "Pemrograman Web";

function hitungNilaiAkhir(tugas, ujianTengah, ujianAkhir) {
  // Gunakan const karena nilai-nilai ini tidak perlu diubah setelah dihitung
  const bobotTugas = 0.3;
  const bobotUTS = 0.3;
  const bobotUAS = 0.4;

  const nilaiAkhir =
    tugas * bobotTugas + ujianTengah * bobotUTS + ujianAkhir * bobotUAS;

  // Gunakan let karena status bisa bervariasi
  let statusKelulusan;
  let grade;

  if (nilaiAkhir >= 90) {
    statusKelulusan = "Lulus dengan Pujian";
    grade = "A";
  } else if (nilaiAkhir >= NILAI_KELULUSAN) {
    statusKelulusan = "Lulus";
    grade = nilaiAkhir >= 85 ? "B" : "C";
  } else {
    statusKelulusan = "Tidak Lulus";
    grade = "D";
  }

  return { nilaiAkhir: nilaiAkhir.toFixed(2), statusKelulusan, grade };
}

// Data siswa
const dataSiswa = [
  { nama: "Arif", tugas: 90, uts: 85, uas: 92 },
  { nama: "Bella", tugas: 70, uts: 65, uas: 72 },
  { nama: "Citra", tugas: 95, uts: 98, uas: 97 },
];

console.log(`\n📊 Laporan Nilai — ${NAMA_MAPEL}`);
console.log("─".repeat(50));

for (const s of dataSiswa) {
  const { nilaiAkhir, statusKelulusan, grade } = hitungNilaiAkhir(
    s.tugas,
    s.uts,
    s.uas
  );
  console.log(`${s.nama.padEnd(10)} | Nilai: ${nilaiAkhir} | Grade: ${grade} | ${statusKelulusan}`);
}

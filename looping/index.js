// =============================================================
//  LOOPING IN JAVASCRIPT — Contoh Kode Lengkap
//  Ekskul Web Development
// =============================================================


// ─────────────────────────────────────────────
// 1. FOR LOOP
// ─────────────────────────────────────────────
console.log("═══════════════════════════════");
console.log("        1. FOR LOOP");
console.log("═══════════════════════════════");

// Dasar
console.log("— Dasar —");
for (let i = 1; i <= 5; i++) {
  console.log(`Iterasi ke-${i}`);
}

// Loop mundur
console.log("\n— Loop mundur —");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Dengan step 2 (loncat dua)
console.log("\n— Step 2 (bilangan genap) —");
for (let i = 0; i <= 10; i += 2) {
  process.stdout.write(i + " "); // 0 2 4 6 8 10
}
console.log();

// Iterasi array dengan for klasik
console.log("\n— Iterasi Array —");
const buah = ["Apel", "Mangga", "Pisang", "Jeruk", "Anggur"];
for (let i = 0; i < buah.length; i++) {
  console.log(`  buah[${i}] = "${buah[i]}"`);
}

// Menghitung akumulasi
console.log("\n— Akumulasi —");
const angka = [10, 25, 7, 42, 18, 33];
let total = 0;
for (let i = 0; i < angka.length; i++) {
  total += angka[i];
}
console.log("Array:", angka);
console.log("Total:", total);
console.log("Rata-rata:", (total / angka.length).toFixed(2));


// ─────────────────────────────────────────────
// 2. WHILE LOOP
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("       2. WHILE LOOP");
console.log("═══════════════════════════════");

// Dasar
console.log("— Hitung mundur —");
let hitung = 5;
while (hitung > 0) {
  console.log(`  ${hitung}...`);
  hitung--;
}
console.log("  🚀 Luncur!");

// Simulasi input pengguna
console.log("\n— Simulasi ATM —");
let saldo = 1000000;
const penarikan = [200000, 150000, 300000, 500000]; // simulasi penarikan
let indeks = 0;

while (saldo > 0 && indeks < penarikan.length) {
  const jumlah = penarikan[indeks];
  if (jumlah > saldo) {
    console.log(`  ❌ Penarikan Rp${jumlah.toLocaleString("id-ID")} gagal — saldo tidak cukup`);
    break;
  }
  saldo -= jumlah;
  console.log(`  ✅ Tarik Rp${jumlah.toLocaleString("id-ID")} | Saldo: Rp${saldo.toLocaleString("id-ID")}`);
  indeks++;
}
console.log(`  Saldo akhir: Rp${saldo.toLocaleString("id-ID")}`);

// Mencari angka dengan while
console.log("\n— Mencari bilangan prima pertama > 50 —");
let kandidat = 51;
while (true) {
  let prima = true;
  for (let i = 2; i <= Math.sqrt(kandidat); i++) {
    if (kandidat % i === 0) {
      prima = false;
      break;
    }
  }
  if (prima) {
    console.log(`  Bilangan prima pertama > 50 adalah: ${kandidat}`);
    break;
  }
  kandidat++;
}


// ─────────────────────────────────────────────
// 3. DO...WHILE LOOP
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("     3. DO...WHILE LOOP");
console.log("═══════════════════════════════");

// Dasar — dijalankan minimal sekali
console.log("— Dijalankan minimal sekali —");
let kondisiSalah = false;
do {
  console.log("  Kode ini jalan meski kondisi langsung false!");
} while (kondisiSalah);

// Simulasi menu
console.log("\n— Simulasi Pilihan Menu —");
const menu = ["Lihat Nilai", "Input Nilai", "Cetak Laporan", "Keluar"];
let pilihan = 0;

do {
  console.log("\n  ═══ MENU UTAMA ═══");
  menu.forEach((item, i) => console.log(`  ${i + 1}. ${item}`));
  pilihan++;
  console.log(`  [Simulasi] Memilih opsi ${pilihan}: ${menu[pilihan - 1]}`);
} while (pilihan < menu.length - 1); // berhenti sebelum "Keluar"
console.log("  Program selesai.");


// ─────────────────────────────────────────────
// 4. FOR...OF LOOP
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("      4. FOR...OF LOOP");
console.log("═══════════════════════════════");

// Iterasi Array
console.log("— Iterasi Array —");
const kota = ["Jakarta", "Bandung", "Surabaya", "Medan", "Bali"];
for (const c of kota) {
  console.log(`  ✈️  ${c}`);
}

// Iterasi String (karakter per karakter)
console.log("\n— Iterasi String —");
const kata = "EKSKUL";
for (const huruf of kata) {
  process.stdout.write(`[${huruf}]`);
}
console.log();

// Iterasi dengan entries() (mendapatkan indeks + nilai)
console.log("\n— for...of dengan entries() —");
const mapel = ["Matematika", "Fisika", "Kimia", "Biologi"];
for (const [index, pelajaran] of mapel.entries()) {
  console.log(`  ${index + 1}. ${pelajaran}`);
}

// Iterasi Array of Objects
console.log("\n— Iterasi Array of Objects —");
const siswa = [
  { nama: "Arif", nilai: 88 },
  { nama: "Bella", nilai: 72 },
  { nama: "Citra", nilai: 95 },
];

for (const { nama, nilai } of siswa) {
  const status = nilai >= 75 ? "✅" : "❌";
  console.log(`  ${status} ${nama}: ${nilai}`);
}

// Iterasi Set
console.log("\n— Iterasi Set (nilai unik) —");
const unik = new Set([1, 2, 2, 3, 3, 3, 4]);
for (const val of unik) {
  process.stdout.write(val + " "); // 1 2 3 4
}
console.log();

// Iterasi Map
console.log("\n— Iterasi Map —");
const ibukota = new Map([
  ["Indonesia", "Jakarta"],
  ["Jepang", "Tokyo"],
  ["Perancis", "Paris"],
]);
for (const [negara, ibu] of ibukota) {
  console.log(`  ${negara} → ${ibu}`);
}


// ─────────────────────────────────────────────
// 5. FOR...IN LOOP
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("      5. FOR...IN LOOP");
console.log("═══════════════════════════════");

// Iterasi Object
const profil = {
  nama: "Rina Sari",
  kelas: "XI IPA",
  umur: 16,
  hobi: "Membaca",
  kota: "Bandung",
};

console.log("— Properti Object —");
for (const key in profil) {
  console.log(`  ${key.padEnd(10)}: ${profil[key]}`);
}

// Menyalin object dengan for...in
console.log("\n— Salin Object —");
const profilBaru = {};
for (const key in profil) {
  profilBaru[key] = profil[key];
}
profilBaru.nama = "Budi Santoso"; // hanya mengubah salinan
console.log("Original:", profil.nama);  // "Rina Sari" — tidak berubah
console.log("Salinan:", profilBaru.nama); // "Budi Santoso"


// ─────────────────────────────────────────────
// 6. FOREACH METHOD
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("     6. FOREACH METHOD");
console.log("═══════════════════════════════");

const produk = [
  { kode: "P001", nama: "Buku Tulis", harga: 8000, stok: 50 },
  { kode: "P002", nama: "Pulpen", harga: 3000, stok: 100 },
  { kode: "P003", nama: "Penghapus", harga: 2000, stok: 75 },
  { kode: "P004", nama: "Penggaris", harga: 5000, stok: 30 },
];

console.log("— Daftar Produk —");
console.log("Kode  | Nama             | Harga        | Stok");
console.log("─".repeat(50));

produk.forEach((p, i) => {
  const hargaFormatted = `Rp${p.harga.toLocaleString("id-ID")}`.padEnd(14);
  console.log(`${p.kode}  | ${p.nama.padEnd(16)} | ${hargaFormatted} | ${p.stok}`);
});

// Hitung total nilai stok
let totalNilaiStok = 0;
produk.forEach(p => {
  totalNilaiStok += p.harga * p.stok;
});
console.log(`\nTotal nilai stok: Rp${totalNilaiStok.toLocaleString("id-ID")}`);


// ─────────────────────────────────────────────
// 7. BREAK & CONTINUE
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("     7. BREAK & CONTINUE");
console.log("═══════════════════════════════");

// break — hentikan loop
console.log("— break —");
const daftarNilai = [78, 85, 60, 91, 55, 88, 72];
let indexGagal = -1;

for (let i = 0; i < daftarNilai.length; i++) {
  if (daftarNilai[i] < 60) {
    indexGagal = i;
    break; // hentikan pencarian setelah ditemukan
  }
}
console.log(`Nilai di bawah 60 pertama ditemukan di indeks: ${indexGagal}`);
console.log(`Nilainya: ${daftarNilai[indexGagal]}`);

// continue — lewati iterasi
console.log("\n— continue (lewati nilai < 75) —");
for (const n of daftarNilai) {
  if (n < 75) continue; // lewati yang remedial
  console.log(`  ✅ ${n}`);
}

// continue untuk filter angka ganjil
console.log("\n— Bilangan genap dari 1-10 —");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  process.stdout.write(i + " "); // 2 4 6 8 10
}
console.log();


// ─────────────────────────────────────────────
// 8. NESTED LOOP (LOOP BERSARANG)
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("      8. NESTED LOOP");
console.log("═══════════════════════════════");

// Tabel perkalian
console.log("— Tabel Perkalian 1-5 —");
process.stdout.write("     ");
for (let i = 1; i <= 5; i++) process.stdout.write(`  ${i}`.padStart(4));
console.log();
console.log("─".repeat(25));

for (let i = 1; i <= 5; i++) {
  process.stdout.write(`${i}  |`);
  for (let j = 1; j <= 5; j++) {
    process.stdout.write(`${(i * j)}`.padStart(4));
  }
  console.log();
}

// Pola bintang segitiga
console.log("\n— Pola Segitiga —");
for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "⭐ ";
  }
  console.log(baris);
}

// Iterasi matriks 2D
console.log("\n— Matriks Nilai Siswa —");
const nilaiUjian = [
  //  Mtk  Fis  Kim
  [88, 75, 92],  // Arif
  [72, 80, 68],  // Bella
  [95, 91, 89],  // Citra
];
const namaMapel = ["Matematika", "Fisika", "Kimia"];
const namaSiswa = ["Arif", "Bella", "Citra"];

process.stdout.write("         ");
namaMapel.forEach(m => process.stdout.write(m.padStart(12)));
console.log();

for (let i = 0; i < nilaiUjian.length; i++) {
  process.stdout.write(namaSiswa[i].padEnd(10));
  for (let j = 0; j < nilaiUjian[i].length; j++) {
    process.stdout.write(String(nilaiUjian[i][j]).padStart(12));
  }
  console.log();
}


// ─────────────────────────────────────────────
// 9. LABEL (KONTROL NESTED LOOP)
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("          9. LABEL");
console.log("═══════════════════════════════");

// break label — keluar dari loop luar
console.log("— break label —");
pencarianLabel: for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (i === 2 && j === 2) {
      console.log(`  Ditemukan di i=${i}, j=${j}! Menghentikan semua loop.`);
      break pencarianLabel;
    }
    console.log(`  i=${i}, j=${j}`);
  }
}

// continue label — lanjut iterasi berikutnya di loop luar
console.log("\n— continue label —");
luarLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log(`  (j=2 terdeteksi di i=${i}, lanjut ke i berikutnya)`);
      continue luarLoop;
    }
    console.log(`  i=${i}, j=${j}`);
  }
}


// ─────────────────────────────────────────────
// 10. ITERASI FUNGSIONAL (CHAINING)
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("  10. ITERASI FUNGSIONAL");
console.log("═══════════════════════════════");

const dataMahasiswa = [
  { nama: "Andi", jurusan: "TI", ipk: 3.7, semester: 4 },
  { nama: "Budi", jurusan: "SI", ipk: 2.9, semester: 6 },
  { nama: "Citra", jurusan: "TI", ipk: 3.9, semester: 2 },
  { nama: "Doni", jurusan: "DKV", ipk: 3.5, semester: 4 },
  { nama: "Eva", jurusan: "SI", ipk: 3.1, semester: 6 },
  { nama: "Fajar", jurusan: "TI", ipk: 2.7, semester: 8 },
];

// Chaining: filter → map → sort
const mahasiswaBerprestasi = dataMahasiswa
  .filter(m => m.ipk >= 3.5)              // Hanya IPK >= 3.5
  .map(m => ({                            // Tambahkan predikat
    ...m,
    predikat: m.ipk >= 3.8 ? "Cum Laude" : "Sangat Memuaskan",
  }))
  .sort((a, b) => b.ipk - a.ipk);         // Urutkan dari IPK tertinggi

console.log("🏆 Mahasiswa Berprestasi (IPK ≥ 3.5)");
console.log("─".repeat(55));
mahasiswaBerprestasi.forEach((m, i) => {
  console.log(`${i + 1}. ${m.nama.padEnd(8)} | ${m.jurusan} | IPK: ${m.ipk} | ${m.predikat}`);
});

// Reduce untuk statistik per jurusan
const statsPerJurusan = dataMahasiswa.reduce((acc, m) => {
  if (!acc[m.jurusan]) {
    acc[m.jurusan] = { total: 0, count: 0 };
  }
  acc[m.jurusan].total += m.ipk;
  acc[m.jurusan].count++;
  return acc;
}, {});

console.log("\n📊 Rata-rata IPK per Jurusan");
console.log("─".repeat(30));
for (const [jurusan, data] of Object.entries(statsPerJurusan)) {
  const rataRata = (data.total / data.count).toFixed(2);
  console.log(`  ${jurusan.padEnd(5)}: ${rataRata} (${data.count} mahasiswa)`);
}


// ─────────────────────────────────────────────
// 11. STUDI KASUS — GAME TEBAK ANGKA (SIMULASI)
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("  11. STUDI KASUS: TEBAK ANGKA");
console.log("═══════════════════════════════");

// Simulasi game tebak angka
const angkaRahasia = 42;
const tebakanSimulasi = [10, 65, 30, 50, 42]; // urutan tebakan
const MAX_PERCOBAAN = 10;
let percobaan = 0;
let menang = false;

console.log("🎮 Game Tebak Angka (1-100)\n");

for (const tebakan of tebakanSimulasi) {
  percobaan++;
  console.log(`  Percobaan ke-${percobaan}: Menebak ${tebakan}`);

  if (tebakan === angkaRahasia) {
    console.log(`  🎉 BENAR! Angka rahasianya adalah ${angkaRahasia}!`);
    console.log(`  Kamu berhasil menebak dalam ${percobaan} percobaan!`);
    menang = true;
    break;
  } else if (tebakan < angkaRahasia) {
    console.log(`  📈 Terlalu kecil! Coba lebih besar.`);
  } else {
    console.log(`  📉 Terlalu besar! Coba lebih kecil.`);
  }

  if (percobaan >= MAX_PERCOBAAN) {
    console.log(`  ❌ Gagal! Sudah ${MAX_PERCOBAAN} percobaan. Angkanya adalah ${angkaRahasia}.`);
    break;
  }
}

if (!menang && percobaan < MAX_PERCOBAAN) {
  console.log(`\nSisa tebakan habis. Angkanya adalah ${angkaRahasia}.`);
}

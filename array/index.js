// =============================================================
//  ARRAY IN JAVASCRIPT — Contoh Kode Lengkap
//  Ekskul Web Development
// =============================================================


// ─────────────────────────────────────────────
// 1. MEMBUAT ARRAY
// ─────────────────────────────────────────────
console.log("═══════════════════════════════");
console.log("      1. MEMBUAT ARRAY");
console.log("═══════════════════════════════");

// Array literal
const buah = ["Apel", "Mangga", "Pisang", "Jeruk"];

// Array dengan tipe data campuran
const campur = ["Halo", 42, true, null, { kota: "Bandung" }, [1, 2]];

// Array kosong
const keranjang = [];

console.log("buah:", buah);
console.log("campur:", campur);
console.log("keranjang:", keranjang);
console.log("Panjang array buah:", buah.length); // 4


// ─────────────────────────────────────────────
// 2. MENGAKSES & MENGUBAH ELEMEN
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("  2. MENGAKSES & MENGUBAH ELEMEN");
console.log("═══════════════════════════════");

const warna = ["Merah", "Hijau", "Biru", "Kuning", "Ungu"];

console.log("Elemen pertama:", warna[0]);                    // "Merah"
console.log("Elemen ketiga:", warna[2]);                     // "Biru"
console.log("Elemen terakhir:", warna[warna.length - 1]);    // "Ungu"
console.log("Indeks tidak ada:", warna[99]);                 // undefined

// Mengubah nilai elemen
warna[1] = "Hijau Tua";
console.log("Setelah diubah:", warna);

// at() — cara modern mengakses elemen (termasuk indeks negatif)
console.log("at(0):", warna.at(0));   // "Merah"
console.log("at(-1):", warna.at(-1)); // "Ungu" — elemen terakhir
console.log("at(-2):", warna.at(-2)); // "Kuning" — elemen kedua dari belakang


// ─────────────────────────────────────────────
// 3. MENAMBAH & MENGHAPUS ELEMEN
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("  3. MENAMBAH & MENGHAPUS ELEMEN");
console.log("═══════════════════════════════");

const antrian = ["Andi", "Budi", "Citra"];
console.log("Awal:", antrian);

// push() — tambah di akhir
antrian.push("Deni");
console.log("Setelah push('Deni'):", antrian);

// pop() — hapus dari akhir
const keluar = antrian.pop();
console.log(`pop() mengambil: "${keluar}"`);
console.log("Setelah pop():", antrian);

// unshift() — tambah di awal
antrian.unshift("Zara");
console.log("Setelah unshift('Zara'):", antrian);

// shift() — hapus dari awal
const terdepan = antrian.shift();
console.log(`shift() mengambil: "${terdepan}"`);
console.log("Setelah shift():", antrian);

// splice(start, deleteCount, ...items)
console.log("\n— splice() —");
const kota = ["Jakarta", "Bandung", "Surabaya", "Medan", "Makassar"];
console.log("Sebelum splice:", kota);

// Menghapus 1 elemen di indeks 1
const terhapus = kota.splice(1, 1);
console.log("Terhapus:", terhapus);
console.log("Setelah hapus indeks 1:", kota);

// Menyisipkan tanpa menghapus
kota.splice(1, 0, "Yogyakarta", "Bali");
console.log("Setelah sisipkan di indeks 1:", kota);

// Mengganti elemen
kota.splice(0, 1, "Depok");
console.log("Setelah ganti indeks 0:", kota);


// ─────────────────────────────────────────────
// 4. PENCARIAN DALAM ARRAY
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("    4. PENCARIAN DALAM ARRAY");
console.log("═══════════════════════════════");

const nilai = [70, 85, 90, 85, 60, 95, 72];

console.log("indexOf(85):", nilai.indexOf(85));       // 1
console.log("lastIndexOf(85):", nilai.lastIndexOf(85)); // 3
console.log("includes(90):", nilai.includes(90));     // true
console.log("includes(100):", nilai.includes(100));   // false

// find() — elemen pertama yang memenuhi kondisi
const nilaiTertinggi = nilai.find(n => n > 90);
console.log("find(n > 90):", nilaiTertinggi); // 95

// findIndex() — indeks elemen pertama yang memenuhi kondisi
const indexLulus = nilai.findIndex(n => n >= 75);
console.log("findIndex(n >= 75):", indexLulus); // 1

// some() — apakah ADA elemen yang memenuhi kondisi?
console.log("some(n >= 90):", nilai.some(n => n >= 90));   // true
console.log("some(n >= 100):", nilai.some(n => n >= 100)); // false

// every() — apakah SEMUA elemen memenuhi kondisi?
console.log("every(n >= 60):", nilai.every(n => n >= 60)); // true
console.log("every(n >= 75):", nilai.every(n => n >= 75)); // false


// ─────────────────────────────────────────────
// 5. TRANSFORMASI ARRAY
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("   5. TRANSFORMASI ARRAY");
console.log("═══════════════════════════════");

const siswa = [
  { nama: "Arif", nilai: 88, kelas: "X" },
  { nama: "Bella", nilai: 72, kelas: "XI" },
  { nama: "Citra", nilai: 95, kelas: "X" },
  { nama: "Doni", nilai: 65, kelas: "XII" },
  { nama: "Eva", nilai: 91, kelas: "XI" },
];

// map() — ubah setiap elemen, hasilkan array baru
console.log("— map() —");
const namaSiswa = siswa.map(s => s.nama);
console.log("Daftar nama:", namaSiswa);

const infoSiswa = siswa.map(s => ({
  nama: s.nama,
  status: s.nilai >= 75 ? "Lulus" : "Remedial",
}));
console.log("Status kelulusan:");
infoSiswa.forEach(s => console.log(`  ${s.nama}: ${s.status}`));

// filter() — saring berdasarkan kondisi
console.log("\n— filter() —");
const siswaBerprestasi = siswa.filter(s => s.nilai >= 85);
console.log("Siswa nilai ≥ 85:");
siswaBerprestasi.forEach(s => console.log(`  ${s.nama} (${s.nilai})`));

const siswakelas10 = siswa.filter(s => s.kelas === "X");
console.log("Siswa kelas X:");
siswakelas10.forEach(s => console.log(`  ${s.nama}`));

// reduce() — rangkum menjadi satu nilai
console.log("\n— reduce() —");
const totalNilai = siswa.reduce((acc, s) => acc + s.nilai, 0);
const rataRata = totalNilai / siswa.length;
console.log("Total nilai:", totalNilai);
console.log("Rata-rata:", rataRata.toFixed(2));

// Reduce menjadi object
const perKelas = siswa.reduce((acc, s) => {
  if (!acc[s.kelas]) acc[s.kelas] = [];
  acc[s.kelas].push(s.nama);
  return acc;
}, {});
console.log("Siswa per kelas:", perKelas);

// forEach() — iterasi tanpa membuat array baru
console.log("\n— forEach() —");
siswa.forEach((s, index) => {
  const grade = s.nilai >= 90 ? "A" : s.nilai >= 80 ? "B" : s.nilai >= 70 ? "C" : "D";
  console.log(`  ${index + 1}. ${s.nama.padEnd(8)} | ${s.nilai} | Grade: ${grade}`);
});


// ─────────────────────────────────────────────
// 6. PENGURUTAN ARRAY
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("    6. PENGURUTAN ARRAY");
console.log("═══════════════════════════════");

// sort() string — alphabetical
const kota2 = ["Surabaya", "Bandung", "Jakarta", "Medan", "Bali"];
console.log("Sebelum sort:", [...kota2]);
kota2.sort();
console.log("Setelah sort:", kota2);

// sort() angka — WAJIB pakai komparator!
const angka = [100, 5, 23, 1, 67, 12, 88];
console.log("\nSebelum sort:", [...angka]);

// ❌ sort() tanpa komparator — SALAH untuk angka
const sortSalah = [...angka].sort();
console.log("sort() tanpa komparator (SALAH):", sortSalah);

// ✅ sort() dengan komparator — BENAR
const sortAsc = [...angka].sort((a, b) => a - b);
console.log("sort ascending (BENAR):", sortAsc);

const sortDesc = [...angka].sort((a, b) => b - a);
console.log("sort descending:", sortDesc);

// Mengurutkan array of object
console.log("\n— Sort array of object —");
const produk = [
  { nama: "Buku", harga: 25000 },
  { nama: "Tas", harga: 150000 },
  { nama: "Pensil", harga: 5000 },
  { nama: "Laptop", harga: 8000000 },
];

const sortHarga = [...produk].sort((a, b) => a.harga - b.harga);
console.log("Urut harga (murah ke mahal):");
sortHarga.forEach(p => console.log(`  ${p.nama}: Rp${p.harga.toLocaleString("id-ID")}`));

// reverse()
const urutan = [1, 2, 3, 4, 5];
urutan.reverse();
console.log("\nSetelah reverse():", urutan);


// ─────────────────────────────────────────────
// 7. SLICE, CONCAT, JOIN
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("    7. SLICE, CONCAT, JOIN");
console.log("═══════════════════════════════");

const alphabet = ["a", "b", "c", "d", "e", "f", "g"];

// slice(start, end) — tidak mengubah array asli
console.log("slice(2, 5):", alphabet.slice(2, 5));   // ["c", "d", "e"]
console.log("slice(3):", alphabet.slice(3));           // ["d", "e", "f", "g"]
console.log("slice(-3):", alphabet.slice(-3));         // ["e", "f", "g"]
console.log("Array asli:", alphabet);                  // tidak berubah

// concat() — menggabungkan array
const tim1 = ["Andi", "Budi"];
const tim2 = ["Citra", "Doni"];
const tim3 = ["Eva", "Fajar"];
const semuaTim = tim1.concat(tim2, tim3);
console.log("\nconcat():", semuaTim);

// Alternatif dengan spread
const semuaTim2 = [...tim1, ...tim2, ...tim3];
console.log("spread:", semuaTim2);

// join()
const komponen = ["HTML", "CSS", "JavaScript"];
console.log("\njoin(' + '):", komponen.join(" + "));
console.log("join(', '):", komponen.join(", "));
console.log("join(''):", komponen.join(""));


// ─────────────────────────────────────────────
// 8. FLAT & FLATMAP
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("     8. FLAT & FLATMAP");
console.log("═══════════════════════════════");

const bersarang = [1, [2, 3], [4, [5, 6]], [[7, [8]]]];
console.log("flat(1):", bersarang.flat());    // meratakan 1 level
console.log("flat(2):", bersarang.flat(2));   // meratakan 2 level
console.log("flat(Infinity):", bersarang.flat(Infinity)); // meratakan semua level

// flatMap() — map lalu flat 1 level
const kalimat = ["Belajar JavaScript", "Itu Sangat", "Menyenangkan"];
const kataSatu = kalimat.flatMap(k => k.split(" "));
console.log("flatMap split:", kataSatu);


// ─────────────────────────────────────────────
// 9. SPREAD & DESTRUCTURING
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("  9. SPREAD & DESTRUCTURING");
console.log("═══════════════════════════════");

// Spread — menyebarkan elemen
const a = [1, 2, 3];
const b = [4, 5, 6];
const gabung = [...a, 0, ...b]; // menyisipkan 0 di tengah
console.log("Gabung dengan spread:", gabung);

// Menyalin array (deep copy 1 level)
const original = [10, 20, 30];
const salinan = [...original];
salinan.push(40);
console.log("Original:", original); // tidak terpengaruh
console.log("Salinan:", salinan);

// Destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log("first:", first);   // 10
console.log("second:", second); // 20
console.log("rest:", rest);     // [30, 40, 50]

// Swap variabel
let p = "Jeruk";
let q = "Anggur";
console.log(`\nSebelum swap: p=${p}, q=${q}`);
[p, q] = [q, p];
console.log(`Setelah swap: p=${p}, q=${q}`);


// ─────────────────────────────────────────────
// 10. ARRAY MULTIDIMENSI
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("  10. ARRAY MULTIDIMENSI");
console.log("═══════════════════════════════");

// Matriks 3x3
const matriks = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Matriks 3x3:");
matriks.forEach(baris => console.log(" ", baris));

console.log("matriks[0]:", matriks[0]);    // [1, 2, 3]
console.log("matriks[1][2]:", matriks[1][2]); // 6
console.log("matriks[2][0]:", matriks[2][0]); // 7


// ─────────────────────────────────────────────
// 11. STUDI KASUS — MANAJEMEN DATA SISWA
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("  11. STUDI KASUS: DATA SISWA");
console.log("═══════════════════════════════");

const dataSiswa = [
  { id: 1, nama: "Arif Setiawan", kelas: "X-A", nilai: [88, 92, 78] },
  { id: 2, nama: "Bella Putri", kelas: "X-B", nilai: [72, 68, 75] },
  { id: 3, nama: "Citra Dewi", kelas: "X-A", nilai: [95, 98, 91] },
  { id: 4, nama: "Doni Pratama", kelas: "X-C", nilai: [60, 65, 58] },
  { id: 5, nama: "Eva Lestari", kelas: "X-B", nilai: [85, 88, 92] },
  { id: 6, nama: "Fajar Ramdan", kelas: "X-C", nilai: [78, 80, 76] },
];

// Hitung rata-rata nilai setiap siswa
const laporanSiswa = dataSiswa.map(s => {
  const rataRata = s.nilai.reduce((acc, n) => acc + n, 0) / s.nilai.length;
  const grade = rataRata >= 90 ? "A" : rataRata >= 80 ? "B" : rataRata >= 70 ? "C" : "D";
  const status = rataRata >= 75 ? "✅ Lulus" : "❌ Remedial";
  return { ...s, rataRata: rataRata.toFixed(1), grade, status };
});

// Cetak laporan
console.log("\n📊 Laporan Nilai Siswa");
console.log("─".repeat(60));
laporanSiswa.forEach(s => {
  console.log(
    `${String(s.id).padStart(2)}. ${s.nama.padEnd(18)} | ${s.kelas} | Rata-rata: ${s.rataRata} | ${s.grade} | ${s.status}`
  );
});

// Statistik
const nilaiRataRata = laporanSiswa.map(s => parseFloat(s.rataRata));
const tertinggi = Math.max(...nilaiRataRata);
const terendah = Math.min(...nilaiRataRata);
const rataKelas = (nilaiRataRata.reduce((a, b) => a + b, 0) / nilaiRataRata.length).toFixed(2);
const jumlahLulus = laporanSiswa.filter(s => s.status.includes("Lulus")).length;

console.log("\n📈 Statistik Kelas");
console.log("─".repeat(30));
console.log(`Nilai tertinggi : ${tertinggi}`);
console.log(`Nilai terendah  : ${terendah}`);
console.log(`Rata-rata kelas : ${rataKelas}`);
console.log(`Jumlah lulus    : ${jumlahLulus}/${dataSiswa.length} siswa`);

// Urutan berdasarkan rata-rata (tertinggi ke terendah)
const rankSiswa = [...laporanSiswa].sort((a, b) => parseFloat(b.rataRata) - parseFloat(a.rataRata));
console.log("\n🏆 Ranking Siswa");
console.log("─".repeat(30));
rankSiswa.forEach((s, i) => {
  const medali = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}.`;
  console.log(`${medali} ${s.nama} — ${s.rataRata}`);
});

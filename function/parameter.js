// =============================================================
//  PARAMETER & ARGUMEN IN JAVASCRIPT — Panduan & Contoh Kode
//  Ekskul Web Development
// =============================================================

// ─────────────────────────────────────────────
// 1. PERBEDAAN PARAMETER VS ARGUMEN
// ─────────────────────────────────────────────
console.log("════════════════════════════════════════════");
console.log("  1. PERBEDAAN PARAMETER VS ARGUMEN");
console.log("════════════════════════════════════════════");

// • PARAMETER: Variabel yang ditentukan saat fungsi didefinisikan (di dalam kurung).
// • ARGUMEN: Nilai nyata yang dikirimkan ke fungsi saat fungsi dipanggil.

function perkenalan(nama, umur) { // ← 'nama' & 'umur' adalah PARAMETER
  return `Halo, saya ${nama} dan berusia ${umur} tahun.`;
}

// "Budi" & 16 adalah ARGUMEN yang dikirimkan
console.log(perkenalan("Budi", 16));


// ─────────────────────────────────────────────
// 2. ARGUMEN KURANG / BERLEBIH
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  2. ARGUMEN KURANG ATAU BERLEBIH");
console.log("════════════════════════════════════════════");

function tampilkanData(a, b) {
  console.log(`Nilai a: ${a} | Nilai b: ${b}`);
}

// A. Jika argumen kurang dari parameter, parameter yang tersisa bernilai undefined
console.log("— Argumen Kurang —");
tampilkanData("Hanya Satu"); // b menjadi undefined

// B. Jika argumen lebih dari parameter, argumen ekstra diabaikan (kecuali ditangkap dengan Rest Parameter)
console.log("— Argumen Berlebih —");
tampilkanData("Satu", "Dua", "Tiga", "Empat");


// ─────────────────────────────────────────────
// 3. DEFAULT PARAMETER (ES6)
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  3. DEFAULT PARAMETER");
console.log("════════════════════════════════════════════");

// A. Nilai bawaan jika argumen tidak diberikan atau bernilai undefined
function pesanTiket(namaPembeli, kategori = "Reguler", jumlah = 1) {
  return `Tiket [${kategori}] x${jumlah} berhasil dipesan atas nama ${namaPembeli}.`;
}

console.log(pesanTiket("Rian")); // Memakai default kategori & jumlah
console.log(pesanTiket("Siti", "VIP", 2));

// B. Default parameter menggunakan nilai parameter sebelumnya
function hitungLuasPersegi(panjang, lebar = panjang) {
  // Jika lebar tidak diisi, diasumsikan persegi sama sisi (lebar = panjang)
  return panjang * lebar;
}
console.log("Luas Persegi Sama Sisi (sisi 5):", hitungLuasPersegi(5));
console.log("Luas Persegi Panjang (p=8, l=4):", hitungLuasPersegi(8, 4));

// C. Perbedaan nilai `undefined` vs `null` pada Default Parameter:
// HANYA `undefined` yang memicu pemakaian default parameter!
function cekStatus(status = "Aktif") {
  return `Status Akun: ${status}`;
}
console.log(cekStatus(undefined)); // Status Akun: Aktif (Memicu default)
console.log(cekStatus(null));      // Status Akun: null  (null adalah nilai yang sengaja dikirimkan)


// ─────────────────────────────────────────────
// 4. REST PARAMETER (...args)
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  4. REST PARAMETER (...args)");
console.log("════════════════════════════════════════════");

// Rest Parameter memungkinkan fungsi menerima sejumlah argumen fleksibel
// dan secara otomatis mengumpulkannya ke dalam sebuah Array asli.

// A. Menjumlahkan angka sebanyak apa pun
function jumlahkanSemua(...kumpulanAngka) {
  // 'kumpulanAngka' adalah Array, sehingga semua method Array (reduce, map, filter) dapat langsung digunakan!
  return kumpulanAngka.reduce((total, angka) => total + angka, 0);
}

console.log("Jumlah (2 angka):", jumlahkanSemua(10, 20));
console.log("Jumlah (5 angka):", jumlahkanSemua(5, 10, 15, 20, 25));

// B. Menggabungkan parameter biasa dengan Rest Parameter
// ⚠️ ATURAN PENTING: Rest parameter WAJIB ditaruh di posisi paling akhir!
function catatInventaris(kategori, lokasi, ...daftarBarang) {
  console.log(`Kategori : ${kategori}`);
  console.log(`Lokasi   : ${lokasi}`);
  console.log(`Barang   : ${daftarBarang.join(", ")} (Total: ${daftarBarang.length} item)`);
}

catatInventaris("Elektronik", "Lab Komputer 1", "Monitor", "Keyboard", "Mouse", "Speaker");


// ─────────────────────────────────────────────
// 5. REST PARAMETER VS OBJEK 'arguments' (ES5)
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  5. REST PARAMETER VS OBJEK 'arguments'");
console.log("════════════════════════════════════════════");

// Cara lama (ES5) menggunakan objek arguments:
// - Bukan Array sungguhan (Array-like object)
// - Tidak bisa langsung memanggil .map(), .filter(), .reduce()
// - Tidak tersedia di Arrow Function
function caraLama() {
  const isArray = Array.isArray(arguments);
  console.log("Objek arguments adalah Array asli?", isArray); // false
}
caraLama(1, 2, 3);

// Cara modern (ES6) menggunakan Rest Parameter:
// - Merupakan instance Array sejati
// - Dapat dipakai di fungsi biasa maupun Arrow Function
const caraModern = (...args) => {
  const isArray = Array.isArray(args);
  console.log("Rest parameter (...args) adalah Array asli?", isArray); // true
};
caraModern(1, 2, 3);


// ─────────────────────────────────────────────
// 6. PARAMETER DESTRUCTURING (OBJECT & ARRAY)
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  6. PARAMETER DESTRUCTURING");
console.log("════════════════════════════════════════════");

// A. Destructuring Object pada parameter
// Berguna saat fungsi menerima banyak opsi, urutan argumen tidak lagi kaku!
function tampilkanProfilSiswa({ nama, kelas, jurusan = "RPL", aktif = true }) {
  const status = aktif ? "Aktif" : "Non-aktif";
  return `[${status}] ${nama} — Kelas ${kelas} (${jurusan})`;
}

// Memanggil fungsi dengan mengirimkan objek (Named Arguments pattern)
const siswa1 = { nama: "Fajar Pratama", kelas: "XI", jurusan: "TKJ", aktif: true };
console.log(tampilkanProfilSiswa(siswa1));

// Jika jurusan tidak disediakan, menggunakan nilai default "RPL"
console.log(tampilkanProfilSiswa({ nama: "Nadia Rahma", kelas: "X" }));

// B. Destructuring Array pada parameter
function hitungJarak([x1, y1], [x2, y2]) {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

const titikA = [0, 0];
const titikB = [3, 4];
console.log("Jarak titik A ke B:", hitungJarak(titikA, titikB)); // 5


// ─────────────────────────────────────────────
// 7. CALLBACK PARAMETER (FUNCTION SEBAGAI PARAMETER)
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  7. CALLBACK SEBAGAI PARAMETER");
console.log("════════════════════════════════════════════");

// Fungsi dapat menerima fungsi lain sebagai parameter
function prosesData(arr, transformasiFn) {
  const hasil = [];
  for (let i = 0; i < arr.length; i++) {
    hasil.push(transformasiFn(arr[i], i));
  }
  return hasil;
}

const hargaDaftar = [10000, 25000, 50000];
const hargaFormatRupiah = prosesData(hargaDaftar, harga => `Rp${harga.toLocaleString("id-ID")}`);
console.log("Hasil pemrosesan dengan Callback:", hargaFormatRupiah);


// ─────────────────────────────────────────────
// 8. PASS BY VALUE VS PASS BY REFERENCE
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  8. PASS BY VALUE VS PASS BY REFERENCE");
console.log("════════════════════════════════════════════");

// A. Tipe Primitif (Number, String, Boolean): PASS BY VALUE
// Nilai disalin ke parameter, variabel asli di luar TIDAK terpengaruh.
let poinAwal = 100;

function tambahPoin(poin) {
  poin += 50;
  console.log("Di dalam fungsi (poin lokal):", poin);
}

tambahPoin(poinAwal);
console.log("Di luar fungsi (poin asli tetap):", poinAwal); // 100

// B. Tipe Objek & Array: PASS BY REFERENCE
// Parameter menyimpan referensi memori yang sama.
// Perubahan pada properti/elemen AKAN memengaruhi variabel luar!
const murid = { nama: "Galih", nilai: 70 };

function naikkanNilai(obj) {
  obj.nilai += 15; // Mengubah properti objek asli!
}

naikkanNilai(murid);
console.log("Objek murid di luar ikut berubah:", murid); // { nama: 'Galih', nilai: 85 }

// 💡 TIPS PRAKTIK BAIK (Immutability):
// Gunakan Spread Operator `{ ...obj }` jika tidak ingin mengubah objek aslinya:
function naikkanNilaiAman(obj) {
  return { ...obj, nilai: obj.nilai + 10 };
}
const muridBaru = naikkanNilaiAman(murid);
console.log("Hasil fungsi aman (objek baru):", muridBaru);
console.log("Objek asli tetap aman:", murid);


// ─────────────────────────────────────────────
// 9. STUDI KASUS NYATA: BUILDER INVOICE
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════════════");
console.log("  9. STUDI KASUS PRAKTIK: PEMBUATAN INVOICE");
console.log("════════════════════════════════════════════");

function buatInvoice({
  idInvoice,
  namaKlien,
  diskonPersen = 0,
  pajakPersen = 11,
  daftarItem = []
}) {
  const subtotal = daftarItem.reduce((acc, item) => acc + item.harga * item.qty, 0);
  const potongan = (subtotal * diskonPersen) / 100;
  const setelahDiskon = subtotal - potongan;
  const nominalPajak = (setelahDiskon * pajakPersen) / 100;
  const totalAkhir = setelahDiskon + nominalPajak;

  return {
    nomor: idInvoice,
    klien: namaKlien,
    subtotal: `Rp${subtotal.toLocaleString("id-ID")}`,
    diskon: `${diskonPersen}% (-Rp${potongan.toLocaleString("id-ID")})`,
    pajak: `${pajakPersen}% (+Rp${nominalPajak.toLocaleString("id-ID")})`,
    totalBayar: `Rp${totalAkhir.toLocaleString("id-ID")}`
  };
}

const invoiceTransaksi = buatInvoice({
  idInvoice: "INV-2026-001",
  namaKlien: "SMK Negeri 1 Developer",
  diskonPersen: 10,
  daftarItem: [
    { nama: "Lisensi Software", harga: 200000, qty: 3 },
    { nama: "Pelatihan WebDev", harga: 500000, qty: 1 }
  ]
});

console.log("Ringkasan Invoice Pesanan:");
console.table(invoiceTransaksi);

console.log("\n✅ Selesai mempelajari Parameter & Argumen!");

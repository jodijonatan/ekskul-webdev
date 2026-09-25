// =============================================================
//  OBJECT IN JAVASCRIPT — Contoh Kode Lengkap
//  Ekskul Web Development
// =============================================================


// ─────────────────────────────────────────────
// 1. MEMBUAT & MENGAKSES OBJEK
// ─────────────────────────────────────────────
console.log("═══════════════════════════════");
console.log("  1. MEMBUAT & MENGAKSES OBJEK");
console.log("═══════════════════════════════");

const siswa = {
  nama: "Rian Pratama",
  umur: 17,
  jurusan: "Rekayasa Perangkat Lunak",
  "status keaktifan": "Aktif",
  hobi: ["Coding", "Futsal", "Membaca"]
};

// Dot notation
console.log("Nama:", siswa.nama);
console.log("Jurusan:", siswa.jurusan);

// Bracket notation (untuk key dengan spasi / dinamis)
console.log("Status:", siswa["status keaktifan"]);

const cariKunci = "umur";
console.log(`Nilai untuk key '${cariKunci}':`, siswa[cariKunci]);


// ─────────────────────────────────────────────
// 2. MENAMBAH, MENGUBAH, & MENGHAPUS PROPERTI
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("    2. MANIPULASI PROPERTI");
console.log("═══════════════════════════════");

const smartphone = {
  brand: "Samsung",
  model: "Galaxy S23",
  harga: 12000000
};

// Mengubah properti
smartphone.harga = 11500000;

// Menambah properti baru
smartphone.warna = "Phantom Black";
smartphone.stok = 8;

console.log("Setelah penambahan:", smartphone);

// Menghapus properti
delete smartphone.stok;
console.log("Setelah properti 'stok' dihapus:", smartphone);


// ─────────────────────────────────────────────
// 3. METHOD DAN KATA KUNCI 'this'
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("    3. METHOD & THIS KEYWORD");
console.log("═══════════════════════════════");

const dompet = {
  pemilik: "Siti",
  saldo: 250000,

  // Method shorthand (ES6)
  isiSaldo(nominal) {
    this.saldo += nominal;
    console.log(`[Top Up] Berhasil isi Rp${nominal.toLocaleString("id-ID")}`);
  },

  bayar(nominal, keterangan) {
    if (nominal > this.saldo) {
      console.log(`[Gagal] Saldo tidak cukup untuk beli ${keterangan}`);
      return false;
    }
    this.saldo -= nominal;
    console.log(`[Berhasil] Beli ${keterangan} Rp${nominal.toLocaleString("id-ID")}`);
    return true;
  },

  cekInfo() {
    return `Dompet milik ${this.pemilik} | Saldo: Rp${this.saldo.toLocaleString("id-ID")}`;
  }
};

console.log(dompet.cekInfo());
dompet.isiSaldo(100000);
dompet.bayar(50000, "Buku Pelajaran");
dompet.bayar(400000, "Tas Sekolah");
console.log(dompet.cekInfo());


// ─────────────────────────────────────────────
// 4. NESTED OBJECT (OBJEK BERSARANG)
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("       4. NESTED OBJECT");
console.log("═══════════════════════════════");

const profilDeveloper = {
  username: "jodijonatan",
  biodata: {
    namaLengkap: "Jodi Jonatan",
    alamat: {
      kota: "Bandung",
      provinsi: "Jawa Barat"
    }
  },
  keahlian: ["HTML", "CSS", "JavaScript"]
};

console.log("Kota domisili:", profilDeveloper.biodata.alamat.kota);
console.log("Skill utama:", profilDeveloper.keahlian[2]);


// ─────────────────────────────────────────────
// 5. PENGECEKAN & ITERASI OBJEK
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("     5. ITERASI OBJEK");
console.log("═══════════════════════════════");

const inventaris = {
  laptop: 12,
  proyektor: 3,
  mouse: 25,
  spidol: 40
};

// Operator 'in' dan Object.hasOwn()
console.log("Ada laptop di inventaris?", "laptop" in inventaris);
console.log("Ada keyboard di inventaris?", Object.hasOwn(inventaris, "keyboard"));

// Object.keys(), Object.values(), Object.entries()
console.log("\nKeys:", Object.keys(inventaris));
console.log("Values:", Object.values(inventaris));

console.log("\n— Iterasi dengan Object.entries() —");
for (const [barang, jumlah] of Object.entries(inventaris)) {
  console.log(`• ${barang.padEnd(10)}: ${jumlah} unit`);
}


// ─────────────────────────────────────────────
// 6. DESTRUCTURING ASSIGNMENT
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("    6. DESTRUCTURING OBJECT");
console.log("═══════════════════════════════");

const kursus = {
  kode: "WD-101",
  namaMateri: "JavaScript Essentials",
  pengajar: "Pak Jodi",
  tingkat: "Dasar"
};

// Ekstrak & Rename & Default value
const { namaMateri, pengajar: instruktur, rating = 5.0 } = kursus;

console.log("Materi:", namaMateri);
console.log("Instruktur (alias):", instruktur);
console.log("Rating (default):", rating);

// Destructuring pada parameter fungsi
function cetakInfoKursus({ kode, namaMateri }) {
  console.log(`[Kode: ${kode}] Silabus: ${namaMateri}`);
}
cetakInfoKursus(kursus);


// ─────────────────────────────────────────────
// 7. SPREAD OPERATOR & SALIN OBJEK
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("       7. SPREAD & CLONE");
console.log("═══════════════════════════════");

const basicSpec = { os: "Android 14", ram: "8GB" };
const extraSpec = { storage: "256GB", kamera: "50MP" };

// Menggabungkan beberapa objek
const fullPhone = {
  brand: "Pixel",
  ...basicSpec,
  ...extraSpec,
  koneksi: "5G"
};
console.log("Hasil Gabungan Spread:", fullPhone);

// Deep Copy dengan structuredClone (ES2022)
const settingsAsli = {
  tema: "dark",
  notif: { email: true, push: false }
};

const settingsCopy = structuredClone(settingsAsli);
settingsCopy.notif.email = false;

console.log("Asli notif.email:", settingsAsli.notif.email);   // true (aman, tidak ikut berubah!)
console.log("Copy notif.email:", settingsCopy.notif.email);   // false


// ─────────────────────────────────────────────
// 8. OBJECT.FREEZE & OBJECT.SEAL
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("     8. FREEZE & SEAL");
console.log("═══════════════════════════════");

const konfigurasiServer = Object.freeze({
  port: 8080,
  host: "localhost"
});

// Modifikasi akan diabaikan tanpa 'use strict', atau melempar error dalam strict mode
konfigurasiServer.port = 3000;
console.log("Port setelah modifikasi (tetap aman):", konfigurasiServer.port); // 8080
console.log("Apakah beku?", Object.isFrozen(konfigurasiServer)); // true


// ─────────────────────────────────────────────
// 9. OPTIONAL CHAINING & NULLISH COALESCING
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("  9. MODERN OPERATOR (?. & ??)");
console.log("═══════════════════════════════");

const responAPI = {
  status: 200,
  data: {
    pengguna: {
      nama: "Anisa"
      // kontak tidak ada
    }
  }
};

// Mengakses properti dalam yang berpotensi undefined dengan safe chaining (?.)
const noTelepon = responAPI.data?.pengguna?.kontak?.telepon;
console.log("Nomor Telepon:", noTelepon); // undefined (tanpa crash error!)

// Memberikan nilai default yang aman dengan nullish coalescing (??)
const statusTelepon = noTelepon ?? "Nomor telepon belum didaftarkan";
console.log("Status Kontak:", statusTelepon);

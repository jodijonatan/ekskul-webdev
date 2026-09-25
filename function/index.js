// =============================================================
//  FUNCTION IN JAVASCRIPT — Contoh Kode Lengkap
//  Ekskul Web Development
// =============================================================


// ─────────────────────────────────────────────
// 1. FUNCTION DECLARATION & HOISTING
// ─────────────────────────────────────────────
console.log("═══════════════════════════════");
console.log("  1. FUNCTION DECLARATION");
console.log("═══════════════════════════════");

// Function declaration bisa dipanggil sebelum didefinisikan (Hoisting)
console.log("— Hoisting —");
console.log(sapa("Kawan")); // "Halo, Kawan!"

function sapa(nama) {
  return `Halo, ${nama}!`;
}

// Menghitung luas persegi panjang
function hitungLuasPersegi(panjang, lebar) {
  return panjang * lebar;
}
console.log("Luas Persegi (10 x 5):", hitungLuasPersegi(10, 5));


// ─────────────────────────────────────────────
// 2. FUNCTION EXPRESSION
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("   2. FUNCTION EXPRESSION");
console.log("═══════════════════════════════");

const konversiSuhu = function (celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return `${celsius}°C = ${fahrenheit}°F`;
};

console.log(konversiSuhu(30));
console.log(konversiSuhu(0));


// ─────────────────────────────────────────────
// 3. ARROW FUNCTION (ES6)
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("       3. ARROW FUNCTION");
console.log("═══════════════════════════════");

// Arrow function standar
const hitungKeliling = (p, l) => {
  return 2 * (p + l);
};
console.log("Keliling (8, 4):", hitungKeliling(8, 4));

// Implicit return (satu baris)
const kuadrat = n => n * n;
console.log("Kuadrat 9:", kuadrat(9));

// Mengembalikan objek secara implisit (bungkus dengan tanda kurung)
const buatBuku = (judul, harga) => ({ judul, harga });
console.log("Objek Buku:", buatBuku("Belajar JS Modern", 85000));


// ─────────────────────────────────────────────
// 4. PARAMETER: DEFAULT & REST PARAMETER
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log(" 4. DEFAULT & REST PARAMETER");
console.log("═══════════════════════════════");

// Default parameter
function kirimNotifikasi(pesan, level = "INFO", tujuan = "User") {
  return `[${level}] Kepada ${tujuan}: ${pesan}`;
}
console.log(kirimNotifikasi("Server berhasil dimulai"));
console.log(kirimNotifikasi("Disk hampir penuh!", "WARNING", "Admin"));

// Rest parameter (...args)
function jumlahkanTotal(...kumpulanAngka) {
  return kumpulanAngka.reduce((acc, curr) => acc + curr, 0);
}
console.log("Total (10, 20):", jumlahkanTotal(10, 20));
console.log("Total (1, 2, 3, 4, 5):", jumlahkanTotal(1, 2, 3, 4, 5));


// ─────────────────────────────────────────────
// 5. EARLY RETURN PATTERN
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("    5. EARLY RETURN PATTERN");
console.log("═══════════════════════════════");

function prosesTransaksi(nominal, saldoRekening) {
  if (nominal <= 0) {
    return "❌ Nominal transaksi tidak valid.";
  }
  if (nominal > saldoRekening) {
    return "❌ Saldo tidak mencukupi.";
  }

  const sisa = saldoRekening - nominal;
  return `✅ Transaksi berhasil sebesar Rp${nominal.toLocaleString("id-ID")}. Sisa saldo: Rp${sisa.toLocaleString("id-ID")}`;
}

console.log(prosesTransaksi(-5000, 100000));
console.log(prosesTransaksi(150000, 100000));
console.log(prosesTransaksi(45000, 100000));


// ─────────────────────────────────────────────
// 6. SCOPE & CLOSURE
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("      6. SCOPE & CLOSURE");
console.log("═══════════════════════════════");

function buatAkunBank(namaPemilik, saldoAwal = 0) {
  let saldo = saldoAwal; // variabel privat (terisolasi)

  return {
    setor(jumlah) {
      if (jumlah > 0) {
        saldo += jumlah;
        console.log(`[${namaPemilik}] Setor Rp${jumlah} | Saldo: Rp${saldo}`);
      }
    },
    tarik(jumlah) {
      if (jumlah > saldo) {
        console.log(`[${namaPemilik}] Penarikan Rp${jumlah} ditolak (saldo tidak cukup)`);
      } else {
        saldo -= jumlah;
        console.log(`[${namaPemilik}] Tarik Rp${jumlah} | Saldo: Rp${saldo}`);
      }
    },
    cekSaldo() {
      return saldo;
    }
  };
}

const rekeningBudi = buatAkunBank("Budi", 50000);
rekeningBudi.setor(25000);
rekeningBudi.tarik(30000);
console.log("Saldo akhir Budi:", rekeningBudi.cekSaldo());


// ─────────────────────────────────────────────
// 7. HIGHER-ORDER FUNCTION & CALLBACK
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("   7. HIGHER-ORDER FUNCTION");
console.log("═══════════════════════════════");

const daftarNilai = [65, 80, 92, 45, 78, 88];

// Fungsi filter kustom yang menerima fungsi pembanding (callback)
function saringData(arr, kondisiFn) {
  const hasil = [];
  for (const item of arr) {
    if (kondisiFn(item)) {
      hasil.push(item);
    }
  }
  return hasil;
}

const nilaiLulus = saringData(daftarNilai, n => n >= 75);
console.log("Nilai Asli:", daftarNilai);
console.log("Nilai Lulus (>= 75):", nilaiLulus);

// Function returning function (Currying sederhana)
const diskonToko = persen => harga => harga - (harga * persen) / 100;
const diskonMember = diskonToko(15); // 15%
console.log("Harga diskon (Rp100.000 diskon 15%):", diskonMember(100000));


// ─────────────────────────────────────────────
// 8. IIFE (Immediately Invoked Function)
// ─────────────────────────────────────────────
console.log("\n═══════════════════════════════");
console.log("            8. IIFE");
console.log("═══════════════════════════════");

const configAplikasi = (function () {
  const versi = "2.1.0";
  const env = "production";

  return {
    getVersi: () => versi,
    getEnv: () => env
  };
})();

console.log(`App Running v${configAplikasi.getVersi()} in [${configAplikasi.getEnv()}] mode`);

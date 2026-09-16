// Termasuk global scope
let url_youtube = "https://youtube.com";
let nilai = 456;

// Termasuk global scope
fungsi_satu();
console.log(nilai);

function fungsi_satu() {
  // Variabel di dalam termasuk function scope.
  console.log(url_youtube);
  let nilai = 123;
  console.log(nilai);
}

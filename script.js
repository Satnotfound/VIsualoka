function formatRupiah(angka) {
  return "Rp" + Math.round(angka).toLocaleString("id-ID");
}

function hitungTotal() {
  var harga = Number(document.getElementById("paket").value);
  var jumlah = parseInt(document.getElementById("jumlah").value, 10);
  var kodePromo = document.getElementById("promo").value.trim().toUpperCase();
  var hasil = document.getElementById("hasil");

  if (isNaN(jumlah) || jumlah < 1) {
    hasil.innerHTML = '<p class="pesan">Jumlah variasi kemasan minimal 1.</p>';
    return;
  }

  var hargaAwal = harga * jumlah;
  var diskon = 0;
  var keterangan = "Tidak ada diskon";

  if (kodePromo === "VISUALOKA") {
    diskon = hargaAwal * 0.10;
    keterangan = "Diskon 10% (kode VISUALOKA)";
  } else if (jumlah >= 3) {
    diskon = hargaAwal * 0.10;
    keterangan = "Diskon 10% (minimal 3 variasi kemasan)";
    if (kodePromo !== "") {
      keterangan += ", kode promo tidak valid";
    }
  } else if (kodePromo !== "") {
    keterangan = "Kode promo tidak valid";
  }

  var totalBayar = hargaAwal - diskon;

  hasil.innerHTML =
    '<div class="rincian">' +
      '<div><span>Harga awal</span><span>' + formatRupiah(hargaAwal) + '</span></div>' +
      '<div class="diskon"><span>' + keterangan + '</span><span>- ' + formatRupiah(diskon) + '</span></div>' +
      '<div class="total"><span>Total bayar</span><span>' + formatRupiah(totalBayar) + '</span></div>' +
    '</div>';
}
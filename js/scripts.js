// js/scripts.js

function hitungLuasPersegi() {
    var panjangSisi = document.getElementById('panjang').value;
    var luas = panjangSisi * panjangSisi;
    document.getElementById('hasil').innerText = 'Luas Persegi: ' + luas;
}

function resetluas() {
    // Reset nilai input dan hasil
    document.getElementById('panjang').value = '';
    document.getElementById('hasil').innerText = '';
}

// js/scripts.js

function calculatePerimeter() {
    // Ambil nilai sisi dari input
    var sisi = document.getElementById("side-length").value;

    // Validasi input
    if (sisi === "" || isNaN(sisi)) {
        alert("Masukkan nilai sisi dengan benar");
        return;
    }

    // Hitung keliling persegi
    var keliling = 4 * parseFloat(sisi);

    // Tampilkan hasil di bawah input
    var hasilElemen = document.getElementById('hasil-perimeter');
    hasilElemen.innerText = 'Keliling Persegi: ' + keliling;
}

function resetkeliling() {
    // Reset nilai input dan hasil
    document.getElementById('side-length').value = '';
    document.getElementById('hasil-perimeter').innerText = '';
}



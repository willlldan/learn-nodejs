console.log("Hello World");

const cetakNama = (nama) => `Hi, nama saya ${nama}`;

const PI = 3.14;

const mahasiswa = {
  nama: "Wildan Fauzi",
  umur: 23,
  cetakMhs() {
    return `Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("ini kelas orang");
  }
}

module.exports = { cetakNama, PI, Orang, mahasiswa };

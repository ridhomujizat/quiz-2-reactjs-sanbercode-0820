class BangunDatar {
  constructor(nama) {
    this._nama = nama;
  }
  luas() {
    return "";
  }
  keliling() {
    return "";
  }

  get nama() {
    return this._nama;
  }
  set nama(nama) {
    this._nama = nama;
  }
}

class Lingkaran extends BangunDatar {
  constructor(nama, jarijari) {
    super(nama);
    this._jarijari = jarijari;
  }
  luas() {
    return 3.14 * this._jarijari * this._jarijari;
  }
  keliling() {
    return 2 * 3.14 * this._jarijari;
  }
  get jarijari() {
    return this._jarijari;
  }
  set jarijari(jarijari) {
    this._jarijari = jarijari;
  }
}

class Persegi extends BangunDatar {
  constructor(nama, sisi) {
    super(nama);
    this._sisi = sisi;
  }
  luas() {
    return this._sisi * this._sisi;
  }
  keliling() {
    return 4 * this._sisi;
  }
  get sisi() {
    return this._sisi;
  }
  set sisi(sisi) {
    this._sisi = sisi;
  }
}
const bangunDatar = new BangunDatar("Bangun Data");
const lingkaran = new Lingkaran("lingkaran", 14);
const persegi = new Persegi("persegi", 8);

console.log(
  `${bangunDatar.nama} ${bangunDatar.luas()} ${bangunDatar.keliling()}`
);
console.log(`Luas ${lingkaran.nama} ${lingkaran.luas()}`);
console.log(`Keliling ${lingkaran.nama} ${lingkaran.keliling()}`);
console.log(`Luas ${persegi.nama} ${lingkaran.luas()}`);
console.log(`Keliling ${persegi.nama} ${persegi.keliling()}`);

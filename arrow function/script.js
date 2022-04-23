//function expression------------------
// const tampilNama = function(nama) {
//     return `halo ${nama}`;
// }

// console.log(tampilNama('febrian'));


//arrow function-----------------------------
// const tampilNama = (nama) => {
//     return `halo ${nama}`;
// }

// console.log(tampilNama('febrian'));

//example 2
// let mahasiswa = ['febrian', 'dimas', 'winaputra'];
// let jumlahHuruf = mahasiswa.map( (nama) => {
//     return nama.length;
// });

// console.log(jumlahHuruf);

//example 3 hasil bentuk objek
// let mahasiswa = ['febrian', 'dimas', 'winaputra'];
// let jumlahHuruf = mahasiswa.map( (nama) => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }));

// console.log(jumlahHuruf);


//konsep this pada arrow function--------------
//constructor function
// const Mahasiswa = function() {
//     this.nama = 'febrian';
//     this.umur = 22;
//     this.sayHello = function() {
//         console.log(`halo saya ${this.nama} umur ${this.umur}`);
//     }
// }

// const dimas = new Mahasiswa();

//versi arrow function, note: constructor tidak bisa dibuat menggunakan arrow function
// const Mahasiswa = function() {
//     this.nama = 'febrian';
//     this.umur = 22;
//     this.sayHello = () => {
//         console.log(`halo saya ${this.nama} umur ${this.umur}`);
//     }
// }

// const dimas = new Mahasiswa();

//versi objeck literal
// const mhs = {
//     nama: 'febrian',
//     umur: 27,
//     sayHello: () => {
//         console.log(`halo saya ${nama} umur ${umur}`);
//     }
// }



//example with real project
const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle('size');
    setTimeout( () => {
        this.classList.toggle('caption');
    }, 600);
});

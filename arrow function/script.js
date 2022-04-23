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
let mahasiswa = ['febrian', 'dimas', 'winaputra'];
let jumlahHuruf = mahasiswa.map( (nama) => ({
    nama: nama,
    jmlHuruf: nama.length
}));

console.log(jumlahHuruf);


//destructuring----------------------------
// function penjumlahanPerkalian(a, b) {
//     return [a+b, a*b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

//example 2
// function kalkulasi(a, b) {
//     return [a+b, a-b, a*b, a/b];
// }
// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);

//example 3
// function kalkulasi(a, b) {
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }
// const {tambah, kurang, kali, bagi} = kalkulasi(2, 3);
// console.log(tambah);

//destructuring functuin arguments----------
// const mhs = {
//     nama: 'febrian',
//     umur: 22,
//     gender: 'laki laki'
// }

// function cetakMhs(nama, umur) {
//     return `halo, saya ${nama} umur ${umur}`;
// }

// console.log(cetakMhs(mhs.nama, mhs.umur));

//example 2
// const mhs = {
//     nama: 'febrian',
//     umur: 22,
//     gender: 'laki laki',
//     nilai: {
//         uas: 90,
//         uts:80
//     }
// }

// function cetakMhs({nama, umur, nilai:{uas, uts}}) {
//     return `halo, saya ${nama} umur ${umur}, dan nilai uas uts saya ${uas} ${uts}`;
// }

// console.log(cetakMhs(mhs));

//for of-----------------------------------
const mhs = ['febrian', 'dimas', 'koleng'];

// for(let = i; i<mhs.length; i++) {
//     console.log(mhs[i]);
// }


// mhs.forEach( (i) => {
//     console.log(i);
// });

// for(const m of mhs) {
//     console.log(m);
// }


// string
// const nama = 'febrian'
// for(n of nama) {
//     console.log(n);
// }


// mhs.forEach( (m, i) => {
//     console.log(`${m} dengan mahasiswa ke ${i+1}`);
// });

//nodelist
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach( (n) =>  {
//     console.log(n.textContent);
// });

// for( n of liNama) {
//     console.log(n.innerHTML);
// }

//arguments untuk for of
// function jumlahAngka() {
//     let jumlah = 0;
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

//for in 
const mhs2 = {
    nama: 'febrian',
    umur: 22
}

for( m in mhs) {
    console.log(m);
}
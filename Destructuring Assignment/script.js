//destructuring variable/assignment----------
const perkenalan = ['halo', 'nama', 'febrian'];

// const [satu, dua, tiga] = perkenalan;
// console.log(satu);

//skipping items-------------------------
// const [satu, ,tiga] = perkenalan;
// console.log(satu);

//swap items-------------------------------
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return values pada function-----------------
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);


//rest parameter--------------------------
// const [a, ...values] = [1, 2, 4, 6, 8];
// console.log(values[3]);


//destructuring object------------------------
// const mhs = {
//     nama: 'febrian dimas',
//     umur: 22
// }
// const {nama, umur} = mhs;
// console.log(nama);

//assignment tanpa deklarasi object-----------
// ({nama, umur} = {
//     nama: 'febrian dimas',
//     umur: 22
// });

// console.log(nama);

//assign ke variable baru-------------------
// const mhs = {
//     nama: 'febrian dimas',
//     umur: 22
// };
// const {nama: n, umur: u} = mhs;
// console.log(nama);

//memberikan default value-------------------
// const mhs = {
//     nama: 'febrian dimas',
//     umur: 22
// };
// const {nama: n, umur: u, email = 'myemail@gmail.com'} = mhs;
// console.log(email);

//memberi nilai default dan assign ke variable baru---------------------------------------
// const mhs = {
//     nama: 'febrian dimas',
//     umur: 22,
//     email: 'myemail@gmail.com'
// };
// const {nama: n, umur: u, email: e = 'myemail@gmail.com'} = mhs;
// console.log(email);

//mengambil field pada object, setelah dikirim sebagai parameter pada function---------------
// const mhs = {
//     id: 1,
//     nama: 'febrian dimas',
//     umur: 22
// }

// function getIdMhs({id}) {
//     return id;
// }

// console.log(getIdMhs(mhs));
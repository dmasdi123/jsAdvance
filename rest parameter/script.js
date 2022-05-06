// function myFunc(...myArgs) {
//     return myArgs;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkah(...angka) {
//     let total = 0;
//     for(const a of angka) {
//         total += a;
//     }
//     return total;
// }
// console.log(jumlahkah(1, 2, 3, 4, 5));

//array destructuring
// const kelompok1 = ['Febrian', 'Dimas', 'Jason', 'Roy'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

//object destructuting
// const team = {
//     pm: 'Febrian',
//     fronEnd1: 'Dimas',
//     frontEnd2: 'Jason',
//     backEnd: 'Roy',
//     ux: 'Miller',
//     devOps: 'Agus'
// }

// const [pm, ...myTeam] = team;
// console.log(myTeam);

//filtering 
// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type);
// }
// console.log(filterBy('number', 2, 3,'Dimas', false));
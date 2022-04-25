//HTML fragment -----------------------
// const mhs = {
//     nama: 'febrian dimas',
//     umur: 22,
//     nrp: 2018420064
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp"> ${mhs.nrp} </span>
// </div>`;

// document.body.innerHTML = el;

//conditional with tenary--------------------
// const mhs2 = {
//     nama: 'febrian dimas',
//     umur: 22,
//     nrp: 2018420064
// };

// const el2 = `<div class="mhs">
//     <h2>${mhs2.nama}</h2>
//     <span class="nrp"> ${mhs2.nrp} umur ${mhs2.umur ? `( umur ${mhs2.umur})` : ''} </span>
// </div>`;

// document.body.innerHTML = el2;


//nested HTML fragment-----------------------
const mhs3 = {
    nama: 'febrian dimas',
    semester: 5,
    mataKuliah: [
        'data mining',
        'machine learning',
        'sistem pendukung keputusan'
    ]
};

function cetakMataKuliah(mataKuliah) {
   return `
   <ul>
        ${mataKuliah.map( mk => `<li>${mk}</li>` ).join('')}
    </ul>`;
}

const el3 = `<div class="mhs">
    <h2>${mhs3.nama}</h2>
    <span class="smster">Semester ${mhs3.semester} </span>
    <h4> Mata Kuliah: </h4>
    ${cetakMataKuliah(mhs3.mataKuliah)}
</div>`;

document.body.innerHTML = el3;

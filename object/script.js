//object literal-------------------------------
// let mahasiswa = {
//     nama: 'Febrian Dimas',
//     energy:10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Hello ${this.nama}`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'Adit intel',
//     energy:10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Hello ${this.nama}`);
//     }
// }

//function declaration-------------------------
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Hello ${this.nama}`);
//     }

//     mahasiswa.main = function(waktu) {
//         this.energy -= waktu;
//         console.log(`Halo ${this.nama}`);
//     }

//     return mahasiswa;
// } 

// let febrian = Mahasiswa('Dimas', 20);


//contructor function--------------------------
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Hello ${this.nama}`);
    }

    this.main = function(waktu) {
        this.energy -= waktu;
        console.log(`Halo ${this.nama}`);
    }


}

let febrian = new Mahasiswa('Dimas', 20);

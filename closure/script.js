//example 1
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Hello ${nama} Selamat ${waktu}`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatMalam = ucapkanSalam('Malam');

selamatMalam('Febrian');

//example 2
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

let a = add();

console.log(add());
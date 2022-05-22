//ajax using vanillajs------------------------------------------------------------------------------------------------
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.status === 200) {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response));
        }
    } else {
        console.log(JSON.parse(xhr.responseText));
    }
}

xhr.open('get', 'http://www.omdbapi.com/?apikey=51559b83&s=superman');
xhr.send();

fetch
fetch('http://www.omdbapi.com/?apikey=51559b83&s=superman').then(response => response.json()).then(response => console.log(response));

//promise------------------------------------------------------------------------------------------------
// object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
//janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

//example 1------------------------------------------------------------------------------------------------
let ditepati = true;
const janji1 = new Promise( (resolve, reject) => {
    if (ditepati) {
        resolve('janji telah ditepati');
    } else {
        reject('ingkar janji');
    }
});

janji1.then(response => console.log('ok' + response)).catch(response => console.log('not oke' + response));

//example 2------------------------------------------------------------------------------------------------
let ditepati = true;
const janji2 = new Promise( (resolve, reject) => {
    if (ditepati) {
        setTimeout( () =>  {
            resolve('ditepati setelah beberapa waktu!')
        }, 2000);
    } else {
        setTimeout( () => {
            reject('tidak ditepati setelah beberapa waktu!');
        }, 2000);
    }
});

console.log('mulai');
janji2.finally( () => console.log('selesai menunggu') ).then(response => console.log('ok' + response)).catch(response => console.log('not oke' + response));
console.log('selesai');

//promise.all ------------------------------------------------------------------------------------------------
const film = new Promise( resolve => {
    setTimeout( () => {
        resolve([{
            judul: 'batman',
            sutradara: 'Febrian'
        }]);
    }, 1000);
});

const cuaca = new Promise( resolve => {
    setTimeout( () => {
        resolve([{
            kota: 'surabaya',
            temperatur: '32'
        }]);
    }, 500);
});



Promise.all([film,cuaca]).then(response => console.log(response));
//callback
// synchronous callback
// function halo(nama) {
//     alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('masukan nama: ');
//     callback(nama);
// }

// tampilkanPesan(halo);

//asynchronous callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             }else if(xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach( m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');


//jquery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    succes: (mhs) => {
        mhs.forEach( m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');

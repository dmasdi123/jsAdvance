//spread operator------------------------------------------------------------------------------------------------
memecah iterable menjadi single element

const mhs = ['febrian', 'dimas', 'w'];
console.log(...mhs);

//menggabungkan 2 array------------------------------------------------------------------------------------------------
const mhs = ['febrian', 'dimas', 'w'];
const dosen = ['adit', 'rina', 'dono'];

const orang = [...mhs, ...orang];
console.log(orang);

//mengcopy array------------------------------------------------------------------------------------------------
const mhs  = ['febrian', 'dimas', 'w'];
const mhs2  = [...mhs];
console.log(mhs2);


const liMhs = document.querySelectorAll('li');
const mhs = [...liMhs].map(m => m.textContent);
console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map( h => `<span>${h}</span>`).join('');
console.log(huruf);

nama.innerHTML = huruf;
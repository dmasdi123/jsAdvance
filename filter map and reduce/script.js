// //ambil semua element video
// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// //pilih hanya yang 'overlord'
// let overlord = videos.filter( (video) => {
//     return video.textContent.includes('Overlord');
// //ambil masing masing durasi video
// }).map( (item) => {
//     return item.dataset.duration
// //ubah durasi menjadi float, ubah menit menjadi detik
// }).map( (waktu) => {
//     const parts = waktu.split(':').map( (part) => {
//         return parseFloat(part);
//     } );
//     return (parts[0] * 60) + parts[1];
// //jumlah semua detik
// }).reduce( (total, detik) => {
//     return total+ detik;
// }); 

// //ubah formatnya menjadi jam menit detik
// const jam = Math.floor(overlord / 3600);
// overlord = overlord - jam * 3600;
// const menit = Math.floor(overlord / 60);
// const detik = overlord - menit * 60;
// // console.log(overlord);

// // simpan di DOM
// const pDurasi = document.querySelector('.total-durasi');
// pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

// const jmlVideo = videos.filter( (video) =>  {
//     return video.textContent.includes('Overlord')
// }).length;

// const pjmlVideo = document.querySelector('.jumlah-video');
// pjmlVideo.textContent = `${jmlVideo} video`;
// console.log(jmlVideo);

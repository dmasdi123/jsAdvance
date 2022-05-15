// $('.search-button').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=51559b83&s='+ $('.input-keyword').val(),
//         success: result => {
//             const movies = result.Search;
//             let cards = '';
//             movies.forEach( m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
    
//             //ketika tombol detail diklik
//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=51559b83&i='+ $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                       $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.reponseText);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.reponseText);
//         }
//     });
// });

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=51559b83&s=superman',
//     success: result => {
//         const movies = result.Search;
//         let cards = '';
//         movies.forEach( m => {
//             cards += showCards(m);
//         });
//         $('.movie-container').html(cards);

//         //ketika tombol detail diklik
//         $('.modal-detail-button').on('click', function() {
//             $.ajax({
//                 url: 'http://www.omdbapi.com/?apikey=51559b83&i='+ $(this).data('imdbid'),
//                 success: m => {
//                     const movieDetail = showMovieDetail(m);
//                   $('.modal-body').html(movieDetail);
//                 },
//                 error: (e) => {
//                     console.log(e.reponseText);
//                 }
//             });
//         });
//     },
//     error: (e) => {
//         console.log(e.reponseText);
//     }
// });

//using fetch
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function() {
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=51559b83&s='+ inputKeyword.value)
//     .then(response => response.json())
//     .then(response => {
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach( m => cards += showCards(m));
//         const movieContainer = document.querySelector('.movie-container');
//         movieContainer.innerHTML = cards;

//         //ketika tombol detail diklik
//         const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//         modalDetailButton.forEach( btn => {
//           btn.addEventListener('click', function () {
//             const imdbid = this.dataset.imdbid;
//             console.log(imdbid);
//             fetch('http://www.omdbapi.com/?apikey=51559b83&i='+ imdbid)
//             .then(response => response.json())
//             .then( m => {
//               const movieDetail = showMovieDetail(m);
//               const modalBody = document.querySelector('.modal-body');
//               modalBody.innerHTML = movieDetail;
//             });
//           });
//         });
//     });
// });

//using ferch refactor
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
  try {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    // console.log(movies);
    updateUI(movies);
  } catch(err) {
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=51559b83&s='+ keyword)
  .then(response => {
    if (response.ok === false) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(response => {
    if (response.Response === "false") {
      throw new Error(response.Error);
    }
    return response.Search;
  });
}

function updateUI(movies) {
        let cards = '';
        movies.forEach( m => cards += showCards(m));
        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = cards;
}

//event binding
document.addEventListener('click', async function(e) {
  try {
    if(e.target.classList.contains('modal-detail-button')) {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);
      updateUIDetail(movieDetail);
    } 
  } catch(err) {
    alert(err);
  }
});

function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=51559b83&i=' + imdbid)
  .then(response => response.json())
  .then(m => m);
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
    return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}">
        <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
    </div>
</div>`;
}

function showMovieDetail(m) {
    return `        <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid">
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
          <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
          <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
          <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
          <li class="list-group-item"><strong>PLot : </strong> ${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
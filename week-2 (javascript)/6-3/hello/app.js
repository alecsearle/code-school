console.log("im in code school today");

let first_bad_movie = {
  name: "Kung-Fu-Panda 4",
  rating: 3.3,
};

console.log(first_bad_movie);

let bad_movies = [first_bad_movie];

let bad_movies_ul = document.getElementById("bad-movies-list");
let add_button = document.getElementById("bad-movie-button");
let bad_movie_input = document.getElementById("text-input");
let rating_input = document.getElementById("rating-input");

let reload_list = () => {
  bad_movies_ul.innerHTML = "";
  bad_movies.forEach(function (b_movie) {
    let bad_movie_li = document.createElement("li");
    bad_movie_li.innerHTML =
      b_movie.name + " | " + b_movie.rating + " Out of 10";
    bad_movies_ul.appendChild(bad_movie_li);
  });
};

reload_list();

add_button.onclick = () => {
  let new_movie = {};
  new_movie.name = bad_movie_input.value;
  new_movie.rating = rating_input.value;
  bad_movies.push(new_movie);

  reload_list();
  bad_movie_input.value = "";
  rating_input.value = "";
};

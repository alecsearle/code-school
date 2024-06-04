let song_url_input = document.getElementById("song-url-input");
let play_button = document.getElementById("play-button");
let audio_control = document.getElementById("audio");
let p_count = document.getElementById("count");

let counter = 0;

play_button.onclick = () => {
  counter++;
  p_count.innerHTML = counter;
};

// play_button.onclick = () => {
//   let url = song_url_input.value;
//   console.log(url);
//   audio_control.src = url;
//   audio_control.play();
// };

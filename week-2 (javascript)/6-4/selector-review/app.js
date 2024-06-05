let pick_me = document.getElementById("pick-me");
pick_me.classList.add("make-me-red");

//list of HTML elements as JS objects
let red_p_tags = document.querySelectorAll(".make-me-red");
let blue_p_tags = document.querySelectorAll(".make-me-blue");
let zero_p_tags = document.querySelectorAll(".make-me-0");
let one_p_tags = document.querySelectorAll(".make-me-1");

red_p_tags.forEach((p_tag) => {
  p_tag.style.color = "red";
});

blue_p_tags.forEach((p_tag) => {
  p_tag.style.color = "blue";
});

zero_p_tags.forEach((p_tag) => {
  p_tag.innerHTML = "0";
});

one_p_tags.forEach((p_tag) => {
  p_tag.innerHTML = "1";
});

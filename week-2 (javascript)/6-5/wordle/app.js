// event click 0> callabck
// onkeypress -> key down -> callback =>{
// set first empty div innerHTML to the keypress letter
// }

// Keep and save the data when refreshed

// onenterdown =>{
// locks in our guess and then checks against the winning word
// Green if:
//  if letter is in same place as correct word
// Yellow if:
//  if letter is in word but not in correct place
// Gray if:
//  if letter is not in word
// }

// global answer
let answer;

let playGame = async () => {
	// check if local storage has a word already
	if (localStorage.getItem("answer")) {
		answer = localStorage.getItem("answer");
	} else {
		// if localStorage does not have an answer, get one from the API
		answer = await getAnswerWord();
		// then save it
		localStorage.setItem("answer", answer);
	}
};

let getAnswerWord = async () => {
	let response = await fetch(
		"https://api.jsonbin.io/v3/b/629f9937402a5b38021f6b38"
	);
	let wordJson = await response.json();
	console.log(wordJson);
	// round down random number to whole number
	let randomIndex = Math.floor(Math.random() * wordJson.record.answers.length);
	let answer = wordJson.record.answers[randomIndex];
	return answer;
};

playGame();

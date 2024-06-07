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
let total_words;
let currentGuess = "";
let guesses = [];

let playGame = async () => {
	// check if local storage has a word already
	if (localStorage.getItem("answer")) {
		// parse the JSON string when we laod the data
		answer = JSON.parse(localStorage.getItem("answer"));
		total_words = JSON.parse(localStorage.getItem("total_words"));
		guesses = JSON.parse(localStorage.guesses) || [];
	} else {
		// if localStorage does not have an answer, get one from the API
		answer = await getAnswerWord();
		// then save it
		// make data a JSON string when we save
		localStorage.setItem("answer", JSON.stringify(answer));
		localStorage.setItem("total_words", JSON.stringify(total_words));
	}
	setUpInputs();
	updateGuesses();
};

let getAnswerWord = async () => {
	let response = await fetch(
		"https://api.jsonbin.io/v3/b/629f9937402a5b38021f6b38"
	);
	let wordJson = await response.json();
	// round down random number to whole number
	let randomIndex = Math.floor(Math.random() * wordJson.record.answers.length);

	total_words = wordJson.record.allowed.concat(wordJson.record.answers);

	let answer = wordJson.record.answers[randomIndex];
	return answer;
};

let updateGuesses = () => {
	let guesses_parent_div = document.getElementById("guesses");
	guesses_parent_div.innerHTML = "";

	for (let i = 0; i < 6; i++) {
		let g_child_div = document.createElement("div");
		g_child_div.classList.add("guess");
		guesses_parent_div.appendChild(g_child_div);

		let result;

		if (i < guesses.length) {
			g_child_div.classList.add("guessed");
			result = checkWord(guesses[i]);
		}
		// make letters
		for (let j = 0; j < 5; j++) {
			let letterDiv = document.createElement("div");
			letterDiv.classList.add("letter");

			// already submitted guesses
			if (i < guesses.length) {
				letterDiv.innerHTML = guesses[i][j];
				if (result[j] === "green") {
					letterDiv.classList.add("match");
				} else if (result[j] === "yellow") {
					letterDiv.classList.add("contains");
				}
			}
			// here after we set the text while typing
			if (i === guesses.length && j < currentGuess.length) {
				letterDiv.innerHTML = currentGuess[j];
			}
			g_child_div.appendChild(letterDiv);
		}
	}
};

let checkWord = (guess) => {
	let result = ["gray", "gray", "gray", "gray", "gray"];
	let answerList = answer.split("");
	// mark correct letters as GREEN
	for (let i = 0; i < 5; i++) {
		if (answerList[i] === guess[i]) {
			answerList[i] = null;
			result[i] = "green";
		}
	}

	//mark yellow if letter is in word, but not correct place
	for (let i = 0; i < 5; i++) {
		let index = answerList.indexOf(guess[i]);
		if (index >= 0 && result[i] === "gray") {
			answerList[i] = null;
			result[i] = "yellow";
		}
	}
	return result;
};

let submitGuess = () => {
	let message_div = document.getElementById("message");
	// test if guess is 5 letters
	if (currentGuess.length < 5) {
		message_div.innerHTML = "You need 5 letters bro";
	} else if (!total_words.includes(currentGuess)) {
		message_div.innerHTML = "Learn english and get back to me" + "&#129299;";
	}
	// test if we have used all our guesses
	else if (guesses.length < 6) {
		guesses.push(currentGuess);
		// save guesses
		localStorage.setItem("guesses", JSON.stringify(guesses));

		if (currentGuess === answer) {
			message_div.innerHTML = "YOU WIN YAY";
		} else if (guesses.length === 6) {
			message_div.innerHTML =
				"Womp Womp Loser :( " + "The answer was: " + answer;
		}
	}
};

let setUpInputs = () => {
	document.onkeydown = (event) => {
		if ("a" <= event.key && event.key <= "z" && currentGuess.length < 5) {
			currentGuess += event.key;
		} else if (event.key === "Backspace" && currentGuess.length > 0) {
			currentGuess = currentGuess.slice(0, -1);
			//TODO set this up to submit answer
		} else if (event.key === "Enter") {
			submitGuess();
			currentGuess = "";
		}
		updateGuesses();
	};
};

playGame();

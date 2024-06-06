let get_gpa_button = document.getElementById("get-gpa");
let gpa_h3 = document.getElementById("gpa");

// TODO:
// Make this all of the input elements
// Make this a single line of code.
// Hint: get all of the document.query....All(".class-name")
// Hint: Please don't put my hint code exactly and expect it to work :)
let inputs = document.querySelectorAll(".gpa-input"); // finish the rest
console.log(inputs);

let getGPA = () => {
	let gpa_points = 0;
	let gpa = 0;
	inputs.forEach(find_grade);
	function find_grade(input) {
		if (parseInt(input.value) >= 90) {
			gpa_points += 4;
		} else if (parseInt(input.value) >= 80) {
			gpa_points += 3;
		} else if (parseInt(input.value) >= 70) {
			gpa_points += 2;
		} else if (parseInt(input.value) >= 60) {
			gpa_points += 1;
		} else {
			gpa_points += 0;
		}
	}
	gpa = gpa_points / 4;
	return gpa;

	// step 1 set some variable for gpa points and make it equal to 0 to start
	// step 2 do the same but now for the gpa
	// step 3 loop through inputs:{
	// 		if a input value in inputs >= 90: gpaPoints += 4
	// 		elif a input value in inputs >= 80: gpaPoints += 3
	// 		elif a input value in inputs >= 70: gpaPoints += 2
	// 		elif a input value in inputs >= 60: gpaPoints += 1
	// 		else gpaPoints +=0
	// }
	//
	// step 4 - after the loop now calculate the gpa
	// HINT This is gpaPoints diveded by the number of classes(4 in this case)
	// return it
	//
};

get_gpa_button.onclick = () => {
	let gpa = getGPA();
	inputs.forEach(find_empty);
	function find_empty(input) {
		if (parseInt(input.value) === "") {
			return alert("hells nah");
		}
	}
	gpa_h3.innerHTML = gpa;
	// if any of the inputs have a value that's empty{
	// 		return out and don't do anything :o
	// }
	// get the gpa using getGPA
	// set the h3 text to be the gpa
	//
	// if gpa > 3.0 add the class of good-gpa to it
};

let task_name_in = document.getElementById("task-name-input");
let task_importance_in = document.getElementById("task-importance-input");
let submit_task_button = document.getElementById("submit-task-button");
let clear_list_button = document.getElementById("clear-list-button");
let ul = document.getElementById("things-to-do");

submit_task_button.onclick = () => {
	if (task_name_in === "" || task_importance_in === "") {
		return alert("No empty fields por favor");
	} else {
		console.log("in else");
		let new_li = document.createElement("li");
		new_li.innerHTML = task_name_in.value;
		new_li.classList.add("not-done");
		ul.appendChild(new_li);
		new_li.onclick = () => {
			if (new_li.classList.contains("not-done")) {
				new_li.classList.remove("not-done");
				new_li.classList.add("done");
			} else {
				new_li.classList.remove("done");
				new_li.classList.add("not-done");
			}
		};
		li.ondblclick = () => {
			li.innerHTML = "";
		};
	}

	/*

	  step 1 check if task_name_in OR task_importance_in are empty:
		by empty I mean equals to a empty string
	 	if either one of them are empty:
			alert("No empty fields")
			return right away

		step 2: if you're good then:
							make a new li element
							make it's innerHTML be set to the task_name_in value
							set it's class to be "not-done"


		step 3 - add a onclick function to that li:
							When you click the li you want to check it's class:
							HINT: classList.contains("the-class-you-want-to-check")
							if the classList contains "not-done":
								remove "not-done" from the classList
								add "done" to the class list
							else:
								remove "done" from the classList
								add "not-done" to the class list

		step 4 - Add the li to the ul :)


	*/
};

clear_list_button.onclick = () => {
	ul.innerHTML = "";
};

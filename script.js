var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

//-- Create a list item --//
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ("");
	//-- Create Delete Button --//
	var button = document.createElement("button");
	button.classList.add("fa", "fa-trash-alt");
	// button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	button.onclick = removeParent;
}


//-- Add list item to the list --//
function addListElementAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListElementAfterKeyPress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

//-- Execute functions --//
button.addEventListener("click", addListElementAfterClick);
input.addEventListener("keypress", addListElementAfterKeyPress);

//--List item line through --//
ul.onclick = function(event) {
	target = event.target;
	target.classList.toggle("done");
}

//-- Remove list item when the button is clicked --/ 
function removeParent(evt){
	evt.target.parentNode.remove();
}



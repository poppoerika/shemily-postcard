//validateForm function is referenced from https://www.w3schools.com/js/js_validation.asp and edited by Erika Tharp.
function validateForm() {
    var name = document.getElementById("fullname").value;
    var message = document.getElementById("message").value;
    if (name == "" || message == "") {
        alert("Name and message must be filled out");
        return false;
    }

    else {
    	alert("Thank you for submitting your message, " + name + "!");
    }

}

//When the user put his mouse over the submit button, the word "Submit" will be capitalized.
function capitalize() {
	document.getElementById("submitBtn").value = "SUBMIT";
}

//When the user put his mouse out the submit button, the capitalized word "SUBMIT" will become "Submit.
function normal() {
	document.getElementById("submitBtn").value = "Submit";
}


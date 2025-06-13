function MyFunction(){

	//INITIALIZATION
	var fullName = document.getElementById("inputName").value;
	var email = document.getElementById("inputEmail").value;
	var passWord = document.getElementById("inputPassword").value;
	var phoneNumber = document.getElementById("inputNumber").value;
	var birthDate = document.getElementById("inputDate").value;
	var gender = document.getElementById("inputGender").value;
	var course = document.getElementById("inputCourse").value;
	const checkbox = document.getElementById('inputTerms');



	//DISPLAYING OF REGISTRATION

	var showResult = 
	"Registration Successfully!\n\n" + 
	"Name: " + fullName +
	"\nEmail: " + email +
	"\nPassword: " + passWord +
	"\nPhone Number: " + phoneNumber +
	"\nDate of Birth: " + birthDate +
	"\nCourse/Program: " + course;

	var wrongResult = "Please fill out empty fields!"


	if (!fullName || !email || !passWord || !phoneNumber || !birthDate || !course || !gender) {

	console.log(wrongResult);
	alert(wrongResult);
	}
	else {
		if (!checkbox.checked) {
  			console.log('Please agree to the Terms & Conditions.');
			alert("Please agree to the Terms & Conditions.")
} else {
  	console.log(showResult);
	alert(showResult);
}

	}


}


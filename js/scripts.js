
function validate_contact_form() {
	
// Get Field Values 
var name = document.getElementById("fname").value;
    
var name = document.getElementById("lname").value;
    
var email = document.getElementById("email").value;
    
var phone = document.getElementById("phone").value;

// Check Email
var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
var number = /^\s*\d+\s*$/;
    
var phone_validation = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
    
//var phone_validation = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

if (fname == '' && lname == ''  && email == '' && phone == '') {
alert("All Fields Are Required!");
return false;
	}

if ($('#fname').val().length < 3){
		alert("Your first name should be of at least 3 charcters and without space.");
		$('#name').focus();
		return false;
	}

if ($('#lname').val().length < 3){
		alert("Your last name should be of at least 3 charcters and without space.");
		$('#name').focus();
		return false;
	}
				
if ($('#email').val().length < 3) {
		alert('The Email Address is Not Valid.');
		$('#email').focus();
		return false;
	}
	
if (!email.match(emailReg)) {
alert("Please Enter A Valid Email Address!");
return false;
	}
    


/*if ($('#phone').val().length < 10){
		alert("Please enter a valid phone number");
		$('#phone').focus();
		return false;
	}*/



	
 if (!phone.match(phone_validation)) {
		alert("Please enter a valid phone number!");
		return false;
	}

}
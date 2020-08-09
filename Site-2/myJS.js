
var element = document.body;
function myDark()
{
	element.classList.toggle("dark-mode");
	return;
}

function set_username_validate()
{
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var confirm_password = document.getElementById('confirm_password');
	if(username.value.trim() == "")
	{
		//alert("Blank Username not allowed");
		document.getElementById("form-control-username").className = 'form-control error';
		setErrorFor(username, 'Username cannot be blank');
		return false;
	}
	else if(username.value.trim().length > 25 )
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-username").className = 'form-control error';
		setErrorFor(username, 'Username cannot be more than 25 characters');
		return false;
	}
	else if(password.value.trim() == "")
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-username").className = 'form-control success';
		document.getElementById("form-control-password").className = 'form-control error';
		setErrorFor(password, 'Password cannot be blank');
		return false;
	}
	else if(password.value.trim().length < 8)
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-username").className = 'form-control success';
		document.getElementById("form-control-password").className = 'form-control error';
		setErrorFor(password, 'Password length must be atleast 8');
		return false;
	}
	else if(confirm_password.value.trim() == "")
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-username").className = 'form-control success';
		document.getElementById("form-control-password").className = 'form-control success';
		document.getElementById("form-control-confirm_password").className = 'form-control error';
		setErrorFor(confirm_password, 'Re-Password cannot be blank');
		return false;
	}
	else if(confirm_password.value.trim() != password.value.trim())
	{
		document.getElementById("form-control-username").className = 'form-control success';
		document.getElementById("form-control-password").className = 'form-control success';
		document.getElementById("form-control-confirm_password").className = 'form-control error';
		setErrorFor(confirm_password, 'Password and Re-Password does not match');
		return false;
	}
	else
	{
		document.getElementById("form-control-username").className = 'form-control success';
		document.getElementById("form-control-password").className = 'form-control success';
		document.getElementById("form-control-confirm_password").className = 'form-control success';
		return true;
	}
}


function send_otp_again()
{
	alert("New OTP has been sent.");
}

function  otp_validate()
{
	if(otp.value.trim() == "")
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-otp").className = 'form-control error';
		setErrorFor(otp, 'OTP Required');
		return false;
	}
	else if(otp.value.trim().length < 6 )
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-otp").className = 'form-control error';
		setErrorFor(otp, 'OTP must be of 6 digits');
		return false;
	}
	else
	{
		document.getElementById("form-control-otp").className = 'form-control success';
		return true;
	}
}

function login_username_validate()
{
	var username = document.getElementById('username');
	if(username.value.trim() == "")
	{
		//alert("Blank Username not allowed");
		document.getElementById("form-control-username").className = 'form-control error';
		setErrorFor(username, 'Username cannot be blank');
		return false;
	}
	else
	{
		document.getElementById("form-control-username").className = 'form-control success';
		return true;
	}
}

function login_validate()
{
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	if(username.value.trim() == "")
	{
		//alert("Blank Username not allowed");
		document.getElementById("form-control-username").className = 'form-control error';
		setErrorFor(username, 'Username cannot be blank');
		return false;
	}
	else if(password.value.trim() == "")
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-username").className = 'form-control success';
		document.getElementById("form-control-password").className = 'form-control error';
		setErrorFor(password, 'Password cannot be blank');
		return false;
	}
	else
	{
		document.getElementById("form-control-username").className = 'form-control success';
		document.getElementById("form-control-password").className = 'form-control success';
		return true;
	}
}

function register_validate()
{
	var firstname = document.getElementById('firstname');
	var lastname = document.getElementById('lastname');
	var dob = document.getElementById('dob');
	var email = document.getElementById('email');
	var mobileno = document.getElementById('mobileno');
	if(firstname.value.trim() == "")
	{
		//alert("Blank Username not allowed");
		document.getElementById("form-control-firstname").className = 'form-control error';
		setErrorFor(firstname, 'Firstname cannot be blank');
		return false;
	}
	else if(lastname.value.trim() == "")
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-firstname").className = 'form-control success';
		document.getElementById("form-control-lastname").className = 'form-control error';
		setErrorFor(lastname, 'Lastname cannot be blank');
		return false;
	}
	else if(dob.value.trim() == "")
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-firstname").className = 'form-control success';
		document.getElementById("form-control-lastname").className = 'form-control success';
		document.getElementById("form-control-dob").className = 'form-control success';
		document.getElementById("form-control-dob").className = 'form-control error';
		setErrorFor(dob, 'Date of Birth cannot be blank');
		return false;
	}
	else if(email.value.trim() == "")
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-firstname").className = 'form-control success';
		document.getElementById("form-control-lastname").className = 'form-control success';
		document.getElementById("form-control-dob").className = 'form-control success';
		document.getElementById("form-control-email").className = 'form-control error';
		setErrorFor(email, 'Email cannot be blank');
		return false;
	}
	else if(mobileno.value.trim() == "")
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-firstname").className = 'form-control success';
		document.getElementById("form-control-lastname").className = 'form-control success';
		document.getElementById("form-control-dob").className = 'form-control success';
		document.getElementById("form-control-email").className = 'form-control success';
		setErrorFor(mobileno, 'Mobile number cannot be blank');
		return false;
	}
	else if(mobileno.value.trim().length < 10 )
	{
		//alert("Blank Password not allowed");
		document.getElementById("form-control-firstname").className = 'form-control success';
		document.getElementById("form-control-lastname").className = 'form-control success';
		document.getElementById("form-control-dob").className = 'form-control success';
		document.getElementById("form-control-email").className = 'form-control success';
		setErrorFor(mobileno, 'Mobile Number must be of 10 digits');
		return false;
	}
	else
	{
		document.getElementById("form-control-firstname").className = 'form-control success';
		document.getElementById("form-control-lastname").className = 'form-control success';
		document.getElementById("form-control-dob").className = 'form-control success';
		document.getElementById("form-control-email").className = 'form-control success';
		document.getElementById("form-control-mobileno").className = 'form-control success';
		alert("OTP has been sent to your Mobile Number)");
		return true;
	}
}

function setErrorFor(input, message)
{
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;

	formControl.className = 'form-control error';
}


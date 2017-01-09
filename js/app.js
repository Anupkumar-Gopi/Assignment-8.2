"use strict";

/* Check for login credentials */
function login(){
	if(document.getElementById("usrname").value == localStorage.name){ // check localstorage key name
		if(document.getElementById("passwrd").value == localStorage.password){ // check localStorage key password
			return true;
		}	
	};
	document.getElementById("msg").style.display='block';
	document.getElementById("msg").innerHTML = "Incorrect Username or Password"
	return false;
	
}

/* Store user credentials */
function signup(){	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var pssw = document.getElementById("passwrd").value;
	
	if(name.length>0 && email.length>0 && pssw.length>0){
		localStorage.setItem("name",name);	// store name key with value
		localStorage.setItem("email",email); // store email key with value
		localStorage.setItem("password",pssw); // store pass key with value
		return true;
	};
	document.getElementById("msg").style.display='block';
	document.getElementById("msg").innerHTML = "Name or Email or Password is empty"
	return false;
}

/* Go Back function */
function back(id){
	switch(id){
		case 'lback':
		case 'sback':
			window.location.href="main.html";
			break; 	
	}
}

/* Go Forward function */
function frwd(id){
	switch(id){
		case 'login':
			window.location.href="login.html";
			break;
		case 'signup':
			window.location.href="signup.html";
			break; 	
	}
}

/* Get username to display function */
function getUname(){
	document.getElementById("uname").innerHTML=localStorage.getItem("name"); // display username on dashboard page.
}
function openClipboard(){
	document.getElementById('default').style.display = 'none';
	document.getElementById('clipboard').style.display = 'block'; //open clipboard info popup
	document.getElementById('idcard').style.display = 'none'; //close ID info popup
}


function openIDcard() {
	document.getElementById('default').style.display = 'none';
	document.getElementById('idcard').style.display = 'block'; //open ID info popup
	document.getElementById('clipboard').style.display = 'none'; //close clipboard if open
}

// Print ID info:

function printMembername(firstName, lastName) {
	document.getElementById('idcard-membername').innerHTML = lastName + "," + firstName;
}

function printEmail(email) {
	document.getElementById('idcard-email').innerHTML = email;
}

function printJoindate(joinDate) {
	document.getElementById('idcard-joindate').innerHTML = joinDate;
	
}

window.onload = function (){
	var userData = {
			firstName: "Emory",
			lastName: "Jiang",
			email: "emjiang@uci.edu",
			joinDate: "2015/11/21"
	};
	
	printMembername(userData.firstName, userData.lastName);
	printEmail(userData.email);
	printJoindate(userData.joinDate);
}

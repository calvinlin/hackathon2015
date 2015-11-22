function openClipboard(){
	document.getElementById('clipboard-open').style.display = 'block'; //open clipboard info popup
	document.getElementById('idcard-open').style.display = 'none'; //close ID info popup
}

function closeClipboard() {
	document.getElementById('clipboard-open').style.display = 'none';
}



function openIDcard() {
	document.getElementById('idcard-open').style.display = 'block'; //open ID info popup
	document.getElementById('clipboard-open').style.display = 'none'; //close clipboard if open
}

function closeIDcard() {
	document.getElementById('idcard-open').style.display = 'none';
}


// Print ID info:

function printMembername() {
	document.getElementById('idcard-membername').innerHTML = "<b>Name:</b><br>Emory Jiang";
}

function printEmail() {
	document.getElementById('idcard-email').innerHTML = "<b>Email:</b><br>emjiang@uci.edu";
}

function printJoindate() {
	document.getElementById('idcard-joindate').innerHTML = "<b>Join:</b><br>2015/11/21"
	
}

window.onload = function (){
	printMembername();
	printEmail();
	printJoindate();
}

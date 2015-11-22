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
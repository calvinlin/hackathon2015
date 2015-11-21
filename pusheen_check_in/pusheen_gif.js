var check_in_time = new Date();

function displayImage(obj) {
	obj.style.display = "block";
}

function printCheckin() {
	var msg = "Your check in time is: ";
	var d = new Date();
	d = check_in_time;
	msg = msg.concat(d.toDateString() + "  " + "  " + d.getHours().toString() + ":" + d.getMinutes().toString());
	//msg = msg.concat(d.getMonth().toString() + "/" + d.getDate().toString() + "/" + d.getUTCFullYear().toString() + "  " + d.getHours().toString() + ":" + d.getMinutes().toString());
	return msg;
}

function Checkin_return() {
	return check_in_time.getUTCFullYear().toString() + "-" + check_in_time.getMonth().toString() + "-" + check_in_time.getDate().toString() + " " + check_in_time.getUTCHours().toString() + ":" + check_in_time.getSeconds().toString();
}


$("#checkin-time").text(printCheckin());
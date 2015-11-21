var check_in_time = new Date();
var year = check_in_time.getUTCFullYear().toString();
var month = check_in_time.getMonth().toString();
var day = check_in_time.getDate().toString();
var time = check_in_time.getHours().toString() + ":" + check_in_time.getMinutes().toString();
var date = year + "-" + month + "-" + day;

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
	return check_in_time.getUTCFullYear().toString() + "-" + check_in_time.getMonth().toString() + "-" + check_in_time.getDate().toString() + " " + check_in_time.getHours().toString() + ":" + check_in_time.getMinutes().toString();
}


$("#checkin-time").text(printCheckin());



function checkIn(date, time) {
	//stuff
}
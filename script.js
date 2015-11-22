var INTERVAL = 5;
var STEP_SIZE = 2;

var BASE_OFFSET_X = 60;
var BASE_OFFSET_Y = 20;

var DEST_OFFSET_X = 255;
var DEST_OFFSET_Y = 160;

var currentPos = [60, 12];
var destination = [0, 0];
var destinationIndex = -1;
var atDestination = true;
var isTurned = false;

var lastTimeoutSet = 0;

var containerElement = null;
var memberSprite = null;

function moveSprite(){
	if (atDestination == false){
		if (Math.abs(currentPos[1] - destination[1]) < STEP_SIZE + 2){
			currentPos[1] = destination[1];
			
			if (!isTurned){
				isTurned = true;
			}
			
			if (Math.abs(currentPos[0] - destination[0]) < STEP_SIZE + 2){
				currentPos[0] = destination[0];
				atDestination = true;
			} else {
				currentPos[0] += Math.sign(destination[0] - currentPos[0]) * STEP_SIZE;
			}
			
		} else if (currentPos[1] != destination[1]){
			if (isTurned){
				if (Math.abs(currentPos[0] - BASE_OFFSET_X) < STEP_SIZE + 2){
					isTurned = false;
					currentPos[0] = BASE_OFFSET_X;
				} else {
					currentPos[0] -= Math.sign(currentPos[0] - BASE_OFFSET_X) * STEP_SIZE;
				}
			} else {
				currentPos[1] += Math.sign(destination[1] - currentPos[1]) * STEP_SIZE;
			}
		}
		
		memberSprite.style.left = currentPos[0].toString() + "px";
		memberSprite.style.bottom = currentPos[1].toString() + "px";
		
		window.clearTimeout(lastTimeoutSet);
		lastTimeoutSet = window.setTimeout(moveSprite, INTERVAL);
	}
}



window.onload = function(){
	
	var navButtonNodes = document.body.querySelectorAll("div#container > div.nav-button");
	
	containerElement = document.getElementById("container");
	memberSprite = document.getElementById("member-sprite");
	
	for (var i = 0; i < navButtonNodes.length ; ++i){
		navButtonNodes.item(i).addEventListener("mouseover", function (numElement, element){
			function setDestination(event){
				if (numElement != destinationIndex){
					atDestination = false;
					
					destinationIndex = numElement;
					destination = [DEST_OFFSET_X, containerElement.getBoundingClientRect().bottom - 
					               element.getBoundingClientRect().bottom + BASE_OFFSET_Y];

					window.clearTimeout(lastTimeoutSet);
					lastTimeoutSet = window.setTimeout(moveSprite, INTERVAL);
				}
			}
			return setDestination;
		}(navButtonNodes.length - i - 1, navButtonNodes.item(i)));
	}
	
	
}
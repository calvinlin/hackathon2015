window.onload = function(){
	var lastSelectedItem = null;
	var listItems = document.body.querySelectorAll("ul#inventory-display > li");
	
	for (var i = 0; i < listItems.length; ++i){
		listItems.item(i).addEventListener("click", function(event){
			if (lastSelectedItem){
				lastSelectedItem.classList.remove("selected");
			}
			event.currentTarget.classList.add("selected");
			lastSelectedItem = event.currentTarget;
		});
	}
	
};
var itemData = [
	{
		name: "Cyberpower PC",
		price: 50,
		quantity: 10,
		image: "http://www.techpowerup.com/img/12-08-16/87a.jpg",
		description: "Gaming PC."
	},
	{
		name: "Table",
		price: 10,
		quantity: 20,
		image: "http://image.made-in-china.com/2f0j00OZrTcgFGHtqo/6ft-Folding-Half-Table-Folding-Furniture-YCZ-180Z-.jpg",
		description: "Table"
	},
	{
		name: "3D Printer",
		price: 100,
		quantity: 5,
		image: "http://makerbot-blog-old.s3.amazonaws.com/wp-content/uploads/2014/01/MB05_REP_01B_Hero.jpg",
		description: ""
	},
	{
		name: "Razerblade Laptop",
		price: 15,
		quantity: 3,
		image: "http://ecx.images-amazon.com/images/I/71%2BmlGtk9TL._SX522_.jpg",
		description: "Razer gaming laptop"
	},
	{
		name: "G502 Logitech Mouse",
		price: 5,
		quantity: 7,
		image: "http://cdn1.techbargains.us.com/icache/2009/07/12/00006602.jpeg&width=200&height=200",
		description: "gaming mouse"
	},
	{
		name: "Turtle Beach Headphones",
		price: 5,
		quantity: 10,
		image: "http://cdn-assets.turtlebeach.com/products/58/images/large_x32_5.jpg",
		description: "headphones with mic"
	}
];

window.onload = function(){
	var inventoryElement = document.getElementById("inventory-display");
	
	var itemInfoImage = document.getElementById("item-image");
	var itemInfoRent = document.getElementById("item-buy");
	var itemInfoDesc = document.getElementById("item-desc");
	var itemInfoQuantity = document.getElementById("item-quantity");
	
	var lastSelectedItem = null;
	var lastSelectedItemObject = null;
	
	var listItems = document.body.querySelectorAll("ul#inventory-display > li");
	
	for (var item = 0; item < itemData.length; ++item){
		var itemObject = itemData[item];
		var element = document.createElement("li");
		element.classList.add("item-listing");
		
		var content = '<span class="cursor">></span><span class="item-name">' + itemObject.name + '</span><span class="item-price">' + itemObject.price + '</span>';
		element.innerHTML = content; 
		
		inventoryElement.appendChild(element);
		
		element.addEventListener("click", function(itemObjectHere){
			return function(event){
				if (lastSelectedItem){
					lastSelectedItem.classList.remove("selected");
				}
				event.currentTarget.classList.add("selected");
				lastSelectedItem = event.currentTarget;
				lastSelectedItemObject = itemObjectHere;
				
				if (!itemObjectHere.image){
					itemInfoImage.style.background = "lightgrey";
					itemInfoImage.textContent = "Add image here";
				} else {
					itemInfoImage.style.background = "center/contain no-repeat url('" + itemObjectHere.image + "')";	
					itemInfoImage.textContent = "";
				}
				
				itemInfoDesc.textContent  = itemObjectHere.description;
				itemInfoQuantity.textContent = itemObjectHere.quantity;
				
				if (!itemObjectHere.quantity){
					itemInfoRent.classList.add("invalid");
				} else {
					itemInfoRent.classList.remove("invalid");
				}
			}
		}(itemObject));
		
	}
	
	itemInfoRent.addEventListener('click', function(){
		if (lastSelectedItemObject.quantity > 0){
			lastSelectedItemObject.quantity = lastSelectedItemObject.quantity - 1;
			itemInfoQuantity.textContent = lastSelectedItemObject.quantity.toString();
		}
		
		if (lastSelectedItemObject.quantity == 0){
			itemInfoRent.classList.add("invalid");
		}
	});
	
};
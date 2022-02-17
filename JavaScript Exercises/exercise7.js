var fruits=["Banana", "Orange", "Apple", "Mango"];

function loadfruits() {
	document.getElementById("fruits").innerHTML=fruits;
}

function myFunction() {
	var fruit=prompt("What is your favourite fruit?");
	fruits[fruits.length]=fruit;
	document.getElementById("fruits").innerHTML=fruits;
}
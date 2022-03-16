function roller() {
	let roll=Math.floor(Math.random()*7);
	if(roll==0)
		roll=1;
	document.getElementById('dice').innerHTML=roll;
	console.log(roll);
}


var countDownDate=new Date("Jan 1, 2023 00:00:00").getTime();
var x=setInterval(function() {

	var now = new Date().getTime();
	var distance = countDownDate-now;

	var days=Math.floor(distance/(1000*60*60*24));
	var hours=Math.floor(distance % (1000*60*60*24)/(1000*60*60));
	var minutes=Math.floor(distance % (1000*60*60)/(1000*60));
	var seconds=Math.floor(distance % (1000*60)/(1000));

	document.getElementById("days").innerHTML=days;
	document.getElementById("hours").innerHTML=formatTime(hours);
	document.getElementById("mins").innerHTML=formatTime(minutes);
	document.getElementById("seconds").innerHTML=formatTime(seconds);

	function formatTime(time) {
		return (time < 10 ?"0":"")+time;
	}
	

	if (distance<0){
		clearInterval(x);
		document.getElementById("timer").innerHTML="Expired!"
	}

	console.log(distance);
}, 1000);
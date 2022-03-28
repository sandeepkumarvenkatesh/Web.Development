const timer=document.getElementById('stopwatch');

let hr=0;
let min=0;
let sec=0;

let stoptime=true;

function startTimer() {
	if (stoptime==true){
		stoptime=false;
		timercycle();
	}
}

function stopTimer() {
	if (stoptime==false){
		stoptime=true;
	}
}

function timercycle() {
	if (stoptime==false){
		sec=parseInt(sec);
		min=parseInt(min);
		hr=parseInt(hr);

		sec=sec+1;

		if (sec==60){
			min=min+1;
			sec=0;
		}

		if (min==60){
			hr=hr+1;
			min=0;
			sec=0;
		}
		if (sec < 10 || sec == 0) {
			sec = '0' + sec;
		}
		if (min < 10 || min == 0) {
			min = '0' + min;
		}
		if (hr < 10 || hr == 0) {
			hr = '0' + hr;
		}

		timer.innerHTML=hr+":"+min+":"+sec;

		setTimeout("timercycle()",1000);

	}
}

function resetTimer() {
	timer.innerHTML='00:00:00';
	stoptime=true;
	hr=0;
	min=0;
	sec=0;


}
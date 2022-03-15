let counter=0;

function increment(){
    // counter = counter + 1;
    counter++
    //counter += 1
    console.log(counter);
    document.getElementById('counter').innerHTML = counter;
}

function decrement() {
	counter--
	document.getElementById('counter').innerHTML=counter;
}

function reset() {
	counter=0
	document.getElementById('counter').innerHTML=counter;
}
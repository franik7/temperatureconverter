//Write your pseduo code first!
//action
document.querySelector('#convertit').addEventListener('click', convert)

function convert() {
	// need the value that is in Celsius
	let temp = document.querySelector('#degree').value
	//convert from Celsiut to Fahrenheit
	temp = temp * (9 / 5) + 32;
	// show it
	document.querySelector('#outputemp').innerText = temp;

}

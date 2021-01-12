var balans = 5;
var texmin;
var eded = Math.floor(Math.random() * 10 + 1);
console.log(eded);

while (balans > 0) {
	balans--;
	texmin = Number(prompt("Bir eded yazin"));
	if (texmin == eded) {
		console.log("Tebrikler. Dogrudur");
		break;
	} else if (texmin > eded) {
		console.log("Yuxari");
	} else {
		console.log("Ashagi");
	}
	if (balans == 0) {
		console.log("Haqqiniz bitdi");
	}
}

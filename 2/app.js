/* var name = 'John';

function first() {
	var a = 'Hello ';
	second();
	var x = a + name;
	console.log(x);

}

function second() {
	var b = 'Hi ';
	third();
	var z = b + name;
	console.log(z);

}

function third() {
	var c = 'Hey ';
	var z = c + name;
	console.log(z);

}

first(); */

//hoisting

//functoin declaration
/* calcAge(1990);

function calcAge(year) {
	console.log(2016 - year);
} */

//function expression
//retirement(1999);
/* 
var retirement = function (year) {
	console.log(65 - (2020 - year));

}

//variables

console.log(x);
var x = 20; */

//scope chain
/* 
var a = 'Hello ';
first();

function first() {
	var b = 'Hi ';
	second();

	function second() {
		var c = 'Hey';
		console.log(a + b + c);

	}
} */
/* 
var a = 'Hello ';
first();

function first() {
	var b = 'Hi ';
	second();

	function second() {
		var c = 'Hey ';
		third();
	}
}

function third() {
	var d = 'John';
	console.log(a + b + c + d);

} */

//this
//console.log(this);

/* calcAge(1999);

function calcAge(year) {
	console.log(2016 - year);
	console.log(this);

} */

var john = {
	name: 'John',
	birth: 1999,
	calcAge: function () {
		console.log(this);
		/* 
				function innerFunc() {
					console.log(this);

				}
				innerFunc(); */
	}
}

john.calcAge();

var mike = {
	name: 'Mike',
	birth: 1990
}

mike.calcAge = john.calcAge;
mike.calcAge();
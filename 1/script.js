//variable mutation and type coercion
/* var job, isMarried, age;
age = 28;
job = 'Teacher';
isMarried = false;
//console.log(job + ' ' + isMarried);
console.log(age);

//variable mutation
age = 'twenty eight';
console.log(age); */

/* 
Basic Operators
*/

//Operator precedence
/* var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
//console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
//console.log(average);

//Multiply assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //32-6=26
console.log(x, y); */

//if/else
//switch statment
/* 
var name = 'mithu';
switch (name) {
	case 'abir': //if
	case 'mithu':
		console.log(name + ' disigner');
		break;
	case 'shamim': //else if
		console.log(name + ' business');
		break;
	case 'jibon': //else if
		console.log(name + ' driver');
		break;
	default: //else
		console.log(name + ' nothing do');
}
 */
/* 
var firstName = 'John';
var age = 20;
switch (true) {
	case age < 13:
		console.log(firstName + ' boy');
		break;
	case age >= 13 && age <= 20:
		console.log(firstName + ' teenager');
		break;
	case age >= 26 && age < 30:
		console.log(firstName + ' is a young man');
		break;
	default:
		console.log(firstName + ' man');
} */

//Truthy and Falsy

//falsy---undefined,null,0,'',NaN
//truthy---number,string
/* 
var height;
height = '';
if (height !== undefined) {
	console.log('Defined!');

} else {
	console.log('Undefined!');

} */

//Function Declaration
/* 
function calcAge(birthYear) {
	return new Date().getFullYear() - birthYear;
}

function retire(year, name) {
	var age = calcAge(year);
	var retirement = 65 - age;

	retirement > 0 ? console.log(name + ' ' + retirement + ' years') : console.log(name + ' already retired.');;

}

retire(1990, 'John');
retire(2007, 'Mark');
retire(1950, 'Smith');
retire(1999, 'Boe'); */

//Function Expressions
/* 
var jobInfo = function (job, name) {
	switch (job) {
		case 'teacher':
			return name + ' Teacher';
		case 'programmer':
			return name + ' Programmer';
		case 'designer':
			return name + ' Designer';
		default:
			return 'He do something else!';
	}
}
console.log(jobInfo('programmer', 'mithu')); */

//Function Statment

//Arrays
/* 
var names = ['John', 'Smith', 'Doe'];
console.log(names);

names[0] = 'Doe';
names.push('Bd');
console.log(names);
names.unshift('Desh');
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);
console.log(names.indexOf('Smith')); */

//Object
/* 
var john = {
	firstName: 'John',
	lastName: 'Smith',
	age: 28,
	job: 'Js Programmer',
	family: ['Boe', 'McDon', 'Doe'],
	isMarried: false
}

john.isMarried = true; */

//Object method
/* 
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birth: 1999,
	job: 'Js Programmer',
	family: ['Boe', 'McDon', 'Doe'],
	isMarried: false,
	calcAge: function () {
		this.age = new Date().getFullYear() - this.birth;
	}
}
john.calcAge(); */

//Loops and iteration

//for
/* 
for (var i = 0; i <= 10; i++) {
	console.log(i);

} */

//i=0; 0<10(true); log 0; i++(1)
//i=1;1<10(true);log 1;i++2;
//i=2;2<10(true);log 2;i++3
//.............
//i=9;9<10(true);log 9;i++10
//i=10;10<=10(true);log 10;i++11;
//i=11;11<=10(false) exit

//while
/* 
var i = 0;
while (i <= 10) {
	console.log(i);
	i++;
} */

//continue & break statments

//continue statment
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
/* 
for (var i = 0; i < john.length; i++) {
	if (typeof john[i] === 'string') {
		continue;
	}
	console.log(john[i]);

}
for (var i = 0; i < john.length; i++) {
	if (typeof john[i] === 'string') {
		break;
	}
	console.log(john[i]);

} */
//looping backwards
/* 
for (let i = 5; i >= 4; i--) {
	console.log(i);

} */
//i=5;5>=4(true);log;i--5;
//i=4;4>=4(true);log;i--4;
//i=3;3>=4(false);exit
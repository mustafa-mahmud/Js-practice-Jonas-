//function constructor
/* 
var Person = function (name, birth, job, hobby) {
	this.name = name;
	this.birth = birth;
	this.job = job;
}
Person.prototype.hobby = 'Fashion';
Person.prototype.calcAge = function () {
	console.log(new Date().getFullYear() - this.birth);
}

var john = new Person('John', 1990, 'teacher', 'fashion');
var mark = new Person('Mark', 1999, 'designer'); */

//Object create
/* 
var personProto = {
	calcAge: function () {
		console.log(new Date().getFullYear() - this.birth);

	}
}
var john = Object.create(personProto);
console.log(john); */

//Primitives vs Objects

//primitives--Number,String,Undefined,Null,Bolean
/* 
//Primitive
var a = 23;
var b = a;
a = 50;
//console.log(b);

//Object
var obj1 = {
	name: 'John',
	age: 26
}

var obj2 = obj1;

obj1.age = 30;
//console.log(obj2);

//Function
var age = 50;
var obj = {
	name: 'Mithu',
	city: 'Ctg'
}

function change(a, b) {
	a = 35;
	b.city = 'Dh';
}

change(a, obj);
console.log(age);
console.log(obj); */

//Passing functions as an arguments
/* 
var years = [1990, 1965, 2015, 1990, 1998];

function arrCalc(arr, fn) {
	var arrResult = [];
	for (var i = 0; i < arr.length; i++) {
		arrResult.push(fn(arr[i]));
	}
	return arrResult;
}

function processArr(el) {
	return new Date().getFullYear() - el;
}

function fullAges(arr) {
	return arr >= 18;
}

function heartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

var ages = arrCalc(years, processArr);
console.log(ages);

var fullAges = arrCalc(ages, fullAges);
console.log(fullAges);

var heart = arrCalc(ages, heartRate);
console.log(heart); */

//Function return functions
/* 

function question(job) {
	if (job === 'designer') {
		return function (name) {
			console.log(name + ' Desinger');

		}
	} else if (job === 'teacher') {
		return function (name) {
			console.log(name + ' Teacher');

		}
	} else {
		return function (name) {
			console.log(name + ' Others');

		}
	}
}

var john = question('designer');
john('John');
var mark = question('cop');
mark('Mark'); */

//lecture: IIFE

/* (function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5); */

//Closures
/* function retirement(retireAge) {
  var text = ' years left untill retirement';
  return function(birth) {
    var age = 2016 - birth;
    console.log(retireAge - age + text);
  };
}

var us = retirement(66); */
//us(1990);

/* function question(job) {
	var thx = ' Thanks';
	return function (name) {
		console.log(name + job + thx);

	}
}

var john = question('teacher');
john('John ');
var mark = question('designer');
mark('Mark '); */
/* 
function question(job) { 
  var thx = ' Thanks';
  return function(name) {
    if (job === 'teacher') {
      console.log(name + ' ' + job + thx);
    } else if (job === 'designer') {
      console.log(name + ' ' + job + thx);
    } else {
      console.log(name + ' Others' + thx);
    }
  };
}
var john = question('teacher');
john('John');
var mark = question('designer');
mark('Mark'); */

//Bind,Call,Apply
/* 
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, time) {
    if (style === 'formal') {
      console.log(
        'Good ' + time + ' ' + this.name + ' ' + this.age + ' ' + this.job
      );
    } else if (style === 'friendly') {
      console.log(
        'Good ' + time + ' ' + this.name + ' ' + this.age + ' ' + this.job
      );
    } else {
      console.log('Howdy!!');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 45,
  job: 'designer'
}; */
//john.presentation('formal', 'noon');
//john.presentation.call(emily, 'friendly', 'morning');
//john.presentation.apply(emily, ['friendly', 'noon']);

//var emilyFriendly = john.presentation.bind(emily, 'friendly');
//emilyFriendly('noon');

var years = [1990, 1965, 2015, 1990, 1998];

function arrCalc(arr, fn) {
  var arrResult = [];
  for (var i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

function processArr(el) {
  return new Date().getFullYear() - el;
}

function fullAges(limit, arr) {
  console.log(limit);
  console.log(arr);

  return arr >= limit;
}

var ages = arrCalc(years, processArr);
//console.log(ages);
var fullJapan = arrCalc(ages, fullAges.bind(this, 20));
console.log(fullJapan);

//let and const
/* 
//es5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
//console.log(name5);

//es6
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller';
//console.log(name6);

//es5
function licence5(test) {
  if (test) {
    var firstName = 'John';
    var birth = 1990;
  }
  console.log(firstName + ' , ' + birth);
}

licence5(true);

//es6
function licence6(test) {
  let firstName;
  const birth = 1990;

  if (test) {
    firstName = 'John';
    console.log(firstName + ' , ' + birth);
  }
}

licence6(true);

//let i = 25;
for (let i = 0; i < 5; i++) {
  //console.log(i);
}
//console.log(i);

//es5
var i = 30;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i + ' ok'); */

//Blcok and IIFE
/* {
  const a = 1;
  let b = 2;
}
console.log(a + b);
 */

//String
/* 
let fName = 'John';
let lName = 'Smith';
const year = 1990;
function calcAge(year) {
  return 2016 - year;
}

console.log(`This is ${fName} ${lName} birth is ${year} and age now ${calcAge(year)}`);

const fullName = `${fName} ${lName}`; */

//Arrow Functions
/* const years = [1990, 1965, 1982, 1937, 1999];

//es5
var ages5 = years.map(function(el) {
  return 2016 - el;
});

//es6
let ages6 = years.map(el => 2016 - el);

ages6 = years.map((el, index) => `Index is ${index + 1}, and age is ${2016 - el}`);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Index is ${index + 1}, and age is ${age}`;
});
 */

//Arrow Function with Laxicle 'this' keyword
/* 
//es5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;

    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' ' + self.color;
      alert(str);
    });
  }
};

//box5.clickMe();

const box6 = {
  position: 1,
  color: 'green',
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      const str = 'This is box number ' + this.position + ' ' + this.color;
      alert(str);
    });
  }
};
//box6.clickMe();

const box66 = {
  position: 1,
  color: 'green',
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      const str = 'This is box number ' + this.position + ' ' + this.color;
      alert(str);
    });
  }
};
//box66.clickMe();

//es5
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends = function(friendsArr) {
  var arrRes = friendsArr.map(
    function(el) {
      return this.name + ' has friends are ' + el;
    }.bind(this)
  );
  console.log(arrRes);
};

var friends = ['Bob', 'Miller', 'Doe'];

//new Person('John').myFriends(friends);

//es6
function Person6(name) {
  this.name = name;
}

Person6.prototype.myFriends6 = function(friendsArr) {
  var arrRes = friendsArr.map(el => `${this.name} has friends are ${el}`);
  console.log(arrRes);
};

let friends6 = ['Bob', 'Miller', 'Doe'];

new Person6('John').myFriends6(friends6);
 */

//Destructuring;
/* 
//es5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//es6
const [name, age2] = ['John', 26];

const obj = {
  fName: 'John',
  lName: 'Smith'
};

//const { fName, lName } = obj;

const { fName: a, lName: b } = obj;

function retirement(year) {
  const now = new Date().getFullYear();
  return [now - year, 65 - (now - year)];
}

const [age, leftRetirement] = retirement(1999); */

//Arrays
const boxes = document.querySelectorAll('.box');

//es5
var arr5 = Array.prototype.slice.call(boxes);

arr5.forEach(function(curr) {
  curr.style.backgroundColor = 'red';
});

//es6
const boxesArr = Array.from(boxes);
boxesArr.forEach(curr => (curr.style.backgroundColor = 'olive'));

//es5
/* for (var i = 0; i < boxesArr.length; i++) {
  if (boxesArr[i].className === 'box blue') {
    continue;
  }
  boxesArr[i].textContent = 'I changed to blue!';
} */
/* 
//es6
for (const cur of boxesArr) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = `I have changed!`;
}

//es5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});
//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);

//es6
const takeIndex = ages.findIndex(curr => curr >= 18);
console.log(takeIndex);
console.log(ages.find(cur => cur >= 18)); */

//spread Operator
/* 
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(5, 10, 15, 20);

//es5
var ages = [5, 10, 15, 20];
var result = addFourAges.apply(null, ages);

//es6
const result6 = addFourAges(...ages);

const arr1 = [5, 10, 15, 20];
const arr2 = [25, 30, 35];

const bigArr = [...arr1, 'Amily', ...arr2];

const h1 = document.querySelector('h1');
const boxes6 = document.querySelectorAll('.box');

const addAll = [h1, ...boxes6];

addAll.forEach(cur => (cur.style.color = 'blue'));
 */

//Rest Operator

//es5
/* 
function age5() {
  var arg = Array.prototype.slice.call(arguments);
  console.log(arg);

  arg.forEach(function(cur) {
    console.log(2016 - cur >= 18);
  });
}

//age5(1999, 1987, 1995);

//es6
function age6(...years) {
  years.forEach(cur => console.log(2016 - cur >= 18));
}
age6(1999, 1987, 1995);
 */

//es5
/* function age5(limit) {
  var arg = Array.prototype.slice.call(arguments, 1);

  arg.forEach(function(cur) {
    console.log(2016 - cur >= limit);
  });
} */

//age5(21, 1999, 1987, 1995);
/* 
//es6
function age6(limit, ...years) {
  years.forEach(cur => console.log(2016 - cur >= limit));
}

age6(21, 1999, 1987, 1995);
 */

//Default Operator

//es5
/* 
function Person(fName, lName, birth, nationality) {
  birth === undefined ? (birth = 1999) : birth;
  nationality === undefined ? (nationality = 'BD') : nationality;
  this.fName = fName;
  this.lName = lName;
  this.birth = birth;
  this.nationality = nationality;
}
 */
/* 
function Person(fName, lName, birth = 1999, nationality = 'BD') {
  this.fName = fName;
  this.lName = lName;
  this.birth = birth;
  this.nationality = nationality;
}

var john = new Person('John', 'Smith');
console.log(john);
var emily = new Person('Emily', 'Boe', 2008);
console.log(emily); */

//Maps
/* 
const question = new Map();
question.set('question', 'Q-1');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer!');
question.set(false, 'Wrong Pls try again!');
 */
/* console.log(question.get('question'));

if (question.has(4)) {
  question.delete(4);
}
question.clear();
console.log(question.size); */

/* question.forEach((value, key) => {
  console.log(` Key: ${key} , Value: ${value}`);
}); */

//console.log(question.entries());
/* 
for (let [key, value] of question.entries()) {
  if (typeof key === 'number') {
    console.log(`Answer- ${key}: ${value}`);
  }
}

const userAns = parseInt(prompt(`What is your Answer?`));

console.log(question.get(userAns === question.get('correct')));
 */

//Class

//es5
/* 
var Person5 = function(name, birth, job) {
  this.name = name;
  this.birth = birth;
  this.job = job;
};

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear() - this.birth;
  console.log(age);
};

var john5 = new Person5('John', 1999, 'Programmer');

john5.calcAge();

//es6
class Person6 {
  constructor(name, birth, job) {
    this.name = name;
    this.birth = birth;
    this.job = job;
  }
  calcAge() {
    const age = new Date().getFullYear() - this.birth;
    console.log(age);
  }

  static greeting() {
    console.log('Great Greetings!');
  }
}

const john6 = new Person6('John', 1999, 'Developer');
john6.calcAge();
Person6.greeting();
 */
//Class Inheritence

var Person5 = function(name, birth, job) {
  this.name = name;
  this.birth = birth;
  this.job = job;
};

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear() - this.birth;
  console.log(age);
};

var Athlete5 = function(name, birth, job, game, medals) {
  Person5.call(this, name, birth, job);
  this.game = game;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
//console.log(johnAthlete5);
//johnAthlete5.calcAge();
//johnAthlete5.wonMedal();

//es6
class Person6 {
  constructor(name, birth, job) {
    this.name = name;
    this.birth = birth;
    this.job = job;
  }
  calcAge() {
    const age = new Date().getFullYear() - this.birth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, birth, job, game, medals) {
    super(name, birth, job);
    this.game = game;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'siwmmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calcAge();

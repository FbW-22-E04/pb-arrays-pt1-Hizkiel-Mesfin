//#1
const euroCities = ["Oslo", "Hamburg", "Paris", "London", "Rome"];
const secondCity = euroCities[1];

console.log("Q1:", secondCity);

//#2

euroCities.splice(0, 1, "Berlin");
console.log("Q2:", euroCities);

//#3

console.log(euroCities.length);
//#4

euroCities.pop();
console.log("Q4:", euroCities);

//#5

euroCities.splice(euroCities.length, 0, "Budapest");

console.log("Q5:", euroCities);

//#6

const asianCities = ["Kabul", "Dubai", "Tehran", "Baqdad", "Delhi"];
console.log("Q6:", asianCities);

//#7

const worldCities = euroCities.concat(asianCities);
console.log("Q7:", worldCities);

//#8

worldCities.reverse();
console.log("Q8", worldCities);

//#9

euroCities.splice(2, 1);
console.log("Q9:", euroCities);

//10#
const secondFourth = asianCities.slice(1, 4);
console.log("Q10:", secondFourth);

//#11

worldCities.splice(2, 1, "Toronto");
console.log("Q11:", worldCities);

//#12

worldCities.splice(1, 0, "Washington");
console.log("Q12:", worldCities);

//#13
const string = worldCities.join(" ");
console.log("Q13:", string);

//Bonus

//#1

const someStr = "Hello World";

console.log("BonusQ1:", someStr.split("").reverse().join(""));

//Extra Practice

//#E1
const siblings = ["anna", "luke", "john", "aaron", "abraham"];
const parents = ["bob", "sarah"];

const wholeFamily = parents.concat(siblings);
console.log(wholeFamily);

wholeFamily.push("the pet's name is 'bobi'");
console.log(wholeFamily);

wholeFamily.reverse();
console.log(wholeFamily);

const dad = wholeFamily[wholeFamily.length - 1];
console.log(dad);

wholeFamily[wholeFamily.length - 2] = "sasha";
console.log(wholeFamily);

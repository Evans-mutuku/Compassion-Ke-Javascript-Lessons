console.log("I Love my Mom")

let name = "John Doe"
const gender = "Male"
var age = 77
let programmer = true
let experience  = null
let status = undefined


console.log(name)
console.log(gender)
console.log(programmer)


console.log(age,experience,status)

const person = {
    height: 67, 
    personName: "Jane",
    education: "Level 1"
}

console.log(person)
console.log(person.education, person.height)

let studentsNames = [
    "Jane", "George", "Mark"
]

// 0,1,2
console.log(studentsNames)
console.log(studentsNames[2])


//this lesson was awesome

prompt("Please enter a value")

let age = 39;

// if(age == 36){
//     console.log("allowed to vote")
// }

// if(age === 39){
//     console.log("allowed to vote")
// }

// let age = 46

if( age < 18 ){
    console.log("Not allowed to vote")
} else {
    console.log("allowed to vote")
}



const people = 20;

if( people <= 20 ){
    console.log("Less than 20 people attented the metting")
} else if(people >= 20 ){
    console.log("More than 20 people attented the metting")
} else if (people >= 30){
    console.log("Less than 30 people attented the meeting")
} else if(people >= 40){
    console.log("Less than 40 people attented the meetting")
} else {
    console.log("Lot's of people attented the meeting")
}



var i = 55;

if (i == 55) {
    console.log("i is 55")
	if (i < 15) {
		console.log("i is less than 15");
		// Nested - if statement
		// Will only be executed if statement above it is true
		if (i < 12) {
			console.log("i is less than 12 too");
		} else {
			console.log("i is greater than 15");
		}
	}
}


var i = 1;

while(i <= 8){
    console.log("The value of i is: " + i)
	i++;
}


let x;

for( x = 30; x <= 40; x++){
	console.log("Value of X: ", x)
}


let y = 21;

do{
	console.log("The value of Y: ", y);
	y++
} while (y < 66)
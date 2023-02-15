const test = document.getElementById("test")
test.innerHTML = "Hello world"


const getEl = document.querySelectorAll("p.intro")
document.getElementById("demo").innerHTML = `My First name is ${getEl[0].innerHTML} and my last name is ${getEl[1].innerHTML} `


const newItem = document.createElement("h1")

const headingOne = document.createTextNode("This is heading one")

newItem.appendChild(headingOne)

const printToDom = document.getElementById("newElement")
printToDom.appendChild(newItem)

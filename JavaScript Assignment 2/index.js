// Question 1

function add() {
    let five = 5;
    return function(num){
        console.log(five + num)
    }  
}
let passValue = add();
passValue(20);

// Question 2 

function searchArray(arr, val) {
    if (arr.length === 0) {
      return false; // base case: array is empty
    }
    if (arr[0] === val) {
      return true; // base case: value found
    }
    return searchArray(arr.slice(1), val); // recursive call with smaller array
  }

// Question 3

function myFunction() {
    document.getElementById("demo").innerHTML = "Muhammad Ali";
}

// Question 4

var unList = document.getElementById("ul");
function list(item) {
    var li_1 = document.createElement("li")
        li_1.innerHTML = item
        unList.appendChild(li_1);
}
list("123");
list("Muhammad Ali");

// Question 5 

function changeBgColor(element, color) {
  element.style.backgroundColor = color;
}

// Question  6 

function object(key, value) {
    let obj = { [key]: value }; 
    console.log(obj);
  }
  
  object("fname", "Muhammad"); // { fname: "Muhammad" }
  object("lname", "Ali"); // { lname: "Ali" }

// Question 7

function retrives(key) {
  let item = { name : key}
  return item
}
var obj = retrives("Ali");
console.log(obj);
 
// Question 8

function takeObj(value) {
     
  let obj = {key : value}
     const newObj = {obj};
     return newObj    
}

var output = takeObj("Task is Done");
console.log(output);


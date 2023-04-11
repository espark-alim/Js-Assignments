// Question 1

function add() {
    let five = 5;
    return function(num){
        console.log(five + num)
    }  
}
let passValue = add();
passValue(20);

// Question 2 // working
// var arr = [Ali = []] 
// function recursion(data , times) {
//     console.log(data);
//     if (times > 0) {
//     recursion(data, times - 2);
//     }
// }
// recursion("Ali" , 2);

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

// Question 5 // working

// function set(prop,value) {
//     var heading_2 = document.getElementsByClassName("bg");
// }





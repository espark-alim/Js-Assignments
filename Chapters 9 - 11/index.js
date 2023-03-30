// QUES NO 1
var city=prompt("PLEASE enter city name")
 
if (city == 'Karachi') {
  alert( 'Welcome to city of lights' );
}
 else {
 alert( 'Hello!' ); 
}

// QUES NO 2
var gender = prompt("Whats your gender")
 
if(gender=='male'){
  alert( 'Good Morning Sir');
}
else
{
alert( 'Good Morning Maam');
}

// // Ques no3
var signal_color=prompt("If you see this color")
 
if(signal_color=='red'){
 alert('Must Stop');
}
if(signal_color=='yellow'){
 alert('Ready to move');
}
if(signal_color=='green'){

alert('Move now ');
}

// Ques No 4
var fuel=prompt("How much fuel in car")
if(fuel <'0.25'){
alert('Please refill the fuel in your car')
}
else{
 alert('fuel is enough for ride')
}

// Ques No 5

var a = 4; 
if (++a === 5){ 
 alert("given condition for variable a is true");
}
var b = 82; 
if (b++ === 83){ 
  alert("given condition for variable b is true");
  } 
  var c = 12;
   if (c++ === 13){ 
     alert("condition 1 is true");
    } 
    if (c === 13){ 
      alert("condition 2 is true");
      } 
      if (++c < 14){ 
        alert("condition 3 is true");
        } 
        if(c === 14){ 
          alert("condition 4 is true"); } 

 var materialCost = 20000;
  var laborCost = 2000; 
  var totalCost = materialCost + laborCost;
   if (totalCost === laborCost + materialCost){ 
     alert("The cost equals");
    } 

     if (true){
        alert("True");
        }
         if (false){ 
           alert("False");
          } 
          if("car" < "cat"){
             alert("car is smaller than cat"); 
     } 

//  Ques No6

var english = +prompt("English Mark");
var urdu = +prompt("Urdu Mark");
var science = +prompt("Science Mark");
var totalMark = 300;
var obtained = english + urdu + science;
var per_1 = obtained / totalMark * 100;
var grade;
var remarks;
 
if(per_1 >=80){
 grade = "A+";
 remarks ="Excellent";
}
else if(per_1 >=70 && per_1 <=79){
 grade = "A";
 remarks = "Good";
}
else if(per_1 >=60 && per_1 <=69){
 grade = "B";
 remarks ="You need to improve"
}
else if(per_1 >=50 && per_1 <=59){
  grade = "C";
  remarks = "Pass"
}
else if(per_1 <=49){
  grade = "F";
  remarks = "Fail";
}
else{
  alert("You did not write correct Obtained Marks")

}
document.write(`Total marks : ${totalMark} </br>`);
document.write(`Mark obtained : ${obtained} </br>`)
document.write(`Total marks : ${per_1 + "%"} </br>`)
document.write(`Grade : ${grade} </br>`)
document.write(`Remarks : ${remarks} </br>`)

// Ques no 7
var guest1=7;

var guest2=prompt("give the number");

if(guest2==guest1){
 alert('Bingo')
}
else if(guest2 ==guest1+1){
alert('Close enough to the correct answer')
}
else{
  alert('Wrong')
}


// Ques No 8
var n=+prompt("Give the no divisible by 3");

if(n %3==0){
 alert(n+" "+"is divisible by 3")
}
else{
 alert(n+" "+"is not divisible by 3")

}

// Ques no 9
var n=+prompt("Give any number")
if(n %2==0){
 alert(n+" "+ "is an even number")
}
else{
 alert(n+" "+ "is an odd number")
}

// // Ques no 10
var temp=+prompt("What Temperature is it now")
if(temp>40){
 alert(temp+" "+ "it is too hot outside")
}
else if(temp>30){
 alert(temp+" "+ "The Weather today is Normal")
}
else if(temp>20){
 alert(temp+" "+ "Today’s Weather is cool")
}
else if(temp>10){
 alert(temp+" "+ "“OMG! Today’s weather is so Cool")
}


// Ques NO 11
var num1=prompt("Give num1")
var sign=prompt("Operator")
var num2=prompt("Give num2")
console.log(num1+sign+num2)


if(sign==='+'){
 alert((+num1)+(+num2))
}
else if(sign==='-'){
alert(num1-num2)
}
else if(sign==='*'){
alert(num1*num2)
 }
 else if(sign==='/'){
   alert(num1/num2)
   }
   else if(sign==='%'){
     alert(num1/num2*100+'%')
 }
// Question 1  
var a  = 10;
document.write(`The value of a is : ${a} </br>`);

document.write(`</br>The value of ++a is : ${++a} </br>`);
document.write(`Now the value of a is : ${a} </br>`);

document.write(`</br> The value of a++ is : ${a++} </br>`);
document.write(`Now the value of a is : ${a} </br>`);

document.write(`</br> The value of --a is : ${--a} </br>`);
document.write(`Now the value of a is : ${a} </br>`);

document.write(`</br> The value of a-- is : ${a--} </br>`);
document.write(`Now the value of a is : ${a} </br>`);

// Question 2 

var b = 2;
var c = 1;

var result = --b - --c + ++c + c--;
document.write(`</br>b is ${b}</br>`);
document.write(`c is ${c}</br>`);
document.write(`result is : ${result} </br>`);

// Question 3 

var user =  prompt("Enter your Name");
alert(user);

// Question 5 

var num = prompt("Enter Number", "5") //prompt user to enter the number
num = parseInt(num); //parse the num to number
var i = 0;

for (i = 1; i <= 10; i++) {
  document.write("</br>"+"<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>"+ "</br>");
}

// Question 6

var subject_1 = prompt("Subject_1 Name");
var subject_2 = prompt("Subject_2 Name");
var subject_3 = prompt("Subject_3 Name");
var eachSubjectMark = 100;
var subject_1_Mark = +prompt(subject_1 + " Marks");
var subject_2_Mark = +prompt(subject_2  + " Marks");
var subject_3_Mark = +prompt(subject_3  + " Marks");
 
document.write(
    
   `<th><h4>Subject Total Marks Obtained Marks Percentage</h4></th>
    <tr>
    <td>${subject_1} ${eachSubjectMark}</td>
    <td>${subject_1_Mark}</td>
      <td>${subject_1_Mark / eachSubjectMark * 100 + "%"}</td>
    </tr>
    </br>
    <tr>
    <td>${subject_2} ${eachSubjectMark}</td>
    <td>${subject_2_Mark}</td>
      <td>${subject_2_Mark / eachSubjectMark * 100 + "%"}</td>
    </tr>
    </br>
    <tr>
    <td>${subject_3} ${eachSubjectMark}</td>
    <td>${subject_3_Mark}</td>
      <td>${subject_3_Mark / eachSubjectMark * 100 + "%"}</td>
    </tr>
  
  `);





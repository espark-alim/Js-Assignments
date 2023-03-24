var num1 = 3;
var num2 = 5;
// sum
var sum = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${sum} </br>`);
// subtraction
var subtraction = num1 - num2;
document.write(`subtraction of ${num1} and ${num2} is ${subtraction} </br>`);
// multiplication
var  multiplication = num1 * num2;
document.write(`multiplication of ${num1} and ${num2} is ${multiplication} </br>`);
// division
var  division = num1 / num2;
document.write(`division of ${num1} and ${num2} is ${division} </br>`);
// modulus
var  modulus = num1 % num2;
document.write(`modulus of ${num1} and ${num2} is ${modulus} </br>`);


// Question 3.(a)
var a;
// Question 3.(b)
 document.write(`</br> Value after variable declaration is:${a} </br>`);
// Question 3.(c)
 var num = 5;
// Question 3.(d)
document.write(`Initial value:${num} </br>`);
// Question 3.(e)
num++;
// Question 3.(f)
document.write(`Value after increment :${num} </br>`);
// Question 3.(g)
num = num + 7;
// Question 3.(h)
document.write(`Value after addition is :${num} </br>`);
// Question 3.(i)
num--;
// Question 3.(j)
document.write(`Value after decrement is :${num} </br>`);
// Question 3.(k)
num = num % 3;
document.write(`The remainder is :${num} </br>`);

// Question 4.
var ticketPrice = 600;
var calculate =  600 *  5;
var costOfBuying = calculate
document.write(`Total cost to buy 5 tickets to a movie is ${calculate}</br>`);

// Question 5
document.write("</br>" + "Table of 4" + "</br>"); 
var four = 4;
for (let a = 1; a <= 10; a++) {
document.write( `4 x ${a} = ` +  four * a + "</br>");
};

// Question 6
var celsius = 25;
var Fahrenheit = 70;
var c = (Fahrenheit - 32) * 5 / 9 + "C";
var f = (celsius * 9 / 5) + 32 + "F"; 
document.write(`</br>${celsius + "C"} is ${f} </br>`);
document.write(`${Fahrenheit + "C"} is ${c}`);

// Question 7
document.write(`<h1>Shopping Cart</h1>`)

var item1 = 650;
var item2 = 100;
var shipingCharges = 100;
var quantityItem1 = item1 * 3;
var quantityItem2 = item2 * 7;
var total = quantityItem1 + quantityItem2 + shipingCharges;
document.write(`</br> Price of item 1 is ${item1} </br> `)
document.write(`Quantity of item 1 is 3 </br> `)
document.write(`Price of item 2 is ${item2} </br> `)
document.write(`Quantity of item 2 is 7 </br> `)
document.write(`Shipping Charges ${shipingCharges} </br>`)
document.write(`</br> Total Cost of your Order is ${total} </br> `)

// Question 8

document.write(`<h1>Marks Sheet</h1>`)
var totalMarks = 980;
var obtainedMarks = 804;
var getPer = obtainedMarks / totalMarks * 100;
document.write(`Total marks : ${totalMarks}</br>`)
document.write(`Marks obtained : ${obtainedMarks}</br>`)
document.write(`Percentage : ${getPer}%</br>`)

// Question 9
document.write(`<h1>Currency in PKR</h1>`)
var usDollar = 104.80;
var saudiRiyal = 28;
var totalDollar = usDollar * 10;
var totalSaudiRiyal = saudiRiyal * 25; 
var getCurrency = totalDollar + totalSaudiRiyal;
document.write(`Total Currency in PKR : ${getCurrency} </br>`);

// Question 9
document.write(`<h1>Arithmetic</h1>`)
var add = 5;
var calculation = add * 10 / 2;
document.write(`${calculation}</br>`); 

// Question 11

document.write(`<h1>Age Calculator</h1>`);
var currentYear = 2023;
var birthYear = 1996;
var calculateAge = currentYear - birthYear;
document.write(`</br> Current Year : ${currentYear}</br>`);
document.write(`Birth Year : ${birthYear}</br>`);
document.write(`Your Age : ${calculateAge}</br>`);

// Question 12
document.write(`<h1>The Geometrizer</h1>`);
var radius = 20;
var p = 3.142;
var area = p * radius * radius;
var circum = 2 * p * radius
document.write(`</br> Radius of a circle : ${radius} </br>`); 
document.write(`The circumference is : ${circum}</br>`); 
document.write(`The area is : ${area}</br>`); 

// Question 12
document.write(`<h1>The Lifetime Supply Calculator</h1>`);
var  favoriteSnack = "Lays";
var  currentAge = 26;
var  maximumAge = 65;
var AmountOfSnacks = 5;
var restOfLife = (maximumAge - currentAge) * AmountOfSnacks;
document.write(`Favourite Snack : ${favoriteSnack}</br>`);
document.write(`Current age : ${currentAge}</br>`);
document.write(`Estimated Maximum Age : ${maximumAge}</br>`);
document.write(`Amount of snacks per day : ${AmountOfSnacks}</br>`);
document.write(`You will need ${restOfLife} Lays to last you until the ripe old age of ${maximumAge}`); 
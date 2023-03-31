// Ques No 1

var Array=[[],[]];

// Ques No 2
let activities = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 2],
];
let z;
for (z of activities) {
  document.write("<br>"+z + "<br >");
}
   
 // Ques No 3

for(var i=1; i<=10; i++)
{
  console.log(i)
}

// Ques No 4

 var a = prompt("Enter a number toshow its table")
 var b = prompt("length")

for(  var i = 1 ; i <= b; i++){

      document.write("<br>"+a+"x"+i+"="+i*a)

}
// Ques No 5
var fruits=["Apple","Mango","Orange","Pineapple","Strawberry"]
document.write("<br>"+fruits)

for(var b=0; b<fruits.length; b++){
  document.write("<br>"+"Element at index"+b+fruits[b]+"<br>")
// document.write("<br>"+"Element at index"+fruits.indexOf((")("Mango")("Orange")("Pineapple")("Strawberry"))+"is"+fruits)
}

// Ques No 6

var A = ["cake","apple pie","cookie","chips","patties"] 
var B=prompt("Welcome to ABC Bakery!What do you want to order sir/maam?")

 if(A.indexOf(B) !==-1){
  alert(B +" is available  in our bakery");
}
else{
 alert("we are sorry. "+B+" is not available in our bakery")
}
// Ques No 7
var g=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
document.write("<br>"+"Counting:")

for(var a=1; a<g.length; a++){
document.write(g[a]+",")

}
var h=[ 1,2,3,4,5,6,7,8,9,10 ]
document.write("<br>"+"Reverse no:")
for(var i=h.length-1; i>=0; i--){
document.write(h[i]+",")
}
var k=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
document.write("<br>"+"Even:"+"<br>")
for(var i=0; i<k.length; i++){
if(k[i] %2==0)
document.write(k[i])
}
var j=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
document.write("<br>"+"Odd:"+"<br>")
for(var i=0; i<j.length; i++){
if(k[i] %2!=0)
document.write(j[i])
}
var y=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
document.write("<br>"+"Series:"+"<br>")
for(var i=1; i<y.length; i++){
if(y[i] %2 == 0)
document.write(y[i]+"k")
}

// ques No 9

 var e= [24, 53, 78, 91, 12]
 var max=0;
   max=e[0]
  
for(var i=0; i<=e.length; i++){
  if(max < e[i])
  {
    max=e[i]
  }

  document.write("<br>"+e+"The largest number is"+max)
}

// Ques No 9
var e=[24, 53, 78, 91, 12]
var min=0; 
 min=e[0]

for(var i=0; i<=e.length; i++){
  if(min > e[i])
  {
    min=e[i]
  }
}
  document.write("<br>"+e+"The smallest number is"+min+"<br>")

  // Ques No 10

for(a=5 ; a<=100; a=a+5){
  document.write(a+",")
}

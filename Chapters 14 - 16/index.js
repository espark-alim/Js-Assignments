var studentnames=[];

//  Ques No 2
var studentnames= new Array()

// Ques No 3
var str = ["Mango","Apple","Orange"]
console.log(str)

// Ques No 4
var int = [1,2,3,4,5]
console.log(int)

// Ques No 5
var bool = [false,true]
console.log(bool)



// Ques NO 6
var mixed = ["White",8,false]
console.log(mixed)

// Ques No 7
  var arr = [ "1)SSC"+"<br>" +"2)HSC"+"<br>" + "3)BCS"+"<br>" + "4)BS"+"<br>" + "5)BCOM"+"<br>" + "6)MS"+"<br>" + "7)M. Phil"+"<br>" + "8)PhD"]
  document.write("<br>"+"Qualification:"+"<br>"+arr)

//Ques NO 8

var arr1 = ["Hamza","Shafaq","Zuhaib"]
var score = [320,230,480]
var total = 500;
var percentage1 = score[0]*100/total;
var percentage2 = score[1]*100/total;
var percentage3 = score[2]*100/total;




document.write("<br>"+"Score of "+arr1[0]+" "+"Percentage:"+percentage1+"%"+"<br>"+"Score of "+arr1[1]+" "+"Percentage:"+percentage2+"%"+"<br>"+"Score of "+arr1[2]+" "+"Percentage:"+percentage3+"%"+"<br>")

// Ques No 9
var colors=["Green","Yellow","Red","Black","Orange"]
document.write("<br>"+"colors:"+"<br>"+colors+"<br>")

colors.unshift("Purple")

document.write("<br>"+"colors:"+"<br>"+colors+"<br>")
colors.push("White")

document.write("<br>"+"colors:"+"<br>"+colors+"<br>")
colors.unshift("Brown","Maroon")

document.write("<br>"+"colors:"+"<br>"+colors+"<br>")
colors.shift()

document.write("<br>"+"colors:"+"<br>"+colors+"<br>")
colors.pop()

document.write("<br>"+"colors:"+"<br>"+colors+"<br>")
colors.splice(2,2,"Pink")
document.write("<br>"+"colors:"+"<br>"+colors+"<br>")
var rgb=colors.slice(0,2)
document.write("<br>"+"colors:"+"<br>"+rgb+"<br>")

// Ques No 10
 var Arraylist=[260,390,190,500,456,130]
    
document.write("<br>"+"Scores of Students"+" "+Arraylist+"<br>"+"Ordered Scores of Students"+" "+Arraylist.sort())

// Ques No 11
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var selectedCities=["Islamabad","Quetta"]

document.write("<br>"+cities+"<br>"+selectedCities)

// Ques No 12
var arr2=["This","is","my","cat"];


document.write("<br>"+"Array:"+"<br>"+arr2+"<br>"+"Strings:"+"<br>"+arr2.join(" "))

// Ques No 13
 var devices1=["Monitor","Scanner","Joystick","Speaker"]
 for(var i=0; i < devices1.length ; i++){
  document.write("<br>"+"out:"+"<br>"+devices1[i] + "</br>")
 }
// Ques No 14

  var devices=["Monitor","Scanner","Joystick","Speaker"]

  for(var i=devices.length - 1; i >= 0; i--){
   document.write("<br>"+"out:"+"<br>"+devices[i] + "</br>")
}
// Ques NO 15
var phone=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
document.write("<br><select> <option value=apple>Apple</option>  <option value=samsung>Samsung</option> <option value=Motorola>Motorola</option> <option value=Nokia>Nokia</option><option value=Sony>Sony</option> <option value=Haier>Haier</option></select>" )
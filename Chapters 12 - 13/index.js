// Ques No 1

var char=prompt("Enter any character");
 var charconverted = parseInt(char);
 var result = "";
if (charconverted>=48 && charconverted<=57){
    result = "Character is a number";
}
else if(charconverted >= 65 && charconverted <= 90){
    result = "Character is a uppercase letter";
}
else if (charconverted>=97 && charconverted<=122){
    result = "Character is a lowercase letter";
}
else {
    result = "Input again please";
}
 alert(result)


  
// QUES NO 2

var a=prompt("integer1")
  var b=prompt("integer2")
  if(a > b){
 
     alert( 'The larger integer is integer1' )
 }
     else if(b >a){
     alert( 'The larger integer is integer2')


  }
  else if(a==b){
    alert('integer1 is equal to integer2')
  }



// QUES NO 3
 var a=prompt("Enter Number:")
 if (a > 0) {
         alert("number is positive.", a); 
 }
     else if (a < 0) {
         alert("number is negative.", a); 
     }
     else if (a == 0) {
         alert(" number is zero.", a)
 }

// Ques No 4
 var vowel=prompt("Alphabet")

 if(vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U"|| vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u" ) {
  alert( "result = true;")
 }
 else{
   alert( "result = false;")

 }

// Ques No5
 var password=prompt("Please Enter  Your Password")
 var pass="Ali110"

 if(password <= pass ){

 alert('Correct! The password you entered matches the original password')
 }
 else{
   alert('Incorrect Password')
 }
// Ques No6
 var greeting;
  var hour = 13; 
  if (hour < 18) {
    alert('greeting = "Good day";')
  }
   else {
 alert('greeting = "Good evening";')
  } 
 
//  Ques No7
  var time=prompt("What's time is it?")
 

  if(time>=0000 && time<1200){
    alert('GOOD MORNING!')
  }
  else if(time>=1200 && time<1700){
   alert('GOOD AFTERNOON!')

  }
  else if(time>=1700 && time<2100){
   alert('GOOD EVENING!')

  }
  else if(time>=2100 && time<=2359){
  alert('GOOD NIGHT!')

 }
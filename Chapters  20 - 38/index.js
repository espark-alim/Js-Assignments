// Nested loops // chapter 20

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
for (var j = 0; j < lastNames.length; j++) {
 fullNames.push(firstNames[i] + lastNames[j]);
 console.log(fullNames);
}
}

// Changing case // chapter 21

var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls",
"great falls", "Honolulu", "honolulu"];

 var cityToCheck = prompt("Enter your city");
 cityToCheck = cityToCheck.toLowerCase();
 var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 alert("It's one of the cleanest cities");
 }
 }

//  Strings: Measuring length and extracting parts // chapter 22

 var str = prompt("Enter some text");
 var numChars = str.length;
 for (var i = 0; i < numChars; i++) {
 if (str.slice(i, i + 2) === " ") {
 alert("No double spaces!");
 break;
}
}

var text= "Lorem ipsum dolor sit amet consectetur, adipisicing Alit.";
    for (let i = 0; i < text.length; i++) {
        if (text.slice(i, i + 9)  == "dolor sit"){
            text = text.slice(0,i) + "My Text" + text.slice(i + 9); 
             
        }        
    }
    console.log(text);
 
// indexOf()
    
    var dummyTextIndex = text.indexOf("dolor sit");
    if(dummyTextIndex != -1){
        console.log(dummyTextIndex);
         text = text.slice(0,dummyTextIndex) + "My Text" + text.slice(dummyTextIndex) 
    }
    console.log(text);

// replace ()
    text =  text.replace('consectetur',"Ali");
    console.log(text);
    
// charAt()
      for (let i = 0; i < text.length; i++) {
        if(text.charAt(i)=="A")
        alert("ok")
        break
      }
    
// Math.round()  
    var num = 2.5;
    var newNum = Math.round(num);
    console.log(newNum);
    
// Math.floor()
    var num = 2.8;
    var newNum = Math.floor(num);
    console.log(newNum);
 
// Math.ceil()
    var num = 2.1;
    var newNum = Math.ceil(num)
    console.log(newNum); 
        
// Math.random()
    var random = Math.random();
    console.log(Math.ceil(random * 6));
    
    // String to Number 
    // Number  // parseInt // ParseFloat  

    var num = "1";
    num = parseFloat(num);
    var num1  = 0.2;
    var total = num + num1;
    console.log(total); 
    
    // Number to String 
    // toString()

    var a = 1;
    a = a.toString();
    console.log(typeof a);

  // Function

  function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    alert("Current time: "+ theHr + ":" + theMin);
    }
 tellTime();

// Functions: Passing them data

function User(url) {
    alert(url)
}
User("www.google.com"); 

// Functions: Local vs. global variables

function calcTot(merchTot) {
    var orderTot;
     if (merchTot >= 100) {
     orderTot = merchTot;
     }
     else if (merchTot < 50.01) {
     orderTot = merchTot + 5;
     }
     else {
     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
     }
     return orderTot;
     }
    var cal = calcTot();
    console.log(cal, "ALi");

// Functions: Local vs. global variables

   var name1 = "Ali";
   function fullName() {
     let name1 = "Muhammad Ali"
       console.log(name1,"this is a local scope")  
   }
   fullName()
   console.log(name1, "this is a global scope");
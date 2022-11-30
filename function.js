// let tech ="js"
// console.log(tech);

///////////////function////////////

//A function is composed of five elements:
// A function keyword
// The function's name
// A list of zero or more parameters
// A code block ({...})
// The function's body

function myName (firstName, lastName) {
    console.log(`my full name is ${firstName} ${lastName}`);
}
// console.log(myName(sam,tony));
console.log(myName());
myName("tony","peter");

// define a function passing one argument
myName("krish");
//passing undefined
myName("steve", undefined);

// Define a function with two parameters:
function myName(firstName, lastName = "Sofela") {
    console.log(`My full name is ${firstName} ${lastName}.`);
  }
  myName("vivan");

  //code block { }
  //function declaration, function expression, arrow, iife, callback
   
  function sum () {
    return 100+30;
  }

  let name = function addNumbers() {
    return 100+30;
  }

  function sum () {
    console.log("welcome");
}
sum();
 welcome

function su (x,y){
    return x + y
}
su(4,5)
9

//function expression
let belt = function bee() {
    console.log("welcome")
}
belt();
VM2654:2 welcome
undefined

let people = function man (x,y) {
    return x + y
}
people(4,5);
9
console.log(people(5,9));
VM3042:1 14

///////anonymous function

let samp = function () {
    console.log("welcome")
}
samp();
welcome

let samp1 = function (x,y) {
    return x + y
}
sampl(4,5);
VM2047:4 Uncaught ReferenceError: sampl is not defined
    at <anonymous>:4:1
(anonymous) @ VM2047:4


let samuel = function (x,y) {
    return x + y
}
samuel(4,5);
9

//arrow function"
const variableName = () =>{
    return 100 +20;
  }

  const variableName = a => { return a+20 };
  const variableName = a => { return a+20 };
  console.log(variableName(10)); 30

  const sunName = (x,y) =>x+y;
  const sunName = (x,y) =>x+y;
  sunName
  (x,y) =>x+y

  console.log(sunName(10,30)); 40

  ///use parenthesis to wrap any implicit object return
const myFuncExpr = () => {
    carColor:"white";
    shoeColor:"Red";
  }
  
console.log(myFuncExpr);
VM4518:1 () => {
  carColor:"white";
  shoeColor:"Red";
}

  const myFuncExpre = () => ({
    carColor: "White",
    shoeColor: "Yellow",
  });
  myFuncExpre();
  console.log(myFuncExpre);
  VM4795:6 () => ({
      carColor: "White",
      shoeColor: "Yellow",
    })

    ///////IIFE///////
Javascript Immediately Invoked Function  Expression(IIFE)

An immediately invoked function expression (IIFE) is a 
function expression that invokes itself automatically.

named IIFE
function addNumbers() {
    console.log(100+20);
}
(function addNumbers(){
    console.log(100+20);
}) ();

(function addNumbers(){
    console.log(100+20);
}) ();
VM6147:2 120
// it will execute right away no need call function or console.log just enter

anonymous IIFE
(function (){
    console.log(100+20);
}) ();

//define arrowfunction in IIFE
(() =>console.log(100+20)) ();

//define async IIFE
(async() =>console.log(await 100+20))();
// let name = "color";
// console.log(name);

// // js notes pt1
// // primitive data types: string/integer/boolean/undefined/null
// //reference type:objects/functions/array
// //we can modify values in array by using const
// //objs and array are ref type
// // ref types cam always modified
// // es5 we only using var
// //es6 let and const

// // boolean
// let wed="true";
// console.log(wed);
// let thu="false";
// console.log(thu);
// let place ="null";
// console.log(place);
// //to check whether varible is string or integer
// let some="javascript";
// console.log(typeof(some));
// let num = 100;
// console.log(typeof(num));

//////////////////////objects////////////////
// objs are collections of key values Pairs
// if we have properties that are highly related, we want to incapsulate them inside of the objects
//  when we deal with multiple related values we use objects
//  2 types of objs (object literals and bracket notations)
//  we can access properties of objects in 2 Ways (dot notation and bracket notation)
// person.name ="xyz"
// person[name]="xyz"
// if a function is a part of obj we call that function method
// //if objs have logics and more methods(10), we need diffeent appraoch to create objs using factory functions or constructions functions
//factory functions or constructor functions
//naming convention for factory function is camel notation and construction function pascal notation
// factory function camel notation /construction function is pascal notation 
// construction function we use this keyword
// experience developer use construction function using this

// const tweet = {
//     name:'xyz',
//     age:19,
//     palce:'rer'
// }
// console.log(tweet);
// tweet.name="gsv";
// console.log(tweet.name);

// let nane = {
//     firstNam:'som',
//     lastime:"dim",
//     age:24
// }

// console.log(nane);
// console.log(nane.firstNam);
// console.log(nane['lastime']);
// console.log(nane['firstNam']);
// console.log(nane.age);
// console.log(nane);

//if objs have logics and more methods, 
// we need diff appraoch to create obj using 
// factory functions or constructions functions
//factory fuction naming convention is camel notation
//construction function is pasacl notation
// constructuin function we use this keyword
// construcution func will used by experience developer

//fac fun produces high volume key values properties

// function createCircle(radius) {
//     return {
//         radius,
//         draw() { //method
//              console.log('draw');
//         }
//     };
// }

// //we can create n number of factory function by using one fun like above
// const myCircle = createCircle(1);
// console.log(myCircle);
// const myCircle1 = createCircle(3);
// console.log(myCircle1);
// const myCircle3 = createCircle(13);
// console.log(myCircle3);
// const myCircle5 = createCircle(15);
// console.log(myCircle5);

// /////////construction function

// function Circlepi (radius) {
//     this.radius=radius;
//     this.draw=function() {
//         console.log('draw');
//     }
// }

// const Circle8 = newCirclepi(1);
// console.log(Circle8);

/////////////////////////
// let familyInfo = {
//     firstName:'Krishna',
//     lastName:'Dev',
//     age:45,
//     place:'hyd',
//     nationality :'Ind'
//     };
//     console.log(familyInfo);
//     console.log(familyInfo.firstName);
//     console.log(familyInfo[age]);
    

////////////////////////////////////////////////////////


















// //to check function or obj
// let plan = {
//     name:'hi',
//     place:'welcome',
//     age:23
// }
// console.log(plan);
// console.log(typeof(plan));

//////////////////// functions/////////////////
// functions are building blocks of JS
// functions are set of statements that perform tasks or calculate values
// function declaration, func expression, callback func, anonymous fun, arrow func

// //function expression
// let palace = function () {
//      console.log("func expression");
// }
// console.log(palace());
// //function declaration
// function add() {
//     return (2+2);
// }
// console.log(add());

// function add1(x,y) {
//     return (x+y);
// }
// console.log(add1(3,5));
// console.log(typeof(add1()));

// //arrow function
// const hello = () => {
//     console.log("arrow function 1");
// }
// console.log(hello());

// const addTwo = (num) => {  //1 parameter
//     return num +2;
// }
// console.log(addTwo(6));

// const addTwo = num => num+2;  
// console.log(addTwo(81));
// //multiple parameters
// const addNums = (num1, num2) => {
//    return num1+num2;
// }
// console.log(addNums(45,65));

// function square(number) {
//     return number*number;
// }

// square(9); 
// console.log(square(9));

//////////////////////////////////////////////////////////

//Increment
// let x =10;
// console.log(x++);
// let y =10;
// console.log(++y);

// //Decrement
// let z = 10;
// console.log(--z);
// let p=10;
// console.log(p--);

// //operator precedence from left to right
// let n= 2+3*8;
// console.log(n); //26

///////////////Arrays///////////////

// const num = ['1','2','3','4']
// console.log(num);
// num[2]="welcome";
// console.log(num);
// //['1', '2', 'welcome', '4']
// // we can add items in array by push
// const nu =['a','b','c','d'];
// nu.push("welcome");
// console.log(nu);
// // to add values at starting unshift
// nu.unshift("javascript");
// console.log(nu);
// console.log(nu.length);




















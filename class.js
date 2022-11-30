//classes

// why we use classes instead of functions
// -OOP focus on class, objects and methods to make code return
// -functional programming focus on functions
// // For example, storing properties and methods in an object can allow 
// for a certain amount of self-referential behaviour, and good organisation. 
// If you need to find something for a particular school, you know that the 
// object for that school will contain the information you need. It also allows 
// for inheritance from parent classes, meaning you can have many object instances,

// .classes can have methods, this keyword can behave a bit counter intutitively
// with functional prog this issue doesnt exist

// 6.When you’re dealing with real world objects, generally classes and class instances 
// work much better than functions. These are things that aren’t impossible with functions,
// but just don’t work as well to model as a class does.

// for years, OOP (object-oriented programming) was the de-facto standard in software engineering.
// -The concepts of classes, polymorphism, inheritance, and incapsulation dominated and revolutionized the development process.
//  But everything has an expiration date, programming paradigms included.
//  -why it is a bad idea to use classes in JavaScript, and what are some of the alternatives.

// class Pen {
// constructor (name, color, price) {
// this.name =name;
// this.color=color;
// this.price=price;
// }
// }

// console.log(Pen); output
// class Pen {
//     constructor (name, color, price) {
//     this.name =name;
//     this.color=color;
//     this.price=price;
//     }
//     }
// let Pen1 = new Pen;
// console.log(Pen1);
// // Pen {name: undefined, color: undefined, price: undefined}

// let Pen2 = new Pen("black","purple", 100);
// console.log(Pen2);
// Pen {name: 'black', color: 'purple', price: 100}

// class Family {
// constructor(fName, mName, lName) {
// this.fName ="fName"
// this.mName= "mName"
// this.lName="lName"
// }
// }
// console.log(Family);

// const Family1 = new Family();
// const Family2 = new Family("roy","kroy","buck");
// console.log(Family2);

// class Pen {
//     constructor(name,color,price) {
//       this.name=name;
//       this.color=color;
//       this.price=price;
//  }
 
//  showPrice() { //method
//      console.log(`price of ${this.name} is ${this.price}`);
//  }
//  }
//  console.log(Pen);
//  const Pen1 = new Pen("k","p",200);
//  console.log(Pen1);
//  console.log(Pen1.name); //k
//  console.log(Pen1.showPrice());
// price of k is 200
//showPrice is a new member function

//real sceanrio
// Real sceanario of class fucntion
// chair management system
// -person
// -software system:stock interface portal
// -softwate system: chair managment system

// Attributes for chair class
// chair: 
// color:string;
// seatHeight:number;
// recliningAngle:number;
// backSupport:boolean;
// headSupport:boolean;
// padding:boolean
// armRests:boolean
// seatSize:number
// isHeightAdjustable:boolean
// isMovable:boolean

// method:
// method(type):type
// adjustSeatHeight(height):number
// adjustAngle(angle):number
// moveChair(x,y):(x,y)
// above are methods that tell us what functions the chair can perform
// methods are nothing but t will tell what function chair can perform functions

// functions the chair can perform, for example 
// adjustSeatHeight, adjustAngle, moveChair,

// chair component is chair management system
// Chair component, since it is a class it will have own 
// attributes(properties) and behavior (methods)

// class Chair {
//     constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
//             this.color = color;
//             this.seatHeight = seatHeight;
//             this.recliningAngle = recliningAngle;
//             this.backSupport = backSupport;
//             this.headSupport = headSupport;
//             this.padding = padding;
//             this.armRests = armRests;
//             this.seatSize = seatSize;
//             this.isHeightAdjustable = isHeightAdjustable;
//             this.isMovable = isMovable;
//         }
//         adjustableHeight() {};
//         adjustAngle(){};
//         moveChair(){};    
//     }

// console.log(Chair);
// const Chair1 = new Chair ("Blue","25 inch","20 deg",true,false,"3 inch",true,"16 inch",false,false);
// console.log(Chair1);

//Definition of chair
// console.dir("Chair Prototype", Chair);
//Chair Prototype;

//chair object instance, it will consists of all of the chair class attributes

//we have the __proto__  or [[Prototype]] property. 
//This is the actual prototype of the class Chair.

// Abstract function and inheritance in chair management system
// The abstract function is just a function signature in a class without any implementation. 
// It helps us generalize the code so that the subclasses 
// can use them and add their own implementation to it.

// let add a new component to chair class called officeChair
// this will inherit the attributes and methods from chair class

////Defaults which can be changed by the subclass class.

// class Chair {
//     constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
//         //Defaults which can be changed by the subclass class.
//         this.color = color;
//         this.seatHeight = seatHeight;
//         this.recliningAngle = recliningAngle;
//         this.backSupport = true;
//         this.headSupport = false;
//         this.padding = "3 inch";
//         this.armRests = true;
//         this.seatSize = "16 inch";
//         this.isHeightAdjustable = false;
//         this.isMovable = false;
//         this.type = "Chair";
//     }
    
//     adjustableHeight() {};
//     adjustAngle(){};
//     moveChair(){};    
// }
// const newChair = new Chair();
// console.log(newChair);

//  add a new component to chair class called officeChair
// this will inherit the attributes and methods from chair class

// class OfficeChair extends Chair{
//     constructor(color, isHeightAdjustable, seatHeight, recliningAngle){
//     //   we are using super keyword in constructor
    // we use super keyword to call constructor of the parent class
    // we can also use it to call functions and propertirs of the parent class    
    // call suoer function at the start of the constructor if you dont
    // it will give error
    // //once the super function is called then we can access all the attributes
    // and functions of the parent class
    // super();
    //     this.type = "Office Chair";
    //     this.color = color;
    //     this.isHeightAdjustable = isHeightAdjustable;
    //     this.seatHeight = seatHeight;
    //     this.recliningAngle = recliningAngle;
    //     this.isMovable = true;
    // }
    
//     adjustableHeight(height){
//         if(height > this.seatHeight){
//             console.log(`Chair height changed to ${height}`);        
//         } else {
//             console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`);
//         }
//     }
    
//     adjustAngle(angle){
//         if(angle >= this.recliningAngle){
//             console.log(`Chair angle changed to ${angle}`);        
//         } else {
//             console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
//         }
//     }
  
//     moveChair(x,y){
//         console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
//     }
// }

// const newOfficeChair = new OfficeChair("Red", true, 30, 30);
// console.log(newOfficeChair);
// console.log(newOfficeChair.adjustableHeight(31));
// // Chair height changed to 31
// console.log(newOfficeChair.adjustAngle(40));
// // Chair angle changed to 40
// console.log(newOfficeChair.moveChair(10,20));
// Chair moved to co-ordinates = (10, 20)

// this is a class inherits the function and attributes from
// the superclass chair.
// -it uses the extends keyword to allow the officeCahir class to 
// perform inheritance

// extends keyword has following syntax
// class ChildClass extends ParentClass{...}

// /next we have constructor  function and the implmentation of
// some of the functions from the superclass
// //we are using super keyword in constructor
// //we use super keyword to call constructor of the parent class
// we can also use it to call functions and propertirs of the parent class
// ///call suoer function at the start of the constructor if you dont
// it will give error
// //once the super function is called then we can access all the attributes
// and functions of the parent class

// second topic 
// how to use the static keyowrd in classes
// //main purpose is used for a constant variable or a method that is the 
// same for every instance of class
// //static methods are called directly on the class (car for example).
// without creating an instance/object (mycar of the class)
// a static class cannot be instantiated. In other words, you cannot use the
//  new operator to create a variable of the class type.
//  lass Chair {
// //Defaults that will be common for all the instances:
//     static backSupport = true;
//     static armRests = true;

// The static keyword defines static methods for classes.
// Static methods are called directly on the class (Car from the example above) - without creating an instance/object (mycar) of the class.

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     static hello() {  // static method
//       return "Hello!!";
//     }
//   }
  
//   mycar = new Car("Ford");
//   console.log(mycar);

//   a static class cannot be instantiated. In other words, you cannot use the
//   new operator to create a variable of the class type.

///private members of classes in js
// Private members are members of the class which can only be used 
// internally by the class itself. They cannot be accessed outside
//  the class. Even the instances of the class cannot access these private members.

// All private members are declared using #<propertName> syntax. 
//     They are generally called hash names.
// //in chair class component, if we want to add default billing information
// //new properties inside the officeChair class
// // we dont want other classes to interfere with the billing information
// of other classes. to handle this we an use private fields


//addition of the following fields
// price/maximum discount/ seller address

class OfficeChair extends Chair {
	//Newly Added Properties
	#basePrice;
	#maxDiscount;
	#sellerAddress;

    constructor(type, color, isHeightAdjustable, seatHeight, recliningAngle) {
		super();
		this.type = type;
		this.color = color;
		this.isHeightAdjustable = isHeightAdjustable;
		this.seatHeight = seatHeight;
		this.recliningAngle = recliningAngle;
		this.isMovable = true;
		this.#basePrice = 1000;
		this.#maxDiscount = 5; //In percentage
		this.#sellerAddress = "XYZ, street";
	}

    adjustableHeight(height) {
		if (height > this.seatHeight) {
			console.log(`Chair height changed to ${height}`);
		} else {
			console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`);
		}
	}
	adjustAngle(angle) {
		if (angle >= this.recliningAngle) {
			console.log(`Chair angle changed to ${angle}`);
		} else {
			console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
		}
	}
	moveChair(x, y) {
		console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
	}

    //Newly Added function
	#getChairAmount(taxCharge) {
		return this.#basePrice + (this.#basePrice - this.#basePrice * this.#maxDiscount / 100) + taxCharge;
	}

    //Newly Added function
	generateBill() {
		console.log("**** BILLING INFORMATION ****");
		console.log(`Chair Price = ${this.#getChairAmount(20)}`);
		console.log(`Seller Address = ${this.#sellerAddress}`);
	}
}

output
newOfficeChair.generateBill()
*****Billing Information******
Chair Price =1979
Seller Address = XYZ, street

This function accesses the private fields and function within the class to
 generate the billing information.

 These private variables will only be accessible within the class itself. 
 If you try to reference any of the private members of the class then it will
  throw a syntax error like below

class DinningChair extends OfficeChair{}
let dineChair = new DinningChair();
dineChair.#basePrice(); //Throws syntax error

private class members can be created by using a hash # prefix. 
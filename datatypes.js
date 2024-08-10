// Q1 Write a JavaScript program to declare a variable and assign it a string value. Then, log the variable to the console.
let a ="hello";
console.log(a); //hello

//Q2 Create a function that takes a number as an argument and returns its data type.
function myFunction(a){
    return typeof a;
}
console.log(myFunction(10)); //number

// Q3 Write a program to demonstrate the difference between let, var, and const.
let x = 10;
var a_var = 10;
const b_const = 10;
x=20;
a_var=20;
b_const=20;
console.log(x); //20 
console.log(a_var) //20
console.log(b_const) //error
//Q4 The above code will throw an error because we are trying to reassign a constant variable.


//Q5 Declare a variable with const and try to reassign it. What happens?
const x_reassign = 10;
x_reassign =25;
console.log(x_reassign)
// The above code will throw an error because we are trying to reassign a constant variable.

//Q6 Create a function that takes a boolean value and returns the opposite boolean.
function oppositeBoolean(b){
    return !b;
}
console.log(oppositeBoolean(true)); //false


//Q7 Create a function that takes a number as an argument and returns its square.
function squareNumber(a)
{
    return a*a;
}
console.log(squareNumber(5)); //25


// Write a program that demonstrates type coercion by adding a number and a string.
let num1 =10;
let num2 ="10"
let sum = num1+num2; 
console.log(sum);//1010 converts impilcit

// Create a function that converts a given string to a number.
sum = Number(num1+num2) //converts expilcit
console.log(sum)//20

// Write a program to declare an object with at least three properties and log one of the properties to the console.
let room = {
    bedroom : "2bhk",
    kitchen : "fully equipped",
    bathroom :3
}
console.log(room.bathroom);  //returns 3


// Create a function that checks if a given variable is undefined.
function isUndefined(var1){
    if(var1 === undefined){
        return true;
        }
        else{
            return false;
        }
    }
    console.log(isUndefined())


// Write a program to demonstrate the difference between null and undefined.
let var1 = null;
let var2 = undefined;
console.log(var1); //null
var2 =10;
console.log(var1)
console.log(var2); //10
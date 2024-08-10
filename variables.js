// Q1
console.log(10+"5"); //105 converts to string impilict

// Q2
let x = 10;
x+=5;//15
console.log(x)

// Q3
console.log(10-null); //10

// Q4
var x1=10;
x1*=2 //20
console.log(x1) //20


// Q5
console.log(10/"2") //5 coverts to number

// Q6
console.log(10%3); // returns remainder 1

// Q7
console.log(10**2); //10 to the power 2 returns 100

// Q8
let x2=10;
let y2= "10";
console.log(x2===y2); //this checks value and data types

// Q9
console.log(null) //null

// Q10
console.log(!true) //false

// Q11
console.log(10&5); //returns 0

// Q11
console.log(10|5); //returns 0

// Q12
let x3 =10;
let y3= ++x;
console.log(y3); //11

// Q13 
let y4= x++;
console.log(y4); //10

// Q14
console.log(x5++); //11
let y= --x5;

// Q15
console.log(y6) //9
// Q16
console.log(x6--)



// Day two Q1
let deleteTime =  23 // prompt("set a timer to delete msgs in hours :");
Number.parseInt(deleteTime);
let res1 = (deleteTime <= 24) ? "delete the message for me and everyone": "delete the message for me only";
console.log(res);


// Day two Q2
let a = 12;
let b= 20;
let c = 23;
let res2 =(a>b & a>c) ? `a ${a} is largest along three variables a ${a}, b ${b}, c ${c}` : (b > c) ? `b ${b} is largest among three variables a ${a}, b ${b}, c ${c}`: `c ${c} is largest among three variables a ${a}, b ${b}, c ${c}`
console.log(res);




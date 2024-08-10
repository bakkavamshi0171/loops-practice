// Q1 sum of all even numbers from 1 to 100
let sum = 0;
for (i=1;i<=100;i++){
    if (i%2==0){
        sum += i;
        
    }
}
console.log(sum);


// Q2 factorial of given number
let sum2 = 1;
for (i=5; i>=1; i--){
    sum2*=i;
}
console.log(sum2);



// Q3 number of digits
let num = "4567";
let count = 0;
for (i =1; i<=num.length;i++){
    count++;
}
console.log(count)



// Q4 using switch condition

let coffee = "Latte";

switch (coffee) {
    case 'Espresso':
        console.log("i would like have a Espresso ")
        break;

    case 'Cappuccino':
        console.log("i would like have a Cappuccino ")
        break;

    case 'Latte':
        console.log("i would like have a Latte")
        break;

    case 'Mocha':
            console.log("i would like have a mocha ")
            break;
    default:
        console.log("no, i don't Like coffee")
}


// Q5 using switch condition
let place= "north amercia";

switch (place) {
    case 'south america':
        console.log("its Costs $20 to ship South America")
        break;

    case 'north amercia':
        console.log("Its costs $10 to ship North America ")
        break;

    case 'europe':
        console.log("Its costs $30 to ship Europe")
        break;

    case 'asia':
            console.log("Its costs $40 to ship Asia ")
            break;
    case 'australia':
        console.log("Its costs $50 to ship Australia")
        break;

    default:
        console.log("no, i don't Like coffee")
}


// Q6 using else if condition
let travelKms = 15;

if (travelKms<=5){
    console.log(" you have travelled 0-5km fare is $5 ");
}
else if(travelKms>=6 && travelKms<=10){
    console.log(" you have travelled 5-10kms fare is $10 ");
}
else if(travelKms>10 && travelKms<=20){
    console.log(" you have travelled 10-20kms fare is $20 ");
}
else {
    console.log(" you have travelled more then 20kms fare is $30 + $5 Extra for every additional kilometer ");
}


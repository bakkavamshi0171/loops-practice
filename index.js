

// Q1 square of each number




for (i=1;i<=10;i++){
    console.log(i**2)
}


// Q2 sum of all numbers from 1 to 20 divisble by 3

let add =0
for (i=1;i<=20;i++){
    if (i%3==0){
        add += i
    }
}
console.log(add);



// Q3 cube of each number

for(i=1;i<=15;i++){
    console.log(i**3)
}


// Q4 reverse order using for


for (i=10;i>=1; i--){
    console.log(i);
}


// Q5 reverse order using while


let i=10;
while (i>=1) {
    console.log(i)
    i--
}

// Q6 product of all numbers from 1-12


let product =1
for (i=1;i<=12;i++){
    product *= i
}
console.log(product)


// Q7 Reverse order but use condition and print only 2 even numbers 


for (i=20; i>=1; i--){
    if (i%2==0){
        console.log(i);
    }
}

// Q8 print numbers from 1-20 but skip which are divisble by 5 using while loop


let div = 1;
while (div<=20){
    if (div%5!=0){
        console.log(div);
    }
    div++
}


// Q9 find the sum of all numbers from 1 to 30 that are divisible by 4 using while loop


let a = 1
let sum = 0
while(a<=30){
    if (a%4==0){
        sum +=a
    }
    a++
}
console.log(sum)


// Q10 print the numbers from 50to 1 in reverse order but only print numbers that are dvisible by 3

let b = 50;
while(b >= 1){
    if (b%3==0){
        console.log(b);
    }
    b--;
}

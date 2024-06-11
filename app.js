console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
for(let i=1; i<=100; i++){
    let num= i %2;

    if(num >0){
        console.log(i)
    }
    else {
        console.log("even")
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i=1; i<=100;i++){
    let num= i
    if (num %15==0 ){
        console.log(`Fizzbuzz${num}`)
    }
    else if (num %3==0 ){
        console.log(`Fizz ${num}`)

    }
    else if(num%5==0){
        console.log(`Buzz ${num}`)
    }
    else {
        console.log(num)
    }
}

let c= 1

while (c <=100){
    
    if(c%2 !==0){
        console.log(c)
    }
    c++;
}

let a=1;

do {
    if(a%2 !=0){
        console.log(a);
    }
    a++;
}while(a<=100);


i=1

while(i <=100){
    if (i%3 ===0 && i%5===0){
        console.log("FizzBuzz")
    }
    else if (i%3 ===0){
        console.log("Fizz")
    }
    else if(i%5===0){
        console.log(`Buzz ${i}`)
    }
    else {
        console.log(`${i}is not divisible by 3 or 5`)
    }
    i++;
}

i=1
do {
    if (i%3 ===0 && i%5===0){
        console.log("FizzBuzz")
    }
    else if (i%3 ===0){
        console.log("Fizz")
    }
    else if(i%5===0){
        console.log(`Buzz ${i}`)
    }
    else {
        console.log(`${i}is not divisible by 3 or 5`)
    }
    i++;
}while (i<=100)
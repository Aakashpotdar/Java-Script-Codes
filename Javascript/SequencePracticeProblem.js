let num=Math.floor(Math.random()*10);
console.log(num);
let Dice1=1+Math.floor(Math.random()*10)%6;
console.log(Dice1);
let Dice2=1+Math.floor(Math.random()*10)%6;
console.log('addition of two dice :'+Dice1+Dice2);

let num1=Math.floor(Math.random()*10);
let num2=Math.floor(Math.random()*10);

let sum=num1+num+num2+Dice1+Dice2;
let avg=sum/5;

console.log('sum of 5 numbers: '+sum+' & avarage of them is: '+avg);
const prompt=require('prompt-sync')();
let num1=Math.floor(Math.random()*10)%5;
var num=prompt("enter number:");
switch(num)
{
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
       break;
    case 2:
            console.log('two');
        break; 
    case 3:
            console.log('three');
        break;
    case 4:
            console.log('four');
        break;


}
let year=2000;

if(year%4==0&&year%100!=0||year%400==0&&year%100==0)
{
    console.log("the year is leap year");
}
else
{
    console.log("the year is not leap year");
}

const head=0;
const teil=1;

let result=Math.floor(Math.random()*10)%2;

if(head==result)
{
    console.log('head on result');
}
else if(teil==result)
{
    console.log('teil is result');
}
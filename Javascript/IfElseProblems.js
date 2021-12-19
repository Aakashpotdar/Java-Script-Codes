let val1=100+Math.floor(Math.random()*900)%900;
let val2=100+Math.floor(Math.random()*900)%900;
let val3=100+Math.floor(Math.random()*900)%900;
let val4=100+Math.floor(Math.random()*900)%900;
let val5=100+Math.floor(Math.random()*900)%900;
if(val1>val2&&val1>val3&&val1>val4&&val1>val5)
{
    console.log('the larget number is val1 : '+val1);
}
else if(val2>val1&&val2>val3&&val2>val4&&val2>val5)
{
    console.log('the larget number is val2 : '+val2);
}
else if(val3>val1&&val3>val2&&val3>val4&&val3>val5)
{
    console.log('the larget number is val3 : '+val3);
}else if(val4>val1&&val4>val3&&val4>val3&&val4>val5)
{
    console.log('the larget number is val4 : '+val4);
}else if(val5>val1&&val5>val3&&val5>val2&&val5>val4)
{
    console.log('the larget number is val5 : '+val5);
}

if(val1<val2&&val1<val3&&val1<val4&&val1<val5)
{
    console.log('the Smallest number is val1 : '+val1);
}
else if(val2<val1&&val2<val3&&val2<val4&&val2<val5)
{
    console.log('the Smallest number is val2 : '+val2);
}
else if(val3<val1&&val3<val2&&val3<val4&&val3<val5)
{
    console.log('the Smallest number is val3 : '+val3);
}else if(val4<val1&&val4<val3&&val4<val3&&val4<val5)
{
    console.log('the Smallest number is val4 : '+val4);
}else if(val5<val1&&val5<val3&&val5<val2&&val5<val4)
{
    console.log('the Smallest number is val5 : '+val5);
}

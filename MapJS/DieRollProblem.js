
let myMap=new Map();
let num=0,num1=0,num2=0,num3=0,num4=0,num5=0,num6=0;
while(num1!=11&&num2<11&&num3<11&&num4<11&&num5<11&&num6<11)
{
    let die=1+Math.floor(Math.random()*10)%6;
    console.log(die);
    switch(die)
    {
        case 1:
            myMap.set(num,die);
            num++;
            num1++;
        break;
        case 2:
            myMap.set(num,die);
            num++;
            num2++;
        break;
        case 3:
            myMap.set(num,die);
            num++;
            num3++;
        break;
        case 4:
            myMap.set(num,die);
            num++;
            num4++;
        break;
        case 5:
            myMap.set(num,die);
            num++;
            num5++;
        break;
        case 6:
            myMap.set(num,die);
            num++;
            num6++;
        break;
    }
}
console.log('Size of Map : '+myMap.size);

if(num1>num2&&num1>num3&&num1>num4&&num1>num5&&num1>num6)
{
    console.log('Max time occured num is: 1');
}
else if(num2>num1&&num2>num3&&num2>num4&&num2>num5&&num2>num6)
{
    console.log('Max time occured num is: 2');
}
else if(num3>num1&&num3>num2&&num3>num4&&num3>num5&&num3>num6)
{
    console.log('Max time occured num is: 3');
}
else if(num4>num2&&num4>num3&&num4>num1&&num4>num5&&num4>num6)
{
    console.log('Max time occured num is: 4');
}
else if(num5>num2&&num5>num3&&num5>num4&&num5>num1&&num5>num6)
{
    console.log('Max time occured num is: 5');
}
else if(num6>num2&&num6>num3&&num6>num4&&num6>num5&&num6>num1)
{
    console.log('Max time occured num is: 6');
}

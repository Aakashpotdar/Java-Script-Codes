let dates=new Map();
let m1=[];
let m2=[];
let m11=[];
let m12=[];
let m3=[];
let m4=[];
let m5=[];
let m6=[];
let m7=[];
let m8=[];
let m9=[];
let m10=[];

for(let i=0;i<50;i++)
{
    date=1+Math.floor(Math.random()*100)%31;
    month=1+Math.floor(Math.random()*100)%12;
    switch(month)
    {
        case 1:
            m1.push(date);
        break;
        case 2:
            m2.push(date);

        break;
        case 3:
            m3.push(date);
        break;
        case 4:
            m4.push(date);
        break;
        case 5:
            m5.push(date);
        break;
        case 6:
            m6.push(date);
        break;
        case 7:
            m7.push(date);
        break;
        case 8:
        m8.push(date);
        break;
        case 9:
            m9.push(date);
        break;
        case 10:
            m10.push(date);
        break;
        case 11:
            m11.push(date);
        break;
        case 12:
            m12.push(date);
        break;
    }
}
dates.set(1,m1);
dates.set(2,m2);
dates.set(3,m3);
dates.set(4,m4);
dates.set(5,m5);
dates.set(6,m6);
dates.set(7,m7);
dates.set(8,m8);
dates.set(9,m9);
dates.set(10,m10);
dates.set(11,m11);
dates.set(12,m12);

console.log(dates);

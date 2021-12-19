let num=Math.floor(Math.random()*100)%100;
let count=0;    
for(let i=1;i<=num;i++)
{
    for (let j = 1; j <= i; j++)
    {
        if ((i % j) == 0)
        { count++; }        
    }                     
    if(count==2)
    {
        console.log(i+" number is prime ");
    }
    
    count=0;
}
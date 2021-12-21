
//1st problem
let RandomNumbers=[];

for(let i=0;i<11;i++)
{
    RandomNumbers[i]=100+Math.floor(Math.random()*300)%200;
}


for(let i=0;i<RandomNumbers.length;i++)
{
    for(let j=0;j<RandomNumbers.length-1;j++)
    {
        if(RandomNumbers[i]<RandomNumbers[j])
        {
            let temp=RandomNumbers[j];
            RandomNumbers[j]=RandomNumbers[i];
            RandomNumbers[i]=temp;
        }    
    }
}
console.log('2nd Largest number: '+RandomNumbers[RandomNumbers.length-2]);
console.log('2nd smallest number: '+RandomNumbers[1]);


//2nd problem

RandomNumbers.sort();
console.log('2nd Largest number: '+RandomNumbers[RandomNumbers.length-2]);
console.log('2nd smallest number: '+RandomNumbers[1]);

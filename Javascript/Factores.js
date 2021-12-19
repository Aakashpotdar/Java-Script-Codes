let Number=Math.floor(Math.random()*100)%50;

for (let i = 1; i <= Number; i++)
            {
                let count = 0;
                let temp = 0;
                if ((Number % i) == 0)
                {
                    temp = i;
                }

                for (let j = 1; j <= temp; j++)
                {
                    if ((temp % j) == 0)
                    { count++; }        
                }   
                if(count==2)
                {
                    console.log(" "+temp);

                }
            }

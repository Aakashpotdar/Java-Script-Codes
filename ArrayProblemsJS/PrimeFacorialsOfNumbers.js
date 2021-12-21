            let Number = 70,temp=0,count=0;

            console.log("the prime factorial numbers are:");

            for (let i = 1; i <= Number; i++)
            {
                count = 0;
                temp = 0;
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

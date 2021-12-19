    let num = Math.floor(Math.random()*20)%20;
    let hermonicNum = 0;
    for (let i = 1; i <= num; i++)
    {
        hermonicNum += (1/i);
        console.log("1/"+i+"="+(1/i));
    }
    console.log(" The "+num+" hermonic number is="+hermonicNum);
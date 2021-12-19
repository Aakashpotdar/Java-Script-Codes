
//UC1
const IsAbsent=0
let empchek=Math.floor(Math.random()*10)%2;
if(IsAbsent==empchek){
    console.log("UC1-the empolyee is absent");
}
else{
    console.log("UC1-the employee is presnt");
}

//UC2

let NumberOfWorkingDays=20;
let empHr=0;
let DayCount=0;
const PartTime=1;
const FullTime=2;
const PartTimeHr=4;
const FullTimeHr=8;
const WagePerHr=20;
{
    let empHr=0;
    let emp=Math.floor(Math.random()*10)%3;
    switch(emp)
    {
        case PartTime:
            empHr=PartTimeHr;
            break;
        case FullTime:
            empHr=FullTimeHr;
            break;
        default:
            empHr=0;
            
    }
    let wage=empHr*WagePerHr;
    console.log('UC2-'+wage+'  '+empchek );
}


//UC3

{    
    function CheckEmployeeWage(emp)
    { 
        switch(emp)
        {
            case PartTime:
                empHr=empHr+PartTimeHr;
                DayCount++;
                return empHr;
            break;
            case FullTime:
                empHr=empHr+FullTimeHr;
                DayCount++;
                return empHr;
            break;
            default:
                empHr=0;
                DayCount++;
                return empHr;
        }
    }
    let emp=Math.floor(Math.random()*10)%3;
    CheckEmployeeWage(emp)
    let wage=empHr*WagePerHr;
    console.log('UC3-'+wage+'  '+empchek );
    empHr=0;
DayCount=0
}

//UC4
empHr=0;

{    
    
    for(let i=1;i<NumberOfWorkingDays;i++)
    {
        let emp=Math.floor(Math.random()*10)%3;
        empHr=empHr+CheckEmployeeWage(emp);
    }
    let wage=empHr*WagePerHr;
    console.log('UC4-Total wage of 20 days: '+wage+'  '+empchek );
    empHr=0;
DayCount=0
}

//UC5

let MaxWorkingHr=160;
{    
    
    while(DayCount<NumberOfWorkingDays&&empHr<MaxWorkingHr)
    {
        let emp=Math.floor(Math.random()*10)%3;
        empHr=empHr+CheckEmployeeWage(emp);
    }
    let wage=empHr*WagePerHr;
    console.log('UC5-Total wage of ' +DayCount+'days and '+empHr+' Hrs : '+wage+'  '+empchek );
}

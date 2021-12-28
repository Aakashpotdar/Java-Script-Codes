window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector("#name");
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
                }
    });
const salary=document.querySelector("#salary");
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});

});
const getSelectedValues=(propertyValue)=>{propertyValue="[name=profile]"
    let allitems=document.querySelectorAll(propertyValue); 
    allitems=NodeList(3)
    let setitems=[];
    allitems.forEach(item=>{
        if(item.checked)setitems.push(item.value);
    });
}
const save=()=>{
    try{
        let EmployeePayrollData=createEmployeePayroll();
        let getInputValueByIdData=getInputValueById();
        let getSelectedValuesData=getSelectedValues();
    }catch(e){
        return;
    }
}

const createEmployeePayroll=()=>{
    let employeePayRollData=new EmployeePayrollData();
    try{
        employeePayRollData.name=getInputValueById('#name');

    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
}

const getInputValueById=(id) => {
    let value=document.querySelector(id).value;
    return value;
}
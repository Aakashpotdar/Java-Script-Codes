let isUpdate=false;
let employeePayrollObj={};

window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector("#name");
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent=" ";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;
            textError.textContent=" ";
        }catch(e){
            textError.textContent=e;
                }
    });

    const date=document.querySelector('#date');
    date.addEventListener('input',function(){
        const startDate=new Date(Date.parse(getInputValueById('#day')+" "+
                                            getInputValueById('#month')+" "+
                                            getInputValueById('#year')));

        try{
            (new employeePayRollData()).startDate=startDate;
            textError.textContent=" ";}
        catch(e){
            textError.textContent=e;        }
    })
    checkForUpdate();
});
    const salary=document.querySelector("#salary");
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function(){
    output.textContent=salary.value;




});
const getSelectedValues=(propertyValue)=>{propertyValue="[name=profile]"
    let allitems=document.querySelectorAll(propertyValue); 
    allitems=NodeList(3)
    let setitems=[];
    allitems.forEach(item=>{
        if(item.checked)setitems.push(item.value);
    });
}
const save=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    try{
        setEmployeePayrollObject();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_Properties.home_Page);
        //let EmployeePayrollData=createEmployeePayroll();
        //createAndUpdateStorage(EmployeePayrollData);
    }catch(e){
        alert(e);
    }
}

const setEmployeePayrollObject=()=>{
    employeePayrollObj._name=getInputValueById('#name');
    employeePayrollObj._profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollObj._gender=getSelectedValues('[name=gender]').pop();
    employeePayrollObj._department=getSelectedValues('[name=department]');
    employeePayrollObj._salary=getSelectedValues('#salary');
    employeePayrollObj._note=getSelectedValues('#notes');
    let date=getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollObj._startDate=date;

}
const createAndUpdateStorage=()=>{
      let employeepayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
      if(employeepayrollList){
            let employeePayRollData=employeepayrollList.find(emp=>emp._id==employeePayrollObj._id);
            if(!employeePayRollData){
                employeepayrollList.push(createEmployeePayroll());
            }
            else{
                const index=employeepayrollList.map(emp=>emp._id).indexOf(employeePayRollData._id);
                employeepayrollList.splice(index,1,createEmployeePayroll._id);
            }
        }
        else{
                employeepayrollList=[createEmployeePayroll()];
        }
      //alter(employeepayrollList.toString());
      localStorage.setItem("EmployeePayrollList",JSON.stringify(employeepayrollList))
  }
//function createAndUpdateStorage(EmployeePayrollData){
  //  let employeepayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
  //  if(employeepayrollList!=undefined){
  //      employeepayrollList.push(employeePayRollData);
  //  }else{
  //      employeepayrollList=[employeePayRollData]
  //  }
  //  alter(employeepayrollList.toString());
  //  localStorage.setItem("EmployeePayrollList",JSON.stringify(employeepayrollList))
//}
const createEmployeePayroll=(id)=>{
    let employeePayRollData=new EmployeePayrollData();
    if(!id){
        employeePayRollData.id=creatNewEmployeeId();

    }else{
        employeePayRollData.id=id;
    }
        setEmployeePayrollData(employeePayRollData);
        return employeePayRollData;
    
}

const setEmployeePayrollData=(EmployeepayrollData)=>{
    try{
        EmployeePayRollData.name=employeePayrollObj._name;
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    EmployeepayrollData.profilePic=employeePayrollObj._profilePic;
    EmployeepayrollData.gender=employeePayrollObj._gender;
    EmployeepayrollData.department=employeePayrollObj._department;
    EmployeepayrollData.salary=employeePayrollObj._salary;
    EmployeepayrollData.note=employeePayrollObj._note;
    try{
        EmployeepayrollData.startDate=new Date(Date.parse(employeePayrollObj._startDate));
    }catch(e){
        setTextValue('.date-error',e);
        throw e;
    }
    alert(EmployeepayrollData.toString());
}

const getInputValueById=(id) => {
    let value=document.querySelector(id).value;
    return value;
}

const creatNewEmployeeId=()=>{
    let employeeId=localStorage.getItem("EmployeeId");
    employeeId=!employeeId?1:(parseInt(employeeId)+1).toString();
    localStorage.setItem("EMPLOYEE Id",employeeId);
    return employeeId;
}

const getSelectedValues=(propertyValue)=>{
    let allitems=document.querySelectorAll(propertyValue);
    let selItem=[];
    allitems.forEach(item=>{
        if(item.checked) selItem.push(item.value);
    });
    return selItem;
}



    

    

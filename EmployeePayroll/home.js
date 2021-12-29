

let empPayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem("editEmp")
});

const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollLocalList')?
                            JSON.parse(localStorage.getItem('EmployeePayrollLocalList')):[];
}

const createInnerHtml=() => {
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                    "<th>salary</th><th>start Date</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;
    var EmployeepayrollData=EmployeePayrollJson();
    // UC5
    for(const payrollData of EmployeepayrollData){
        innerHtml=`${innerHtml}
    <tr>
        <td><img class="profile" src="${payrollData._name}" alt=""></td>
        <td>${payrollData._name}</td>
        <td>${payrollData._gender}</td>
        <td>
        ${getDeptHtml(payrollData._department)}
        </td>
        <td>${payrollData._salary}</td>
        <td>${payrollData._startDate}</td>
        <td>
            <button id="${payrollData._id}" onclick="remove(${payrollData._id})" alt="delete">Delete</button> 
            <button onclick="update(${payrollData._id})" alt="update">Update</button> 
        </td>
    </tr>
`;
}
document.querySelector('#display').innerHTML=innerHtml;
}

const EmployeePayrollJson=()=>{
    let EmployeePayrollLocalList=[
        {
            _name:'aakash potdar',
            _gender:'male',
            _department:['HR',' Accounts'],
            _salary:'40000',
            _startDate:'20th feb,2021',
            _note:'',
            _id:new Date().getTime(),
            _prfilePic:'12.jpg'
        },
        {
            _name:'sfwas sdccr',
            _gender:'Female',
            _department:'HR',
            _salary:'40550',
            _startDate:'19th feb,2021',
            _note:'',
            _id:new Date().getTime(),
            _prfilePic:'../34.jpg'
        }
    ];
    return EmployeePayrollLocalList;
};

const getDeptHtml=(deptList) => {
    let depHtml='';
    for(const dept of deptList){
        depHtml=`${depHtml}<div class='dept-label'>${dept}</div>`
    }
    return depHtml;
};

const remove=(node)=>{
    let employeeData=empPayrollList.find(emp=>emp._id==node);
    if(!employeeData) return;
    const index=EmployeepayrollData.map(emp=>employeeData._id).indexOf(employeeData._id);
    EmployeepayrollData.splice(index,1);
    localStorage.setItem("EmployeePayrollData",JSON.stringify(EmployeepayrollData));
    document.querySelector(".emp-count").textCount=EmployeepayrollData.length;
    createInnerHtml();
}

const checkForUpdate=()=>{
    const employeePayrollJson=localStorage.getItem('editEmp')
    isUpdate=employeePayrollJson ? true:false;
    if(!isUpdate)return;
    employeePayrollObj=JSON.parse(employeePayrollJson);
    setForm();
}

const setForm=()=>{
    setValue('#name',employeePayrollObj._name);
    setSelectedValues('[name=profile]',employeePayrollObj._prfilePic);
    setSelectedValues('[name=gender]',employeePayrollObj._gender);
    setSelectedValues('[name=department]',employeePayrollObj._department);
    setValue('#salary',employeePayrollObj._salary);
    setTextValue('.salary-output',employeePayrollObj._salary)
    setValue('#notes',employeePayrollObj._note);
    let date=stringifyDate(employeePayrollObj._startDate).split(" ");
    setValue('#day',day[0]);
    setValue('#month',day[1]);
    setValue('#year',day[2]);

}

const setSelectedValues=(propertyValue,value)=>{
    let allitems=document.querySelectorAll(propertyValue);
    allitems.forEach(item=>{
        if(Array.isArray(value)){
            if(value.includes(item.value)){
                item.checked=true;
            }
            else if(item.value===value){
                item.checked=true;
            }
        }
    });
}

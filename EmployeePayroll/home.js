
//UC4
window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
})

const createInnerHtml=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                    "<th>salary</th><th>start Date</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;

    let EmployeepayrollData=EmployeePayrollJson();
    for(const payrollData of EmployeepayrollData){
        innerHtml=`${innerHtml}
<tr>
    <td><img class="profile" src="34.jpg" alt="">${EmployeepayrollData._name}</td>
    <td>${EmployeepayrollData._gender}</td>
    <td>
    ${getDeptHtml(EmployeepayrollData._department)}
    </td>
    <td>${EmployeepayrollData._salary}</td>
    <td>${EmployeepayrollData._startDate}</td>
   
    <td>
        <img name="${EmployeepayrollData._id}" onclick="remove(this)" alt="delete">
        <img name="${EmployeepayrollData._id}" onclick="update(this)" alt="update"> 
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
            _department:'HR Accounts',
            _salary:'40000',
            _startDate:'20th feb,2021',
            _note:'',
            _id:new Date().getTime(),
            _prfilePic:'../12.jpg'
        },
        {
            _name:'sfwas sdccr',
            _gender:'Female',
            _department:'HR',
            _salary:'40000',
            _startDate:'19th feb,2021',
            _note:'',
            _id:new Date().getTime(),
            _prfilePic:'../34.jpg'
        }
    ];
    return EmployeePayrollLocalList;
}

const getDeptHtml=(deptList)=>{
    let depHtml='';
    for(const dept of deptList){
        depHtml=`${depHtml}<div class='dept-label'>${dept}</div>`
    }
    return depHtml;
}
var employees=[
        {"empcode":1000,"name":"hari","department":"hr","salary":35000,"location":"ekm"},
        {"empcode":1001,"name":"vijay","department":"hr","salary":45000,"location":"ekm"},
        {"empcode":1002,"name":"tom","department":"qa","salary":55000,"location":"tvm"},
        {"empcode":1003,"name":"tini","department":"qa","salary":15000,"location":"tvm"},
        {"empcode":1004,"name":"james","department":"ba","salary":65000,"location":"tvm"},
        {"empcode":1005,"name":"jibin","department":"ba","salary":75000,"location":"ekm"},
        {"empcode":1005,"name":"vipin","department":"devops","salary":15000,"location":"bnglr"},
        {"empcode":1006,"name":"vinu","department":"devops","salary":65000,"location":"bnglr"},
        {"empcode":1007,"name":"ram","department":"it","salary":85000,"location":"bnglr"},
        {"empcode":1008,"name":"zaheer","department":"it","salary":65000,"location":"ekm"}
        
    ]

// array of objects
// print all employees name

console.log(employees.map(o=>o.name));

//employee highest salary

console.log(employees.reduce((o1,o2)=>o1.salary>o2.salary?o1:o2));

//employee with lowest salary

console.log(employees.reduce((o1,o2)=>o1.salary<o2.salary?o1:o2));

// employee name of location tvm

console.log(employees.filter(o=>o.location=="tvm").map(o=>o.name));

// sort employees salary in decending order

employees.sort((o1,o2)=>o2.salary-o1.salary)
console.log(employees);

// print employees name whose location=bnglr and department=IT

console.log(employees.filter(o=>o.department=="it" && o.location=="bnglr").map(o=>o.name));

//departmentwise employee count

dept_count={}

employees.map(o=>o.department).map(d=>d in dept_count?dept_count[d]+=1:dept_count[d]=1)
console.log(dept_count);


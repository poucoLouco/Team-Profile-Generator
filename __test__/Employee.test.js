const Employee = require("../library/Employee.js");

test("Test Employee to be an Object",function(){
    const testEmployee = new Employee("ana",121,"ana@test.com" )
expect(typeof(testEmployee)).toBe("object")
})


test("Test Employee Attributes name,id,emai",function(){
    const testEmployee = new Employee("ana",121,"ana@test.com" )
expect(testEmployee.name).toBe("ana")
expect(testEmployee.id).toBe(121)
expect(testEmployee.email).toBe("ana@test.com")
})


test("Test Employee methods - getrole getname,getid,getemai",function(){
    const testEmployee = new Employee("ana",121,"ana@test.com" )
expect(testEmployee.getNAME()).toBe("ana")
expect(testEmployee.getId()).toBe(121)
expect(testEmployee.getEmail()).toBe("ana@test.com")
expect(testEmployee.getRole()).toBe("Employee")  
})
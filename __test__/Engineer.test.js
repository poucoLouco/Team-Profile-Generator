const Engineer = require("../library/Engineer");

test("Test Engineer to be an Object",function(){
    const testEngineer = new Engineer("ana",121,"ana@test.com",'testgit' )
expect(typeof(testEngineer)).toBe("object")
})


test("Test Engineer Attributes name,id,email, Github",function(){
    const testEngineer = new Engineer("ana",121,"ana@test.com",'testgit' )
expect(testEngineer.name).toBe("ana")
expect(testEngineer.id).toBe(121)
expect(testEngineer.email).toBe("ana@test.com")
expect(testEngineer.Github).toBe("testgit")
})


test("Test Engineer methods - getrole getname,getid,getemai, getGithub",function(){
    const testEngineer = new Engineer("ana",121,"ana@test.com",'testgit' )
expect(testEngineer.getNAME()).toBe("ana")
expect(testEngineer.getId()).toBe(121)
expect(testEngineer.getEmail()).toBe("ana@test.com")
expect(testEngineer.getRole()).toBe("Engineer")  
expect(testEngineer.getGithub()).toBe("testgit")  
})
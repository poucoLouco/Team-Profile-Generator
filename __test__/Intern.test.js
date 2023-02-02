const Intern = require("../library/Intern");

test("Test Intern to be an Object", function () {
  const testIntern = new Intern("ana", 121, "ana@test.com", 321);
  expect(typeof testIntern).toBe("object");
});

test("Test Intern Attributes name,id,email,officeNumber", function () {
  const testIntern = new Intern("ana", 121, "ana@test.com", 321);
  expect(testIntern.name).toBe("ana");
  expect(testIntern.id).toBe(121);
  expect(testIntern.email).toBe("ana@test.com");
  expect(testIntern.officeNumber).toBe(321);
});

test("Test Intern methods - getrole getname,getid,getemai, getOfficeNumber", function () {
  const testIntern = new Intern("ana", 121, "ana@test.com", 321);
  expect(testIntern.getName()).toBe("ana");
  expect(testIntern.getId()).toBe(121);
  expect(testIntern.getEmail()).toBe("ana@test.com");
  expect(testIntern.getRole()).toBe("Intern");
  expect(testIntern.getOfficeNumber()).toBe(321);
});

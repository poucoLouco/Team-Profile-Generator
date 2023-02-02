const Intern = require("../library/Intern");

test("Test Intern to be an Object", function () {
  const testIntern = new Intern("ana", 121, "ana@test.com", "schoolName");
  expect(typeof testIntern).toBe("object");
});

test("Test Intern Attributes name,id,email,school", function () {
  const testIntern = new Intern("ana", 121, "ana@test.com", "schoolName");
  expect(testIntern.name).toBe("ana");
  expect(testIntern.id).toBe(121);
  expect(testIntern.email).toBe("ana@test.com");
  expect(testIntern.school).toBe("schoolName");
});

test("Test Intern methods - getRole, getName, getId, getEmail, getSchool", function () {
  const testIntern = new Intern("ana", 121, "ana@test.com", "schoolName");
  expect(testIntern.getName()).toBe("ana");
  expect(testIntern.getId()).toBe(121);
  expect(testIntern.getEmail()).toBe("ana@test.com");
  expect(testIntern.getRole()).toBe("Intern");
  expect(testIntern.getSchool()).toBe("schoolName");
});

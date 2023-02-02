const Manager = require("../library/Manager.js");

test("Test Manager to be an Object", function () {
  const testManager = new Manager("ana", 121, "ana@test.com", 321);
  expect(typeof testManager).toBe("object");
});

test("Test Manager Attributes name,id,email,officeNumber", function () {
  const testManager = new Manager("ana", 121, "ana@test.com", 321);
  expect(testManager.name).toBe("ana");
  expect(testManager.id).toBe(121);
  expect(testManager.email).toBe("ana@test.com");
  expect(testManager.officeNumber).toBe(321);
});

test("Test Manager methods - getRole, getName, getId, getEmail, getofficeNumber", function () {
  const testManager = new Manager("ana", 121, "ana@test.com", 321);
  expect(testManager.getNAME()).toBe("ana");
  expect(testManager.getId()).toBe(121);
  expect(testManager.getEmail()).toBe("ana@test.com");
  expect(testManager.getRole()).toBe("Manager");
  expect(testManager.getOfficeNumber()).toBe(321);
});

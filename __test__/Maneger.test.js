const Maneger = require("../library/Maneger");

test("Test Maneger to be an Object", function () {
  const testManeger = new Maneger("ana", 121, "ana@test.com", 321);
  expect(typeof testManeger).toBe("object");
});

test("Test Maneger Attributes name,id,email,officeNumber", function () {
  const testManeger = new Maneger("ana", 121, "ana@test.com", 321);
  expect(testManeger.name).toBe("ana");
  expect(testManeger.id).toBe(121);
  expect(testManeger.email).toBe("ana@test.com");
  expect(testManeger.officeNumber).toBe(321);
});

test("Test Maneger methods - getRole, getName, getId, getEmail, getofficeNumber", function () {
  const testManeger = new Maneger("ana", 121, "ana@test.com", 321);
  expect(testManeger.getName()).toBe("ana");
  expect(testManeger.getId()).toBe(121);
  expect(testManeger.getEmail()).toBe("ana@test.com");
  expect(testManeger.getRole()).toBe("Maneger");
  expect(testManeger.getOfficeNumber()).toBe(321);
});

const Manager = require("../lib/Manager");

test("it should get role with getRole() to return Manager", () => {
	const role = "Manager";
	const employee = new Manager("Yohans14", 214, "string@string.com");
	expect(employee.getRole()).toBe(role);
});

test("it should get office number with getOfficeNumber()", () => {
	const office = 101;
	const employee = new Manager("Yohans14", 214, "string@string.com", office);
	expect(employee.getOfficeNumber()).toBe(office);
});

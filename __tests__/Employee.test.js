const Employee = require("../lib/Employee");

test("employee should create object with name, id email, roll", () => {
	const employee = new Employee("Johnny", 214, "string@string.com", "Employee");

	expect(employee.name).toBe("Johnny");
	expect(employee.id).toBe(214);
	expect(employee.email).toBe("string@string.com");
});

test("it should get the name from getName method", () => {
	const name = "Johnny";
	const employee = new Employee(name);
	expect(employee.getName()).toBe(name);
});

test("it should get the employee id by the gitId method", () => {
	const id = 214;
	const employee = new Employee("Johnny", id);
	expect(employee.getId()).toBe(id);
});

test("it should get the employee email by the getEmail method", () => {
	const email = "string@string.com";
	const employee = new Employee("Johnny", 214, email);
	expect(employee.getEmail()).toBe(email);
});

test("it should get the employee role by the getRole method", () => {
	const role = "Employee";
	const employee = new Employee("Johnny", 214, "string@string.com", Employee);
	expect(employee.getRole()).toBe(role);
});

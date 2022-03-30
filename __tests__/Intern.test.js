const Intern = require("../lib/Intern");

test("it should get the school by the getSchool() method", () => {
	const school = "TTU";
	const schoolName = new Intern("Yohans14", 214, "string@string.com", school);
	expect(schoolName.getSchool()).toEqual(school);
});

test("it should return Intern by using getRole() method", () => {
	const role = "Intern";
	const Int = new Intern("Yohans14", 214, "string@string.com", role);
	expect(Int.getRole()).toBe(role);
});

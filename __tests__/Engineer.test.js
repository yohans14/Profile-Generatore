const Engineer = require("../lib/Engineer");

test("it should set GitHUb account via constructor", () => {
	const gitHubUser = "GitHubUser";
	const enginner = new Engineer(
		"Yohans14",
		214,
		"string@string.com",
		gitHubUser
	);
	expect(enginner.github).toBe(gitHubUser);
});
test("it shouold get github info with getgithub()", () => {
	const gitHubUser = "GitHubUser";
	const enginner = new Engineer(
		"Yohans14",
		214,
		"string@string.com",
		gitHubUser
	);
	expect(enginner.getGithub()).toBe(gitHubUser);
});

test("it should get role with getRole() method", () => {
	const role = "Engineer";
	const enginner = new Engineer(
		"Yohans14",
		214,
		"string@string.com",
		"GitHubUser"
	);
	expect(enginner.getRole()).toBe(role);
});

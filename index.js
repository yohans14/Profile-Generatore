const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "./dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const teamMembers = [];
const arrayId = [];

let generateTeam = () => {
	console.log("Thank you for building your team with Profile-Generatore");

	let createManager = () => {
		inquirer
			.prompt([
				{
					type: "input",
					name: "managerName",
					message: "What is the team manager's name?",
					validate: (answer) => {
						if (answer !== "") {
							return true;
						}
						return "Please enter team manager's name.";
					},
				},
				{
					type: "input",
					name: "managerId",
					message: "What is the team manager's id?",
					validate: (answer) => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							return true;
						}
						return "Please enter a manager's id without a leding 0.";
					},
				},
				{
					type: "input",
					name: "managerEmail",
					message: "What is the team manager's email?",
					validate: (answer) => {
						const pass = answer.match(/\S+@\S+\.\S+/);
						if (pass) {
							return true;
						}
						return "Please enter a valid email address.";
					},
				},
				{
					type: "input",
					name: "managerOfficeNumber",
					message: "What is the team manager's office number?",
					validate: (answer) => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							return true;
						}
						return "Please enter manager's office Number without a leding 0.";
					},
				},
			])
			.then((answers) => {
				const manager = new Manager(
					answers.managerName,
					answers.managerId,
					answers.managerEmail,
					answers.managerOfficeNumber
				);
				teamMembers.push(manager);
				arrayId.push(answers.managerId);
				createTeam();
			});
	};

	let createTeam = function () {
		inquirer
			.prompt([
				{
					type: "list",
					name: "memberChoice",
					message: "What team member would you like to add?",
					choices: ["Engineer", "Intern", "Done"],
				},
			])
			.then((teamChoice) => {
				switch (teamChoice.memberChoice) {
					case "Engineer":
						addEngineer();
						break;
					case "Intern":
						addIntern();
						break;
					case "Done":
						console.log("your team has been created, open the dist folder!");
						buildTeam();
						break;
					default:
						buildTeam();
				}
			});
	};

	let addEngineer = () => {
		inquirer
			.prompt([
				{
					type: "input",
					name: "engineerName",
					message: "What is the engineer's name?",
					validate: (answer) => {
						if (answer !== "") {
							return true;
						}
						return "Please enter engineer's name";
					},
				},
				{
					type: "input",
					name: "engineerId",
					message: "What is the engineer's id?",
					validate: (answer) => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							return true;
						}
						return "Please enter a number without a leading 0.";
					},
				},
				{
					type: "input",
					name: "engineerEmail",
					message: "What is the engineer's email?",
					validate: (answer) => {
						const pass = answer.match(/\S+@\S+\.\S+/);
						if (pass) {
							return true;
						}
						return "Please enter a valid email address.";
					},
				},
				{
					type: "input",
					name: "engineerGithub",
					message: "What is the engineer's GitHub username?",
					validate: (answer) => {
						if (answer !== "") {
							return true;
						}
						return "Please enter at least one character.";
					},
				},
			])
			.then((answers) => {
				const engineer = new Engineer(
					answers.engineerName,
					answers.engineerId,
					answers.engineerEmail,
					answers.engineerGithub
				);
				teamMembers.push(engineer);
				arrayId.push(answers.engineerId);
				createTeam();
			});
	};

	let addIntern = () => {
		inquirer
			.prompt([
				{
					type: "input",
					name: "internName",
					message: "What is the intern's name?",
					validate: (answer) => {
						if (answer !== "") {
							return true;
						}
						return "Please enter intern's name.";
					},
				},
				{
					type: "input",
					name: "internId",
					message: "What is the intern's id?",
					validate: (answer) => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							return true;
						}
						return "Please enter a number without a leading 0.";
					},
				},
				{
					type: "input",
					name: "internEmail",
					message: "What is the intern's email?",
					validate: (answer) => {
						const pass = answer.match(/\S+@\S+\.\S+/);
						if (pass) {
							return true;
						}
						return "Please enter a valid email address.";
					},
				},
				{
					type: "input",
					name: "internSchool",
					message: "What is the intern's school?",
					validate: (answer) => {
						if (answer !== "") {
							return true;
						}
						return "Please enter school name.";
					},
				},
			])
			.then((answers) => {
				const intern = new Intern(
					answers.internName,
					answers.internId,
					answers.internEmail,
					answers.internSchool
				);
				teamMembers.push(intern);
				arrayId.push(answers.internId);
				createTeam();
			});
	};

	function buildTeam() {
		if (!fs.existsSync(OUTPUT_DIR)) {
			fs.mkdirSync(OUTPUT_DIR);
		}
		fs.writeFileSync(outputPath, generatePage(teamMembers), "utf-8");
	}

	createManager();
};

generateTeam();

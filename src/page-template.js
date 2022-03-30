// create the team
const generateTeam = (teams) => {
	// create the manager html
	const generateManagerProfile = (manager) => {
		return `
        <div class="card employee-card">
        <div class="card-header" style="background-color: rgb(189, 124, 45);">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
	};

	// create the html for engineers
	const generateEngineerProfile = (engineer) => {
		return `
        <div class="card employee-card">
    <div class="card-header" style="background-color: rgb(189, 124, 45);">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
	};

	// create the html for interns
	const generateInternProfile = (intern) => {
		return `
        <div class="card employee-card">
    <div class="card-header" style="background-color: rgb(189, 124, 45);">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
	};

	const teamIndexHtml = [];

	teamIndexHtml.push(
		teams
			.filter((employee) => employee.getRole() === "Manager")
			.map((manager) => generateManagerProfile(manager))
	);
	teamIndexHtml.push(
		teams
			.filter((employee) => employee.getRole() === "Engineer")
			.map((engineer) => generateEngineerProfile(engineer))
			.join("")
	);
	teamIndexHtml.push(
		teams
			.filter((employee) => employee.getRole() === "Intern")
			.map((intern) => generateInternProfile(intern))
			.join("")
	);

	return teamIndexHtml.join("");
};

// export function to generate entire page
module.exports = (teams) => {
	return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading" style="background-color: rgb(194, 57, 57)">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex flex-wrap justify-content-center">
                ${generateTeam(teams)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

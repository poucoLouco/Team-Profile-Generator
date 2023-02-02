


const generateBaseHtml = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>PROFILE</title>
  <head>
  <body>
<header class="text-center">
    <h1>MY TEAM</h1>
</header>
    ${"team functions get's could here"}
    </body>
  </html>`;

  function generateTeamHtml(teamMembers = []) {
    console.log(teamMembers);
    const htmlArr = [];
    let i=0; 
    while (i<teamMembers.length) {
        const member=teamMembers[i]

        if (member.getRole() === "Manager") {
            const mgrHtml = `
            <li class="list-group-item">
            <a href="mailto: ${member.getEmail()}"></a>
          </li>
            `
            htmlArr.push(mgrHtml)
            
        }
    }
  }
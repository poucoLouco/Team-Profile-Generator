

function generateTeamHtml(teamMembers) {
  console.log(teamMembers);
 let htmlTemplateString = "";
 
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    if (member.getRole() === "Manager") {
      htmlTemplateString += `
            <section class="card"  style="width: 18rem;">

        <h1 class="name">${member.name}</h1>
        
        <h3>
         ${member.getRole()}
          <span class="logo"
          ><img src="https://img.icons8.com/bubbles/50/null/pokeball.png"
          /></span>
        </h3>
        <ul class="list-group">
          <li class="list-group-item">
            Id:${member.id}
          </li>
          <li class="list-group-item"><a href="mailto:${member.email}">Email: ${
        member.email
      }</a></li>
          <li class="list-group-item">office number: ${member.officeNumber}</li>
        </ul>
      </section>
            `;
    } else if (member.getRole() === "Engineer") {
      htmlTemplateString += `
            <section class="card"  style="width: 18rem;">

        <h1 class="name">${member.name}</h1>
        
        <h3>
         ${member.getRole()}
          <span class="logo"
          ><img src="https://img.icons8.com/bubbles/50/null/pokeball.png"
          /></span>
        </h3>
        <ul class="list-group">
          <li class="list-group-item">
            Id:${member.id}
          </li>
          <li class="list-group-item"><a href="mailto:${member.email}">Email: ${
        member.email
      }</a></li>
          <li class="list-group-item">
            <a href="https://github.com/${member.Github}" class="class-name">
            My GitHub username is ${member.Github}</a>
          </li>
        </ul>
      </section>
            `;
    } else {
      htmlTemplateString += `
        <section class="card"  style="width: 18rem;">

    <h1 class="name">${member.name}</h1>
    
    <h3>
     ${member.getRole()}
      <span class="logo"
      ><img src="https://img.icons8.com/bubbles/50/null/pokeball.png"
      /></span>
    </h3>
    <ul class="list-group">
      <li class="list-group-item">
        Id:${member.id}
      </li>
      <li class="list-group-item"><a href="mailto:${member.email}">Email: ${
        member.email
      }</a></li>
      <li class="list-group-item">school name: ${member.school}</li>
    </ul>
  </section>
        `;
    }
  }

  const HTML = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"
    <title>TEAM PROFILE</title>
  </head>
  <body>
    <header class="text-center bg-danger text-white"><h1>MY TEAM</h1></header>
    <main class="container d-flex justify-content-evenly">
    ${htmlTemplateString}
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>

  `
  return HTML;
}

module.exports = generateTeamHtml



const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
      .filter(({ feature }) => feature)
      .map(({ name, description, languages, link }) => {
        return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
      })
      .join('')}

      ${projectsArr
      .filter(({ feature }) => !feature)
      .map(({ name, description, languages, link }) => {
        return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
      })
      .join('')}
      </div>
    </section>
  `;
};
generateProjects(projects)

module.exports = templateData => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="./style.css" />
  <title>MY TEAM</title>
</head>

  <body>
     <header class="hero">
    <h1 class="app-title">My Team</h1>
    
  </header>
     <main class="flex-row justify-space-between">
     <div class="container m-0">
          <div class="row card-5 ">
          </div>
     </div>

    </main>
   <script src="script.js"></script>
  </body>
  </html>
  `;
};
module.exports = generatePage;
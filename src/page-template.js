const Employees = require("../lib/Team");



function generatePage(Employees) {
  // console.log(Employees)
  `
 <!DOCTYPE html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
   <link rel="stylesheet" href="./dist/style.css" />
   <title>MY TEAM</title>
 </head>
 
   <body>
      <header class="hero">
     <h1 class="app-title">My Team</h1>
     
   </header>
      <main class="flex-row justify-space-between">
      <div class="container m-0">
           <div class="row card-5 " id="team">
           </div>
      </div>
 
     </main>
    <script src="/.dist/script.js"></script>
   </body>
   </html>
       
   `
};

module.exports = generatePage;
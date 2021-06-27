const fs = require("fs");

function genCards(data){
    let returnValue = ``;
    for(const member of data){
        returnValue += `
                <div class="col mb-4">
                        <div class="card h-100 shadow mx-auto" style="max-width: 18rem;">
                            <div class="card-header bg-primary text-light">
                                <h1 class="fs-4">${member.name}</h1>
                                <h2 class="fs-4">${member.getRole()}</h2>
                            </div>
                            <div class="card-body bg-light">
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${member.getID()}</li>
                                    <li class="list-group-item">Email: ${member.getEmail()}</li>
                                    <li class="list-group-item">${member.formatThird()}</li>
                                </ul>
                            </div>
                        </div>
                </div>`
    }
    return returnValue;
}

function genHTML(data){
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!--Boostrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    
    <body>
        <nav class="navbar text-light bg-danger mb-5">
            <h1 class="container-fluid justify-content-center p-4">Team Profile</h1>
        </nav>
        <main class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">${genCards(data)}
            </div>
        </main>
    </body>
    
    </html>`
}


function writeHTML(data){
    fs.writeFile('./dist/index.html', genHTML(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

module.exports = writeHTML;
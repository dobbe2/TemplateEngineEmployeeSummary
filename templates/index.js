function mainHtml(){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Engine</title>
    <link href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap" rel="stylesheet">
    <style>
    * { 
        font-family: 'Fjalla One';
    }
    html {
        background-color: rgb(214, 214, 214);
    }
    header {
        color: white;
        background-color: #25274D;
        text-align: center;
        padding: 25px;
        margin: -20px -20px 10px -20px;
    
    }
    
    .cards {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-gap: 1rem;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        text-align: center;
        background-color: #2E9CCA;
    }
    @media (min-width: 600px) {
        .cards { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 900px) {
        .cards { grid-template-columns: repeat(3, 1fr); }
    }
    </style>
</head>
<body>
    
<header>
    <h1>My Team</h1>
</header>

<div class="cards">
`
}
module.exports = mainHtml
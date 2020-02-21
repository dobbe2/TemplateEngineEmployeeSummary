function mainHtml(){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Engine</title>
    <link rel="stylesheet" href="style.css">
    <style>* {
        box-sizing: border-box;
    }
    
    header {
        color: white;
        background-color: crimson;
        text-align: center;
        padding: 25px;
        margin-bottom: 30px;
    
    }
    
    .col {
        float: left;
        width: 20%;
        padding: 0 10px;
    }
    
    .row {
        margin: 0 -5px;
    }
    
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        text-align: center;
        background-color: #f1f1f1;
    }
    
    @media screen and (max-width: 600px) {
        .col {
            width: 100%;
            display: block;
            margin-bottom: 20px;
        }
    }</style>
</head>
<body>
    
<header>
    <h1>My Team</h1>
</header>

<div class="conatiner">
`
}
module.exports = mainHtml
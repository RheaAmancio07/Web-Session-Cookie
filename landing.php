<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

    <title>TO-DO Lists</title>
</head>

<body class="p-3 mb-2 bg-dark text-white">
    <button id ="addtask" class="btn btn-primary btn-lg btn-block mt-5 "><a href="./index.html" class="text-decoration-none text-white">Add Task Now</a></button>
    <?php
        session_start();
        $_SESSION['tasks'] = [];
    ?>
</body>

</html>
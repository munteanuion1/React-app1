<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Laborator 4</title>
  <link rel="stylesheet" href="./cssFile/style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>

<body>
<?php require "./blocks/header.php"?>

<div class="container" style="max-width: 500px">
<br>
<div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
        <h4 class="my-0 fw-normal text-center">Register</h4>
      </div>
      <form action="check.php" method="post" style="padding:1%">
        <h4 class="my-0 fw-normal text-left m-3 mt-3">Email</h3>
        <input type="email" name="email" id="email" placeholder="Introduceti emailul" class="form-control">

        <h4 class="my-0 fw-normal text-left m-3 mt-3">Parola</h3>
        <input id="password" type="password" name="password" placeholder="Introduceti parola" class="form-control">
        <br>
        <button type="submit" class="btn btn-success me-2">Register</button>
        <a style="text-decoration:none" href="./login.php">Or Login</a>
      </form>
    </div>
  </div>
</div>

<?php require './blocks/footer.php'?>
</body>
</html>
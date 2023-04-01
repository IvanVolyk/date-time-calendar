<?php
    include('../includes/translate.php');
?>


<!DOCTYPE html>
<html lang="uk-UA" dir="ltr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Який сьогодні день</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style/style.css"/>
</head>
<body>
	<div class="row">
		<div class="container"></div>
	<div class="container">
		<?php

    echo date('d') . ' ' . $month[date('n')-1] . ' ' . date('Y') . ' рік ' . $week[date('w')] . '<br>';
    echo $time;
	
?>
	</div>
	</div>
	

<script src="scripts/script.js"></script>
</body>
</html>


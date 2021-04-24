<?php
session_start();
array_push($_SESSION['tasks'],$_POST['tasks']);
print_r(json_encode($_SESSION['tasks']));

?>
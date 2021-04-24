<?php
$name = "user";
$value = "Rhea";
setcookie($name,$value,time()+(86400*30),"/");
if(!isset($_COOKIE[$name])){
    echo "Cookie is not set";
    setcookie($name,"AmancioRHEA",time()+(86400*30),"/");
}else{
    echo "Cookie is set ";
    echo "Value is ". $_COOKIE[$name];
}
?>
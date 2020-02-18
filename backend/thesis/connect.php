<?php
define('servername','localhost');
define('username','root');
define('password','');
define('dbname','new');


// Create connection
function connect(){
$connection = mysqli_connect(servername,username,password,dbname);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}


mysqli_set_charset($connection,"utf8");
return $connection;

}
$conn=connect();
?>
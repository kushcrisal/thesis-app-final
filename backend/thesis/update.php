<?php

$conn=mysqli_connect("localhost","root","","thesisapp");
$data = json_decode(file_get_contents("php://input"), true);
$marks =$data['marks'];
$quantity=$data['quantity'];
$roll=$data['roll'];

$query="UPDATE `data`
SET $marks=$quantity
WHERE roll='$roll'";
if(mysqli_query($conn,$query))
{
  echo ("succesful");
}
else
{
  echo("faileure");
}



 ?>

<?php

$conn=mysqli_connect("localhost","root","","thesisapp");
$data = json_decode(file_get_contents("php://input"), true);
$date =$data['date'];

$query="SELECT * FROM `data` WHERE `dat`='$date'" ;




if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $students[$count]['name']=$row['name'];
  $students[$count]['roll']=$row['roll'];
    $count++;
  }
  echo json_encode($students);
}
else {

  http_response_code(404);
}

 ?>

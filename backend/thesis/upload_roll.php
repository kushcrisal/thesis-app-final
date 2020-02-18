<?php

$conn=mysqli_connect("localhost","root","","thesisapp");
$data = json_decode(file_get_contents("php://input"), true);
$link_roll =$data['link_roll'];


$query="SELECT * FROM `data` WHERE `roll`='$link_roll' " ;




if($result=mysqli_query($conn,$query))
{
  $count =0;
  while($row=mysqli_fetch_assoc($result))
  {
    $students[$count]['name']=$row['name'];
  $students[$count]['roll']=$row['roll'];
    $students[$count]['final_supervisor']=$row['final_supervisor'];
      $students[$count]['final_committee']=$row['final_committee'];
        $students[$count]['final_external']=$row['final_external'];
        $students[$count]['mid_supervisor']=$row['mid_supervisor'];
          $students[$count]['mid_committee']=$row['mid_committee'];
            $students[$count]['mid_external']=$row['mid_external'];

    $count++;
  }
  echo json_encode($students);
}
else {

  http_response_code(404);
}

 ?>

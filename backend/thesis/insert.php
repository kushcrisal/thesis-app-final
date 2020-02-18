<?php

$conn=mysqli_connect("localhost","root","","thesisapp");
$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'];
$roll =$data['roll'];
$thesis =$data['thesis'];
$supervisor =$data['supervisor'];
$examiner =$data['examiner'];
$dat=$data['date'];


$query="INSERT INTO `data` (name,roll,supervisor,thesis_title,examiner,dat) VALUES ('$name','$roll','$supervisor','$thesis','$examiner','$dat')";
if($data != null)
{
if(mysqli_query($conn,$query))
{
    echo "Data has been added";
}
else
{
    echo "error";
}
}
?>

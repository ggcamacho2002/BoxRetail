<?php

if (isset($_FILES['file'])) {
    $file = $_FILES['file'];
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = $file['name'];
    $uploadPath = "../Archivos/" . $filename;

    if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
        echo json_encode(['result' => 'Exito']);

   } else {
       echo json_encode(['status' => 'error']);
   }
  
    
}


?>
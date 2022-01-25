<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if(isset($_POST["submit"])) {
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "zeiler1989.nz@gmail.com";
    $mail->Password = "jzsybbzyxewvxdll";

    $mail->setFrom("zeiler1989.nz@gmail.com", "Kontaktformular");
    $mail->addAddress("kontakt@niklas-zeiler.de", "kontakt");

    $mail->Subject = "Test";
    $mail->Body = $_POST["message"];

    if($mail->send()) {
        echo "Deine Email wurde erfolgreich verschickt.";
    }else {
        echo "Es gab einen Fehler".$mail->ErrorInfo;
    }
}
?>
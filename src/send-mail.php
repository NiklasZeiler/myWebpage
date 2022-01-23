<?php
    if (isset($_REQUEST['email'])) {
        $name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
        $message = $_REQUEST['message'];
        mail("kontakt@niklas-zeiler.de", $name, $message, "From:" . $email);

        echo "Thank you! I will answer your promise soon.";
        
    } else {
        echo "Error: Please load page new.";
    }

?>
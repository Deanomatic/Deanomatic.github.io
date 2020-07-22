<?php
echo "<h2>TEST</h2>";
if (isset($_POST['submit'])) {
    $fullName = $_POST['fullName'];
    $zipCode = $_POST['zipCode'];
    $mailFrom = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];

    $mailTo = "support@bigfootlawn.care";
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an email from ".$fullName.".\n\n".$phoneNumber;

    mail($mailTo, $zipCode, $txt, $headers);
    header("Location: indeax.php?mailsend");
}
?>
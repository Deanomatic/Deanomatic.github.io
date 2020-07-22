<?php
echo "<h2>TEST</h2>";
// if (isset($_POST['submit'])) {
//     $fullName = $_POST['fullName'];
//     $zipCode = $_POST['zipCode'];
//     $mailFrom = $_POST['email'];
//     $phoneNumber = $_POST['phoneNumber'];

//     $mailTo = "support@bigfootlawn.care";
//     $headers = "From: ".$mailFrom;
//     $txt = "You have recieved an email from ".$fullName.".\n\n".$phoneNumber;

//     mail($mailTo, $zipCode, $txt, $headers);
//     header("Location: indeax.php?mailsend");
// }
// ?>

<?php
<div class="col-lg-6">
    <form class="head-form" action="/form-test/index.html" method="POST">
        <h2 class="h-blue h-blue-line ttu mb-55">Quick and Easy Online Quote</h2>
        <p style="color:black">* This form is under development. Sorry for your inconvenience! For the free estimate, please call us at <a href="tel:+1-615-436-0064">615-436-0064</a></p>
        <div class="form-group mb-4">
            <input type="text" class="form-control" placeholder="Your zip code" name="zipCode">
        </div>
        <div class="form-group mb-4">
            <input type="text" class="form-control" placeholder="First & Last Name" name="fullName">
        </div>
        <div class="form-group mb-4">
            <input type="email" class="form-control" placeholder="Email Address" name="email">
        </div>
        <div class="form-group mb-4">
            <input type="number" class="form-control" placeholder="Phone Number" name="phoneNumber">
        </div>
        <!--<div class="form-group mb-5">-->
        <!--    <input type="address" class="form-control" placeholder="Street Adadress">-->
        <!--</div>-->
        <button class="btn default-btn w-100">get my free quote</button>
    </form>
</div>
?>
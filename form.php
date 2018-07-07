<?php
$myemail  = "pcdevonshire@crimson.ua.edu";

$firstname = check_input($_POST['firstname']);
$lastname = check_input($_POST['lastname']);
$subject  = check_input($_POST['subject']);

$message = "Hello!

Your contact form has been submitted by:

First Name: $firstname
Last Name: $lastname

Message:
$subject

End of message
";

mail($myemail, $subject);

function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>
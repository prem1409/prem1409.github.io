<?php
$siteOwnersEmail = 'raheja.prem1996@gmail.com';
$personal = 'raheja.prem1996@gmail.com';
$reload=$_SERVER['HTTP_REFERER'];
if( $_POST ){
$name=$_POST['txtName'];
$email=$_POST['txtEmail'];
$subject=$_POST['txtSubject'];
$contact_message=$_POST['txtMsg'];
$message="";
$error=[];
if (strlen($name) < 2) {
	$error['name'] = "Please enter your name.";
}
// Check Email
if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
	$error['email'] = "Please enter a valid email address.";
}
// Check Message
if (strlen($contact_message) < 15) {
	$error['message'] = "Please enter your message. It should have at least 15 characters.";
}
// Subject
if ($subject == '') { $subject = "Contact Form Submission"; }


$message .= "Email from: " . $name . "<br />";
$message .= "Email address: " . $email . "<br />";
$message .= "Message: <br />";
$message .= $contact_message;
$message .= "<br /> ----- <br /> This email was sent from your site's contact form. <br />";

$from =  $name . " <" . $email . ">";
    // Email Headers
	$headers  = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
// send email

if (!$error) {
	ini_set("sendmail_from", $siteOwnersEmail);
	$mail = mail($siteOwnersEmail, $subject, $message, $headers);
	if ($mail) {
		
	
	$file_content = file_get_contents('thankyou.txt');
	
	$reply_email   = $email;
	$reply_subject = "Thanks for Contacting me";
	$reply_message = str_replace("USERNAME",$name,$file_content);
	
	$reply_headers  = "From: " . $siteOwnersEmail . "\r\n";
	$reply_headers .= "Reply-To: ". $personal . "\r\n";
 	$reply_headers .= "MIME-Version: 1.0\r\n";
	$reply_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$mail = mail($reply_email, $reply_subject, $reply_message, $reply_headers);

}
}
 
else {
 $response  = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
 $response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
 $response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;

} # end if - there was a validation error
}
header("Location: ".$reload );
die();
?>
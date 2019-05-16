<?php
	$contact_name = @trim(stripslashes($_POST['name']));
	$contact_email = @trim(stripslashes($_POST['email']));
	$contact_message = @trim(stripslashes($_POST['message']));

  $email_subject = 'Pedro -  Template Contact Form';//replace with subject name
	$email_to = 'jonayed.freelancer@gmail.com';//replace with your email

	$body = 'Name: ' . $contact_name . "\n\n" . 'Email Address: ' . $contact_email . "\n\n" . 'Type Your Message: ' . $contact_message;

	$success = @mail($email_to, $email_subject, $body);

?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<script>alert("Thank you for contact us. As early as possible  we will contact you.");</script>
	<meta HTTP-EQUIV="REFRESH" content="0; url=../index-default.html">
</head>

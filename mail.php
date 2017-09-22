<?php

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$data = $request->data;
	$name = $data->name;
	$email = $data->email;
	$subject = $data->subject;
	$messageuser = $data->message;


	$message  = '<html><body>';
	$message .= '<p style="color:#080;font-size:18px;">Name :'.$name.'</p>';
	$message .= '<p style="color:#080;font-size:18px;">Email:'.$email.'</p>';
	$message .= '<p style="color:#080;font-size:18px;">Subject:'.$subject.' </p>';
	$message .= '<p style="color:#080;font-size:18px;">message:'.$messageuser.'</p>';
	$message .= '</body></html>';

	$headers  =  'MIME-Version: 1.0' . "\r\n"; 
	$headers .= 'From:'.$email."\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

	$to = 'ajeesh@prlabs.co';
 	// Sending email
	if(mail($to, $subject, $message,$headers)){
    	echo 'success.';
	} else{
    	echo 'failed';
	}
?>
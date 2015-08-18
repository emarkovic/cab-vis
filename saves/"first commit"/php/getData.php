<?php

// $jsonData = '{"sample":"sample"}';

$header = array(
  'http'=>array(
    'method'=>"GET",
 	'content-type'=>"application/json",
    'header' =>"Authorization:NLAuth nlauth_account=3822905_SB2,nlauth_email=emarkovic@vxchnge.com,nlauth_signature=vXinterN9212"
  )
);

$context = stream_context_create($header);
$fp = fopen('https://rest.sandbox.netsuite.com/app/site/hosting/restlet.nl?script=177&deploy=1', 'r', false, $context);
fpassthru($fp);


fclose($fp)
?>


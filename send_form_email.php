<?php

// configure
$from = 'Site Rio Exxperience <contato@rioexxperience.com>';
$sendTo = 'Site Rio Exxperience <contato@rioexxperience.com>';
$subject = 'Oba! Nova mensagem no site!';
$fields = array('first_name' => 'Nome', 'email' => 'E-mail','telephone' => 'Telefone', 'comments' => 'Mensagem'); // array variable name => Text to appear in email
$okMessage = 'Mensagem enviada com sucesso.';
$errorMessage = 'Ops! Detectamos um erro! Tente novamente.';

// let's do the sending

try
{
    $emailText = "Nova Mensagem do Site Rio Exxperience\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}

?>

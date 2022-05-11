<?php
if(isset($_POST["Email"]) && !empty($_POST[Email])){
$Topico = addslashes($_POST['Topico']);
$Email = addslashes($_POST['Email']);
$Mensagem = addslashes($_POST['Mensagem']);
}

$to = "bigrael-x@live.com";
$subject ="Meu Site ".$Topico;
$body = "Email: ".$Email."Mensagem ".$Mensagem;

$header = "From:bigrael-x@hotmail.com"."\r\n"
        ."Reply-To:".$Email."\e\n"
        ."X=Mailer:PHP/".phpversion();


if(mail($to,$subject,$body,$header)){
    echo("Email enviado com successo!");
}else{
    echo("O email não foi enviado");
}
?>
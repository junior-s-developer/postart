<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $telefone = $_POST['phone'];
    $logradouro = $_POST['public_place'];
    $numero = $_POST['number'];
    $complemento = $_POST['complement'];
    $bairro = $_POST['neighborhood'];
    $cidade = $_POST['city'];
    $estado = $_POST['state'];
    $cep = $_POST['cep'];
    $observacao = $_POST['observation'];

    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'simaobrenoejunior@gmail.com'; // Substitua pelo seu endereço de e-mail do Gmail
        $mail->Password = '#78000Xlr@'; // Substitua pela sua senha do Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinatários
        $mail->setFrom($email, $nome);
        $mail->addAddress('simaobrenoejunior@gmail.com'); // Adicione o endereço de e-mail de destino

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = "Novo Contato: $nome";
        $mail->Body    = "
        <html>
        <head>
            <title>Novo Contato</title>
        </head>
        <body>
            <h2>Dados Pessoais</h2>
            <p><strong>Nome Completo:</strong> $nome</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Telefone:</strong> $telefone</p>
            <h2>Endereço</h2>
            <p><strong>Logradouro:</strong> $logradouro</p>
            <p><strong>Número:</strong> $numero</p>
            <p><strong>Complemento:</strong> $complemento</p>
            <p><strong>Bairro:</strong> $bairro</p>
            <p><strong>Cidade:</strong> $cidade</p>
            <p><strong>Estado:</strong> $estado</p>
            <p><strong>CEP:</strong> $cep</p>
            <h2>Observação</h2>
            <p>$observacao</p>
        </body>
        </html>
        ";

        $mail->send();
        echo 'E-mail enviado com sucesso!';
    } catch (Exception $e) {
        echo "Falha no envio do e-mail. Mailer Error: {$mail->ErrorInfo}";
    }
}

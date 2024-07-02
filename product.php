<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // Configurações do servidor
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Servidor SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'simaobrenoejunior@gmail.com'; // Seu endereço de email
    $mail->Password = '#78000Xlr@'; // Sua senha do email
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipientes
    $mail->setFrom('simaobrenoejunior@gmail.com', 'Júnior Silva');
    $mail->addAddress('simaobrenoejunior@gmail.com', 'PostArt');

    // Conteúdo do email
    $mail->isHTML(true);
    $mail->Subject = 'Banner - Orçamento';
    $mail->Body    = 'Nome: ' . $_POST['name'] . '<br>' .
        'E-mail: ' . $_POST['email'] . '<br>' .
        'Telefone: ' . $_POST['phone'] . '<br>' .
        'Observação: ' . $_POST['observation'];

    $mail->send();
    echo 'Mensagem enviada com sucesso!';
} catch (Exception $e) {
    echo "Houve um erro ao enviar a mensagem: {$mail->ErrorInfo}";
}

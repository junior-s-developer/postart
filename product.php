<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require 'vendor/autoload.php';

// Carregar variáveis de ambiente do arquivo .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Obter credenciais de e-mail das variáveis de ambiente
$email_username = getenv('EMAIL_USERNAME');
$email_password = getenv('EMAIL_PASSWORD');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $telefone = htmlspecialchars($_POST['phone']);
    $logradouro = htmlspecialchars($_POST['public_place']);
    $numero = htmlspecialchars($_POST['number']);
    $complemento = htmlspecialchars($_POST['complement']);
    $bairro = htmlspecialchars($_POST['neighborhood']);
    $cidade = htmlspecialchars($_POST['city']);
    $estado = htmlspecialchars($_POST['state']);
    $cep = htmlspecialchars($_POST['cep']);
    $observacao = htmlspecialchars($_POST['observation']);

    if (!$email) {
        echo "Email inválido.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'contato.simaobrenoejunior@gmail.com';
        $mail->Password = 'Contato78000xlr';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinatários
        $mail->setFrom($email_username, 'Website Contact Form');
        $mail->addAddress('contato.simaobrenoejunior@gmail.com');

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

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-message', (req, res) => {
    const { phoneNumber, message, fileUrl } = req.body;

    // Aqui você pode processar a mensagem e enviar para onde precisar
    console.log(`Enviando mensagem para ${phoneNumber}: ${message}`);
    console.log(`Arquivo: ${fileUrl}`);

    // Responder ao cliente
    res.send('Mensagem enviada com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

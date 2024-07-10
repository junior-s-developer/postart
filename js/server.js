const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configure o diretório de armazenamento dos arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Diretório onde os arquivos serão armazenados
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo armazenado
    }
});

const upload = multer({ storage: storage });

// Servir arquivos estáticos na pasta uploads
app.use('/uploads', express.static('uploads'));

// Endpoint para upload de arquivos
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
    }
    const fileUrl = `http://localhost:3000/uploads/${req.file.filename}`;
    res.json({ fileUrl: fileUrl });
});

// Inicie o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

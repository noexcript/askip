import express from 'express';
import path from 'path'

import { fileURLToPath } from 'url';

// Obter o caminho do diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Agora você pode usar __dirname como antes
const appPath = path.join(__dirname, 'dist', '/');

const app =  express()


// Servir arquivos estáticos do Angular
app.use(express.static(appPath));

// Redirecionar todas as rotas para o index.html do Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(appPath, 'index.html'));
});

// Configurar a porta do servidor
const PORT = process.env.PORT || 3333;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
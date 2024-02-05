const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res) {
    res.send(`<h1>Bem-vindo ao guia do programador.</h1> <h3>A aplicação está rodando na porta ${port}</h3>`)
})

app.get("/rota", function(req, res) {
    res.send("Esta é minha primeira rota")
})

app.get("/rota2", function(req, res) {
    res.send("Esta é minha segunda rota")
})

app.listen(port, function(erro) {
    if(erro) {
        console.error("Ocorreu um erro!")
    } else {
        console.log(`A aplicação está rodando na porta ${port}`);
    }
});

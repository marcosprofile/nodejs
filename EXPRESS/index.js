const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res) {
    res.send(`<h1>Bem-vindo ao guia do programador.</h1> <h3>A aplicação está rodando na porta ${port}</h3>`)
})

app.get("/rota", function(req, res) {
    res.send("Esta é minha primeira rota")
})

app.get("/blog/:artigo?", function(req, res) {
    let artigo = req.params.artigo

    if(artigo) {
        res.send(`<h2>Artigo: ${artigo}</h2>`)
    } else {
        res.send("<h2>Bem-vindo ao meu blog</h2>")
    }
})

app.get("/hello/:nome/:empresa", function(req, res) {
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send(`<h1>Olá ${nome}, da empresa ${empresa}</h1>`)
})

app.listen(port, function(erro) {
    if(erro) {
        console.error("Ocorreu um erro!")
    } else {
        console.log(`A aplicação está rodando na porta ${port}`);
    }
});

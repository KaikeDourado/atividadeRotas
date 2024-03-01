const express = require ("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor ativo!")
})
app.get("/", function(req, res){
    console.log("Página principal")
    res.send("Página principal")
})

app.get("/contato", function(req, res){
    console.log("Página Contato")
    res.send("Página Contato")
})

app.get("/produtos/:item/:quantidade", function(req,res){
    res.send("Página de Produtos: " + req.params.item+" / Quantidade:" + req.params.quantidade )
})

app.get("/cadastro", function(req, res){
    res.send("Página de Cadastro")
})

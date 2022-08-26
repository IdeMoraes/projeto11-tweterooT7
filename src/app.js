import chalk from 'chalk';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const porta = 5000;

app.get("/", (req, res) => {
    console.log("Olá, mundo!")
    res.send("Olá, mundo!");
});

app.get("/:nome",(req,res)=>{
    const nome = req.params.nome;
    res.send(`Seu parâmetro é ${nome}`);
});

const usuarios = [];
app.post("/sign-up",(req,res)=>{
    usuarios.push(req.body);
    res.send("OK");
});

const tweets = [];
app.post("/tweets",(req,res)=>{
    tweets.push(req.body);
    res.send("OK");
});

app.listen(porta,()=>{
    console.log(`Servidor aberto na porta ${chalk.blue(porta)}`)
});
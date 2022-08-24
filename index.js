import chalk from 'chalk';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const porta = 5000;

app.get("/", (req, res) => {
    console.log("Olá, mundo!")
    res.send("Olá, mundo!");
})

app.listen(5000,()=>{
    console.log(`Servidor aberto na porta ${chalk.blue(porta)}`)
});
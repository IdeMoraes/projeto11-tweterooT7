import chalk from 'chalk';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const porta = 5000;

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

app.get("/tweets", (req, res) => {
    let ultimosTweets = [];
    if(tweets.length<10){
        ultimosTweets = [...tweets];
    }
    else {
        for(let i=tweets.length-10; i<tweets.length; i++){
            ultimosTweets.push(tweets[i]);
        };
    }

    for(let i =0; i<ultimosTweets.length; i++){
        ultimosTweets[i].avatar = usuarios.find(element => element.username === ultimosTweets[i].username).avatar;
    }
    res.send(ultimosTweets);
});

app.listen(porta,()=>{
    console.log(`Servidor aberto na porta ${chalk.blue(porta)}`)
});
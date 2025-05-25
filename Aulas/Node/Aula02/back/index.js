// const express = require('express') //aqui estamos dizendo para o node acessar o módulo / framework express, que facilita a criação de servidores

// const app = express(); //dizemos que a constante app será usada para utilizar os métodos do express, ou seja, ela será usada pra configurar rotas, escutar a porta do servidor e mias
// const fs = require('fs'); //aqui estamos dizendo para o node acessar a biblioteca fs e atribuila a constante fs, que será usada para manipulação de arquivos
// const path = require('path'); //aqui estamos acessando a biblioteca path com o node e atribuindo ela a constante path, que é utilizada para montar caminhos compativeis com qualquer sistema operacional

// //caminho para o banco de dados
// const dbPath = path.join('db', 'disciplinas.json') //o método join gera um caminho para o arquivo que queremos acessar 

// app.get('/login', (req, res) =>{ //aqui utilizamos o método get do express, ou seja, vamos ouvir uma requisição ao servidor e retornar uma resposta, por isso ele utiliza esses dois parametros (req,res) na sua chamada. Perceba que o primeiro parametro da função "/login" indica da onde essa requisição virá, ou seja, da rota login
//     // const nome = req.query.nome; //se quisermos acessar os valores que os usuarios digitaram, com o método get no html, eles são mandados na url com seu atributo name. Então para acessá-los, basta utilizar um query no parametro de requisição e utilizamos o name do html para saber qual item estamos manipulando na url.
//     // const senha = req.query.senha;
//     // const msg = `Olá ${nome} sua senha é ${senha}`;
//     const disciplinasDB = fs.readFileSync(dbPath, {encoding: 'utf8'}); //aqui utilizamos o método readFileSync da biblioteca fs junto com o caminho e tipo de caractere, que irá fazer a leitura do arquivo json garantindo que ele seja uma string. 
//     const disciplinas = JSON.parse(disciplinasDB) //depois disso fazemos essa conversão de string para objetos javaScript de fato, podendo manipula-los como tal, ou seja, podemos acessar as chaves e seu valores. Note que ele irá fazer um array de objetos json, portanto podemos manipular como um vetor.
//     res.send(disciplinas[3]); //ao fim, com o parametro de resposta, utilizamos o método send do express para enviar a resposta desejada ao navegador 
// })

// app.listen(3000, () =>  //aqui estamos fazendo o express abrir uma porta e escutar ela, ou seja, transformamos nossa aplicação em um servidor e dela podemos ouvir requisições, assim como enviar respostas
// {
//     console.log('servidor ouvindo no 3000');
// })


const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const dbPath =path.join('db', 'disciplinas.json');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/disciplinas', (req, res)=>{
    const {sigla} = req.query;
    //buscar a sigla no banco 
    const disciplinasString = fs.readFileSync(dbPath, {encoding: 'utf-8'});
    const disciplinas = JSON.parse(disciplinasString);
    const disciplina = disciplinas.find((d) => d.sigla.toLowerCase() === sigla.toLocaleLowerCase());
    if(disciplina)
            res.status(200).send(disciplina);
    else
        res.status(404).send('item não encontrado');
});

app.post('/disciplinas', (req, res) => {
    const {sigla, ementa, equivalencia} = req.body;

    //acessar o bd
    const disciplinasString = fs.readFileSync(dbPath, {encoding: 'utf-8'});
    const disciplinas = JSON.parse(disciplinasString);

    //criar a nova disciplina
    const novaDisciplina = {
        id: disciplinas.length + 1,
        sigla,
        ementa,
        equivalencia
    };

    disciplinas.push(novaDisciplina)
    fs.writeFileSync(dbPath, JSON.stringify(disciplinas, null, 2));
    res.status(201).send('Disciplina criada com sucesso');
})



app.listen(3000, ()=>{
    console.log('servidor ouvindo');
});


// importa middleware de terceiros
const cors = require('cors');

// importa middleware de rota
const router = require('./routerTarefa');

// cria uma instancia da aplicação
const app = express();

// middleware embutido ou integrado
app.use(express.json());
app.use(express.urlencoded({extended: false})); //?param1=valor&param2=valor2

// middleware de terceiros
app.use(cors);

// middleware de aplicação
app.use((req, res, next) => {
    console.log("Passei aqui");
    next();
})



// middleware de rota
app.use('/tarefas', router);

// middleware de erro
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Algo de errado não está certo!");
});

// app((req, res) => {
//    
//}) 

// inicia a aplicação
app.listen(3000, ()=>{
    console.log("App está ON!");
});
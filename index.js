const Express = require('express');

const serverPort = 3006;
// const router = require('./app/routes');

const app = new Express();

app.disable('x-powered-by');
app.use(Express.json());

app.get("/", function(req,res){
    res.status(200).send("Heyyyy!!!!")
})
app.listen(serverPort);

module.exports = app;
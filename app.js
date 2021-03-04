let setUpUtils =  require('./utils/initServer')
let app = require("express")();
setUpUtils.serverConfig(app);

app.use(middleware);

app.get("/" , function(req,res){
    console.log("Hello");
    console.log(req.query);

    res.status(200).send("super test");
})

function middleware(req, res, next){
    console.log("THis is is startuP");
    next();
}

app.listen(8080,"localhost" );
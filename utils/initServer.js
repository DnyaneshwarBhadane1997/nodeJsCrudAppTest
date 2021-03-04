let bodyParser = require('body-parser');

let serverInitUpObject =  function serverConfig(app) {
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json({ type: 'application/*+json' }));
        console.log("Server is Setup");

        
}


module.exports.serverConfig  = serverInitUpObject;
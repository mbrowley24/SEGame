const SEController = require('../controllers/player.controller');




module.exports =(app)=>{
    app.post("/api/v1/register", SEController.register);
    app.post('/api/v1/login', SEController.login);
    app.post('/api/v1/logout', SEController.logout);
}

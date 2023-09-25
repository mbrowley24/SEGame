const SEController = require('../controllers/player.controller');
const {authenticate } = require("../config/jwt.config");



module.exports =(app)=>{
    app.post("/api/v1/register", SEController.register);
    app.post('/api/v1/login', SEController.login);
    app.post('/api/v1/logout', SEController.logout);
    app.post('/api/v1/user/email-exists', SEController.emailExists);
    app.post('/api/v1/user/username-exists', SEController.usernameExists);
    app.get('/api/v1/role/admin/check',authenticate,  SEController.isAdmin);
    app.get('/api/v1/role/admin/check/list',authenticate,  SEController.getUserList);
    app.post('/api/v1/role/admin/check/create-user',authenticate,  SEController.createUser);
}

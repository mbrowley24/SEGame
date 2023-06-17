const GameController = require("../controllers/game.controller");
const {authenticate } = require("../config/jwt.config");


module.exports = (app) => {

    app.post("/api/v1/game", authenticate, GameController.new_game);
    app.get("/api/v1/game", authenticate, GameController.get_dashboard);

};
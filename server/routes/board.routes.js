const BoardController = require('../controllers/board.controller');
const {authenticate } = require('../config/jwt.config');


module.exports = (app) => {

    app.get('/api/v1/board', authenticate, BoardController.my_boards);
    app.post('/api/v1/board', authenticate, BoardController.new_board);
    app.get('/api/v1/board/:id', authenticate, BoardController.board_data);
    app.post('/api/v1/board/:id', authenticate, BoardController.edit_board);
    app.get('/api/v1/board/myBoards/game', authenticate, BoardController.boards_for_game_data);
};
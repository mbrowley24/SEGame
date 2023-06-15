const Board = require('../models/board.model');


module.exports = {

    new_board: async (req, res) => {

            const board = new Board(req.body);

            try{

                board.save();
                res.json(board);

            }catch(err){

                console.log("Failed to save board", err);
                res.status(400).json(err);
            }
    },
};
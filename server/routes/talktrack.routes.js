const TalkTrackController = require('../controllers/talk_track_question.controller');
const { authenticate } = require('../config/jwt.config');


module.exports = (app) => {
    //check if user rated question
    app.get('/api/v1/talktracks/:page/:limit', authenticate, TalkTrackController.get_questions);
    app.post('/api/v1/talktracks', authenticate, TalkTrackController.createQuestion);
    
};
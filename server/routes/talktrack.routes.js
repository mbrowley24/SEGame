const TalkTrackController = require('../controllers/talk_track_question.controller');
const { authenticate } = require('../config/jwt.config');


module.exports = (app) => {
    app.get('/api/v1/talktracks/:page/:limit', authenticate, TalkTrackController.get_questions);
};
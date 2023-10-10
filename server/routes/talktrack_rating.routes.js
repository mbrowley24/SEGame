const TalkTrackRating = require("../controllers/talk_track_question_rating.controller.js");
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {

    app.get('/api/v1/talktrackratings/:id', authenticate, TalkTrackRating.checkRateQuestion);
    app.post('/api/v1/talktrackratings/:id', authenticate, TalkTrackRating.rateQuestion);
};
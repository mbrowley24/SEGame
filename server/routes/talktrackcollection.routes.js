
const TalkTrackCollection = require('../controllers/talk_track_collection.controller');
const {authenticate} = require('../config/jwt.config');



module.exports = app => {
    app.post('/api/v1/talktrackcollections', authenticate, TalkTrackCollection.createTalkTrack);
    app.get('/api/v1/talktrackcollections/:page/:limit', authenticate, TalkTrackCollection.getAll);
};   
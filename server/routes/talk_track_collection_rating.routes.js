const TalkTrackCollectionRating = require("../controllers/talk_track_collection_rating.controller.js");
const {authenticate} = require('../config/jwt.config');


module.exports = app => {
    
    app.get("/api/v1/talktrackcollectionratings/:id", authenticate, TalkTrackCollectionRating.getMyRating);
};
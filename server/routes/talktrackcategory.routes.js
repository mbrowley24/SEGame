const TalkTrackCategoryController = require('../controllers/talk_track_category.controller');


module.exports = app => {
    app.get('/api/v1/talktrackcategories', TalkTrackCategoryController.all_categories);
};
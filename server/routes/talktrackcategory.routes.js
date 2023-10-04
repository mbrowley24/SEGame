const TalkTrackCategoryController = require('../controllers/talktrackcategory.controller');


module.exports = app => {
    app.get('/api/v1/talktrackcategories', TalkTrackCategoryController.all_categories);
};
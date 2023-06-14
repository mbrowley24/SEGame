const CategoryController = require('../controllers/category.controller');
const {authenticate } = require('../config/jwt.config');

module.exports = app => {

    app.get('/api/v1/myCategories', authenticate, CategoryController.my_categories);
}
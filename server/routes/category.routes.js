const CategoryController = require('../controllers/category.controller');
const {authenticate } = require('../config/jwt.config');

module.exports = app => {

    app.get('/api/v1/myCategories', authenticate, CategoryController.my_categories);
    app.get('/api/v1/myCategories/board', authenticate, CategoryController.my_category_list);
    app.post('/api/v1/myCategories', authenticate, CategoryController.new_category);
    app.get('/api/v1/myCategories/:id', authenticate, CategoryController.get_category);
    app.put('/api/v1/myCategories/:id', authenticate, CategoryController.update_category);
}
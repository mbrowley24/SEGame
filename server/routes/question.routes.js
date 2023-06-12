const QuestionController = require('../controllers/question.controller');
const {authenticate } = require('../config/jwt.config');

module.exports =(app)=>{

    app.get('/api/v1/questions/subjects', authenticate, QuestionController.get_subjects);
};


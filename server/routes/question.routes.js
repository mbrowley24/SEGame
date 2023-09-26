const QuestionController = require('../controllers/question.controller');
const {authenticate } = require('../config/jwt.config');

module.exports =(app)=>{

    app.get('/api/v1/questions/subjects', authenticate, QuestionController.get_subjects);
    app.get('/api/v1/questions/subjects/:id', authenticate, QuestionController.get_questions_by_subject);
    app.post('/api/v1/questions/subjects/:id', authenticate, QuestionController.new_question);
    app.get('/api/v1/questions/subjects/edit/:id', authenticate, QuestionController.get_question);
    app.put('/api/v1/questions/subjects/edit/:id', authenticate, QuestionController.update_question);
};


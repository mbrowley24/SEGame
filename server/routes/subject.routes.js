const SubjectController = require('../controllers/subject.controller');
const {authenticate} = require('../config/jwt.config');
module.exports =  (app) => {

    app.post('/api/v1/subjects', authenticate, SubjectController.createSubject);
    app.get('/api/v1/subjects', authenticate, SubjectController.get_all_subjects);
}
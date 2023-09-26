

const useQuestion = () => {

    const questionSpaceCheck = (string) => {

        const pattern = /\s\s/;

        return pattern.test(string);
    }

    const questionInputRegex = (text) => {

        if(questionSpaceCheck(text)){

            return false;
        }

        const pattern = /^([A-Za-z0-9\s%^,.\-$'#@+()!]){0,150}$/;

        return pattern.test(text);
    }

    const questionValidation = (question) => {

        if(!question){
            return false;
        }

        const testAnswer = question.answer.trim();
        const testQuestion = question.question.trim();

        if(testAnswer.length === 0){
            return false;
        }

        if(testQuestion.length === 0){
            return false;
        }

        if(questionSpaceCheck(question.answer) || questionSpaceCheck(question.question)){

            return false;
        }

        const pattern = /^([A-Za-z0-9\s%^,.\-$#'@+()!]){2,150}$/;

        return pattern.test(question.answer) && pattern.test(question.question);
    }

    const questionSubject={
        subject: {},
        questions: []
    }

    const questionInitShape = {
        question: '',
        answer: '',
    };


    return({
        questionInitShape,
        questionSubject,
        questionValidation,
        questionInputRegex,
    })
};


export default useQuestion;
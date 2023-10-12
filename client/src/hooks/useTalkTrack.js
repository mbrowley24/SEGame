

const useTalkTrack = () => {

    const QUESTION_FIELDS = {
        QUESTION: "question",
        ID: "id",
        CREATED_BY: "createdBy",
        RATING: "rating",
        CATEGORY: "category",
        RESET : "reset"
    }

    const question = {
        question: "",
        id: "",
        createdBy: "",
        rating: 0,
        category: "",
    }


    const questionInputValidation = (question) => {
        const pattern = /^[a-zA-Z0-9\s/.+-//&?*%()@#]{0,150}$/
        return pattern.test(question);
    }

    const questionValidation = (question) => {
        const pattern = /^[a-zA-Z0-9\s/.+-//&?*%()@#]{10,150}$/

        return pattern.test(question);
    };

    const questionIdValidation = (category) => {

        const pattern = /^[a-zA-Z0-9]{30}$/

        return pattern.test(category);
    };


    const validateQuestion = (question) => {
        let returnValue = false;

        if(questionIdValidation(question.category) && questionValidation(question.question)) {
            returnValue = true;
        }
        return returnValue;
    };


    const talkTrackQuestionReducer = (state, action) => {
        
        let questionObj = JSON.parse(JSON.stringify(state));

        switch(action.type) {

            case QUESTION_FIELDS.QUESTION:

                if(questionInputValidation(action.payload)) {
                    
                    questionObj.question = action.payload;
                }
            
                return questionObj

            case QUESTION_FIELDS.ID:
            
                questionObj.id = action.payload;
                return questionObj;

            case QUESTION_FIELDS.CREATED_BY:

                questionObj.createdBy = action.payload;
                return questionObj;

            case QUESTION_FIELDS.RATING:

                questionObj.rating = action.payload;
                return questionObj;

            case QUESTION_FIELDS.CATEGORY:
                    
                questionObj.category = action.payload;
                return questionObj;

            case QUESTION_FIELDS.RESET:
                
                    questionObj.question = "";
                    questionObj.category = "";

                    console.log(questionObj);
                return questionObj;
            default:
                return state;
        }
    };

    return({
        QUESTION_FIELDS,
        question,
        talkTrackQuestionReducer, 
        validateQuestion,
    })
};

export default useTalkTrack;
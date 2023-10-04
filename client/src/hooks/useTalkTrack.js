


const useTalkTrack = () => {

    const QUESTION_FIELDS = {
        QUESTION: "question",
        ID: "id",
        CREATED_BY: "createdBy",
        RATING: "rating",
        CATEGORY: "category",
    }

    const question = {
        question: "",
        id: "",
        createdBy: "",
        rating: 0,
        category: "",
    }


    const talkTrackQuestionReducer = (state, action) => {
        
        const questionObj = JSON.parse(JSON.stringify(state));

        switch(action.type) {
            case QUESTION_FIELDS.QUESTION:

            return questionObj.question = action.payload;

            case QUESTION_FIELDS.ID:
                return questionObj.id = action.payload;

            case QUESTION_FIELDS.CREATED_BY:
                return questionObj.createdBy = action.payload;

            case QUESTION_FIELDS.RATING:
                return questionObj.rating = action.payload;
            default:
                return state;
        }
    };

    return({
        QUESTION_FIELDS,
        question,
        talkTrackQuestionReducer, 
    })
};

export default useTalkTrack;
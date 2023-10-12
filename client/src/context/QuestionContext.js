import {createContext, useState} from "react";

const QuestionTablePaginationContext = createContext({});

export const QuestionTableProvider = ({children}) => {

    const [questionState, setQuestionState] = useState({
        page: 0,
        totalPages: 0,
        questions: [],
        firstPage: true,
        lastPage: false,
        totalQuestions: 0, 
    });

    const [numOfItems, setNumOfItems] = useState(20);
    const [page, setPage] = useState(0);

    const [questionId, setQuestionId] = useState('');

    return(
        <QuestionTablePaginationContext.Provider value={
            {questionState, setQuestionState, numOfItems, setNumOfItems, questionId, setQuestionId, page, setPage}
        }>
            {children}
        </QuestionTablePaginationContext.Provider>
    )
};

export default QuestionTablePaginationContext;
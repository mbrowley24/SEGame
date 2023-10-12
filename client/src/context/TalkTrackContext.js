import { createContext, useState } from "react";


const TalkTrackContext = createContext({});

export const TalkTrackProvider = ({children}) => {

    const [talkTractState, setTalkTractState] = useState({
        page: 0,
        totalPages: 0,
        questions: [],
        firstPage: true,
        lastPage: false,
        totalQuestions: 0, 
    });

    const [numOfItems, setNumOfItems] = useState(10);

    return(
        <TalkTrackContext.Provider value={
            {talkTractState, setTalkTractState, numOfItems, setNumOfItems}
        }>
            {children}
        </TalkTrackContext.Provider>
    )
};

export default TalkTrackContext;
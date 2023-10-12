import React, {useContext, useEffect} from "react";
import TalkTrackContext from "../../context/TalkTrackContext";
import useHttp from "../../hooks/useHttp";

const TalkTrackCollectionTableBody = props => {
    const {} = props;
    const {talkTractState, setTalkTractState, numOfItems} = useContext(TalkTrackContext);
    const {getHttpRequest, isLoading} = useHttp();

    useEffect(() => {

        (async () => {

            const configRequest = {
                url: `talktrackcollections/${talkTractState.page}/${numOfItems}`,
            };

            const applyData = (res) => {
                console.log(res);
                setTalkTractState(res.data)
            };

            await getHttpRequest(configRequest, applyData)
        })();

        return () => {};
    }, []);

    return(
        <tbody>
            {
                talkTractState.questions.length > 0 &&
                talkTractState.questions.map((question, index) => {

                    return(
                        <tr key={index}>
                            <td className="">{}</td>
                            <td className=""></td>
                            <td className=""></td>
                            <td className=""></td>
                        </tr>
                    )
                })
            }
            {
                isLoading &&
                <tr>
                    <td className="text-center" colSpan="4">Loading...</td>
                </tr>
            }
            {
                talkTractState.questions.length === 0 && !isLoading &&
                <tr>
                    <td className="text-center" colSpan="4">No questions found</td>
                </tr>
            }
        </tbody>
    )
};
export default TalkTrackCollectionTableBody;
import React, {useEffect, useState} from "react";
import useHttp from "../../hooks/useHttp";


const TalkTrackQuestions = props => {
    const {} = props;
    const [talktracks, setTalktracks] = useState([]);
    const {getHttpRequest} = useHttp();

    useEffect(() => {

        (async () => {

            const configRequest = {
                url: `talktracks/${10}/${1}`,
                params:{
                    limit: 10,
                }
            };

            const applyData = (res) => {
                console.log(res);
                console.log("TalkTrackQuestions");
                
            };

            await getHttpRequest(configRequest, applyData);
        })();

        return () => {};

    }, []);

    return(
        <div>
            {
                talktracks.map((talktrack, index) => {

                    return(
                        <TalkTrackQuestions key={index}/>
                    )
                })
            }
        </div>
    )
};
export default TalkTrackQuestions;
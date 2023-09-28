import React, {useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import TalkTrackTableRow from './TalkTrackTableRow';


const TalkTrackTableBody = props => {
    const {} = props;
    const [talkTracks, setTalkTracks] = useState([]);
    const {getHttpRequest} = useHttp();
    useEffect(() => {

        (async () => {

            const configRequest = {
                url: 'talktracks',
            };
            
            const applyData = (res) => {
                console.log("TalkTrackTableBody");
                console.log(res.data);
                setTalkTracks(res.data);
            };

            await getHttpRequest(configRequest, applyData); 


        })();

        



    }, []);
    return(
        <tbody>
            {
                talkTracks.map((talkTrack, index) => {
                    return(
                        <TalkTrackTableRow key={index} talkTrack={talkTrack}/>
                    )
                })
            }
        </tbody>
    )
}

export default TalkTrackTableBody;
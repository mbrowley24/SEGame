import React, {useEffect, useState} from 'react';
import {Rating} from '@mui/material';
import useHttp from '../../hooks/useHttp';
import RatingSystem from './RatingSystem';

const TalkTrackTableRow = props => {
    const {talkTrack} = props;
    const {getHttpRequest} = useHttp();
    const [rated, setRated] = useState(false);

    useEffect(() => {

        (async () => {

            const configRequest = {
                url: 'talktracks/ratings',
                params: {
                    public_id: talkTrack.public_id,
                },
            };

            const applyData = (res) => {
                console.log("TalkTrackTableRow");
                console.log(res.data);
                setRated(res.data);
            };

            await getHttpRequest(configRequest, applyData);

        })();

    }, []);

    return(
        <tr>
            <td>{talkTrack.question}</td>
            <td><Rating value={talkTrack.rating} prcision={.20} readOnly/></td>
            <td>{talkTrack.createdBy}</td>
            <td><RatingSystem id={talkTrack.id}/></td>
        </tr>
    )
};


export default TalkTrackTableRow;
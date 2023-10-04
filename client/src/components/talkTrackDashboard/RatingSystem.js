import React, {useEffect, useState} from 'react';
import {Rating} from '@mui/material';
import useHttp from '../../hooks/useHttp';



const RatingSystem = props => {
    const {id} = props;
    const [rated, setRated] = useState(false);
    const [rating, setRating] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const {getHttpRequest} = useHttp();
    
    useEffect(() => {
            
            (async () => {
    
                const configRequest = {
                    url: 'talktracks/ratings',
                    params: {
                        public_id: id,
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
        <Rating name="rating" value={rating} disabled={disabled} />
    )
};
export default RatingSystem;
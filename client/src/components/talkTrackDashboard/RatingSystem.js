import React, {useCallback, useEffect, useState} from 'react';
import {Rating} from 'react-simple-star-rating';
import useHttp from '../../hooks/useHttp';
import '../../css/generalCss.css'



const RatingSystem = props => {
    const {id, ratingValue} = props;

    const [update, setUpdate] = useState(false); // [update, setUpdate 
    const [rated, setRated] = useState(true);
    const [rating, setRating] = useState(1);
    const {getHttpRequest, postHttpRequest} = useHttp();
    

    const onPointerMove = (value) => {
        setRating(value);  
    };

    


    useEffect(() => {

        if(ratingValue){
            
            if(ratingValue > 0){
                setRating(ratingValue);;
            }
        }

    }, [id]);

    useEffect(() => {
            
            (async () => {
    
                const configRequest = {
                    url: `talktrackratings/${id}`,
                };
    
                const applyData = (res) => {
                    setRated(res.data.isRated);
                };
    
                await getHttpRequest(configRequest, applyData);
    
            })();
    }, [update, id]);

    const submitRating = async (e) => {
        e.preventDefault();

        const configRequest = {
            url: `talktrackratings/${id}`,
            data: {rating: rating}
        };
        const applyData = (res) => {
            console.log(res);

            if(res.status === 200){
                console.log("rated");
                
                setUpdate(update => !update)
            }
        };

        await postHttpRequest(configRequest, applyData);
    };
    
    return(
        <React.Fragment>
            <Rating name="rating"
                size={20}
                onPointerMove={onPointerMove}
                initialValue={rating}
                readonly={rated}
            />
            {!rated && 
                <button className="btn-small ms-3" 
                        onClick={submitRating}
                        disabled={rating === 0}
                >
                    Rate Me
                </button>}
        </React.Fragment>
        
    )
};
export default RatingSystem;
import React from "react";

const useCategory = props => {

    const categoryInitialState = {
        name: '',
        200: {
            question:"",
            answer:""
        },
        400: {
            question:"",
            answer:""
        },
        600:{
            question:"",
            answer:""
        },
        800:{
            question:"",
            answer:""
        } ,
        1000: {
            question:"",
            answer:""
        }
    }


    return(
        {
            categoryInitialState
        }
    )
};

export default useCategory;
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


    const questionCheck= (category)=>{

        const keys = Object.keys(category);

        console.log(category);
        for(let i= 0; i < keys.length; i++){

            if(keys[i] === 'name' || keys[i] === 'id'){
                continue;
            }


            if(category[keys[i]].question.length === 0){
                return false;
            }

            for(let j = 0; j < keys.length; j++){

                if(keys[i] === 'name'){
                    continue;
                }

                if(i === j ){
                    continue;
                }

                if(category[keys[i]].question.length === 0){
                    return false;
                }


                if(category[keys[i]].question === category[keys[j]].question){

                    return false;
                }

            }

        }

        return true;
    }

    const questionValidation = (category)=>{

        const categoryKeys = Object.keys(category);

        //console.log(category)

        if(!categoryNameValidation(category.name)){
            return false;
        }

        return questionCheck(category);

    }

    const SpaceCheck = (string) => {

        const pattern = /\s\s/;

        return pattern.test(string);
    }

    const categoryInputRegex = (text) => {

        if(SpaceCheck(text)){

            return false;
        }

        const pattern = /^([A-Za-z0-9\s%^&$#@+()!]){0,50}$/;

        return pattern.test(text);
    }

    const categoryNameValidation = (text) => {

        const test = text.trim();
        if(test.length === 0){
            return false;
        }

        if(SpaceCheck(text)){

            return false;
        }

        const pattern = /^([A-Za-z0-9\s%^&$#@+()!]){2,25}$/;

        return pattern.test(text);
    }

    const duplicate = (category, value)=>{


        const question = category[value].question;
        const valueString = String(value);
        const keys = Object.keys(category);

        for(let i = 0; i < keys.length; i++){


            if(keys[i] === valueString){

                continue;
            }

            if(category[keys[i]].question === ''){

                continue;
            }

            if(category[keys[i]].question === question){
                return false
            }
        }


        return true;

    }


    return(
        {
            categoryNameValidation,
            categoryInputRegex,
            categoryInitialState,
            duplicate,
            questionCheck,
            questionValidation,
        }
    )
};

export default useCategory;
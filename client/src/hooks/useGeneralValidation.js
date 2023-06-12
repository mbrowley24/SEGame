

const publicIdValidation = (publicId) =>{

    const pattern = /^[a-zA-Z0-9]{20,40}$/

    return pattern.test(publicId)
}


const useGeneralValidation = () =>{

     const usernameInputValidation = (username) =>{

        const pattern = /^[a-zA-Z0-9]{0,30}$/
        return pattern.test(username)
    }


     const usernameValidation = (username) =>{

        const pattern = /^[a-zA-Z0-9]{5,30}$/
        return pattern.test(username)
    }


     const nameValidation = (name) =>{

        const pattern =/^[a-zA-Z\s]{3,30}$/

        return pattern.test(name)
    }

     const nameInputValidation = (name) =>{

        const pattern = /^[a-zA-Z\s]{0,30}$/

        return pattern.test(name)
    }

     const passwordInputValidation = (password)=>{

        const pattern = /^[a-zA-Z0-9.*+!@#]{0,25}$/

        return pattern.test(password)
    }

        const passwordNumberValidation = (password) =>{

        const numbers = /[0-9]{2}/

        return numbers.test(password)
    }

    const passwordNumbers = (password) =>{

        const numbers = /[0-9]/

        return numbers.test(password)
    }

    const passwordUppercase = (password) =>{

        const uppercase = /[A-Z]/

        return uppercase.test(password)
    }

    const passwordCharacters = (password) =>{

        const specialCharacters = /[.+*#$!@]/

        return specialCharacters.test(password)
    }

    const passwordValidation = (password) =>{

        let returnValue = {isValid: false, errors: []};

        const numbers = /[0-9]{2}/
        const uppercase = /[A-Z]{2}/
        const specialCharacters = /[.+*#$!@]/

        if(numbers.test(password)){
            if(uppercase.test(password)){
                if(specialCharacters.test(password)){

                    returnValue.errors = []
                    returnValue.isValid = true;
                }
            }

        }


        return returnValue;
    }


    const passwordMatch = (password, confirmPassword) =>{

        let returnValue = false;
        if(password.length > 7){

            returnValue = (password === confirmPassword);
        }

        return returnValue

    }

    const emailValidation = (email) =>{
        const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

        return regex.test(email);

    }

    const emailInputValidation = (email) =>{
        const regex = /^[a-zA-Z0-9.@]{0,120}$/

        return regex.test(email)
    }

    const addIndexToList = (index) =>{

        const indexList = [];
        indexList.push(index);

        return indexList;

    }


    const actionIncomingList = (index, list) =>{

        const newList = [...list];

        newList.push(index);

        return newList;
    }

    const actionExistList = (index, list) =>{

        const newList = [...list];

        return newList.filter((value)=> value !== index);

    }



    const evenOrOddIndex = (index) =>{

        return (index % 2) === 0;
    }

    const recordBackgroundColor = (index) =>{

        let returnValue  = 'd-flex justify-content-center oddRow'
        const even = 'd-flex justify-content-center evenRow'


        if(evenOrOddIndex(index)){
            returnValue = even;
        }

        return returnValue
    }

    const checkForIndex = (index, state) =>{

        const newList = [...state]

        const filteredList = newList.filter((item)=>item === index);

        return filteredList.length > 0;
    }

    const removeIndexToList = (index, state) =>{

        const stateList = [...state];

        return stateList.filter((item) => item !== index);
    }






    const phoneNumberDescriptionInputValidation = (name) =>{

        const description = /^[0-9]{0,15}$/

        return description.test(name);
    }

    const phoneNumberDescriptionValidation = (name)=>{

        const description = /^[0-9]{3,15}$/

        return description.test(name)
    }

    const phoneNumberValidation = (phone) =>{

        let returnValue = false;


        const sevenDigits = /^[0-9]{7}$/
        const tenDigits = /^[0-9]{10}$/

        if(sevenDigits.test(phone.number) || tenDigits.test(phone.number)){

            if(phoneNumberDescriptionValidation(phone.description)){

                returnValue = true;
            }

        }


        return returnValue;
    }

    const dateValidation = (data)=>{

        const pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/

        return pattern.test(data)
    }


    const monthDayYearValidation = (data) =>{

        const pattern = /^([0-9]{1,2})-([0-9]{1,2})-([0-9]{4})$/

        return pattern.test(data)
    }

    const dateToDateString = (string) =>{

        let returnValue = '';

        if(string){

            const date = new Date(string)

            returnValue = date.toUTCString().replace("00:00:00 GMT", "")
        }
        return returnValue
    }

    const dateTimeString = (string) =>{

        let returnValue = "";

        if(string){

            const date = new Date(string);

            returnValue = date.toLocaleString()
        }

        return returnValue;
    }

    const formatPhoneNumber = (phoneNumber) =>{

        const patternSevenDigit  = /^[0-9]{4,9}$/
        const patternTenDigit = /^[0-9]{10}$/
        let formattedPhoneNumber = ''

        if(patternSevenDigit.test(phoneNumber)){

            formattedPhoneNumber = phoneNumber.substring(0,4) + '-' + phoneNumber.substring(4)
        }

        if(patternTenDigit.test(phoneNumber)){

            formattedPhoneNumber = phoneNumber.substring(0,4) + '-' + phoneNumber.substring(4, 8) + '-' + phoneNumber.substring(8)
        }


        return formattedPhoneNumber
    }


    const valueInputValidation = (value) =>{

        const pattern = /^[0-9]{0,14}$/

        return pattern.test(value)
    }

    const booleanToggle = (state) =>{

        let returnValue = false;

        if(!state){

            returnValue = true;
        }

        return returnValue
    }

    const checkForId = (id) =>{

        let returnValue = false;
        const cleanId = Number(id)

        if(cleanId !== 0){

            returnValue = true
        }

        return returnValue;
    }

    return({
        booleanToggle,
        phoneNumberValidation,
        checkForId,
        dateValidation,
        dateToDateString,
        actionExistList,
        dateTimeString,
        formatPhoneNumber,
        monthDayYearValidation,
        nameValidation,
        nameInputValidation,
        recordBackgroundColor,
        removeIndexToList,
        phoneNumberDescriptionInputValidation,
        passwordValidation,
        passwordMatch,
        passwordNumberValidation,
        passwordUppercase,
        passwordCharacters,
        passwordInputValidation,
        passwordNumbers,
        publicIdValidation,
        usernameInputValidation,
        usernameValidation,
        valueInputValidation,
        checkForIndex,
        actionIncomingList,
        addIndexToList,
        emailValidation,
        emailInputValidation
    })
}


export default useGeneralValidation;
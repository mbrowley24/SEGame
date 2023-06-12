import useGeneralValidation from "./useGeneralValidation";




const useUser = () =>{
    const {emailInputValidation, usernameInputValidation, passwordInputValidation, nameInputValidation} = useGeneralValidation()
    const userRegistration={
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: '',

    }

    const USER_FIELDS={
        USERNAME: 'username',
        FIRST_NAME: 'first_name',
        LAST_NAME: 'last_name',
        EMAIL: "email",
        PASSWORD : 'password',
        CONFIRM_PASSWORD: 'confirm_password',

    }





    const userReducer = (userState, action)=>{

        const userObj = JSON.parse(JSON.stringify(userState));

        switch (action.type){

            case USER_FIELDS.FIRST_NAME:

                if (nameInputValidation(action.payload)){

                    userObj.first_name = action.payload;
                }

                return userObj

            case USER_FIELDS.LAST_NAME:

                if(nameInputValidation(action.payload)){

                    userObj.last_name = action.payload;
                }


                return userObj;

            case USER_FIELDS.EMAIL:

                if(emailInputValidation(action.payload)){

                    userObj.email = action.payload;

                }

                console.log(userObj)
                return userObj

            case USER_FIELDS.PASSWORD:


                if(passwordInputValidation(action.payload)){

                    userObj.password = action.payload
                }

                console.log(userObj);
                return userObj;


            case USER_FIELDS.CONFIRM_PASSWORD:

                if(passwordInputValidation(action.payload)){

                    userObj.tempFields.confirm_password = action.payload;
                }


                return userObj

            case USER_FIELDS.NUMBER_NUMBER:

                if(passwordInputValidation(action.payload)){

                    userObj.tempFields.phone_number.number = action.payload;
                }

                return userObj
            case USER_FIELDS.PHONE_DESCRIPTION:

                if(phoneNumberDescriptionInputValidation(action.payload)){

                    userObj.tempFields.phone_number.description = action.payload;
                }

                console.log(userObj);
                return userObj;

            case USER_FIELDS.PHONE_NUMBERS:

                if(phoneNumberValidation(action.password)){

                    userObj.phone_numbers.push(userObj.tempFields.phone_number)

                    userObj.tempFields.phone_number = {...userRegistration.tempFields.phone_number}
                }

                return userObj;

            case USER_FIELDS.USERNAME:

                if(usernameInputValidation(action.payload)){

                    userObj.username = action.payload;
                }

                return userObj;

            default:
                return userObj
        }

    }

    return({
        USER_FIELDS,
        userReducer,
        userRegistration,

    })
}

